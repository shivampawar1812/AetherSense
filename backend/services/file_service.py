import os
import uuid

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

def save_pdf(file):
    paper_id = str(uuid.uuid4())[:8]

    filename = file.filename

    save_path = os.path.join(
        UPLOAD_DIR,
        f"{paper_id}_{filename}"
    )

    with open(save_path, "wb") as buffer:
        buffer.write(file.file.read())

    return {
        "paper_id": paper_id,
        "filename": filename,
        "path": save_path
    }