"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

class HeroScene {
  canvas: HTMLCanvasElement;
  mouse: { x: number; y: number; targetX: number; targetY: number };
  scrollY: number;
  clock: THREE.Clock;
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  particles?: THREE.Points;
  centerGroup?: THREE.Group;
  core!: THREE.Mesh;
  shell!: THREE.Mesh;
  ring1!: THREE.Mesh;
  ring2!: THREE.Mesh;
  plates: THREE.Mesh[] = [];
  animationId: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollY = 0;
    this.clock = new THREE.Clock();
    this.init();
  }

  init() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x020000, 1);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x020000, 0.0015);

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.set(0, 0, 300);

    this.createEmberParticles();
    this.createMonolithicStructure();
    this.createFloatingPlates();
    this.createLights();

    this.onResize = this.onResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onScroll = this.onScroll.bind(this);

    window.addEventListener("resize", this.onResize);
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("scroll", this.onScroll);

    this.animate();
  }

  createEmberParticles() {
    const count = 4000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorPalette = [
      new THREE.Color(0xff1a1a),
      new THREE.Color(0xff4d4d),
      new THREE.Color(0xff8800),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 1000;
      positions[i3 + 1] = (Math.random() - 0.5) * 800;
      positions[i3 + 2] = (Math.random() - 0.5) * 1000;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() < 0.05 ? Math.random() * 6 + 2 : Math.random() * 2 + 0.5;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  createMonolithicStructure() {
    this.centerGroup = new THREE.Group();

    const coreGeo = new THREE.IcosahedronGeometry(40, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x050000,
      emissive: 0xff1a1a,
      emissiveIntensity: 0.5,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    this.core = new THREE.Mesh(coreGeo, coreMat);
    this.centerGroup.add(this.core);

    const shellGeo = new THREE.IcosahedronGeometry(60, 0);
    const shellMat = new THREE.MeshStandardMaterial({
      color: 0x050000,
      roughness: 0.9,
      metalness: 0.8,
      flatShading: true,
      transparent: true,
      opacity: 0.85,
    });
    this.shell = new THREE.Mesh(shellGeo, shellMat);
    this.centerGroup.add(this.shell);

    const ringGeo = new THREE.TorusGeometry(85, 0.4, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff1a1a,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    this.ring1 = new THREE.Mesh(ringGeo, ringMat);
    this.ring1.rotation.x = Math.PI / 2.5;
    this.centerGroup.add(this.ring1);

    this.ring2 = new THREE.Mesh(new THREE.TorusGeometry(100, 0.2, 16, 100), ringMat);
    this.ring2.rotation.x = -Math.PI / 3;
    this.ring2.rotation.y = Math.PI / 4;
    this.centerGroup.add(this.ring2);

    this.scene.add(this.centerGroup);
  }

  createFloatingPlates() {
    this.plates = [];
    const mat = new THREE.MeshStandardMaterial({
      color: 0x0a0101,
      emissive: 0x220000,
      roughness: 0.7,
      metalness: 0.5,
      transparent: true,
      opacity: 0.8,
    });

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xff1a1a,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < 15; i++) {
      const width = 20 + Math.random() * 60;
      const height = 2 + Math.random() * 5;
      const depth = 20 + Math.random() * 60;

      const geo = new THREE.BoxGeometry(width, height, depth);
      const mesh = new THREE.Mesh(geo, mat);

      if (Math.random() > 0.5) {
        const edges = new THREE.EdgesGeometry(geo);
        const line = new THREE.LineSegments(edges, edgeMat);
        mesh.add(line);
      }

      mesh.position.set(
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 300 - 100
      );

      mesh.userData = {
        floatSpeed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        baseY: mesh.position.y,
      };

      this.plates.push(mesh);
      this.scene.add(mesh);
    }
  }

  createLights() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.05);
    this.scene.add(ambient);

    const redLight = new THREE.PointLight(0xff0000, 5, 600);
    redLight.position.set(0, -200, 0);
    this.scene.add(redLight);

    const highlight = new THREE.PointLight(0xffaa00, 3, 400);
    highlight.position.set(100, 100, 100);
    this.scene.add(highlight);
  }

  onMouseMove(event: MouseEvent) {
    this.mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  onScroll() {
    this.scrollY = window.scrollY;
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));

    const elapsed = this.clock.getElapsedTime();

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.02;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.02;

    this.camera.position.x = this.mouse.x * 40;
    this.camera.position.y = this.mouse.y * 40 - this.scrollY * 0.15;
    this.camera.lookAt(0, -this.scrollY * 0.1, 0);

    if (this.particles) {
      this.particles.rotation.y = elapsed * 0.01;
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.5;
        if (positions[i] > 400) {
          positions[i] = -400;
        }
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    if (this.centerGroup) {
      this.centerGroup.rotation.y = elapsed * 0.05;

      this.core.rotation.x = -elapsed * 0.1;
      this.core.rotation.y = -elapsed * 0.15;

      this.shell.rotation.x = elapsed * 0.08;
      this.shell.rotation.z = elapsed * 0.04;

      // Adjust material emissive correctly handling array materials if needed
      (this.core.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.3 + Math.sin(elapsed * 2) * 0.2;
    }

    this.plates.forEach((mesh) => {
      const ud = mesh.userData;
      mesh.position.y = ud.baseY + Math.sin(elapsed * ud.floatSpeed + ud.offset) * 15;
    });

    const opacity = Math.max(0, 1 - this.scrollY / (window.innerHeight * 1.5));
    this.canvas.style.opacity = Math.max(0.2, opacity).toString();

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("scroll", this.onScroll);
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new HeroScene(canvasRef.current);
    return () => {
      scene.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
