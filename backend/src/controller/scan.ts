import { Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import pdf from "pdf-parse";
import Tesseract, { ImageLike } from "tesseract.js";

dotenv.config();

export async function scanPDF(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: "PDF not uploaded!" });
    }

    const pdfFile = req.file;
    const pdfBuffer = pdfFile.buffer;

    const pdfText = (await pdf(pdfBuffer)).text;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    You are an expert in extracting information from invoices.
    Here is the invoice text:
    
    ${pdfText}
    
    Please extract the following details:
    - Customer Details
    - Products
    - Total Amount
    - just give specified data in object format so that it can be shown in the frontend in a consistent format.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    const cleanText = text.replace(/```json|```/g, "");

    const textData = JSON.parse(cleanText);

    return res.status(200).json({ textData });
  } catch (error) {
    console.log(error);
  }
}

export async function scanImage(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: "Image not uploaded!" });
    }

    const imageFile = req.file;
    console.log(imageFile);
    const imageBuffer = imageFile.buffer;

    const tesseractResult = await Tesseract.recognize(imageBuffer);

    const imageText = tesseractResult.data.text;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    You are an expert in extracting information from invoices.
    Here is the invoice text:

    ${imageText}

    Please extract the following details:
    - Customer Details
    - Products
    - Total Amount
    - just give specified data in object format so that it can be shown in the frontend in a consistent format.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    const cleanText = text.replace(/```json|```/g, "");

    const textData = JSON.parse(cleanText);

    return res.status(200).json({ textData });
    // return res.status(200).json({ msg: "Done" });
  } catch (error) {
    console.log(error);
  }
}
