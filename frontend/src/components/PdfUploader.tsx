import { FileText, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { api } from "@/utils/config";
import { PdfUploaderProps } from "@/interfaces/pdfUpload";
import { useState } from "react";

export const PdfUploader = ({
  setPdfFile,
  pdfFile,
  setFile,
  file,
  setResult,
  setError,
}: PdfUploaderProps) => {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleFileUpload = async () => {
    try {
      setIsSubmiting(true);
      const formData = new FormData();
      formData.append("pdf", pdfFile as File);

      const response = await api.post("/scan/pdf", formData);
      console.log(response.data);

      const textData = response.data.textData;

      setResult(textData);
      setError(null);
    } catch (err) {
      setError("Failed to process the invoice. Please try again.");
      setResult(null);
      console.log(err);
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="pdf-upload"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FileText className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">PDF</p>
          </div>
          <input
            id="pdf-upload"
            type="file"
            className="hidden"
            accept=".pdf"
            onChange={(e) => {
              if (!e.target.files) {
                return;
              }
              const file = e.target.files[0];
              setPdfFile(file);
              setFile(file.name);
            }}
          />
        </label>
      </div>
      {file && (
        <p className="mt-2 text-sm text-gray-500">Selected file: {file}</p>
      )}

      <div>
        <Button
          onClick={() => {
            handleFileUpload();
          }}
          className=" w-full m-auto mt-2 flex flex-row"
          disabled={isSubmiting}
        >
          {isSubmiting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" color="#fff" />
          )}
          <span>Scan PDF</span>
        </Button>
      </div>
    </div>
  );
};
