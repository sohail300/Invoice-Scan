import { InvoiceResult } from "@/interfaces/displayResult";

export const DisplayResult = (result: InvoiceResult | null) => {
  if (!result) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Extracted Information</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Customer Details
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {Object.entries(result["Customer Details"]).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt className="text-sm font-medium text-gray-500">{key}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Products
          </h3>
        </div>
        <div className="border-t border-gray-200">
          {result.Products.map((product, index) => (
            <dl key={index}>
              {Object.entries(product).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt className="text-sm font-medium text-gray-500">{key}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          ))}
        </div>
      </div>
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Total Amount
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Total</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {result["Total Amount"]}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
