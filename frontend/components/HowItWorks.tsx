"use client";

import { motion } from "framer-motion";
import {
    Upload,
    Database,
    Brain,
    FileText,
} from "lucide-react";

const steps = [
    {
        icon: Upload,
        title: "Upload PDF",
        description:
            "Securely upload your manuscript.",
    },
    {
        icon: Database,
        title: "Semantic Retrieval",
        description:
            "Retrieve related literature using embeddings.",
    },
    {
        icon: Brain,
        title: "LLM Reasoning",
        description:
            "Analyze novelty through AI reasoning.",
    },
    {
        icon: FileText,
        title: "Intelligence Report",
        description:
            "Receive actionable research insights.",
    },
];

export default function HowItWorks() {

    return (

        <section
            id="how"
            className="
                relative
                py-36
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
                    bg-[radial-gradient(circle_at_center,rgba(212,20,90,0.12),transparent_65%)]
                "
            />

            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
                        text-5xl
                        font-bold
                        text-center
                        mb-6
                    "
                >
                    How It Works
                </motion.h2>

                <p
                    className="
                        text-zinc-400
                        text-center
                        max-w-2xl
                        mx-auto
                        mb-24
                    "
                >
                    From manuscript upload to literature-grounded
                    novelty intelligence in minutes.
                </p>

                <div className="relative">

                    {/* Connecting Line */}

                    <div
                        className="
                            hidden lg:block
                            absolute
                            top-10
                            left-[12%]
                            right-[12%]
                            h-[2px]
                            bg-gradient-to-r
                            from-transparent
                            via-[#D4145A]/40
                            to-transparent
                        "
                    />

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            lg:grid-cols-4
                            gap-10
                        "
                    >

                        {steps.map((step, index) => {

                            const Icon = step.icon;

                            return (

                                <motion.div
                                    key={step.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.15,
                                    }}
                                    className="
                                        relative
                                        rounded-3xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        backdrop-blur-xl
                                        p-8
                                        text-center
                                        hover:border-[#D4145A]/50
                                        hover:-translate-y-2
                                        transition-all
                                        duration-300
                                    "
                                >

                                    <div
                                        className="
                                            w-20
                                            h-20
                                            rounded-2xl
                                            mx-auto
                                            mb-6
                                            flex
                                            items-center
                                            justify-center
                                            bg-[#D4145A]/10
                                            border
                                            border-[#D4145A]/30
                                        "
                                    >

                                        <Icon
                                            className="
                                                w-10
                                                h-10
                                                text-[#D4145A]
                                            "
                                        />

                                    </div>

                                    <h3
                                        className="
                                            text-2xl
                                            font-semibold
                                            mb-4
                                        "
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="
                                            text-zinc-400
                                            leading-relaxed
                                        "
                                    >
                                        {step.description}
                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>

    );
}