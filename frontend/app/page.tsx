import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import PoweredBy from "@/components/PoweredBy";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-black
                text-white
            "
        >

            {/* ===== Premium Background ===== */}

            <div
                className="
                    absolute
                    inset-0
                    -z-10
                    overflow-hidden
                "
            >

                {/* Scientific Grid */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.015]
                        bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                        bg-[size:80px_80px]
                    "
                />

                {/* Hero Glow */}

                <div
                    className="
                        absolute
                        -top-64
                        -left-48
                        w-[900px]
                        h-[900px]
                        rounded-full
                        bg-[#D4145A]/18
                        blur-[220px]
                        animate-[pulse_8s_ease-in-out_infinite]
                    "
                />

                {/* Center Glow */}

                <div
                    className="
                        absolute
                        top-[25%]
                        left-1/2
                        -translate-x-1/2
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-[#D4145A]/8
                        blur-[180px]
                    "
                />

                {/* Right Ambient Glow */}

                <div
                    className="
                        absolute
                        top-[40%]
                        -right-48
                        w-[600px]
                        h-[600px]
                        rounded-full
                        bg-[#D4145A]/10
                        blur-[200px]
                    "
                />

                {/* Bottom Glow */}

                <div
                    className="
                        absolute
                        bottom-[-200px]
                        left-1/3
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-[#D4145A]/6
                        blur-[150px]
                    "
                />

            </div>

            {/* ===== Content ===== */}

            <Navbar />

            <Hero />

            <Features />

            <HowItWorks />

            <PoweredBy />

            <Footer />

        </main>
    );
}