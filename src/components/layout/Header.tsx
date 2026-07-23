export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-1 font-bold text-lg">
        Sofia Sabrina
        <span className="text-purple-500">✦</span>
      </div>

      <nav className="flex gap-6 text-sm font-medium text-gray-600">
        <a
          href="#home"
          className="text-purple-600 border-b-2 border-purple-600 pb-1"
        >
          Home
        </a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#experiencia">Experiência</a>
        <a href="#contato">Contato</a>
      </nav>

      <button
        type="button"
        className="rounded-full border border-gray-200 px-3 py-2 text-sm"
      >
        🌙
      </button>
    </header>
  );
}
