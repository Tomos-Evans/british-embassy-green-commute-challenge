import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function TermsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#f5f0e8] flex flex-col items-center justify-center p-4">
      {/* Branding */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-[#1a2b5e] flex items-center justify-center text-white text-2xl mx-auto mb-3">
          🏆
        </div>
        <h1 className="text-2xl font-bold text-[#1a2b5e]">Green Commute Challenge</h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        <div className="h-1 bg-[#c8102e]" />
        <div className="p-8">
          <h2 className="text-xl font-semibold text-[#1a2b5e] mb-4">Terms &amp; Conditions</h2>
          <p className="text-sm text-gray-500">Coming soon.</p>

          <button
            onClick={() => navigate(-1)}
            className="inline-block text-[#1a2b5e] font-semibold hover:underline mt-6 text-sm"
          >
            Back
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
