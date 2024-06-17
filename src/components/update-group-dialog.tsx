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
import { updateGroup } from "@/database/repositories/categories";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDrawingContext } from "@/context/store";
import { DispatchFunctions } from "@/context/dispatchFuncs";
import { useEffect } from "react";

const formSchema = z.object({
  groupName: z.string().min(1, { message: "Group name is required" }),
});

export default function UpdateGroupDialog() {
  const drawingContext = useDrawingContext();
  const dispatchFuncs = new DispatchFunctions();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupName: drawingContext?.selectedGroup?.groupName,
    },
  });

  useEffect(() => {
    drawingContext?.selectedGroup?.groupName &&
      form.reset({ groupName: drawingContext?.selectedGroup?.groupName });
  }, [drawingContext?.selectedGroup?.groupName]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await updateGroup(drawingContext!.selectedGroup!.id, values.groupName);
    dispatchFuncs.setOpenUpdateGroup(false);
    form.reset();
  };
  return (
    <Dialog open={drawingContext?.openUpdateGroup} onOpenChange={dispatchFuncs.setOpenUpdateGroup}>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>Update group name</DialogTitle>
              <FormField
                control={form.control}
                name="groupName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Group name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter group name" {...field} />
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
                onClick={() => dispatchFuncs.setOpenUpdateGroup(false)}>
                Close
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
