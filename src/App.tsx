import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-[#FAF7EA] h-18 md:h-22 shadow-sm flex items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center">
          <img
            src="/logo_dark_green.png"
            className="h-28 md:h-34 w-auto object-contain"
            alt="Deuce Club Tennis"
          />
        </div>
      </header>

      <main className="relative flex-1 bg-white flex items-start justify-center overflow-hidden min-h-[600px] md:min-h-screen pt-8 md:pt-12 lg:pt-16">
        <img 
          src="/bg 2.png" 
          alt="Tennis court background" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div className="relative z-10 flex flex-col items-center text-center animate-fade-in-up px-8">
          <span className="font-raleway text-[#FAF7EA] text-lg md:text-2xl font-semibold tracking-widest uppercase mb-0 drop-shadow-sm">
            Welcome to
          </span>
          <h1 className="font-parisienne text-[#FAF7EA] text-6xl md:text-8xl lg:text-9xl mb-4 drop-shadow-lg">
            Deuce Club
          </h1>
          <p className="font-raleway text-[#FAF7EA] text-lg md:text-2xl font-semibold tracking-widest uppercase mb-10 drop-shadow-sm">
            Elevate Your Game
          </p>
          <button className="bg-[#1a4d2e] hover:bg-[#2c7a4b] text-[#FAF7EA] font-raleway px-10 py-4 rounded-full text-lg font-bold tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-30">
            Join the Club
          </button>
        </div>

        <img 
          src="/fg 2.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
        />
      </main>

      <section className="w-full py-24 bg-dots relative border-t border-black/10">
        <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col items-center">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-parisienne text-5xl md:text-7xl text-[#1a4d2e] mb-6 drop-shadow-sm">
              Experience the Best
            </h2>
            <p className="font-raleway text-lg md:text-2xl text-[#4a5d23] font-medium leading-relaxed">
              Join our community of passionate tennis players. With world-class facilities, expert coaching, and a vibrant social scene, you'll find everything you need to take your game to the next level.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

