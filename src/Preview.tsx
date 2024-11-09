/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateValueType } from "react-tailwindcss-datepicker";
import { IItem } from "./App";
import { customAlphabet } from "nanoid";

interface IPreview {
  partyName: string;
  date: DateValueType;
  items: IItem[];
  remarks: string;
  showForm: any;
  type?: string | null;
}
const Preview = ({ date, partyName, items, remarks, type }: IPreview) => {
  return (
    <>
      <div className="mx-auto max-w-5xl p-2">
        <div className="flex justify-between gap-4 mt-2 py-2 text-sm leading-6">
          <div className="flex gap-1">
            <div className="text-gray-500">Invoice No:</div>
            <div className="text-gray-700">
              <span>
                {customAlphabet("QWERTYUIOPASDFGHJKLZXCVBNM1234567890", 6)()}
              </span>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="text-gray-500">Invoice Date:</div>
            <div className="text-gray-700">
              <span>{date?.startDate?.toString()}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="text-gray-500">Name:</div>
          <div className="font-medium text-gray-900 uppercase">{partyName}</div>
        </div>
        <div className="mt-2">
          <table className="min-w-full border divide-y divide-gray-300">
            <thead>
              <tr className="divide-x">
                <th
                  key={`label-desc`}
                  scope="col"
                  className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Name/Description
                </th>
                <th
                  key={`label-qty`}
                  scope="col"
                  className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Qty
                </th>
                <th
                  key={`label-price`}
                  className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Price (₹)
                </th>
                <th
                  key={`label-price`}
                  scope="col"
                  className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Total (₹)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id} className="divide-x">
                  <td
                    key={`${item.id}-desc`}
                    className="uppercase whitespace-nowrap p-4 text-sm font-medium text-gray-900"
                  >
                    {item.description}
                  </td>
                  <td
                    key={`${item.id}-qty`}
                    className="whitespace-nowrap p-4 text-sm font-medium text-gray-900"
                  >
                    {item.qty}
                  </td>
                  <td
                    key={`${item.id}-price`}
                    className="whitespace-nowrap p-4 text-sm font-medium text-gray-900"
                  >
                    {item.price}
                  </td>
                  <td
                    key={`label-price`}
                    className="whitespace-nowrap p-4 text-sm font-medium text-gray-900"
                  >
                    ₹{item.price * item.qty}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="divide-x">
                <td
                  colSpan={3}
                  className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Grand Total
                </td>
                <td
                  colSpan={2}
                  className="whitespace-nowrap p-4 text-sm font-medium text-gray-900"
                >
                  ₹{items.reduce((acc, curr) => acc + curr.price * curr.qty, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {remarks && (
          <div className="mt-2 border-t flex justify-between gap-x-4 py-2">
            <dt className="text-gray-500">Remarks:</dt>
            <dd className="flex items-start gap-x-2">
              <div className="font-medium text-gray-900">{remarks}</div>
            </dd>
          </div>
        )}
        <div className="page-break-inside-avoid">
          <div className="mt-6 border-t gap-x-4 py-2">
            {type === "mandm" ? (
              <>
                <h4 className="heading-4 underline uppercase">
                  Payment Details
                </h4>
                <img src="/M&MQR.jpeg" className="w-40 h-50 rounded-lg" />
              </>
            ) : (
              <>
                <h4 className="heading-4 underline uppercase">
                  Banking Details
                </h4>
                <div className="text-gray-900">
                  <div>
                    Bank: <b>Axis Bank</b>
                  </div>
                  <div>
                    Account Name: <b>SOMPURA VIDHI SUDHIRKUMAR</b>
                  </div>
                  <div>
                    Account Number: <b>923010029269580</b>
                  </div>
                  <div>
                    IFSC Code: <b>UTIB0004228</b>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mt-4 border-t flex justify-center gap-x-4 py-3">
            <div className="text-center font-medium text-gray-500">
              This is computer generated invoice, no need of signature.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
