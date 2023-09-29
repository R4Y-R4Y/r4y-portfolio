import * as THREE from "three"

export type Skill = {
    name: string;
    description: string;
    icon: string;
}

export function fibonacciSphere(samples: number = 1000, radius: number = 1): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1); // golden angle in radians

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2; // y goes from 1 to -1
    const adjustedRadius = radius * Math.sqrt(1 - y * y); // Adjust radius based on y

    const theta = phi * i; // golden angle increment

    const x = Math.cos(theta) * adjustedRadius;
    const z = Math.sin(theta) * adjustedRadius;

    points.push(new THREE.Vector3(x, y * radius, z)); // Multiply y by radius to maintain sphere size
  }

  return points;
}

export type Job = {
    name: string;
    skills: Skill[];
}

export const jobs: Job[] = [

]

export const skills: Skill[] = [
  { name: 'Android', description: 'Android is an operating system for mobile devices, known for its versatility and widespread use in smartphone development. Developers use Java and Kotlin to create feature-rich Android applications.', icon: 'icons/android.svg' },
  { name: 'Amazon Web Services', description: 'AWS (Amazon Web Services) is a leading cloud computing platform that offers a wide range of services, including cloud storage, database management, and scalable computing resources. It\'s a go-to choice for businesses looking to deploy and manage their applications in the cloud.', icon: 'icons/aws.svg' },
  { name: 'Blender', description: 'Blender is a powerful open-source 3D modeling and animation software used by artists and animators to create stunning 3D graphics and animations for films, games, and simulations.', icon: 'icons/blender.svg' },
  { name: 'C', description: 'C is a foundational programming language known for its efficiency and use in system-level programming. It\'s often used to develop operating systems, embedded systems, and low-level software.', icon: 'icons/c.svg' },
  { name: 'C++', description: 'C++ is an extension of the C language that adds object-oriented features, making it suitable for a wide range of applications, including game development, desktop software, and system programming.', icon: 'icons/cpp.svg' },
  { name: 'C#', description: 'C# (pronounced "C sharp") is a versatile programming language developed by Microsoft, commonly used for developing Windows applications, games with Unity, and web applications with ASP.NET.', icon: 'icons/csharp.svg' },
  { name: 'CSS', description: 'CSS (Cascading Style Sheets) is a fundamental web technology that controls the presentation and styling of HTML elements. Web developers use CSS to design visually appealing and responsive websites.', icon: 'icons/css.svg' },
  { name: 'FastAPI', description: 'FastAPI is a Python web framework known for its speed and ease of use in building robust RESTful APIs. It\'s a popular choice for backend development in modern web applications.', icon: 'icons/fastapi.svg' },
  { name: 'Firebase', description: 'Firebase is a comprehensive platform by Google that offers various tools and services for building and managing web and mobile apps, including real-time databases, authentication, and hosting.', icon: 'icons/firebase.svg' },
  { name: 'Flask', description: 'Flask is a lightweight and flexible Python web framework ideal for building small to medium-sized web applications and APIs. It\'s known for its simplicity and minimalistic design.', icon: 'icons/flask.svg' },
  { name: 'Git Version Control', description: 'Git is a distributed version control system used by developers to track changes in source code, collaborate on projects, and manage code repositories efficiently.', icon: 'icons/git.svg' },
  { name: 'HTML Markup', description: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It defines the structure and content of web documents, including headings, paragraphs, links, and images.', icon: 'icons/html.svg' },
  { name: 'Java', description: 'Java is a widely-used, platform-independent language known for its portability and versatility. It\'s commonly used in enterprise software, Android app development, and web applications.', icon: 'icons/java.svg' },
  { name: 'JavaScript', description: 'JavaScript is a dynamic scripting language used in web development to create interactive and responsive web applications. It runs in web browsers and is a core technology of the web.', icon: 'icons/javascript.svg' },
  { name: 'Material-UI', description: 'Material-UI is a popular React component library that implements Google\'s Material Design principles, making it easy for developers to create aesthetically pleasing user interfaces.', icon: 'icons/material-ui.svg' },
  { name: 'Next.js', description: 'Next.js is a React framework that simplifies server-side rendering and routing for React applications, enhancing their performance and SEO capabilities.', icon: 'icons/next-js.svg' },
  { name: 'PHP', description: 'PHP is a server-side scripting language widely used for web development, enabling developers to create dynamic and interactive web applications.', icon: 'icons/php.svg' },
  { name: 'Python', description: 'Python is a versatile and beginner-friendly language used for web development, data analysis, artificial intelligence, and more. Its simplicity and readability make it highly popular.', icon: 'icons/python.svg' },
  { name: 'React.js', description: 'React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and is widely used in single-page applications.', icon: 'icons/react.svg' },
  { name: 'Tailwind CSS', description: 'Tailwind CSS is a utility-first CSS framework that simplifies styling by providing a set of pre-defined classes, making it easier to design responsive and customizable web interfaces.', icon: 'icons/tailwind-css.svg' },
  { name: 'TypeScript', description: 'TypeScript is a superset of JavaScript that adds static typing to the language, enhancing code quality and maintainability in large-scale JavaScript projects.', icon: 'icons/typescript.svg' },
  { name: 'Unity Engine', description: 'Unity is a cross-platform game engine used to develop video games for various platforms, including PC, consoles, and mobile devices. It offers a robust set of tools for game development and simulation.', icon: 'icons/unity.svg' },
  { name: 'Unreal Engine', description: "Unreal Engine is a powerful game engine developed by Epic Games, known for its stunning graphics and real-time 3D rendering capabilities. It's widely used in game development and virtual production.", icon: 'icons/unreal.svg' }
];