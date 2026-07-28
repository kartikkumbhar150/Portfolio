import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">KK</span>
            <span className="footer__tagline">Building the future, one commit at a time.</span>
          </div>

          <div className="footer__links">
            {['About', 'Projects', 'Skills', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.querySelector(`#${link.toLowerCase()}`)
                  if (target) target.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <p className="footer__copy">
            © {currentYear} Kartik Kumbhar. Crafted with ❤️ &amp; React.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
