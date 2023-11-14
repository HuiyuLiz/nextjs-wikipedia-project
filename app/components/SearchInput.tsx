"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  searchTerm: z
    .string()
    .min(1, {
      message: "Search term must be at least 1 character.",
    })
    .refine((val) => val.trim().length > 0, {
      message: "Search term must not contain leading or trailing spaces.",
    }),
});

export const SearchInput = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchTerm: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/${values.searchTerm}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
        <FormField
          control={form.control}
          name="searchTerm"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="w-full">
                <Input
                  className="w-full focus-visible:ring-transparent"
                  placeholder="Search..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SearchInput;
