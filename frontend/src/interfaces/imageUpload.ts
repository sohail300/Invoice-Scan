import { Dispatch, SetStateAction } from "react";

export interface ImageUploaderProps {
  setImageFile: Dispatch<SetStateAction<File | null>>;
  imageFile: File | null;
  setFile: Dispatch<SetStateAction<string | null>>;
  file: string | null;
  setResult: Dispatch<SetStateAction<any | null>>;
  setError: Dispatch<SetStateAction<string | null>>;
}
