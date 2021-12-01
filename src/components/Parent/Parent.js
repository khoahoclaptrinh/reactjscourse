import React from "react";
import Child from "./Child";
export default function Parent() {
  // function clickAlert(data) {
  //   console.log(data);
  // }

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

  const showList = personList.map((item) => (
    <Child
      key={item.id}
      data="Click here"
      // onChildClick={clickAlert}
      personList={item}
    />
  ));

  return (
    <div>
      <ul>{showList}</ul>
    </div>
  );
}
