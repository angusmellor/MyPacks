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

export default function ItemsByCatTable({className}: {className?: string}) {


  const categories = ['Big Four', 'Cook System', 'Clothing', 'Electronics', 'Miscellaneous']
  const colourPalette = [ 'custBlue', 'custBlue2', 'custGreen', 'custPink', 'custPurp', 'custBrown', 'custOrng']

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
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </>
      ))}
    </div>
  )

}