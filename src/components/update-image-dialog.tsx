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
import { updateImage } from "@/database/repositories/categories";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDrawingContext } from "@/context/store";
import { DispatchFunctions } from "@/context/dispatchFuncs";
import { useEffect } from "react";

const formSchema = z.object({
  imageName: z.string().min(1, { message: "Image name is required" }),
});

export default function UpdateImageDialog() {
  const drawingContext = useDrawingContext();
  const dispatchFuncs = new DispatchFunctions();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageName: drawingContext?.selectedImage?.name,
    },
  });

  useEffect(() => {
    drawingContext?.selectedImage?.name &&
      form.reset({ imageName: drawingContext?.selectedImage?.name });
  }, [drawingContext?.selectedImage?.name]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await updateImage(drawingContext!.selectedImage!.id, values.imageName);
    dispatchFuncs.setOpenUpdateImage(false);
    form.reset();
  };
  return (
    <Dialog open={drawingContext?.openUpdateImage} onOpenChange={dispatchFuncs.setOpenUpdateImage}>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>Update image nane</DialogTitle>
              <FormField
                control={form.control}
                name="imageName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter image name" {...field} />
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
                onClick={() => dispatchFuncs.setOpenUpdateImage(false)}>
                Close
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
