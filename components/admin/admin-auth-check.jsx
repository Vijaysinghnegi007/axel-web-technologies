"use client"

import { useAuth } from "@clerk/nextjs"
import { useRouter, usePathname } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function AdminAuthCheck({ children }) {
  const { isLoaded, userId } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!userId && pathname !== "/admin/login") {
    router.push("/admin/login")
    return null
  }

  return <>{children}</>
}
