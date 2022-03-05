import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { Project } from "../projects";

export function ProjectCard({ project, ...props }: { project: Project; props?: any }) {
    const linkExists = project.github || project.link;

    return (
        <motion.div
            className="px-6 py-6 text-white bg-black flex flex-col items-start justify-start m-4 border-[1px] rounded-md border-zinc-800"
            style={{ boxShadow: "0 15px 30px -30px rgba(74, 158, 255, 0.4)" }}
            whileHover={{ boxShadow: "0 10px 25px -20px rgba(74, 158, 255, 0.75)" }}
            {...props}
        >
            <p className="text-zinc-50 text-[1.5rem] mb-1 flex items-center">
                <span className="font-black text-white">{project.letter}</span>.cnrad.dev
                <a href={`https://${project.letter}.cnrad.dev`} target="_blank" className="flex items-center">
                    <ExternalLinkIcon
                        width={20}
                        height={20}
                        className="ml-2 text-gray-500 hover:text-white transition duration-150"
                    />
                </a>
            </p>

            <p className="text-zinc-400 mb-4">{project.description}</p>

            <motion.button
                className="mt-auto px-4 py-2 rounded-md text-sm font-semibold text-zinc-100"
                style={{ background: "rgba(39, 39, 42, 0.5)" }}
                whileHover={{
                    background: "rgba(39, 39, 42, 1)",
                    cursor: linkExists ? "pointer" : "not-allowed",
                }}
                disabled={!linkExists}
            >
                <a
                    href={project.github ?? project.link}
                    className="flex flex-row items-center justify-center"
                    target="_blank"
                >
                    View {project.github ? "on GitHub" : "Page"}
                    <ExternalLinkIcon width={18} height={18} className="ml-1 text-zinc-300" />
                </a>
            </motion.button>
        </motion.div>
    );
}
