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

function ClassCard() {
    return (
        <Link className="w-full md:max-w-xs" href={"/classroom"}>
            <Card size="sm">
                <CardHeader>
                    <CardTitle className="font-bold">Ce-300</CardTitle>
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