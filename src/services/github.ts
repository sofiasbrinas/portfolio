import type { GithubRepo, GithubRepoWithLanguages } from '../types/github'

const GITHUB_USERNAME = 'sofiasbrinas'
const BASE_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`

export async function fetchRepos(): Promise<GithubRepo[]> {
    const response = await fetch(`${BASE_URL}?sort=updated&per_page=100`)

    if(!response.ok) {
        throw new Error (`Erro ao buscar repositórios: ${response.status}`)
    }

    const repos: GithubRepo[] = await response.json()

    return repos.filter((repo) => repo.topics.includes('portfolio'))
}

async function fetchLanguages(repo: GithubRepo): Promise<string[]> {
    const response = await fetch(repo.languages_url)

    if (!response.ok) return []

    const data: Record<string, number> = await response.json()
    return Object.keys(data)
}

export async function fetchReposWithLanguages(): Promise<GithubRepoWithLanguages[]> {
    const repos = await fetchRepos()

    const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => ({
            ...repo,
            languages: await fetchLanguages(repo),
        }))
    )

    return reposWithLanguages
}

