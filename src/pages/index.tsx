import type { NextPage } from "next";
import Head from "next/head";
import { ProjectCard } from "../components/ProjectCard";
import { projectList, Project } from "../projects";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>index</title>
            </Head>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-start">
                <div className="w-[90vw] md:w-[85vw] lg:w-[75vw] h-auto flex flex-col items-start justify-start">
                    <div className="ml-4 pt-24 pb-5 border-b-[3px] border-gray-700 mb-5">
                        <h1 className="font-bold text-5xl text-zinc-100 mb-2">index.cnrad.dev</h1>
                        <h2 className="text-xl text-gray-400">All of my one-letter subdomain projects to date.</h2>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
                        {projectList.map((p: Project) => {
                            return <ProjectCard project={p} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
