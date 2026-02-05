import items from "./items.json";
import Item from "./item";

export default function ItemList(){
    return(
     <ul className="w-full max-w-2xl bg-white dark:bg-neutral-800 rounded-lg shadow-sm overflow-hidden">
      {items.map((item) => (
        <Item
          key={item.id} {...item}
        />
      ))}
    </ul>
    )
}