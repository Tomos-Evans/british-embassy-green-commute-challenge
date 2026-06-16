import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="py-6 text-center text-xs text-gray-400">
      <Link to="/terms" className="hover:text-gray-500 hover:underline">
        Terms &amp; Conditions
      </Link>
      <span className="mx-2">·</span>
      <Link to="/privacy" className="hover:text-gray-500 hover:underline">
        Privacy Policy
      </Link>
    </footer>
  )
}
