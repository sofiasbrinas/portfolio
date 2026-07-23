interface ProjectExtras {
    image: string
    deployUrl?: string
    frontUrl?: string
    backUrl?: string
}

export const projectLinks: Record<string, ProjectExtras> = {
    "blogpessoal": {
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=blogpessoal",
        deployUrl: "https://blog-pessoal-react-ll2ptu65i-sofiasabrinasilva-1772s-projects.vercel.app/",
        frontUrl: "https://github.com/sofiasbrinas/blog-pessoal-react",
    },

    "projeto_clima": {
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=projeto_clima",
        deployUrl: "https://sofiasbrinas.github.io/projeto_clima/",
        frontUrl: "https://github.com/sofiasbrinas/projeto_clima",
    }
}