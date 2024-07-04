import type { MenuItem } from '../types'

type MenuItemsProp = {
    item: MenuItem
    addItem: (item : MenuItem) => void
}

export default function MenuItems({item, addItem} : MenuItemsProp ) {
  return (
    <>
        <button
            className='border-2 rounded-md border-teal-400 p-3 w-full flex justify-between hover:bg-teal-200'
            onClick={() => addItem(item)}
        >
             <p>{item.name}</p>
             <p className='font-bold'>${item.price}</p>
        </button>
    </>
  )
}
