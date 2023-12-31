"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const itemFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Must be 3 or more characters long" }),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(3, { message: "Must be 3 or more characters long" }),
  weight: z.preprocess(
    (val) => Number(val),
    z
      .number({
        required_error: "Weight is required",
        invalid_type_error: "Weight must be a number",
      })
      .positive()
  ),
  cost: z.preprocess(
    (val) => Number(val),
    z.optional(
      z.number({ invalid_type_error: "Cost must be a number" }).nonnegative()
    )
  ),
});
type AddFormItemProps = {
  closeForm: () => void;
};

export default function AddItemForm({ closeForm }: AddFormItemProps) {
  const form = useForm<z.infer<typeof itemFormSchema>>({
    resolver: zodResolver(itemFormSchema),
    defaultValues: {
      name: "",
      description: "",
      weight: 0,
      cost: 0,
    },
  });

  const addItem = async (item: z.infer<typeof itemFormSchema>) => {
    // const newItem = {...item, categoryId: categoryId }
    // const addedItem = await apiService.addItem(newItem, userId);
    // if (packId) {
    //   const connection = await apiService.connectItemToPack(addedItem.id, packId)
    //   console.log(connection)
    // }
    // if (setPackItems && packId) {
    //   const items = await apiService.getPackItems(packId);
    //   setPackItems(items[0].packItems)
    // }
  };
  function onSubmit(item: z.infer<typeof itemFormSchema>) {
    addItem(item);
    form.reset();
  }

  return (
    <Card className="flex flex-col h-fit absolute space-y-2 items-end ">
      <Button variant={"ghost"} className="h-fit w-fit p-0" onClick={closeForm}>
        <Icons.X className=" h-6 w-6 hover:bg-red-400" />
      </Button>
      <Form {...form}>
        <form
          className="flex flex-col items-center space-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input className="" placeholder="e.g Tent" {...field} />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    className="w-max"
                    placeholder="e.g Zpacks Duplex"
                    {...field}
                  />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel>Weight</FormLabel>
                <FormControl>
                  <Input
                    className="w-max"
                    placeholder="In Kg"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cost"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel>Cost</FormLabel>
                <FormControl>
                  <Input
                    className="w-max"
                    placeholder="Optional.."
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit">Add</Button>
        </form>
      </Form>
    </Card>
  );
}
