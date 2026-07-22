import { ClassCard } from "@/components/ui/class-card";

export default async function Page() {
    return (
        <div className=" px-4 md: p-12">
            <h1 className="text-4xl">Your classes</h1>
            <div className="py-8"><ClassCard /></div>
        </div>
    )
}