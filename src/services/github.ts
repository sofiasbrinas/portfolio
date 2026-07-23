import type { GithubRepo } from '../types/github'

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
