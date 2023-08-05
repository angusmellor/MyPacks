import { cn } from "@/lib/utils"
import { 
  Table, 
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table"
import {WearableTag, ConsumableTag, DeletItem} from "@/components/dashboard/itemOptions"
import AddItem from "./addItem"
import { colourPalette } from "@/config/site"

export default function ItemsByCatTable({className}: {className?: string}) {


  const categories = ['Big Four', 'Cook System', 'Clothing', 'Electronics', 'Miscellaneous']

  return (
    <div className={cn(className, "flex flex-col space-y-2 min-w-fit h-full font-bold overflow-y-scroll")}>
      {categories.map((category, i) => (
        <>
          <div key={`${category}${i}label`} className="flex flex-row space-x-2">
            <div className={`bg-${colourPalette[i]} w-6 h-6 bg-[] border-black border`}></div>
            <h2>{category}</h2>
          </div>
          <Table key={`${category}table`}>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Tent</TableCell>
                <TableCell>GG The One</TableCell>
                <TableCell>500 g</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell><WearableTag/></TableCell>
                <TableCell><ConsumableTag/></TableCell>
                <TableCell><DeletItem/></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-center w-full">
            <AddItem/>
          </div>
        </>
      ))}
    </div>
  )

}