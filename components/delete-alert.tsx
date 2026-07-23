"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogMedia
} from "@/components/ui/alert-dialog"
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";
import { deleteClassroom } from "@/services/classroom-service";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteAlert({ name, id }: { name: string, id: string }) {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    function handleDelete() {
        deleteClassroom(id)
        setOpen(false)
        router.refresh()
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger render={<Button variant="destructive" size="icon" onClick={(e) => { e.preventDefault(); e.stopPropagation() }} />}>
                <Trash2Icon />
            </AlertDialogTrigger>
            <AlertDialogContent size="sm" onClick={(e) => { e.preventDefault(); e.stopPropagation() }}>
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <Trash2Icon />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Are you sure you want to delete {name}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your classroom and all related files
                        from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction variant="destructive">
                        Yes, delete class
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}