"use client";

import AddItemForm from "@/components/dashboard/addItemForm";
import {
  ConsumableTag,
  DeleteItem,
  WearableTag,
} from "@/components/dashboard/itemOptions";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { colourPalette } from "@/config/site";
import { cn } from "@/lib/utils";
import { Category } from "@/types/types";
import { useState } from "react";
import AddItem from "./addItem";

export default function ItemsByCatTable({
  className,
  categories,
}: {
  className?: string;
  categories: Category[];
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div
      className={cn(
        className,
        "flex flex-col space-y-2 min-w-fit h-full font-bold overflow-y-scroll"
      )}
    >
      {categories.map((category, i) => (
        <>
          <div key={`${category.name}`} className="flex flex-row space-x-2">
            <div
              className={`bg-${colourPalette[i]} w-6 h-6 bg-[] border-black border`}
            ></div>
            <h2>{category.name}</h2>
          </div>
          <Table key={`${category.name}table`}>
            <TableBody>
              {category.items.map((item, i) => (
                <TableRow key={`${item.name} i`}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.weight} kg</TableCell>
                  <TableCell className="text-right">${item.cost}</TableCell>
                  <TableCell>
                    <WearableTag />
                  </TableCell>
                  <TableCell>
                    <ConsumableTag />
                  </TableCell>
                  <TableCell>
                    <DeleteItem />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <AddItem onClick={() => setIsFormOpen(true)} />
          {isFormOpen && <AddItemForm closeForm={closeForm} />}
        </>
      ))}
    </div>
  );
}
