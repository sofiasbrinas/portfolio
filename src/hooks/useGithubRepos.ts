import { useState, useEffect } from 'react'
import{ fetchReposWithLanguages } from '../services/github'
import type { GithubRepoWithLanguages } from '../types/github'

interface UseGithubReposResult {
    repos: GithubRepoWithLanguages[]
    loading: boolean
    error: string | null
}

export function useGithubRepos(): UseGithubReposResult {
    const [repos, setRepos] = useState<GithubRepoWithLanguages[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchReposWithLanguages()
        .then(setRepos)
        .catch((err: Error) => setError(err.message))
        .finally(() => setLoading(false))
    }, [])

    return {repos, loading, error}
}