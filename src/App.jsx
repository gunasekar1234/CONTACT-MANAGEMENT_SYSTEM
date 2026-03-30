import { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./components/contactform";
import ContactList from "./components/contactlist";

export default function App() {
  const [contact, setContact] = useState([]);

  // 🔥 fetch data from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/contact");
        setContact(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-8 max-w-[1440px] mx-auto grid grid-cols-3 gap-[70px]">
      
      {/* Left side */}
      <div className="col-span-1 space-y-4">
        <h1 className="text-[32px] font-bold mb-10 text-[#00277a]">
          Contact Management
        </h1>
        <ContactForm setContact={setContact} contact={contact} />
      </div>

      {/* Right side */}
      <div className="col-span-2">
        <ContactList setContact={setContact} contact={contact} />
      </div>

    </div>
  );
}