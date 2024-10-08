import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types/types";

type OrderContentProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void
};

export default function OrderContent({ order, removeItem }: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-6">
        {order.length === 0 ? (
          <p>La orden esta vacia</p>
        ) : (
          order.map((item) => (
            <div className="flex justify-between border-t items-center border-gray-300 py-5 last-of-type:border-b" key={item.id}>
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.quantity * item.price)}{" "}
                </p>
              </div>
              <button onClick={() => removeItem(item.id)} className="bg-red-600 hover:bg-red-500 h-8 w-8 rounded-full text-white font-black ">
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
