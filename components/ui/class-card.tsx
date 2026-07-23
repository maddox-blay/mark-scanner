import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

function ClassCard({ name, slug = "empty" }: { name: string, slug: string }) {
    return (
        <Link className="w-full md:max-w-xs" href={`/dashboard/@me/${slug}`}>
            <Card size="sm">
                <CardHeader>
                    <CardTitle className="font-bold">{name}</CardTitle>
                    <CardDescription>72 quizes uploaded</CardDescription>
                    <CardAction><Badge variant="outline">Admin</Badge></CardAction>
                </CardHeader>
                <CardFooter>
                    <span>last updated: 21/05/26</span>
                </CardFooter>
            </Card>
        </Link>
    )
}

export { ClassCard }