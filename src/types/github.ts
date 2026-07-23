export interface GithubRepo {
    id: number
    name: string
    html_url: string
    description: string | null
    language: string | null
    stargazers_count: number
    topics: string[]
    update_at: string
    homepage: string | null
}