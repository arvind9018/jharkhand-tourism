import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              🌿 Jharkhand Tourism
            </h2>
            <p className="text-sm mt-3 text-secondary">
              A Smart Digital Tourism platform promoting sustainable travel,
              tribal culture, and community-based tourism in Jharkhand.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/destinations" className="hover:text-accent">Destinations</Link></li>
              <li><Link to="/map" className="hover:text-accent">GIS Map</Link></li>
              <li><Link to="/homestays" className="hover:text-accent">Homestays</Link></li>
              <li><Link to="/marketplace" className="hover:text-accent">Marketplace</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent">Help Center</a></li>
              <li><a href="#" className="hover:text-accent">Travel Guidelines</a></li>
              <li><a href="#" className="hover:text-accent">Safety & Alerts</a></li>
              <li><a href="#" className="hover:text-accent">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent">Feedback</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold mb-3">Connect With Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" aria-label="Facebook" className="hover:text-accent">📘</a>
              <a href="#" aria-label="Instagram" className="hover:text-accent">📸</a>
              <a href="#" aria-label="Twitter" className="hover:text-accent">🐦</a>
              <a href="#" aria-label="YouTube" className="hover:text-accent">▶️</a>
            </div>
            <p className="text-sm mt-4 text-secondary">
              Follow us for travel updates, festivals, and cultural stories.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="border-white/20 my-8" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-3">
          <p>
            © 2026 Jharkhand Smart Tourism | Government Initiative
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
            <a href="#" className="hover:text-accent">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
