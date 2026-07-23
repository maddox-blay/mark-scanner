import { Book } from "lucide-react"
import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"

export default function EmptyPage() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Book />
                </EmptyMedia>
                <EmptyTitle>No Classrooms Yet</EmptyTitle>
                <EmptyDescription>
                    You haven&apos;t created any classrooms yet. Get started by creating
                    your first classroom.
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
    )
}