import { useRef, useState } from "react";

interface Item {
  id: number;
  name: string;
  age: number;
}

const About = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const [data, setData] = useState<Item[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value.trim();
    const ageStr = ageRef.current?.value.trim();
    const age = Number(ageStr);

    if (!name || isNaN(age)) {
      alert("Iltimos, to'g'ri ma'lumot kiriting!");
      return;
    }

    if (editId !== null) {
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, name, age } : item
      );
      setData(updatedData);
      setEditId(null);
    } else {
      const newInfo: Item = {
        id: Date.now(),
        name,
        age,
      };
      setData([...data, newInfo]);
    }

    if (nameRef.current) nameRef.current.value = "";
    if (ageRef.current) ageRef.current.value = "";
  };

  const handleEdit = (item: Item) => {
    if (nameRef.current) nameRef.current.value = item.name;
    if (ageRef.current) ageRef.current.value = String(item.age);
    setEditId(item.id);
  };

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
    if (editId === id) setEditId(null);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3 mt-5">
      <h2 className="text-center mb-2 text-[24px] font-semibold">About</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[500px] mx-auto gap-3"
      >
        <input
          ref={nameRef}
          type="text"
          className="border outline-none rounded px-2 h-[40px]"
          placeholder="Name"
          required
        />
        <input
          ref={ageRef}
          type="number"
          className="border outline-none rounded px-2 h-[40px]"
          placeholder="Age"
          required
        />
        <button
          type="submit"
          className="bg-gray-900 text-white font-semibold rounded h-[40px]"
        >
          {editId !== null ? "Update" : "Send"}
        </button>
      </form>

      <div className="flex flex-wrap gap-3 mt-5">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="relative flex flex-col justify-evenly text-center p-2 border w-[200px] h-[150px] bg-gray-100 rounded"
          >
            <h3 className="text-[20px] font-semibold line-clamp-1">{item.name}</h3>
            <p className="text-[16px]">{item.age}</p>

            <span className="absolute right-0 top-0 h-[30px] w-[30px] bg-gray-500 text-white flex items-center justify-center rounded-bl-md">
              {index + 1}
            </span>

            <div className="flex gap-1 mt-2">
              <button
                onClick={() => handleEdit(item)}
                className="w-full bg-green-600 h-[30px] text-white rounded hover:bg-green-700 duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="w-full bg-red-600 h-[30px] text-white rounded hover:bg-red-700 duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
