import { Cumulart } from "@/components/scenes/cumulart";
import { FireWall } from "@/components/scenes/firewall";
import { Iberis } from "@/components/scenes/iberis";
import { Quomeda } from "@/components/scenes/quomeda";
import { FC, ReactNode } from "react";

export type Skill = {
    name: string;
    projects: string[];
    icon: string;
}

export function fibonacciSphere(samples: number = 1000, radius: number = 1): [x: number, y: number, z: number][] {
  const phi = Math.PI * (Math.sqrt(5) - 1); // golden angle in radians

  return Array.from({ length: samples }, (_, i) => {
    const y = 1 - (i / (samples - 1)) * 2; // y goes from 1 to -1
    const adjustedRadius = radius * Math.sqrt(1 - y * y); // Adjust radius based on y
    const theta = phi * i; // golden angle increment
    const x = Math.cos(theta) * adjustedRadius;
    const z = Math.sin(theta) * adjustedRadius;

    return [x, y * radius, z] // Multiply y by radius to maintain sphere size
  });
}

export type Job = {
    name: string,
    skills: string[],
    scene: FC
}

export const jobs: Job[] = [
  {name: "Quomeda", skills: ["React.js", "Tailwind CSS", "Next.js", "JavaScript", "Git Version Control", "Amazon Web Services"], scene: Quomeda},
  {name: "CumulArt", skills: ["Android", "Java", "FastAPI", "Flask", "Firebase", "Git Version Control", "Amazon Web Services"], scene: Cumulart},
  {name: "Iberis", skills: ["Android", "Java", "FastAPI", "Flask", "Firebase", "Git Version Control", "Amazon Web Services"], scene: Iberis },
  {name: "Web Application Firewall", skills: ["PfSense", "Snort", "VirtualBox"], scene: FireWall},
]

export const skills: Skill[] = [
  { name: 'Android', projects: ["Advanced Programming TBS Course","CumulArt Mobile App"],  icon: 'icons/android.svg' },
  { name: 'Amazon Web Services', projects: ["Quomeda Dashboard","CumulArt Mobile App"],  icon: 'icons/aws.svg' },
  { name: 'Blender', projects: ["Youtube 3d Animations", "Freelance 3D Modeling & Animation"], icon: 'icons/blender.svg' },
  { name: 'C', projects: ["Basics of Programming TBS Course"], icon: 'icons/c.svg' },
  { name: 'C++', projects: ["Basics of Programming TBS Course", "Unreal Engine Programming"], icon: 'icons/cpp.svg' },
  { name: 'C#', projects: ["Unity KTANE Switches Puzzles", "Unity Games"], icon: 'icons/csharp.svg' },
  { name: 'CSS', projects: ["Basics of Programming TBS Course"] , icon: 'icons/css.svg' },
  { name: 'FastAPI', projects: ["Web Services TBS Course", "CumulArt Mobile App"], icon: 'icons/fastapi.svg' },
  { name: 'Firebase', projects: ["CumulArt Mobile App"], icon: 'icons/firebase.svg' },
  { name: 'Flask', projects: ["Web Services TBS Course", "CumulArt Mobile App"], icon: 'icons/flask.svg' },
  { name: 'Git Version Control', projects: ["Quomeda Dashboard","CumulArt Mobile App" ,"Portfolio Website", "Web Services TBS Course"], icon: 'icons/git.svg' },
  { name: 'HTML', projects: ["Quomeda Dashboard","CumulArt Mobile App" ,"Portfolio Website"],  icon: 'icons/html.svg' },
  { name: 'Java',projects: ["Java Programming TBS Course", "Advanced Programming TBS Course", "Portfolio Website"],  icon: 'icons/java.svg' },
  { name: 'JavaScript', projects: ["Web Services TBS Course", "Quomeda Dashboard", "CumulArt Mobile App","Portfolio Website"], icon: 'icons/javascript.svg' },
  { name: 'Next.js',projects:["Web Development TBS Course"], icon: 'icons/next-js.svg' },
  { name: 'PHP', projects:["Web Development TBS Course"], icon: 'icons/php.svg' },
  { name: 'Python', projects: ["Python Programming TBS Course","Web Services TBS Course" ,"Business Intelligence & DBMS TBS Course"], icon: 'icons/python.svg' },
  { name: 'React.js', projects: ["Quomeda Dashboard","CumulArt Mobile App" ,"Portfolio Website"], icon: 'icons/react.svg' },
  { name: 'Tailwind CSS', projects: ["Quomeda Dashboard", "Portfolio Website"], icon: 'icons/tailwind-css.svg' },
  { name: 'TypeScript', projects: ["Web Services TBS Course", "Portfolio Website"], icon: 'icons/typescript.svg' },
  { name: 'Unity Engine', projects: ["Unity KTANE Switches Puzzles", "Unity Games"], icon: 'icons/unity.svg' },
  { name: 'Unreal Engine', projects: ["Unreal Engine Games"], icon: 'icons/unreal.svg' }
];