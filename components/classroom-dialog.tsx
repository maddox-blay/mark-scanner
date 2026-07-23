"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ClassroomSchema, ClassroomValues } from "@/schemas/classroom-schema"
import { toast } from "sonner"
import { useState } from "react"
import { useRouter } from "next/navigation"
import createClass from "@/actions/classroom-action"

export function ClassDialog({ className }: { className?: string }) {
    const formId = "create-class-form"
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const form = useForm<ClassroomValues>({
        resolver: zodResolver(ClassroomSchema),
        defaultValues: { name: '' },
    })

    async function onSubmit(data: ClassroomValues) {
        const result = await createClass(data)
        if (!result.success) {
            if (result.errors?.name) toast.error(result.errors.name[0])
            return
        }
        toast.success("classroom created")
        setOpen(false)
        router.refresh()
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={<Button type="button" className={cn(className)}><PlusIcon data-icon="inline-start" />create class</Button>} />
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Create class</DialogTitle>
                    <DialogDescription>create classroom and start uploading quizzes</DialogDescription>
                </DialogHeader>

                <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                aria-invalid={!!form.formState.errors.name}
                                placeholder="CE-300"
                                {...form.register("name")}
                            />
                            {form.formState.errors.name && (
                                <FieldError errors={[form.formState.errors.name]} />
                            )}
                        </Field>
                    </FieldGroup>
                </form>

                <DialogFooter>
                    <DialogClose render={<Button variant="outline">Cancel</Button>} />
                    <Button type="submit" form={formId}>Create class</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}