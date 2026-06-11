"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import {
    uploadPaper
} from "@/lib/api"

export default function UploadForm() {

    const router =
        useRouter()

    const [
        loading,
        setLoading
    ] = useState(false)

    async function handleUpload(
        e: React.ChangeEvent<HTMLInputElement>
    ) {

        const file =
            e.target.files?.[0]

        if (!file) return

        setLoading(true)

        try {

            const result =
                await uploadPaper(file)

            router.push(
                `/report/${result.paper_id}`
            )

        } catch (error) {

            console.error(error)

            alert(
                "Upload failed."
            )

        } finally {

            setLoading(false)
        }
    }

    return (

        <div className="mt-8">

            <input
                type="file"
                accept=".pdf"
                onChange={handleUpload}
            />

            {loading && (

                <p className="mt-4">
                    Uploading...
                </p>

            )}

        </div>
    )
}