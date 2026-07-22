'use client'
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

function LogoutButton() {
    async function logout() {
        await signOut({ callbackUrl: '/login' });
    }
    return (
        <Button
            variant="destructive"
            onClick={logout}
        >
            Logout
            <LogOutIcon data-icon="inline-end" />
        </Button>
    )
}

export default LogoutButton
