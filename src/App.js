import React, { useState } from "react";
import Person from "./components/Person";

function App() {
  const [message, setMessage] = useState("");

  const callbackFunction = (childData) => {
    setMessage(childData);
  };
  //parentCallback={callbackFunction}

  const personList = [
    {
      id: 1,
      name: "T-shirt for Programmers India",
      email: "example@gmail.com",
      avatar:
        "https://cdn.shopify.com/s/files/1/0984/4522/products/order-pizza-code-5_large.jpg",
    },
    {
      id: 2,
      name: "T-shirt for Programmers Viet Nam",
      email: "example2@gmail.com",
      avatar:
        "https://cdn.shopify.com/s/files/1/0984/4522/products/order-pizza-code-6_large.jpg",
    },
    {
      id: 3,
      name: "T-shirt for Programmers USA",
      email: "example3@gmail.com",
      avatar:
        "https://cdn.shopify.com/s/files/1/0984/4522/products/order-pizza-code-4_large.jpg",
    },
  ];

  let detail = "";
  if (message) {
    detail = message;
  }

  const showList = personList.map((item) => (
    <Person parentCallback={callbackFunction} key={item.id} personList={item} />
  ));

  return (
    <div>
      <div>show detail : {detail.name}</div>
      <ul>{showList}</ul>
    </div>
  );
}

export default App;
