"use client";

import { motion } from "framer-motion";
import {
    Sparkles,
    BookOpen,
    Search,
    Lightbulb,
} from "lucide-react";

const features = [
    {
        icon: Sparkles,
        title: "Novelty Analysis",
        description:
            "Quantify the originality of your research using AI-powered reasoning.",
    },
    {
        icon: BookOpen,
        title: "Related Literature",
        description:
            "Discover the most relevant prior work in your domain.",
    },
    {
        icon: Search,
        title: "Research Gaps",
        description:
            "Identify unexplored opportunities and limitations.",
    },
    {
        icon: Lightbulb,
        title: "Future Directions",
        description:
            "Receive AI-assisted suggestions for next steps.",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="py-32 px-6"
        >
            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
                        text-4xl
                        font-bold
                        text-center
                        mb-16
                    "
                >
                    Why Researchers Choose AetherSense
                </motion.h2>

                <div className="
                    grid
                    md:grid-cols-2
                    gap-8
                ">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                }}
                                className="
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-8
                                    hover:border-[#D4145A]/40
                                    hover:-translate-y-2
                                    transition-all
                                    duration-300
                                "
                            >
                                <Icon
                                    className="
                                        w-10
                                        h-10
                                        text-[#D4145A]
                                        mb-6
                                    "
                                />

                                <h3 className="
                                    text-2xl
                                    font-semibold
                                    mb-4
                                ">
                                    {feature.title}
                                </h3>

                                <p className="text-zinc-400">
                                    {feature.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}