"use client"
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import DeleteAlert from "../delete-alert"
import { useRouter } from "next/navigation"

function ClassCard({ name, slug = "empty", id }: { name: string, slug: string, id: string }) {
    const router = useRouter();
    return (
        <Card size="sm" className="cursor-pointer w-full md:max-w-xs" onClick={() => { router.push(`/dashboard/@me/${slug}`) }}>
            <CardHeader>
                <CardTitle className="font-bold">{name}</CardTitle>
                <CardDescription>72 quizes uploaded</CardDescription>
                <CardAction><DeleteAlert name={name} id={id} /></CardAction>
            </CardHeader>
            <CardFooter>
                <span>last updated: 21/05/26</span>
            </CardFooter>
        </Card>
    )
}

export { ClassCard }