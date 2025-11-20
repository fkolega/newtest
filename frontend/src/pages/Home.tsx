import { HealthIndicator } from "@/components/HealthIndicator"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black brutalist-noise relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 brutalist-shadow transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500 brutalist-shadow-accent transform -rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-20 bg-cyan-400 brutalist-shadow-secondary"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-red-500 brutalist-shadow transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-64 bg-white opacity-10"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-20 brutalist-border-b border-white bg-black px-8 py-8">
        <div className="flex items-center justify-between">
          <h1 
            className="text-4xl font-black text-white brutalist-glitch brutalist-text-shadow-primary tracking-wider"
            data-text="BRUTAL.SITE"
          >
            BRUTAL.SITE
          </h1>
          <div className="mono text-white text-sm brutalist-border px-4 py-2 bg-gray-800">
            [SYSTEM_ONLINE]
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-16">
            <h2 
              className="text-8xl md:text-9xl font-black text-white mb-8 leading-none brutalist-glitch"
              data-text="WELCOME"
            >
              WELCOME
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="brutalist-border-primary brutalist-shadow-primary bg-yellow-400 text-black px-8 py-4 brutalist-hover cursor-pointer">
                <span className="text-2xl font-black mono">TO THE FUTURE</span>
              </div>
              <div className="brutalist-border-secondary brutalist-shadow-secondary bg-pink-500 text-white px-8 py-4 brutalist-hover cursor-pointer">
                <span className="text-2xl font-black mono">OF WEB DESIGN</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16 space-y-8">
            <div className="bg-white text-black brutalist-border brutalist-shadow p-8 mx-auto max-w-2xl">
              <p className="text-xl font-bold mono leading-tight">
                THIS IS NOT YOUR TYPICAL WEB APPLICATION.
                <br />
                <span className="text-pink-500">EMBRACE THE CHAOS.</span>
                <br />
                <span className="text-cyan-400">REJECT MINIMALISM.</span>
                <br />
                <span className="text-yellow-500">BUILD SOMETHING BOLD.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-cyan-400 text-black brutalist-border-accent brutalist-shadow-accent p-6 brutalist-hover">
                <h3 className="text-xl font-black mb-4">RAW POWER</h3>
                <p className="mono text-sm font-bold">NO ROUNDED CORNERS. NO SOFT SHADOWS. PURE DIGITAL BRUTALISM.</p>
              </div>
              
              <div className="bg-pink-500 text-white brutalist-border-secondary brutalist-shadow-secondary p-6 brutalist-hover">
                <h3 className="text-xl font-black mb-4">HIGH CONTRAST</h3>
                <p className="mono text-sm font-bold">BOLD COLORS THAT SCREAM. TYPOGRAPHY THAT DEMANDS ATTENTION.</p>
              </div>
              
              <div className="bg-yellow-400 text-black brutalist-border-primary brutalist-shadow-primary p-6 brutalist-hover">
                <h3 className="text-xl font-black mb-4">ZERO COMPROMISE</h3>
                <p className="mono text-sm font-bold">FUNCTION OVER FORM. FORM FOLLOWS FUNCTION. BRUTALLY.</p>
              </div>
            </div>
          </div>

          {/* Health Indicator Section */}
          <div className="bg-gray-900 brutalist-border p-8 mx-auto max-w-md">
            <h3 className="text-2xl font-black text-white mb-6 mono">SYSTEM STATUS</h3>
            <HealthIndicator />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 bg-white text-black brutalist-border-t border-black p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mono font-black text-xl mb-4 md:mb-0">
            © {new Date().getFullYear()} BRUTAL.SITE
          </div>
          <div className="flex gap-4">
            <div className="bg-black text-white px-4 py-2 brutalist-border-accent brutalist-shadow-accent brutalist-hover cursor-pointer">
              <span className="mono font-bold">CONTACT</span>
            </div>
            <div className="bg-black text-white px-4 py-2 brutalist-border-secondary brutalist-shadow-secondary brutalist-hover cursor-pointer">
              <span className="mono font-bold">ABOUT</span>
            </div>
            <div className="bg-black text-white px-4 py-2 brutalist-border-primary brutalist-shadow-primary brutalist-hover cursor-pointer">
              <span className="mono font-bold">SOURCE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}