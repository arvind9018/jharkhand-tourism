import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <div>
            <h1 className="text-xl font-extrabold leading-tight">
              Jharkhand Tourism
            </h1>
            <p className="text-xs text-secondary">
              Smart Digital Tourism
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/destinations">Destinations</NavItem>
          <NavItem to="/map">GIS Map</NavItem>
          <NavItem to="/homestays">Homestays</NavItem>
          <NavItem to="/marketplace">Marketplace</NavItem>

          <Link
            to="/admin"
            className="bg-accent px-4 py-2 rounded-lg text-white"
          >
            Admin
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-primary px-6 pb-4 space-y-3">
          <MobileNavItem to="/" setOpen={setOpen}>Home</MobileNavItem>
          <MobileNavItem to="/destinations" setOpen={setOpen}>Destinations</MobileNavItem>
          <MobileNavItem to="/map" setOpen={setOpen}>GIS Map</MobileNavItem>
          <MobileNavItem to="/homestays" setOpen={setOpen}>Homestays</MobileNavItem>
          <MobileNavItem to="/marketplace" setOpen={setOpen}>Marketplace</MobileNavItem>
          <MobileNavItem to="/admin" setOpen={setOpen}>Admin</MobileNavItem>
        </div>
      )}
    </nav>
  )
}

/* ---------------- Helper Components ---------------- */

function NavItem({ to, children }: { to: string; children: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition ${
          isActive
            ? "text-accent border-b-2 border-accent"
            : "hover:text-accent"
        }`
      }
    >
      {children}
    </NavLink>
  )
}

function MobileNavItem({
  to,
  children,
  setOpen,
}: {
  to: string
  children: string
  setOpen: (v: boolean) => void
}) {
  return (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className="block border-b border-white/20 pb-2"
    >
      {children}
    </Link>
  )
}
