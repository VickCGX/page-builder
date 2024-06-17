import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateCategory } from "@/database/repositories/categories";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDrawingContext } from "@/context/store";
import { DispatchFunctions } from "@/context/dispatchFuncs";
import { useEffect } from "react";

const formSchema = z.object({
  categoryName: z.string().min(1, { message: "Category name is required" }),
});

export default function UpdateCategoryDialog() {
  const drawingContext = useDrawingContext();
  const dispatchFuncs = new DispatchFunctions();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: drawingContext?.selectedCategory?.categoryName,
    },
  });

  useEffect(() => {
    drawingContext?.selectedCategory?.categoryName &&
      form.reset({ categoryName: drawingContext?.selectedCategory?.categoryName });
  }, [drawingContext?.selectedCategory?.categoryName]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await updateCategory(drawingContext!.selectedCategory!.id, values.categoryName);
    dispatchFuncs.setOpenUpdateCategory(false);
    form.reset();
  };
  return (
    <Dialog
      open={drawingContext?.openUpdateCategory}
      onOpenChange={dispatchFuncs.setOpenUpdateCategory}>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>Update category nane</DialogTitle>
              <FormField
                control={form.control}
                name="categoryName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter category name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <Button type="submit">Submit</Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => dispatchFuncs.setOpenUpdateCategory(false)}>
                Close
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
