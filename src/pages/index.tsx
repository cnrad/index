import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { ProjectCard } from "../components/ProjectCard";
import { projectList, Project } from "../projects";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>*.cnrad.dev index</title>
            </Head>
            <motion.div
                className="w-[100vw] h-[100vh] flex flex-col items-center justify-start"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.25, ease: [0, 0.8, 0.6, 1] }}
            >
                <div className="w-[90vw] md:w-[85vw] lg:w-[75vw] h-auto flex flex-col items-start justify-start">
                    <div
                        className="ml-4 pt-24 pb-5 border-b-[3px] border-gray-700 mb-5"
                        style={{ width: "calc(100% - 2rem)" }}
                    >
                        <h1 className="font-bold text-4xl sm:text-5xl text-zinc-100 mb-2">index.cnrad.dev</h1>
                        <h2 className="text-xl text-gray-400">All of my one-letter subdomain projects to date.</h2>
                    </div>

                    <motion.div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
                        {projectList.map((p: Project) => {
                            return <ProjectCard project={p} />;
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default Home;
