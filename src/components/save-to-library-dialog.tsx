import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { IGroup, db } from "@/database/db";
import { saveToDb } from "@/database/repositories/categories";
import { useEditor } from "tldraw";
import { useLiveQuery } from "dexie-react-hooks";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface SaveToLibraryDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const formSchema = z.object({
  category: z.string().min(1, { message: "Category name is required" }),
  group: z.string(),
  imageName: z.string().min(1, { message: "Image name is required" }),
  newCategory: z.string(),
  newGroup: z.string(),
});

export default function SaveToLibraryDialog({ open, setOpen }: SaveToLibraryDialogProps) {
  const categories = useLiveQuery(() => db.categories.toArray());
  const [groups, setGroups] = useState<IGroup[] | undefined>([]);
  const editor = useEditor();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      group: "",
      imageName: "",
      newCategory: "",
      newGroup: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const svg = (await editor.getSvgString(editor.getSelectedShapes()))?.svg;
    await saveToDb(values, svg);
    setOpen(false);
    form.reset();
  };
  const handleSelectCat = (value: string) => {
    const result = categories?.find((c) => c.id.toString() === value);
    setGroups(result?.groups);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={(status) => setOpen(status)}>
        <DialogContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <DialogHeader>
                <DialogTitle>Save to my library</DialogTitle>
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category name</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          handleSelectCat(value);
                          field.onChange(value);
                        }}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories?.map((cat) => (
                            <SelectItem value={cat.id.toString()} key={cat.id}>
                              {cat.categoryName}
                            </SelectItem>
                          ))}
                          <SelectItem value="new">Add new category...</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {form.getValues("category") === "new" && (
                  <FormField
                    control={form.control}
                    name="newCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New category</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter category name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {groups && groups.length > 0 && (
                  <FormField
                    control={form.control}
                    name="group"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Group name</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a group" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {groups?.map((group) => (
                              <SelectItem value={group.groupName} key={group.groupName}>
                                {group.groupName}
                              </SelectItem>
                            ))}
                            <SelectItem value="new">Add new group...</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {(form.getValues("group") === "new" || form.getValues("category") === "new") && (
                  <FormField
                    control={form.control}
                    name="newGroup"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New group</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter group name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="imageName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter image name ..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </DialogHeader>
              <DialogFooter className="sm:justify-start">
                <Button type="submit">Submit</Button>
                <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
