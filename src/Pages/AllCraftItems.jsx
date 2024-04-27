import { useLoaderData } from "react-router-dom";

const AllCraftItems = () => {
  const craftData = useLoaderData();
  console.log(craftData);
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Hpgwm8C/woodpeckers-craft-wood-scaled.jpg",
        }}
        className="bg-cover bg-center text-[#fff] capitalize text-5xl font-bold p-20  "
      >
        craft items
      </div>
      <div>
        <div className=" p-3">
          {craftData ? (
            <div className="overflow-x-auto container  m-auto border-2 dark:border-gray-200 border-gray-900 dark:bg-[#30191931] bg-[#140f0e57] duration-500 rounded-lg mb-10 mt-10">
              <table className="min-w-full divide-y dark:divide-gray-200 divide-gray-900 ">
                <thead className="">
                  <tr className="">
                    <th
                      scope="col"
                      className="px-6 py-3 text-left dark:text-white  text-black uppercase tracking-wider text-xl font-bold"
                    >
                      Item Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xl font-bold dark:text-white text-black"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left dark:text-white  text-black uppercase tracking-wider text-xl font-bold"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left dark:text-white  text-black uppercase tracking-wider text-xl font-bold"
                    >
                      Stock status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left dark:text-white  text-black uppercase tracking-wider text-xl font-bold"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y dark:divide-gray-200 divide-gray-900">
                  {craftData.map((singleCraftItem, i) => (
                    <tr key={i} className="">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-20 w-20">
                            <img
                              className="h-full w-full rounded-full"
                              src={singleCraftItem.image_url}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-xl font-bold dark:text-white text-gray-900">
                              {singleCraftItem.item_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm dark:text-white text-gray-900">
                          {singleCraftItem.price} tk
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm dark:text-white text-gray-900">
                          {singleCraftItem.rating}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm dark:text-white text-gray-900">
                          {singleCraftItem.stock_status}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          data-ripple-light="true"
                          type="button"
                          className="btn border-none bg-[#e4c49e]  font-bold hover:bg-[#e4c49e93]"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="min-h-screen flex items-center justify-center">
              <span className="h-16 w-16 loading loading-spinner text-warning"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCraftItems;
