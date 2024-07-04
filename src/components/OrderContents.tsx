import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order : OrderItem[],
    removeItem : (id : MenuItem['id']) => void
}

export default function OrderContents({order, removeItem } : OrderContentsProps) {
  return (
    <div>
        <div className="space-y-3 mt-10">
            { order.length === 0 ? 
                <p className="text-center pt-20">La orden Está Vacía</p>
                : (
                    order.map( item => 
                        <div 
                            key={item.id}
                            className="flex justify-between items-center border-t border-gray-400 p-5 last-of-type:border-b"
                        >
                            <div className="">
                                <p className="text-lg">{item.name} - {formatCurrency( item.price )}</p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - {formatCurrency( item.quantity * item.price)}
                                </p>
                            </div>
                            <button
                                className="bg-red-600 h-8 w-8 rounded-full font-black text-white"
                                onClick={ () => removeItem(item.id) }
                            >
                                X
                            </button>
                        </div>
                    )
                )
                
            }
        </div>
    </div>
  )
}
