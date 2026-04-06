import axios from "axios";
import { useState, useEffect } from "react";

export default function ContactList({ setContact, contact }) {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // ✅ Fetch Contacts
  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);

        const query = `?status=${filter}&search=${search}`;
        const res = await axios.get(
          `http://localhost:5000/contact${query}`
        );

        setContact(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [filter, search, setContact]);

  // ✅ Status Change
  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/contact/${id}/status`,
        { status }
      );

      setContact((prev) =>
        prev.map((c) =>
          c._id === id ? { ...c, status } : c
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ Delete Contact
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contact/${id}`);

      setContact((prev) =>
        prev.filter((c) => c._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* 🔍 Filter + Search */}
      <div className="flex gap-10">
        <select
          className="p-2 rounded bg-[#00277a] text-white"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Interested">Interested</option>
          <option value="Follow-up">Follow-up</option>
          <option value="Closed">Closed</option>
        </select>

        <input
          type="text"
          placeholder="Search by Name or Company"
          className="p-3 rounded w-full bg-[#eff4ff]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🔄 Loading */}
      {loading ? (
        <div className="mt-10 text-center">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {/* ❌ No Data */}
          {contact.length === 0 && (
            <div className="mt-10 text-center">
              <p>No contacts found</p>
            </div>
          )}

          {/* ✅ Contact List */}
          <div className="grid grid-cols-2 gap-10 mt-10">
            {contact.map((c) => (
              <div
                key={c._id}
                className="bg-[#eff4ff] shadow-md rounded p-4"
              >
                <h3 className="font-bold text-xl text-[#00277a]">
                  {c.name}
                </h3>

                <p className="text-[#00277a]">
                  {c.company}
                </p>

                <p>{c.email}</p>
                <p>{c.phone}</p>

                {/* Status */}
                <div className="mt-3 flex justify-between">
                  <select
                    value={c.status}
                    onChange={(e) =>
                      handleStatusChange(c._id, e.target.value)
                    }
                  >
                    <option value="Interested">Interested</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Closed">Closed</option>
                  </select>

                  <button
                    onClick={() => handleDelete(c._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}