import { useState } from "react";
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

  const handleValueChange = (newDate: DateValueType) => {
    setDate(newDate);
  };

  const insertItem = () => {
    if (
      items[items.length - 1].description &&
      items[items.length - 1].qty &&
      items[items.length - 1].price
    ) {
      setItems([...items, blankItem]);
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleEdit = (id: string) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item = { ...item, isEdit: !item.isEdit };
        }
        return item;
      })
    );
  };

  const handleChangeItem = (
    id: string,
    field: string,
    value: string | number
  ) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item = { ...item, [field]: value };
        }
        return item;
      })
    );
  };
  return (
    <div className="m-4 border p-4 h-screen">
      <div className="mx-auto max-w-4xl pb-2 border-b">
        {invoiceType === "mac" ? (
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div>
                <h1 className="text-left text-4xl font-bold leading-7 text-cyan-800">
                  Maulik Account Consultancy
                </h1>
              </div>
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
        ) : (
          <div className="py-4 flex justify-between items-center">
            <div className="flex gap-2">
              <img src="/CALogo.png" className="h-16 w-20" />
              <div>
                <h1 className="text-left text-3xl font-bold leading-7 text-cyan-800">
                  V S Sompura & Associates
                </h1>
                <h2 className="mt-2 text-left text-2xl font-semibold leading-7 text-slate-700">
                  Chartered Accountants
                </h2>
              </div>
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
          <Preview
            partyName={partyName}
            date={date}
            items={items}
            remarks={remarks}
            showForm={showForm}
          />
        )}
      </div>
    </div>
  );
}

export default App;
