import { NavLink, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

function initials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { profile } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium transition-colors ${
      isActive
        ? 'bg-white/20 text-white'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`

  return (
    <div className="min-h-screen bg-[#f5f0e8] flex flex-col">
      {/* Nav */}
      <header className="bg-[#1a2b5e] shadow-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
              BE
            </div>
            <div className="text-white leading-tight">
              <div className="font-semibold text-sm">British Embassy</div>
              <div className="text-[10px] tracking-widest text-white/70 uppercase">
                Green Commute Challenge
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            <NavLink to="/leaderboard" className={navLinkClass}>
              🏆 <span>Leaderboard</span>
            </NavLink>
            <NavLink to="/log" className={navLinkClass}>
              ➕ <span>Log</span>
            </NavLink>
          </nav>

          {/* Avatar + sign out */}
          {profile && (
            <div className="flex items-center gap-2">
              <NavLink
                to="/profile"
                className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {initials(profile.display_name)}
                </div>
                <span className="text-white text-sm">
                  {profile.display_name}
                </span>
              </NavLink>
              <button
                onClick={handleSignOut}
                className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
              >
                Out
              </button>
            </div>
          )}
        </div>
        {/* Red accent line */}
        <div className="h-0.5 bg-[#c8102e]" />
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
