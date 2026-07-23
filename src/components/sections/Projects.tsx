import { useGithubRepos } from "../../hooks/useGithubRepos";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const { repos, loading, error } = useGithubRepos();

    if (loading) return <p className="text-center py-10">Carregando Projetos...</p>;
    if (error) return <p className="text-center py-10 text-red-500">Erro: {error}</p>;

    return (
        <section id="projetos" className="mx-6 mt-6">
            <span className="text-sm font-semibold tracking-wide text-purple-600">
                PROJETOS EM DESTAQUE
            </span>

            <div className="mt-4 grid md:grid-cols-3 gap-6">
                {repos.map((repo) => (
                    <ProjectCard key={repo.id} repo={repo} />
                ))}
            </div>
        </section>
    );
}