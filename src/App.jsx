import { useState } from "react";
import CreateOrder from "../Components/CreateOrder";
import Navbar from "../Components/Navbar";
import OrderSummary from "../Components/OrderSummary";
import SummaryReports from "../Components/SummaryReports";

import itemData from "../Components/itemData";

let allOrder = [
  { id: 1, orderName: "Sumit Saha", item: 7, price: 847, status: false },
  { id: 2, orderName: "Akash Ahmed", item: 4, price: 391, status: true },
  { id: 3, orderName: "Saad Hasan", item: 8, price: 739, status: false },
  { id: 4, orderName: "MD Salahuddin", item: 6, price: 676, status: false },
  { id: 5, orderName: "Ferdous", item: 5, price: 918, status: false },
  { id: 6, orderName: "Rafe", item: 4, price: 334, status: true },
  { id: 7, orderName: "Sarwar", item: 7, price: 350, status: false },
  { id: 8, orderName: "Obaidul", item: 3, price: 300, status: false }
];

function App() {
  const [iconState, setIconState] = useState(itemData);
  const [orderTable, setOrderTable] = useState(allOrder);

  function handelSelect(e){
    console.log(e.currentTarget.value);
    if(e.currentTarget.value === "Pending"){
      const allPanding = allOrder.filter((item)=> item.status === false);
      setOrderTable(allPanding);
    }

    if(e.currentTarget.value === "Delivered"){
      const allPanding = allOrder.filter((item)=> item.status === true);
      setOrderTable(allPanding);
    }

    if(e.currentTarget.value === "All"){
      const allPanding = allOrder.map((item) => item);
      setOrderTable(allPanding);
    }

  }

  function handelDelete(orderName){

    const updateAllOrder = orderTable.filter((order => order.orderName !== orderName));
    allOrder = updateAllOrder;
    setOrderTable(updateAllOrder);

  }

  function handelDeliver(orderName){
    const deliverItem = orderTable.filter((order => order.orderName === orderName));
    deliverItem[0].status = true;

    let updateTable = [...orderTable];
    setOrderTable(updateTable);
    
  }
  // let length = allOrder.length;
  function handelOrder(totalPrice, orderName, selectedCount) {
    let newOrder = { id : allOrder.length +1 , orderName: orderName, item: selectedCount, price: totalPrice, status: false };
    let updateTable = [...orderTable, newOrder]
    setOrderTable(updateTable);
    console.log(orderName,"price: ",totalPrice,"total item : ",selectedCount); 
  }
  function handelOnSmash(itemName) {
    const updatedItems = iconState.map((item) =>
      item.name === itemName ? { ...item, icon: !item.icon } : item
    );
    setIconState(updatedItems);
  }

  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <CreateOrder
            handelOnSmash={handelOnSmash}
            itemData={iconState}
            handelOrder={handelOrder}
          />
          <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary allOrder={allOrder}/>
            <SummaryReports handelSelect={handelSelect} handelDeliver={handelDeliver} handelDelete={handelDelete} allOrder={orderTable} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
