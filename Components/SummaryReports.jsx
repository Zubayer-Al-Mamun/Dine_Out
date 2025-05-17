export default function SummaryReports({ allOrder, handelDelete, handelDeliver, handelSelect }) {
  let allOrderReverse = [];

  for(let i = allOrder.length-1; i >= 0; i--){
    allOrderReverse.push(allOrder[i]);
  }
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      {/*  Order Reports  */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Order Reports</h2>

          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-funnel-icon lucide-funnel"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            
            
            <select onChange={(e) => handelSelect(e)} className=" bg-zinc-900 accent-orange-600 border-none outline-none py-2 px-3 ">
              <option>All</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>
        <div className="bg-cardbg rounded-lg p-4">
          <div className="reports-container">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Customer Name</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {allOrderReverse.map((order) => {
                  return (
                    <tr
                      key={order.orderName}
                      className="border-t border-gray-700"
                    >
                      <td className="py-3"> {order.id} </td>
                      <td className="py-3"> {order.orderName} </td>
                      <td className="py-3"> {order.item} </td>
                      <td className="py-3"> {order.price} </td>
                      <td className="py-3">
                        <span
                          className={
                            order.status ? "text-green-500" : "text-red-500"
                          }
                        >
                          {" "}
                          {order.status ? "DELIVERED" : "PENDING"}{" "}
                        </span>
                      </td>
                      <td className="py-3">
                        <button onClick={() => handelDelete(order.orderName)} className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                          Delete
                        </button>
                        <button onClick={() => handelDeliver(order.orderName)} className={`bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300 ${order.status ? "hidden" : ""}`}>
                          {order.status || "DELIVER"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
