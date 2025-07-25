import { useEffect, useState, type FormEvent } from "react";
import Home from "../../pages/home/Home";

const Header = () => {
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
    const newInfo = {
      id: new Date().getTime(),
      title,
      desc,
    };
    setData([...data, newInfo]);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="mt-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border outline-none rounded px-2"
          placeholder="Title"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          className="border outline-none rounded px-2 ml-2"
          placeholder="Description"
        />
        <button className="w-[100px] bg-green-600 ml-2 rounded cursor-pointer text-white font-semibold">
          Send
        </button>
      </form>
      <Home data={data} setData={setData} setEdit={setEdit} />
    </div>
  );
};

export default Header;
