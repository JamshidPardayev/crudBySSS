import { useEffect, useState, type FormEvent } from "react";
import Home from "../home/Home";

const Main = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [edit, setEdit] = useState<any>(null);

  useEffect(() => {
    if (edit) {
      setTitle(edit?.title);
      setDesc(edit?.desc);
    }
  }, [edit]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edit) {
      setData(
        data.map((item: any) =>
          item.id === edit.id ? { title, desc, id: edit?.id } : item
        )
      );
      setEdit(null);
    } else {
      const newInfo = {
        id: new Date().getTime(),
        title,
        desc,
      };
      setData([...data, newInfo]);
    }
    setTitle("");
    setDesc("");
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3 mt-5">
      <h2 className="text-center mb-2 text-[24px] font-semibold">Home</h2>

      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[500px] mx-auto gap-3"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
          className="border outline-none rounded px-2 h-[40px]"
          placeholder="Title"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          required
          className="border outline-none rounded px-2 h-[40px]"
          placeholder="Description"
        />
        <button className=" bg-gray-900 rounded cursor-pointer text-white font-semibold h-[40px]">
          {edit ? "Update" : "Submit"}
        </button>
      </form>
      <Home data={data} setData={setData} setEdit={setEdit} />
    </div>
  );
};

export default Main;
