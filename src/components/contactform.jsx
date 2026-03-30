import { useState } from "react";
import axios from "axios";

export default function ContactForm({ setContact, contact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("Interested");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }

    const newContact = {
      name,
      email,
      phone,
      company,
      status,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/contact",
        newContact
      );

      // update UI with backend response
      setContact([res.data, ...contact]);

      // reset form
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setStatus("Interested");

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
      
      <input
        type="text"
        placeholder="Name"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="tel"
        placeholder="Phone"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="text"
        placeholder="Company"
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <select
        value={status}
        className="bg-[#eff4ff] p-3 rounded w-full text-[#0c002b] outline-0 cursor-pointer"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Interested">Interested</option>
        <option value="Not Interested">Not Interested</option>
        <option value="Closed">Closed</option>
      </select>

      <button
        type="submit"
        className="text-white px-4 py-3 rounded hover:bg-[#001a51] bg-[#00277a] transition w-full mt-[10px] cursor-pointer"
      >
        Add Contact
      </button>

    </form>
  );
}