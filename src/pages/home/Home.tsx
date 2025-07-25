import type { Dispatch, FC, SetStateAction } from "react";
interface Props {
  data: any;
  setData: Dispatch<SetStateAction<any[]>>;
  setEdit: Dispatch<SetStateAction<any>>;
}

const Home: FC<Props> = ({ data, setData, setEdit }) => {
  console.log(setEdit);

  const handleDelete = (id: number) => {
    setData(data.filter((item: any) => item?.id !== id));
  };
  const handleUpdate = (item: any) => {
    setEdit(item);
  };
  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-3">
        {data?.map((item: any, index: number) => (
          <div
            key={item?.id}
            className=" relative flex flex-col justify-evenly text-center p-2 border w-[200px] h-[150px] rounded"
          >
            <h3 className="text-[20px] font-semibold line-clamp-1 mt-1 w-full mx-auto">
              {item?.title}
            </h3>
            <p className="text-[16px] line-clamp-1 w-full">{item?.desc}</p>
            <span className="absolute right-0 top-0 h-[30px] w-[30px] bg-gray-500 text-center content-center">
              {index + 1}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => handleUpdate(item)}
                className="w-full bg-green-600 h-[30px] text-white cursor-pointer rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(item?.id)}
                className="w-full bg-red-600 h-[30px] text-white cursor-pointer rounded"
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

export default Home;
