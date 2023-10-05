import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

type AddItemFormProps = {
  onClick: () => void;
};

export default function AddItem({ onClick }: AddItemFormProps) {
  return (
    <Button variant={"ghost"} className="h-fit w-fit p-0" onClick={onClick}>
      {" "}
      <Icons.plus
        className=" h-8 w-8 hover:bg-background p-1"
        strokeWidth={1.5}
      />
    </Button>
  );
}
