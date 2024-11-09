import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import { nanoid } from "nanoid";
import { DateValueType } from "react-tailwindcss-datepicker";
import Preview from "./Preview";

export interface IItem {
  id: string;
  description: string;
  qty: number;
  price: number;
  isEdit: boolean;
}

export interface IDate {
  startDate: Date | string;
  endDate?: Date | string | null;
}

const blankItem: IItem = {
  id: nanoid(4),
  description: "",
  qty: 1,
  price: 0,
  isEdit: true,
};

function App() {
  const sp = new URLSearchParams(window.location.search);
  const [invoiceType] = useState(sp.get("type"));
  const [isForm, showForm] = useState(true);
  const [partyName, setPartyName] = useState("");
  const [date, setDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [items, setItems] = useState([blankItem]);
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    if (invoiceType) {
      switch (invoiceType) {
        case "mac":
          document.title = "Invoice:Maulik Account Consultancy";
          break;
        case "mandm":
          document.title = "Invoice:M&M Candles";
          break;
        default:
          document.title = "Invoice:CA V S Sompura & Associates";
          break;
      }
    } else {
      document.title = "Invoice"; // Default title if no 'type' is in the URL
    }
  }, [invoiceType]);

  const handleValueChange = (newDate: DateValueType) => {
    setDate(newDate);
  };

  const insertItem = () => {
    if (
      items[items.length - 1].description &&
      items[items.length - 1].qty &&
      items[items.length - 1].price
    ) {
      setItems([...items, { ...blankItem, id: nanoid(4) }]);
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleEdit = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isEdit: !item.isEdit } : item
      )
    );
  };

  const handleChangeItem = (
    id: string,
    field: keyof IItem,
    value: string | number
  ) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const resetForm = () => {
    setPartyName("");
    setDate({ startDate: null, endDate: null });
    setItems([blankItem]);
    setRemarks("");
    showForm(true);
  };

  return (
    <div className="m-4 border p-4 h-screen">
      <div className="mx-auto max-w-4xl pb-2 border-b">
        {invoiceType === "mac" ? (
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <h1 className="text-left text-4xl font-bold leading-7 text-cyan-800">
                Maulik Account Consultancy
              </h1>
            </div>
            <div className="flex flex-col items-end justify-end">
              <h3 className="text-gray-800 text-right">
                <a href="tel:9427753863">+91 9427753863</a>
              </h3>
              <h3 className="text-gray-800 text-right">
                <a href="mailto:sudhirsompura90@gmail.com">
                  sudhirsompura90@gmail.com
                </a>
              </h3>
            </div>
          </div>
        ) : invoiceType === "mandm" ? (
          <div className="py-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img src="/MMlogo.png" className="h-16 w-16" alt="M&M Logo" />
              <h1 className="font-script text-left text-4xl font-bold leading-7 text-cyan-800">
                M&M Candles
              </h1>
            </div>
            <div className="flex flex-col items-end justify-end">
              <h3 className="text-gray-800 text-right">
                <a href="tel:7802995885">+91 7990089695</a>
              </h3>
              <h3 className="text-gray-800 text-right">
                <a href="mailto:info@mandmcandles.com">info@mandmcandles.com</a>
              </h3>
            </div>
          </div>
        ) : (
          <div className="py-4 flex justify-between items-center">
            <div className="flex gap-2">
              <img src="/CALogo.png" className="h-16 w-20" alt="CA Logo" />
              <h1 className="text-left text-3xl font-bold leading-7 text-cyan-800">
                V S Sompura & Associates
              </h1>
            </div>
            <div className="flex flex-col items-end justify-end">
              <h3 className="text-gray-800 text-right">
                <a href="tel:7802995885">+91 780 299 5885</a>
              </h3>
              <h3 className="text-gray-800 text-right">
                <a href="mailto:vidhi.sompura@yahoo.com">
                  vidhi.sompura@yahoo.com
                </a>
              </h3>
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-4xl">
        {isForm ? (
          <Form
            partyName={partyName}
            date={date}
            items={items}
            remarks={remarks}
            setPartyName={setPartyName}
            setRemarks={setRemarks}
            handleValueChange={handleValueChange}
            insertItem={insertItem}
            removeItem={removeItem}
            toggleEdit={toggleEdit}
            handleChangeItem={handleChangeItem}
            showForm={showForm}
          />
        ) : (
          <div>
            <Preview
              partyName={partyName}
              date={date}
              items={items}
              remarks={remarks}
              showForm={showForm}
              type={invoiceType}
            />
            <div className="flex gap-4 py-4 print:hidden">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => showForm(true)}
              >
                Back to Form
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={resetForm}
              >
                New Invoice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
