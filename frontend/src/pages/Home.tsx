import { HealthIndicator } from "@/components/HealthIndicator"
import { Crown, Sword, Shield, Scroll, Castle, Users, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Medieval background decorative elements with animations */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 medieval-flourish animate-float animate-delay-100">
          <Crown className="w-full h-full text-yellow-600 hover-glow" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 medieval-flourish animate-swing animate-delay-300">
          <Sword className="w-full h-full text-red-800 transform rotate-45 animate-slow-spin" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 medieval-flourish animate-levitate animate-delay-500">
          <Shield className="w-full h-full text-green-800 animate-reverse-spin" />
        </div>
        <div className="absolute bottom-20 right-10 w-36 h-36 medieval-flourish animate-bounce-in animate-delay-700">
          <Castle className="w-full h-full text-yellow-600 animate-float" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-80 bg-gradient-to-b from-yellow-600/20 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-20 medieval-border border-primary stone-bg px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 animate-slide-in-left">
            <Crown className="w-12 h-12 text-yellow-500 animate-glow animate-slow-spin" />
            <h1 className="text-4xl font-black text-foreground medieval-text-shadow medieval-script tracking-wider animate-typewriter">
              Ye Olde Digital Realm
            </h1>
          </div>
          <div className="medieval-serif text-foreground text-sm medieval-border px-4 py-2 parchment-bg animate-slide-in-right animate-flicker particle-effects">
            [REALM_STATUS: ONLINE]
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow px-8 py-16">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 leading-none medieval-text-shadow medieval-decoration animate-bounce-in animate-glow particle-effects">
              HEARKEN & WELCOME
            </h2>
            <p className="text-xl md:text-2xl medieval-serif text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
              <span className="illuminated-capital animate-sparkle">G</span>reetings, noble traveler! Thou hast entered a most wondrous digital scriptorium, 
              where the ancient arts of parchment and quill meet the mystical powers of the aetheric web. 
              Prepare thyself for a journey through realms both familiar and strange.
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center animate-fade-in-up animate-delay-500">
              <Link 
                to="/chronicles"
                className="medieval-button medieval-border medieval-shadow-gold px-8 py-4 medieval-hover inline-block ripple-effect hover-levitate animate-bounce-in animate-delay-100"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 animate-swing" />
                  <span className="text-xl font-bold medieval-serif">SACRED CHRONICLES</span>
                </div>
              </Link>
              <button className="medieval-button medieval-border medieval-shadow-gold px-8 py-4 medieval-hover ripple-effect hover-float animate-bounce-in animate-delay-300">
                <div className="flex items-center gap-3">
                  <Scroll className="w-6 h-6 animate-slow-spin" />
                  <span className="text-xl font-bold medieval-serif">ENTER THE KEEP</span>
                </div>
              </button>
              <button className="bg-red-800 text-foreground medieval-border border-red-600 medieval-shadow-crimson px-8 py-4 medieval-hover ripple-effect hover-shake animate-bounce-in animate-delay-500">
                <div className="flex items-center gap-3">
                  <Sword className="w-6 h-6 animate-swing" />
                  <span className="text-xl font-bold medieval-serif">QUEST AWAITS</span>
                </div>
              </button>
            </div>
          </div>

          {/* Medieval Services Grid */}
          <div className="mb-16 space-y-8">
            <h3 className="text-4xl font-bold text-foreground medieval-text-shadow medieval-script mb-8 animate-slide-in-left animate-glow">
              Services of the Digital Monastery
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="parchment-bg medieval-border medieval-shadow p-8 medieval-hover animate-slide-in-left animate-delay-100 particle-effects hover-levitate">
                <div className="flex justify-center mb-4">
                  <Scroll className="w-12 h-12 text-yellow-700 animate-swing hover-glow" />
                </div>
                <h4 className="text-2xl font-bold mb-4 medieval-script text-brown-900 animate-fade-in-up animate-delay-200">SCRIBAL SERVICES</h4>
                <p className="medieval-serif text-brown-800 leading-relaxed animate-fade-in-up animate-delay-300">
                  Our learned scribes shall craft thy digital manuscripts with the finest attention to detail, 
                  as befitting documents for kings and lords of the realm.
                </p>
              </div>
              
              <div className="bg-red-900/90 text-foreground medieval-border border-red-600 medieval-shadow-crimson p-8 medieval-hover animate-bounce-in animate-delay-300 particle-effects hover-shake">
                <div className="flex justify-center mb-4">
                  <Sword className="w-12 h-12 text-red-400 animate-slow-spin hover-glow" />
                </div>
                <h4 className="text-2xl font-bold mb-4 medieval-script animate-fade-in-up animate-delay-400">DIGITAL WARFARE</h4>
                <p className="medieval-serif text-red-100 leading-relaxed animate-fade-in-up animate-delay-500">
                  Protect thy digital holdings from the marauding bands of cyber-brigands and malicious spirits 
                  that plague the aetheric highways.
                </p>
              </div>
              
              <div className="bg-green-900/90 text-foreground medieval-border border-green-600 medieval-shadow p-8 medieval-hover animate-slide-in-right animate-delay-500 particle-effects hover-float">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-green-400 animate-levitate hover-glow" />
                </div>
                <h4 className="text-2xl font-bold mb-4 medieval-script animate-fade-in-up animate-delay-600">REALM PROTECTION</h4>
                <p className="medieval-serif text-green-100 leading-relaxed animate-fade-in-up animate-delay-700">
                  Fortify thy digital castle with the strongest enchantments and protective wards 
                  known to the wisest mages of our order.
                </p>
              </div>
            </div>
          </div>

          {/* Guild Services */}
          <div className="mb-16">
            <div className="parchment-bg medieval-border medieval-scroll p-12 mx-auto max-w-4xl">
              <h3 className="text-3xl font-bold text-brown-900 mb-8 medieval-script medieval-decoration">
                Join Our Noble Guild
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-bold text-brown-800 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-yellow-700" />
                    Guild Benefits
                  </h4>
                  <ul className="medieval-serif text-brown-700 space-y-2">
                    <li>• Access to the Great Library of Digital Tomes</li>
                    <li>• Training in the Mystical Arts of Code-craft</li>
                    <li>• Protection under the Guild's Sacred Charter</li>
                    <li>• Fellowship with Masters of the Digital Arts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brown-800 mb-4 flex items-center gap-2">
                    <Castle className="w-6 h-6 text-yellow-700" />
                    Guild Ranks
                  </h4>
                  <ul className="medieval-serif text-brown-700 space-y-2">
                    <li>• Page of the Pixel Arts</li>
                    <li>• Squire of the Sacred Scripts</li>
                    <li>• Knight of the Digital Round Table</li>
                    <li>• Master of the Aetheric Web</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* System Status in Medieval Style */}
          <div className="stone-bg medieval-border p-8 mx-auto max-w-md medieval-glow animate-levitate animate-delay-1000 particle-effects">
            <h3 className="text-2xl font-bold text-foreground mb-6 medieval-script medieval-text-shadow animate-flicker">
              MONASTERY STATUS
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-foreground medieval-serif animate-fade-in-up animate-delay-1000">
                <span>Sacred Flames:</span>
                <span className="text-yellow-500 animate-glow">Burning Bright</span>
              </div>
              <div className="flex items-center justify-between text-foreground medieval-serif animate-fade-in-up animate-delay-1000">
                <span>Digital Spirits:</span>
                <span className="text-green-500 animate-sparkle">At Peace</span>
              </div>
              <div className="flex items-center justify-between text-foreground medieval-serif animate-fade-in-up animate-delay-1000">
                <span>Realm Gates:</span>
                <span className="text-blue-400 animate-shimmer">Open</span>
              </div>
              <div className="mt-6 animate-bounce-in animate-delay-1000">
                <HealthIndicator />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 parchment-bg medieval-border border-t-primary p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="medieval-script font-bold text-2xl mb-4 md:mb-0 text-brown-900">
            Anno Domini {new Date().getFullYear()} • Digital Scriptorium
          </div>
          <div className="flex gap-4">
            <Link 
              to="/chronicles" 
              className="medieval-button px-4 py-2 medieval-border medieval-shadow medieval-hover inline-block"
            >
              <span className="medieval-serif font-bold">CHRONICLES</span>
            </Link>
            <button className="medieval-button px-4 py-2 medieval-border medieval-shadow medieval-hover">
              <span className="medieval-serif font-bold">GUILD CHARTER</span>
            </button>
            <button className="medieval-button px-4 py-2 medieval-border medieval-shadow medieval-hover">
              <span className="medieval-serif font-bold">SACRED TEXTS</span>
            </button>
          </div>
        </div>
        
        {/* Medieval blessing */}
        <div className="text-center mt-8 pt-6 border-t-2 border-yellow-700">
          <p className="medieval-script text-brown-800 text-lg">
            "May thy pixels be ever sharp and thy connections ever swift"
          </p>
          <p className="medieval-serif text-brown-600 text-sm mt-2">
            - Ancient Blessing of the Digital Monks
          </p>
        </div>
      </footer>
    </div>
  )
}