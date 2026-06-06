from fastapi import APIRouter, UploadFile, File
from services.file_service import save_pdf

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)

@router.post("/")
async def upload_paper(
    file: UploadFile = File(...)
):
    result = save_pdf(file)

    return {
        "paper_id": result["paper_id"],
        "filename": result["filename"],
        "status": "uploaded"
    }