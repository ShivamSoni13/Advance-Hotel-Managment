import { React, createContext, useState } from "react";

export const Cart = createContext({});

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [table, setTable] = useState([]);
  const [order,setOrder]=useState([]);
  const [filter,setFilter]=useState("")

  return (<Cart.Provider value={{ cart, setCart,table,setTable,order,setOrder,filter,setFilter}}>{children}</Cart.Provider>);
};

export default ContextProvider;



