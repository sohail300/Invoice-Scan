export interface Product {
  Description: string;
  HSN: string;
  Rate: string;
  Quantity: string;
  "Total Amount": string;
}

export interface CustomerDetails {
  Name: string;
  Address: string;
  Phone: string;
  Email: string;
}

export interface InvoiceResult {
  "Customer Details": CustomerDetails;
  Products: Product[];
  "Total Amount": string;
}
