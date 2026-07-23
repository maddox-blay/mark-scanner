"use server"
import prisma from "@/lib/prisma"

export async function createClassroom(name: string, userId: string, slug: string) {
    const existing = await prisma.classroom.findUnique({
        where: { 
            userId_name: { 
                userId, 
                name 
            } 
        },
    })
    if (existing) {
        return { 
            success: false as const, 
            error: "classroom already exists" 
        }
    }
    const classroom = await prisma.classroom.create({ 
        data: { 
            userId, 
            name,
            slug 
        } 
    })
    return { success: true as const, classroom }
}

export async function getUserClassrooms(userId: string){
    const classrooms = await prisma.classroom.findMany({
        where:{
            userId
        }
    })
    return classrooms
}

export async function getClassByslugs(slug: string, userId:string){
    const classroom = await prisma.classroom.findUnique({
        where:{
            userId_slug:{
                userId,
                slug
            }
        }
    })
    return classroom
}

