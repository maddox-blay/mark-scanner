"use server"
import prisma from "@/lib/prisma"

export async function createUser(name: string, email: string, password: string){
    let user = await prisma.user.findUnique({
        where: {email: email}
    });

    if(user){
        throw new Error("user already exists")
    }

    user = await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    })
    return user
}