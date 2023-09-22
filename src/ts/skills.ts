export type Skill = {
    name: string;
    description: string;
    icon: string;
}

export type Job = {
    name: string;
    skills: Skill[];
}

export const jobs: Job[] = [

]

export const skills: Skill[] = [
  {
    name: "HTML",
    description: "HTML is the standard markup language for Web pages.",
    icon: "html5",
  },
]