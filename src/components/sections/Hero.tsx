import HeroCards from './HeroCards'

export default function Hero() {
    return(
        <section className="flex flex-col items-center text-center px-6 py-20">
            <span className="text-sm font-semibold tracking-wide text-purple-600 mb-4">
                DESENVOLVEDORA FULLSTACK
            </span>

            <h1 className="text-5xl font-extrabold text-gray-900">
                Olá, eu sou
            </h1>
            <h1 className="text-5xl font-extrabold bg-linear-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Sofia Sabrina
            </h1>

            <p className="mt-6 max-w-xl text-gray-500">
                Transformo ideias complexas em soluções digitais acessíveis,
                escaláveis e centradas em pessoas.
            </p>

            <div className="mt-8 flex gap-4">
                <button
                  type="button"
                  className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white">
                    Ver projetos
                  </button>
                  <button
                     type="button"
                     className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700"
                     >
                        Vamos conversar
                  </button>
            </div>
            <div>
                <HeroCards />
            </div>
        </section>
    )
}