import { LayoutGrid, CloudUpload, Heart } from "lucide-react";

const stats = [
  { icon: LayoutGrid, value: "12+", label: "Projetos Concluídos" },
  { icon: CloudUpload, value: "8+", label: "Tecnologias Dominadas" },
  { icon: Heart, value: "100%", label: "Compromisso com qualidade" },
];

export default function Stats() {
  return (
    <section className="mx-6 rounded-3xl bg-white shadow-sm px-8 py-8 flex flex-wrap items-center justify-between gap-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Icon size={20} />
            </span>
            <div className="text-left">
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        );
      })}

      <p className="text=sm font-semibold text-gray-900">
        Foco em pessoas, resultados{" "}
        <span className="text-pink-500">reais.</span>
      </p>
    </section>
  );
}
