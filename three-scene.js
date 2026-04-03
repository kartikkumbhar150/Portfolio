import * as THREE from 'three';

export class HeroScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollY = 0;
    this.clock = new THREE.Clock();
    this.init();
  }

  init() {
    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x020000, 1); // Dark red/black background

    // Scene
    this.scene = new THREE.Scene();
    // Dense red/black fog for cinematic depth
    this.scene.fog = new THREE.FogExp2(0x020000, 0.0015);

    // Camera
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.set(0, 0, 300);

    // Create objects
    this.createEmberParticles();
    this.createMonolithicStructure();
    this.createFloatingPlates();
    this.createLights();

    // Events
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('scroll', this.onScroll.bind(this));

    // Start loop
    this.animate();
  }

  createEmberParticles() {
    const count = 4000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorPalette = [
      new THREE.Color(0xff1a1a), // Intense red
      new THREE.Color(0xff4d4d), // Lighter red
      new THREE.Color(0xff8800), // Fire orange
      new THREE.Color(0xffffff), // White hot core
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spread widely across x and z, vertical column on y
      positions[i3]     = (Math.random() - 0.5) * 1000;
      positions[i3 + 1] = (Math.random() - 0.5) * 800;
      positions[i3 + 2] = (Math.random() - 0.5) * 1000;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3]     = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Occasional large glowing ember
      sizes[i] = Math.random() < 0.05 ? Math.random() * 6 + 2 : Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

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

    // Central core glowing mesh
    const coreGeo = new THREE.IcosahedronGeometry(40, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x050000,
      emissive: 0xff1a1a,
      emissiveIntensity: 0.5,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    this.core = new THREE.Mesh(coreGeo, coreMat);
    this.centerGroup.add(this.core);

    // Dark fragmented outer shell
    const shellGeo = new THREE.IcosahedronGeometry(60, 0);
    const shellMat = new THREE.MeshStandardMaterial({
      color: 0x050000,
      roughness: 0.9,
      metalness: 0.8,
      flatShading: true,
      transparent: true,
      opacity: 0.85
    });
    this.shell = new THREE.Mesh(shellGeo, shellMat);
    this.centerGroup.add(this.shell);

    // Glowing rings wrapping the structure
    const ringGeo = new THREE.TorusGeometry(85, 0.4, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff1a1a,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
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
      opacity: 0.8
    });
    
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xff1a1a,
      transparent: true,
      opacity: 0.3
    });

    for (let i = 0; i < 15; i++) {
      const width = 20 + Math.random() * 60;
      const height = 2 + Math.random() * 5;
      const depth = 20 + Math.random() * 60;
      
      const geo = new THREE.BoxGeometry(width, height, depth);
      const mesh = new THREE.Mesh(geo, mat);
      
      // Add red glowing edges to some plates
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
        baseY: mesh.position.y
      };

      this.plates.push(mesh);
      this.scene.add(mesh);
    }
  }

  createLights() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.05);
    this.scene.add(ambient);

    // Deep red light from below
    const redLight = new THREE.PointLight(0xff0000, 5, 600);
    redLight.position.set(0, -200, 0);
    this.scene.add(redLight);

    // Orange/white highlight
    const highlight = new THREE.PointLight(0xffaa00, 3, 400);
    highlight.position.set(100, 100, 100);
    this.scene.add(highlight);
  }

  onMouseMove(event) {
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
    requestAnimationFrame(this.animate.bind(this));

    const elapsed = this.clock.getElapsedTime();

    // Slower, dramatic cinematic mouse tracking
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.02;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.02;

    // Cinematic camera parallax
    this.camera.position.x = this.mouse.x * 40;
    this.camera.position.y = this.mouse.y * 40 - this.scrollY * 0.15;
    this.camera.lookAt(0, -this.scrollY * 0.1, 0);

    // Particles slowly drifting UP like embers
    if (this.particles) {
      this.particles.rotation.y = elapsed * 0.01;
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.5; // move Y up
        if (positions[i] > 400) {
          positions[i] = -400; // reset to bottom
        }
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    // Rotate central monolithic block
    if (this.centerGroup) {
      this.centerGroup.rotation.y = elapsed * 0.05;
      
      this.core.rotation.x = -elapsed * 0.1;
      this.core.rotation.y = -elapsed * 0.15;
      
      this.shell.rotation.x = elapsed * 0.08;
      this.shell.rotation.z = elapsed * 0.04;
      
      // Pulse emission
      this.core.material.emissiveIntensity = 0.3 + Math.sin(elapsed * 2) * 0.2;
    }

    // Floating plates
    this.plates.forEach(mesh => {
      const ud = mesh.userData;
      mesh.position.y = ud.baseY + Math.sin(elapsed * ud.floatSpeed + ud.offset) * 15;
    });

    // Dark fade out on scroll
    const opacity = Math.max(0, 1 - this.scrollY / (window.innerHeight * 1.5));
    this.canvas.style.opacity = Math.max(0.2, opacity);

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('scroll', this.onScroll);
    this.renderer.dispose();
  }
}
