import { Dispatch, SetStateAction } from "react";

export interface PdfUploaderProps {
  setPdfFile: Dispatch<SetStateAction<File | null>>;
  pdfFile: File | null;
  setFile: Dispatch<SetStateAction<string | null>>;
  file: string | null;
  setResult: Dispatch<SetStateAction<any | null>>;
  setError: Dispatch<SetStateAction<string | null>>;
}
