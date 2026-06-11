import UploadForm from "@/components/UploadForm";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6">

            <h1 className="text-5xl font-bold">
                AetherSense
            </h1>

            <p className="mt-4 text-gray-500 text-center max-w-xl">
                Upload a research paper and receive
                literature-grounded novelty analysis.
            </p>

            <UploadForm />

        </main>
    );
}