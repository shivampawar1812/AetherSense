import chromadb

client = chromadb.PersistentClient(
    path="chromadb"
)

collection = client.get_or_create_collection(
    name="papers"
)

def add_paper(
    paper_id,
    title,
    abstract,
    embedding
):
    collection.add(
        ids=[paper_id],

        documents=[
            f"{title}\n{abstract}"
        ],

        embeddings=[embedding],

        metadatas=[
            {
                "title": title
            }
        ]
    )


def search_similar(
    embedding,
    n_results=5
):
    results = collection.query(
        query_embeddings=[embedding],
        n_results=n_results
    )

    response = []

    for metadata, distance in zip(
        results["metadatas"][0],
        results["distances"][0]
):
        response.append({
            "title": metadata["title"],
            "distance": distance
    })

    return response