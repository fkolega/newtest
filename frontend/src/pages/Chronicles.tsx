import { ArrowLeft, Scroll, Globe, Shield, BookOpen, Star } from "lucide-react"
import { Link } from "react-router-dom"

const chroniclesData = [
  {
    id: 1,
    title: "The Sacred Tournaments of Lublin",
    originalTitle: "IV liga Lublin",
    type: "Athletic Chronicles",
    region: "Kingdom of Polonia",
    content: "In the eastern realm of Lublin, noble warriors gather to compete in the ancient sport of foot-ball. These brave souls contest in the Fifth Circle of Athletic Honor, known to the common folk as the IV liga. The champions of this tournament may ascend to the Fourth Circle, earning great glory and recognition throughout the land. Teams from villages across the Lublin region send their finest athletes to display their prowess in this hallowed competition.",
    icon: Shield,
    bgColor: "bg-red-900/30",
    borderColor: "border-red-600"
  },
  {
    id: 2,
    title: "The Iron Serpent's Eastern Gate",
    originalTitle: "Xingtai East Railway Station",
    type: "Engineering Marvels",
    region: "Celestial Empire",
    content: "Behold, a great marvel of engineering in the distant lands of the Celestial Empire! In the province of Hebei stands a magnificent gateway where iron serpents - those mystical carriages that move without horse nor ox - pause in their swift journey. This station serves as a crucial waypoint on the grand thoroughfare connecting the imperial capital to the southern reaches, allowing travelers to traverse vast distances with supernatural speed.",
    icon: Star,
    bgColor: "bg-blue-900/30",
    borderColor: "border-blue-600"
  },
  {
    id: 3,
    title: "The Paths of Texas Spur",
    originalTitle: "Texas State Highway Spur 247",
    type: "Trade Routes",
    region: "New World Territories",
    content: "In the vast wilderness of the New World, in a land called Texas, lies a modest but important pathway known as Spur 247. This road serves the small settlement of Pyote in Ward County, connecting isolated communities to the greater network of trade routes. Though humble in its scope, such paths are the lifelines that allow commerce and communication to flow between distant outposts in these frontier lands.",
    icon: Globe,
    bgColor: "bg-green-900/30",
    borderColor: "border-green-600"
  },
  {
    id: 4,
    title: "The Blessed Sanctuary of Harrow Hill",
    originalTitle: "St Mary's Church, Harrow on the Hill",
    type: "Sacred Architecture",
    region: "Kingdom of England",
    content: "Upon the elevated grounds of Harrow, in the northwest reaches of London, stands a most sacred edifice - the Church of St Mary. This hallowed sanctuary has been declared a building of 'exceptional interest' by the royal scribes, earning the highest mark of protection that can be bestowed upon a structure. As both Borough and Parish Church, it serves as the spiritual heart of the hilltop community, its ancient stones bearing witness to countless prayers and ceremonies throughout the ages.",
    icon: BookOpen,
    bgColor: "bg-purple-900/30",
    borderColor: "border-purple-600"
  },
  {
    id: 5,
    title: "The Ballmaster of the Rising Sun",
    originalTitle: "Yusuke Kawasaki",
    type: "Legendary Figures",
    region: "Island Kingdom of Nippon",
    content: "From the island kingdom of Nippon comes the tale of Yusuke Kawasaki, a master of the ancient art of ball-hurling. Born in the seventeenth day of the second month in the year 1982, in the province of Miyazaki, this skilled artisan has dedicated his life to perfecting the sacred ritual of baseball. He serves as a pitcher for the noble house of Saitama Seibu Lions, where his precision and technique have earned him great renown among the devotees of this eastern athletic tradition.",
    icon: Star,
    bgColor: "bg-yellow-900/30",
    borderColor: "border-yellow-600"
  }
]

export default function ChroniclesPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Medieval background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 medieval-flourish">
          <BookOpen className="w-full h-full text-yellow-600" />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 medieval-flourish">
          <Scroll className="w-full h-full text-yellow-600" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-96 bg-gradient-to-b from-yellow-600/10 to-transparent"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-20 medieval-border border-primary stone-bg px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BookOpen className="w-12 h-12 text-yellow-500" />
            <h1 className="text-4xl font-black text-foreground medieval-text-shadow medieval-script tracking-wider">
              The Ancient Chronicles
            </h1>
          </div>
          <Link 
            to="/" 
            className="medieval-button medieval-border medieval-shadow-gold px-6 py-3 medieval-hover flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="medieval-serif font-bold">RETURN TO REALM</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-foreground mb-8 leading-none medieval-text-shadow medieval-decoration">
              SACRED KNOWLEDGE PRESERVED
            </h2>
            <div className="parchment-bg medieval-border medieval-shadow p-8 max-w-4xl mx-auto">
              <p className="text-xl medieval-serif text-brown-800 leading-relaxed">
                <span className="illuminated-capital">W</span>ithin these hallowed digital archives lie chronicles gathered from the far corners of the known world. 
                Our scribes have translated these ancient texts from their original tongues, preserving the wisdom of distant lands and peoples. 
                Each document bears witness to the diverse tapestry of human achievement across many realms.
              </p>
            </div>
          </div>

          {/* Chronicles Grid */}
          <div className="space-y-12">
            {chroniclesData.map((chronicle, index) => (
              <article 
                key={chronicle.id} 
                className={`${chronicle.bgColor} medieval-border ${chronicle.borderColor} medieval-shadow p-8 ${index % 2 === 1 ? 'ml-auto max-w-5xl' : 'mr-auto max-w-5xl'}`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 ${chronicle.bgColor} medieval-border ${chronicle.borderColor} medieval-shadow-gold`}>
                    <chronicle.icon className="w-12 h-12 text-yellow-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm medieval-serif font-semibold text-yellow-400 bg-yellow-900/30 px-3 py-1 medieval-border border-yellow-600">
                          {chronicle.type}
                        </span>
                        <span className="text-sm medieval-serif text-foreground/70">
                          From the {chronicle.region}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground medieval-script medieval-text-shadow mb-2">
                        {chronicle.title}
                      </h3>
                      <p className="text-sm medieval-serif text-foreground/60 italic">
                        Originally chronicled as: "{chronicle.originalTitle}"
                      </p>
                    </div>
                    
                    <div className="parchment-bg p-6 medieval-border medieval-shadow">
                      <p className="medieval-serif text-brown-800 leading-relaxed text-lg">
                        {chronicle.content}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer blessing */}
          <div className="text-center mt-16 pt-8 border-t-2 border-yellow-700">
            <div className="parchment-bg medieval-border medieval-shadow p-6 max-w-2xl mx-auto">
              <p className="medieval-script text-brown-800 text-xl mb-4">
                "Knowledge is the light that banishes the darkness of ignorance"
              </p>
              <p className="medieval-serif text-brown-600 text-sm">
                - Wisdom of the Digital Monastery's Great Library
              </p>
              <div className="mt-4 text-brown-700">
                <Scroll className="w-6 h-6 mx-auto opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}