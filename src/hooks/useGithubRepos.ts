import { useState, useEffect } from 'react'
import{ fetchRepos } from '../services/github'
import type { GithubRepo } from '../types/github'

interface UseGithubReposResult {
    repos: GithubRepo[]
    loading: boolean
    error: string | null
}

export function useGithubRepos(): UseGithubReposResult {
    const [repos, setRepos] = useState<GithubRepo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchRepos()
        .then(setRepos)
        .catch((err: Error) => setError(err.message))
        .finally(() => setLoading(false))
    }, [])

    return {repos, loading, error}
}