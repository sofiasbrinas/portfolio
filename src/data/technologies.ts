import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiPostgresql,
    SiGit,
    SiFigma,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import type { IconType } from 'react-icons'

interface Technology {
    name: string
    icon: IconType
    color: string
}

export const technologies: Technology[] = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E'},
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6'},
    { name: 'React', icon: SiReact, color: '#61DAFB'},
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000'},
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933'},
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38DBF8'},
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1'},
    { name: 'Git & GitHub', icon: SiGit, color: '#F05032'},
    { name: 'Figma', icon: SiFigma, color: '#F24E1E'},
    { name: 'VS Code', icon: VscVscode, color: '#007ACC'},
]