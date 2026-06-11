export default async function ReportPage(
    {
        params
    }: {
        params: Promise<{
            paperId: string
        }>
    }
) {

    const {
        paperId
    } = await params

    return (

        <main className="p-8">

            <h1 className="text-3xl font-bold">

                Report

            </h1>

            <p className="mt-4">

                Paper ID:

                {" "}

                {paperId}

            </p>

        </main>
    )
}