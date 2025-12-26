"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { DEFAULT_SYSTEM_PROMPT } from "@/lib/mock-data"

const profileFormSchema = z.object({
    systemPrompt: z.string().max(2000).min(10),
})

export default function SettingsPage() {
    const form = useForm<z.infer<typeof profileFormSchema>>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: {
            systemPrompt: DEFAULT_SYSTEM_PROMPT,
        },
        mode: "onChange",
    })

    function onSubmit(data: z.infer<typeof profileFormSchema>) {
        toast.success("System prompt updated (Mock)")
        console.log(data)
    }

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Settings</h3>
                <p className="text-sm text-muted-foreground">
                    Manage how the matching engine behaves.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Matching Logic</CardTitle>
                    <CardDescription>
                        Configure the System Prompt used by the Claude Agent.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="systemPrompt"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>System Prompt</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="You are a helpful assistant..."
                                                className="min-h-[200px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This prompt defines the persona and rules for the matching agent.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Update Prompt</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
