"use client";
import Carousel from "@/components/carousel";
import HomeScene from "@/components/scenes/intro_scene";
import SkillBubbleScene from "@/components/scenes/skills_scene";
import 'keen-slider/keen-slider.min.css'
import { Variants, motion, useInView} from "framer-motion"
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Loader } from "@react-three/drei";
import { SVG3DModel } from "@/components/models/loader";

export default function Home() {
  return (
    <main className="">
      <HomeSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

const textVariants: Variants = {
  hidden:{scale: 0, rotate:180, opacity: 0},
  visible:{scale: 1, rotate: 0 , opacity: 1}
}

function HomeSection() {
  const ref = useRef<HTMLHtmlElement>(null)
  const inView = useInView(ref)
  return (
    <section ref={ref} id="home" className="mt-20 lg:mt-10" >
      <div className="flex-1 text-left ml-10 md:ml-16">
        <motion.h2
          variants={{textVariants}}
          animate={inView ? "visible" : "hidden"}
          whileHover={{scale: 1.2, transition: {delay: 0}}}
          transition={{delay: .5}}
          style={{transformOrigin:"left bottom"}}
         className=" font-bold mb-4">I am {" "} 
         <span className="text-primary-500">Rayen Nasraoui</span> </motion.h2>
        <motion.h3
          variants={textVariants}
          whileHover={{scale: 1.2, transition: {delay: 0}}}
          transition={{delay: .7}}
          style={{transformOrigin:"left bottom"}}
          animate={inView ? "visible" : "hidden"}
          className="text-secondary-500 font-bold">
          Software Fantasist
        </motion.h3>

        <motion.h3
          variants={textVariants}
          whileHover={{scale: 1.2, transition: {delay: 0}}}
          transition={{delay: 1}}
          style={{transformOrigin:"left bottom"}}
          animate={inView ? "visible" : "hidden"}
          className="font-bold">
          & {" "} 
         <span className="text-accent-500">Dev Wizard</span> 
        </motion.h3>
        <motion.p
          className="mt-10 pr-20 lg:p-auto"
        >
          I&apos;m a software engineer based in Tunisia, I specialize in building
          & designing exceptional digital experiences. 
          Currently, I&apos;m focused on my studies and looking for an end of studies internship.
          Hopefully, I&apos;ll be graduating in 2024. and will look for job opportunities or a master&apos;s degree.
        </motion.p>
        <motion.p
          className="mt-10 pr-20 lg:p-auto"
        >
          Click on the bubble in the character i made to see some cool animations.
        </motion.p>
      </div>
      <div className="min-h-0 min-w-0 h-[100vw] w-[100vw] md:h-screen lg:w-1/2">
        <HomeScene />
      </div>
    </section>
  );
}

function WorkSection() {
  return(
    // make them stack on top of each other on mobile and pc
    <section id="projects" className="flex flex-col items-center justify-center h-screen mt-8">
      <h2 className="text-accent-500 font-bold">
        Projects & Work
      </h2>
      <Carousel/>
    </section>
  )
}

function SkillsSection() {
  return(
    <>
      <section id="skills" className="mt-20 flex flex-col">
        <h2 className="text-accent-500 font-bold center">
          Skills & Tools
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full min-h-screen ">
          <SkillBubbleScene />
        </div>
      </section>
    </>
  )
}

const socialContacts = [
  { name: 'GitHub', url: 'https://github.com/r4y-r4y', path:'/icons/github.svg' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/rayen-nasraoui-603b22203/', path:'/icons/linkedin.svg' },
  { name: 'Email', url: 'mailto:rayen159nasraoui@outlook.com', path:'/icons/mail.svg' },
  { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~015c72f4584bb9f5a0', path:'/icons/upwork.svg' },
];


function ContactSection() {
  const ref = useRef<HTMLDivElement>(null!)
  const inView = useInView(ref)
  return (
    <section ref={ref} id="contact" className="flex-col sm:mt-0 mt-20 p-4">
      <h2 className="text-accent-500 font-bold mb-4">Social Contacts</h2>
      <p className="mb-8">You can find me on these platforms:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {socialContacts.map((contact, index) => (
          <motion.div
            key={index}
            className="p-4 bg-accent-400 rounded hover:bg-primary-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={contact.url} className="flex flex-col items-center justify-center h-full text-white">
              {inView ? <Canvas>
                <Suspense fallback={null}>
                  <FloatingIcon path={contact.path} />
                </Suspense>
              </Canvas>: null}
              <span className="ml-2">{contact.name}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



function FloatingIcon({path}:{path:string}){

  return(
    <Float speed={3} floatIntensity={3}>
      <mesh>
        <SVG3DModel path={path} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Float>
  )
}

// <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//   <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//     Get started by editing&nbsp;
//     <code className="font-mono font-bold">src/app/page.tsx</code>
//   </p>
//   <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//     <a
//       className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//       href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       By{' '}
//       <Image
//         src="/vercel.svg"
//         alt="Vercel Logo"
//         className="dark:invert"
//         width={100}
//         height={24}
//         priority
//       />
//     </a>
//   </div>
// </div>

// <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//   <Image
//     className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//     src="/next.svg"
//     alt="Next.js Logo"
//     width={180}
//     height={37}
//     priority
//   />
// </div>

// <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//   <a
//     href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <h2 className={`mb-3 text-2xl font-semibold`}>
//       Docs{' '}
//       <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//         -&gt;
//       </span>
//     </h2>
//     <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//       Find in-depth information about Next.js features and API.
//     </p>
//   </a>

//   <a
//     href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <h2 className={`mb-3 text-2xl font-semibold`}>
//       Learn{' '}
//       <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//         -&gt;
//       </span>
//     </h2>
//     <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//       Learn about Next.js in an interactive course with&nbsp;quizzes!
//     </p>
//   </a>

//   <a
//     href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <h2 className={`mb-3 text-2xl font-semibold`}>
//       Templates{' '}
//       <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//         -&gt;
//       </span>
//     </h2>
//     <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//       Explore the Next.js 13 playground.
//     </p>
//   </a>

//   <a
//     href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <h2 className={`mb-3 text-2xl font-semibold`}>
//       Deploy{' '}
//       <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//         -&gt;
//       </span>
//     </h2>
//     <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//       Instantly deploy your Next.js site to a shareable URL with Vercel.
//     </p>
//   </a>
// </div>
