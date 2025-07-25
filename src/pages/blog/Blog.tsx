import { useForm } from "react-hook-form";
import { useState } from "react";

interface Car {
  id: number;
  carname: string;
  caryear: string;
}

const Blog = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [data, setData] = useState<Car[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const onSubmit = (formData: any) => {
    if (editId !== null) {
      const updated = data.map((car) =>
        car.id === editId ? { ...car, ...formData } : car
      );
      setData(updated);
      setEditId(null);
    } else {
      const newCar: Car = {
        id: Date.now(),
        carname: formData.carname,
        caryear: formData.caryear,
      };
      setData([...data, newCar]);
    }
    reset();
  };

  const handleDelete = (id: number) => {
    const filtered = data.filter((car) => car.id !== id);
    setData(filtered);
    if (editId === id) setEditId(null);
  };

  const handleEdit = (car: Car) => {
    setEditId(car.id);
    setValue("carname", car.carname);
    setValue("caryear", car.caryear);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3 mt-5">
      <h2 className="text-center mb-2 text-[24px] font-semibold">Blog</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-[500px] mx-auto gap-3"
      >
        <input
          {...register("carname", { required: true })}
          type="text"
          className="border outline-none rounded px-2 h-[40px]"
          placeholder="Car Name"
        />
        <input
          {...register("caryear", { required: true })}
          type="number"
          className="border outline-none rounded px-2 h-[40px]"
          placeholder="Car Year"
        />
        <button
          type="submit"
          className="bg-gray-900 rounded cursor-pointer text-white font-semibold h-[40px]"
        >
          {editId ? "Update" : "Send"}
        </button>
      </form>

      <div className="flex flex-wrap gap-3 mt-5">
        {data.map((car, index) => (
          <div
            key={car.id}
            className="relative flex flex-col justify-evenly text-center p-2 border w-[200px] h-[150px] bg-gray-100 rounded"
          >
            <h3 className="text-[20px] font-semibold line-clamp-1 mt-1">
              {car.carname}
            </h3>
            <p className="text-[16px] line-clamp-1">{car.caryear}</p>
            <span className="absolute right-0 top-0 h-[30px] w-[30px] bg-gray-500 text-white flex items-center justify-center rounded-tl rounded-br">
              {index + 1}
            </span>
            <div className="flex gap-1 mt-2">
              <button
                onClick={() => handleEdit(car)}
                className="w-full bg-green-600 h-[30px] text-white rounded hover:bg-green-700 duration-300"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(car.id)}
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

export default Blog;
