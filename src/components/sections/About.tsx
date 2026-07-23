import { technologies } from "../../data/technologies";

export default function About() {
  return (
    <section className="mx-6 mt-6 rounded-3xl bg-white shadow-sm px-8 py-10 grid md:grid-cols-2 gap-10">
      {/* Coluna esquerda */}
      <div>
        <span className="text-sm font-semibold tracking-wide text-purple-600">
          SOBRE MIM
        </span>
        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          Curiosa por natureza.{" "}
          <span className="text-pink-500">Desenvolvedora por escolha.</span>
        </h2>
        <p className="mt-4 text-gray-500">
          Sou desenvolvedora fullstack com paixão por resolver problemas reais
          através de código limpo, design intencional e experiência de usuário.
        </p>
        <a
          href="#sobre"
          className="mt-4 inline-block text-sm font-semibold text-purple-600"
        >
          Mais sobre minha jornada →
        </a>
      </div>

      {/* Coluna direita */}
      <div>
        <span className="text-sm font-semibold tracking-wide text-purple-600">
          TECNOLOGIAS & FERRAMENTAS
        </span>
        <div className="mt-4 grid grid-cols-5 gap-3">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-2 rounded-br-2xl border border-gray-100 py-4"
              >
                <Icon size={24} color={tech.color} />
                <span className="text-xs text-gray-600 text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
