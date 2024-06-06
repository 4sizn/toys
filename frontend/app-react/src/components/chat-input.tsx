import { useForm } from "react-hook-form";
import { z } from "zod";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const chatInputSchema = z.object({
  content: z.string(),
});

function ChatInput({
  onSubmit,
}: {
  onSubmit: (data: z.infer<typeof chatInputSchema>) => void;
}) {
  const form = useForm<z.infer<typeof chatInputSchema>>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(chatInputSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full items-center"
      >
        <FormField
          name="content"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="메시지 보내기" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" size="icon">
          <SewingPinFilledIcon className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}

export { ChatInput };
