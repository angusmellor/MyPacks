import { Button } from "../ui/button";
import { Icons } from "../ui/icons";


export default function AddItem() {

  return (
    <Button variant={"ghost"} className="h-fit w-fit p-0">
      <Icons.plus className=" h-8 w-8 hover:bg-background p-1" strokeWidth={1.5} />
    </Button>
  )
  }