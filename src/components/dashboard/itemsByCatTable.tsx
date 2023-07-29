import { cn } from "@/lib/utils"

export default function ItemsByCatTable({className}: {className?: string}) {


  const categories = ['Big Four', 'Cook System', 'Clothing', 'Electronics', 'Miscellaneous']
  const colourPalette = [ 'custBlue', 'custBlue2', 'custGreen', 'custPink', 'custPurp', 'custBrown', 'custOrng']

  return (
    <div className={cn(className, "flex flex-col space-y-2 font-bold")}>
      {categories.map((category, i) => (
        <div key={`${category}${i}table`} className="flex flex-row space-x-2">
          <div className={`bg-${colourPalette[i]} w-6 h-6 bg-[] border-black border`}></div>
          <h2>{category}</h2>
        </div>
      ))}
    </div>
  )

}