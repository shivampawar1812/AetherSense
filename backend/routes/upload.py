from fastapi import APIRouter, UploadFile, File

from services.file_service import save_pdf
from services.parser import extract_sections
from services.json_service import save_parsed_data
from services.embedding_service import generate_embedding
from services.chroma_service import add_paper

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)


@router.post("/")
async def upload_paper(
    file: UploadFile = File(...)
):
    saved = save_pdf(file)

    parsed = extract_sections(
        saved["path"]
    )

    save_parsed_data(
        saved["paper_id"],
        parsed
    )

    text_for_embedding = "\n".join(
    filter(
        None,
        [
            parsed.get("title", ""),
            parsed.get("abstract", ""),
            parsed.get("conclusion", "")
        ]
    )
    )

    embedding = generate_embedding(
    text_for_embedding
    )

    add_paper(
    paper_id=saved["paper_id"],
    title=parsed["title"],
    abstract=parsed["abstract"],
    embedding=embedding
    )
    
    return {
    "paper_id": saved["paper_id"],
    "filename": saved["filename"],
    "title": parsed["title"],
    "status": "indexed",
    "vectorized": True
}


