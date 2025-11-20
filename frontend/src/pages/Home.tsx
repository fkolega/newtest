import { HealthIndicator } from "@/components/HealthIndicator"
import { Crown, Sword, Shield, Scroll, Castle, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Medieval background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 medieval-flourish">
          <Crown className="w-full h-full text-yellow-600" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 medieval-flourish">
          <Sword className="w-full h-full text-red-800 transform rotate-45" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 medieval-flourish">
          <Shield className="w-full h-full text-green-800" />
        </div>
        <div className="absolute bottom-20 right-10 w-36 h-36 medieval-flourish">
          <Castle className="w-full h-full text-yellow-600" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-80 bg-gradient-to-b from-yellow-600/20 to-transparent"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-20 medieval-border border-primary stone-bg px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Crown className="w-12 h-12 text-yellow-500" />
            <h1 className="text-4xl font-black text-foreground medieval-text-shadow medieval-script tracking-wider">
              Ye Olde Digital Realm
            </h1>
          </div>
          <div className="medieval-serif text-foreground text-sm medieval-border px-4 py-2 parchment-bg">
            [REALM_STATUS: ONLINE]
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow px-8 py-16">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 leading-none medieval-text-shadow medieval-decoration">
              HEARKEN & WELCOME
            </h2>
            <p className="text-xl md:text-2xl medieval-serif text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="illuminated-capital">G</span>reetings, noble traveler! Thou hast entered a most wondrous digital scriptorium, 
              where the ancient arts of parchment and quill meet the mystical powers of the aetheric web. 
              Prepare thyself for a journey through realms both familiar and strange.
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <button className="medieval-button medieval-border medieval-shadow-gold px-8 py-4 medieval-hover">
                <div className="flex items-center gap-3">
                  <Scroll className="w-6 h-6" />
                  <span className="text-xl font-bold medieval-serif">ENTER THE KEEP</span>
                </div>
              </button>
              <button className="bg-red-800 text-foreground medieval-border border-red-600 medieval-shadow-crimson px-8 py-4 medieval-hover">
                <div className="flex items-center gap-3">
                  <Sword className="w-6 h-6" />
                  <span className="text-xl font-bold medieval-serif">QUEST AWAITS</span>
                </div>
              </button>
            </div>
          </div>

          {/* Medieval Services Grid */}
          <div className="mb-16 space-y-8">
            <h3 className="text-4xl font-bold text-foreground medieval-text-shadow medieval-script mb-8">
              Services of the Digital Monastery
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="parchment-bg medieval-border medieval-shadow p-8 medieval-hover">
                <div className="flex justify-center mb-4">
                  <Scroll className="w-12 h-12 text-yellow-700" />
                </div>
                <h4 className="text-2xl font-bold mb-4 medieval-script text-brown-900">SCRIBAL SERVICES</h4>
                <p className="medieval-serif text-brown-800 leading-relaxed">
                  Our learned scribes shall craft thy digital manuscripts with the finest attention to detail, 
                  as befitting documents for kings and lords of the realm.
                </p>
              </div>
              
              <div className="bg-red-900/90 text-foreground medieval-border border-red-600 medieval-shadow-crimson p-8 medieval-hover">
                <div className="flex justify-center mb-4">
                  <Sword className="w-12 h-12 text-red-400" />
                </div>
                <h4 className="text-2xl font-bold mb-4 medieval-script">DIGITAL WARFARE</h4>
                <p className="medieval-serif text-red-100 leading-relaxed">
                  Protect thy digital holdings from the marauding bands of cyber-brigands and malicious spirits 
                  that plague the aetheric highways.
                </p>
              </div>
              
              <div className="bg-green-900/90 text-foreground medieval-border border-green-600 medieval-shadow p-8 medieval-hover">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-green-400" />
                </div>
                <h4 className="text-2xl font-bold mb-4 medieval-script">REALM PROTECTION</h4>
                <p className="medieval-serif text-green-100 leading-relaxed">
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
          <div className="stone-bg medieval-border p-8 mx-auto max-w-md medieval-glow">
            <h3 className="text-2xl font-bold text-foreground mb-6 medieval-script medieval-text-shadow">
              MONASTERY STATUS
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-foreground medieval-serif">
                <span>Sacred Flames:</span>
                <span className="text-yellow-500">Burning Bright</span>
              </div>
              <div className="flex items-center justify-between text-foreground medieval-serif">
                <span>Digital Spirits:</span>
                <span className="text-green-500">At Peace</span>
              </div>
              <div className="flex items-center justify-between text-foreground medieval-serif">
                <span>Realm Gates:</span>
                <span className="text-blue-400">Open</span>
              </div>
              <div className="mt-6">
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
            <button className="medieval-button px-4 py-2 medieval-border medieval-shadow medieval-hover">
              <span className="medieval-serif font-bold">SUMMON SCRIBE</span>
            </button>
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