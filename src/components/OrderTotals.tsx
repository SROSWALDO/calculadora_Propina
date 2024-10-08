import { useMemo } from "react"
import { OrderItem } from "../types/types"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order])
    //usememo que se ejecute cuando ciertas dependencias cambien

    const tipAmount = useMemo(() => subTotal * tip, [tip, order])

    const totalAmount = useMemo(() => subTotal + tipAmount , [tip, order])

    

  return (
    <>
    <div className="space-y-3">
        <h2 className="font-black text02xl">Totales y Propina</h2>
        <p>Subtotala pagar:
            <span className="font-bold"> ${subTotal}</span>
        </p>

        <p>Propina:
            <span className="font-bold"> ${tipAmount}</span>
        </p>

        <p>Total pagar:
            <span className="font-bold"> ${totalAmount}</span>
        </p>
    </div>

    <button onClick={() => placeOrder()} className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" disabled={totalAmount === 0}>
        Guardar Orden
    </button>
      
    </>
  )
}
