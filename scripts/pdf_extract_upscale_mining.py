from pathlib import Path

from pypdf import PdfReader


def extract_pdf_text(pdf_path: str, output_path: str) -> None:
    pdf_file = Path(pdf_path)
    if not pdf_file.exists():
        raise FileNotFoundError(f"PDF not found: {pdf_file}")

    reader = PdfReader(str(pdf_file))
    print(f"Pages: {len(reader.pages)}")

    text_parts = []
    for i, page in enumerate(reader.pages):
        page_text = page.extract_text() or ""
        text_parts.append(f"\n\n===== PAGE {i+1} =====\n\n")
        text_parts.append(page_text)

    output_file = Path(output_path)
    output_file.write_text("".join(text_parts), encoding="utf-8")
    print(f"Text extracted to {output_file}")


if __name__ == "__main__":
    extract_pdf_text("UpscaleMining2026.pdf", "UpscaleMining2026_extracted.txt")
