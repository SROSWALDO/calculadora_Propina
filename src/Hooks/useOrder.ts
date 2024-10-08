import { useState } from "react";
import type { MenuItem, OrderItem } from "../types/types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 }; // lo que ya tiene el objeto mas la quantity
      setOrder([...order, newItem]); // ...tomar una copia de los que hay en order
    }
  };
  

  const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter(item => item.id !== id))
    
  }



  return {
    addItem,
    order,
    removeItem,
    tip,
    setTip
  };
}