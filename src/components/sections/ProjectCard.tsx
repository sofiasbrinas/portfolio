import { ExternalLink, Rocket } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { GithubRepoWithLanguages } from "../../types/github";
import { projectLinks } from "../../data/projectLinks";

interface ProjectCardProps {
    repo: GithubRepoWithLanguages;
}

export default function ProjectCard({repo}: ProjectCardProps) {
    const extras= projectLinks[repo.name];
    const image = extras?.image ?? "https://placehold.co/600x400/e5e7eb/6b7280?text=Projeto";
    const badges = repo.topics.filter((topic) => topic !== "portfolio");

    return (
        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <img src={image} alt={repo.name}className="w-full h-44 object-cover" />

            <div className="p-5">
                {badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                        {badges.map((badge) => (
                            <span
                              key={badge}
                              className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">
                                {badge}
                              </span>
                        ))}
                    </div>
                )}

                <h3 className="text-lg font-bold text-gray-900">{repo.name}</h3>

                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {repo.description ?? "Sem descrição disponível."}
                </p>

                <div className="mt-3 flex-wrap gap-2">
                    {repo.languages.map((lang) => (
                        <span
                          key={lang}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-purple-50 text-purple-600">
                            {lang}
                          </span>
                    ))}
                </div>

                <div className="mt-4 flex gap-3">
                    {extras?.deployUrl && (
                        <a href={extras.deployUrl} target="_blank" rel="noreferrer" title="Deploy">
                            <Rocket size={18} className="text-gray-500 hover:text-purple-600" />
                        </a>
                    )}
                    {extras?.frontUrl && (
                        <a href={extras.frontUrl} target="_blank" rel="noreferrer" title="Repositório Front-end">
                            <SiGithub size={18} className="text-gray-500 hover:text-purple-600" />
                        </a>
                    )}
                    {extras?.backUrl && (
                        <a href={extras.backUrl} target="_blank" rel="noreferrer" title="Repositório Back-end">
                            <ExternalLink size={18} className="text-gray-500 hover:text-purple-600" />
                        </a>
                    )}
                </div>

            </div>
        </div>
    )

}