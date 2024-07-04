import { menuItems } from "./data/db"
import MenuItems from "./components/MenuItems"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="py-20 mx-auto max-w-7xl grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-black text-4xl">Menu</h2>
          
            <div className="space-y-3 mt-10">
              {menuItems.map(item => (
                <MenuItems
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
            ))}
            </div>
        </div>

        <div className=" border border-slate-300 shadow-md shadow-slate-400 rounded-md p-5 space-y-10">
          <h2 className='font-black text-4xl'>Consumo</h2>
          {order.length > 0 ?(
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
              
              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
               <p className="text-center">La orden está vacía</p>
          )} 
          
        </div>

      </main>
    </>
  )
}

export default App
