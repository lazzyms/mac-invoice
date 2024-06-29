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
    <div className="border">
      <div className="flex items-center justify-between border-b">
        <div className="mx-auto max-w-5xl py-4">
          <h1 className="text-center text-4xl font-bold leading-7 text-black">
            Maulik Account Consultancy
          </h1>
          <h3 className="mt-2 text-gray-800 text-center">
            FF-12, Pattani Plaza, Devubag, Bhavnagar
          </h3>
          <div className="flex justify-center gap-4">
            <h3 className="mt-1 text-gray-800 text-center">
              <a href="tel:9427753863">+91 942 775 3863</a>
            </h3>
            <h3 className="mt-1 text-gray-800 text-center">
              <a href="tel:7802995885">+91 780 299 5885</a>
            </h3>
          </div>
          <h3 className="mt-1 text-gray-800 text-center">
            <a href="mailto:sudhirsompura90@gmail.com">
              sudhirsompura90@gmail.com
            </a>
          </h3>
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
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
