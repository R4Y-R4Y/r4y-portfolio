"use client";
import Carousel from "@/components/carousel";
import HomeScene from "@/components/scenes/intro_scene";
import SkillBubbleScene from "@/components/scenes/skills_scene";
import "keen-slider/keen-slider.min.css";
import { Variants, motion, useInView } from "framer-motion";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { SVG3DModel } from "@/components/models/loader";
import { Loader } from "@/components/loader";

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
  hidden: { scale: 0, rotate: 180, opacity: 0 },
  visible: { scale: 1, rotate: 0, opacity: 1 },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

function HomeSection() {
  const ref = useRef<HTMLHtmlElement>(null);
  const inView = useInView(ref);
  const buttonRef = useRef<HTMLDivElement>(null);
  const buttonInView = useInView(buttonRef);
  return (
    <section ref={ref} id="home" className="mt-20 lg:mt-10">
      <div className="flex-1 text-left ml-10 md:ml-16">
        <motion.h2
          variants={{ textVariants }}
          animate={inView ? "visible" : "hidden"}
          whileHover={{ scale: 1.2, transition: { delay: 0 } }}
          transition={{ delay: 0.5 }}
          style={{ transformOrigin: "left bottom" }}
          className=" font-bold mb-4"
        >
          I am <span className="text-primary-500">Rayen Nasraoui</span>{" "}
        </motion.h2>
        <motion.h3
          variants={textVariants}
          whileHover={{ scale: 1.2, transition: { delay: 0 } }}
          transition={{ delay: 0.7 }}
          style={{ transformOrigin: "left bottom" }}
          animate={inView ? "visible" : "hidden"}
          className="text-secondary-500 font-bold"
        >
          Software Fantasist
        </motion.h3>

        <motion.h3
          variants={textVariants}
          whileHover={{ scale: 1.2, transition: { delay: 0 } }}
          transition={{ delay: 1 }}
          style={{ transformOrigin: "left bottom" }}
          animate={inView ? "visible" : "hidden"}
          className="font-bold"
        >
          & <span className="text-accent-500">Dev Wizard</span>
        </motion.h3>
        <p className="mt-10 pr-20 lg:p-auto">
          I&apos;m a software engineer based in Tunisia, I specialize in
          building & designing exceptional digital experiences. Currently,
          I&apos;m focused on my studies and looking for an end of studies
          internship. Hopefully, I&apos;ll be graduating in 2024. and will look
          for job opportunities or a master&apos;s degree.
        </p>
        <p className="mt-10 pr-20 lg:p-auto">
          Click on the bubble in the character i made to see some cool
          animations.
        </p>
        <motion.div
          ref={buttonRef}
          variants={buttonVariants}
          className="p-4 w-[90%] self-center bg-accent-400 rounded hover:bg-primary-700 mt-8"
          initial={{ opacity: 0, y: -10 }}
          animate={buttonInView ? "visible" : "hidden"}
        >
          <a
            target="_blank"
            href={
              "https://drive.google.com/file/d/1kdnlRymd636K2zcjzHlpab9NpzNgyIcx/view?usp=drive_link"
            }
            className="flex flex-col items-center justify-center h-full text-white"
          >
            Download my CV here
          </a>
        </motion.div>
      </div>
      <div className="min-h-0 min-w-0 h-[100vw] w-[100vw] md:h-screen lg:w-1/2">
        <HomeScene />
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center h-screen mt-8"
    >
      <h2 className="text-accent-500 font-bold">Projects & Work</h2>
      <Carousel />
    </section>
  );
}

function SkillsSection() {
  return (
    <>
      <section id="skills" className="mt-20 flex flex-col">
        <h2 className="text-accent-500 font-bold center">Skills & Tools</h2>
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full min-h-screen ">
          <SkillBubbleScene />
        </div>
      </section>
    </>
  );
}

const socialContacts = [
  {
    name: "GitHub",
    url: "https://github.com/r4y-r4y",
    path: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rayen-nasraoui-603b22203/",
    path: "/icons/linkedin.svg",
  },
  {
    name: "Email",
    url: "mailto:rayen159nasraoui@outlook.com",
    path: "/icons/mail.svg",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~015c72f4584bb9f5a0",
    path: "/icons/upwork.svg",
  },
];

function ContactSection() {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref);
  return (
    <section ref={ref} id="contact" className="flex-col sm:mt-0 mt-20 p-4">
      <h2 className="text-accent-500 font-bold mb-4">Social Contacts</h2>
      <p className="mb-8">You can find me on these platforms:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {socialContacts.map((contact, index) => (
          <motion.div
            key={index}
            className="p-4 bg-accent-400 rounded hover:bg-primary-700"
            variants={buttonVariants}
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? "visible" : "hidden"}
          >
            <a
              target="_blank"
              href={contact.url}
              className="flex flex-col items-center justify-center h-full text-white"
            >
              {inView ? (
                <Canvas>
                  <Suspense fallback={<Loader />}>
                    <FloatingIcon path={contact.path} />
                  </Suspense>
                </Canvas>
              ) : null}
              <span className="ml-2">{contact.name}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FloatingIcon({ path }: { path: string }) {
  return (
    <Float speed={3} floatIntensity={3}>
      <mesh>
        <SVG3DModel path={path} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Float>
  );
}

