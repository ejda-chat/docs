import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center px-4 max-w-3xl mx-auto">
      <h1 className="mb-4 text-4xl font-bold">Documentation EJDA Chat</h1>
      <p className="text-xl mb-8 text-fd-muted-foreground">
        Votre guide complet de la plateforme EJDA Chat
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
        <Link 
          href="/docs" 
          className="relative flex flex-col items-center p-6 border rounded-lg transition-all duration-300 overflow-hidden group hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <h2 className="text-xl font-semibold mb-2 relative z-10">Documentation</h2>
          <p className="text-center text-fd-muted-foreground relative z-10">
            Explorez les guides détaillés et références API
          </p>
        </Link>
        
        <Link 
          href="/docs/bien-commencer/" 
          className="relative flex flex-col items-center p-6 border rounded-lg transition-all duration-300 overflow-hidden group hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <h2 className="text-xl font-semibold mb-2 relative z-10">Commencer</h2>
          <p className="text-center text-fd-muted-foreground relative z-10">
            Guide de démarrage rapide pour les nouveaux utilisateurs
          </p>
        </Link>
      </div>
      
      <div className="text-center text-fd-muted-foreground">
        <p>
          Des questions ? Visitez notre{' '}
          <a href="#" className="text-fd-foreground font-semibold underline hover:text-blue-500 transition-colors">
            dépôt GitHub
          </a>
        </p>
      </div>
    </main>
  );
}