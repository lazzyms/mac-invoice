/* eslint-disable @typescript-eslint/no-explicit-any */
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { IItem } from "./App";

interface IForm {
  partyName: string;
  date: DateValueType;
  items: IItem[];
  remarks: string;
  setPartyName: any;
  setRemarks: any;
  handleValueChange: any;
  insertItem: any;
  removeItem: any;
  toggleEdit: any;
  handleChangeItem: any;
  showForm: any;
}
export default function Form({
  partyName,
  date,
  items,
  remarks,
  setPartyName,
  setRemarks,
  handleValueChange,
  insertItem,
  removeItem,
  toggleEdit,
  handleChangeItem,
  showForm,
}: IForm) {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Invoice Date
              </label>
              <Datepicker
                useRange={false}
                asSingle={true}
                value={date}
                displayFormat={"DD/MM/YYYY"}
                onChange={handleValueChange}
                classNames={{
                  input: () => "border rounded-lg shadow p-2 text-sm",
                  container: () => "flex items-center justify-center",
                  toggleButton: () => "p-2",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="party-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Party name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="party-name"
                  id="party-name"
                  autoComplete="party-name"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPartyName(e.target.value)}
                  defaultValue={partyName}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-6">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="divide-x">
                <th
                  key={`label-desc`}
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Name/Description
                </th>
                <th
                  key={`label-qty`}
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  QTY
                </th>
                <th
                  key={`label-price`}
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Price (₹)
                </th>
                <th
                  key={`label-price`}
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Total (₹)
                </th>
                <th
                  key={`label-price`}
                  scope="col"
                  className="relative py-3.5 pl-3 pr-4 sm:pr-"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item, i) => (
                <tr key={item.id} className="divide-x">
                  <td
                    key={`${item.id}-desc`}
                    className="whitespace-nowrap p-4 text-sm font-medium text-gray-900"
                  >
                    {item.isEdit ? (
                      <input
                        type="text"
                        name={`${item.id}-desc-input`}
                        id={`${item.id}-desc-input`}
                        autoComplete="desc"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) =>
                          handleChangeItem(
                            item.id,
                            "description",
                            e.target.value
                          )
                        }
                        value={item.description}
                        placeholder="Add name or description"
                      />
                    ) : (
                      <label
                        htmlFor="nameLabel"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {item.description}
                      </label>
                    )}
                  </td>
                  <td
                    key={`${item.id}-qty`}
                    className="whitespace-nowrap p-4 text-sm font-medium text-gray-900"
                  >
                    {item.isEdit ? (
                      <input
                        type="number"
                        name={`${item.id}-qty-input`}
                        id={`${item.id}-qty-input`}
                        autoComplete="desc"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) =>
                          handleChangeItem(item.id, "qty", e.target.value)
                        }
                        value={item.qty}
                        placeholder="Add item Qty"
                      />
                    ) : (
                      <label
                        htmlFor="qtyLabel"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {item.qty}
                      </label>
                    )}
                  </td>
                  <td
                    key={`${item.id}-price`}
                    className="whitespace-nowrap p-4 text-sm font-medium text-gray-900"
                  >
                    {item.isEdit ? (
                      <input
                        type="number"
                        name={`${item.id}-price-input`}
                        id={`${item.id}-price-input`}
                        autoComplete="price"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) =>
                          handleChangeItem(item.id, "price", e.target.value)
                        }
                        value={item.price}
                        placeholder="Add item unit price ₹"
                      />
                    ) : (
                      <label
                        htmlFor="priceLabel"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {item.price}
                      </label>
                    )}
                  </td>
                  <td
                    key={`${item.id}-price`}
                    className="whitespace-nowrap p-4 text-sm font-medium text-gray-900"
                  >
                    ₹{item.price * item.qty}
                  </td>
                  <td
                    key={`${item.id}-price`}
                    className="whitespace-nowrap text-sm font-medium text-gray-900 sm:pl-0"
                  >
                    <div className="flex gap-1 p-4">
                      {item.isEdit ? (
                        <button
                          type="button"
                          className="rounded-full  px-3.5 py-2 text-sm font-semibold text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-50"
                          onClick={() => toggleEdit(item.id)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="rounded-full  px-3.5 py-2 text-sm font-semibold text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-50"
                          onClick={() => toggleEdit(item.id)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        type="button"
                        className="rounded-full  px-3.5 py-2 text-sm font-semibold text-red-900 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50"
                        onClick={() => removeItem(item.id)}
                      >
                        Delete
                      </button>
                      {i == items.length - 1 && (
                        <button
                          type="button"
                          className="rounded-full  px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={insertItem}
                        >
                          + Add
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={3}
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
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
        <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Remarks:
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => showForm(false)}
        >
          Preview
        </button>
      </div>
    </form>
  );
}
