"use client";

import { motion } from "framer-motion";

const technologies = [
    "Next.js",
    "FastAPI",
    "Groq",
    "OpenAlex",
    "ChromaDB",
];

export default function PoweredBy() {
    return (
        <section
            className="
                relative
                py-28
                px-6
                overflow-hidden
            "
        >
            {/* Background Glow */}

            <div
                className="
                    absolute
                    inset-0
                    -z-10
                    bg-[radial-gradient(circle_at_center,rgba(212,20,90,0.08),transparent_70%)]
                "
            />

            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <p className="
                        uppercase
                        tracking-[0.3em]
                        text-sm
                        text-[#D4145A]
                        mb-4
                    ">
                        Built With
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        mb-6
                    ">
                        Powered by Modern AI Infrastructure
                    </h2>

                    <p className="
                        max-w-2xl
                        mx-auto
                        text-zinc-400
                        text-lg
                    ">
                        Combining state-of-the-art retrieval,
                        reasoning, and language technologies
                        to deliver literature-grounded novelty
                        intelligence.
                    </p>

                </motion.div>

                <div
                    className="
                        flex
                        flex-wrap
                        justify-center
                        gap-5
                    "
                >

                    {technologies.map((tech, index) => (

                        <motion.div
                            key={tech}
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.05,
                            }}
                            whileHover={{
                                y: -4,
                            }}
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                px-6
                                py-3
                                text-sm
                                font-medium
                                hover:border-[#D4145A]/40
                                hover:bg-[#D4145A]/5
                                transition-all
                            "
                        >
                            {tech}
                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}