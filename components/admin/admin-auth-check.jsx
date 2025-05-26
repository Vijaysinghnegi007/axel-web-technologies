"use client"

import React, { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Loader2 } from "lucide-react"

export function AdminAuthCheck({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem("adminAuth")

        if (!authData) {
          return false
        }

        const auth = JSON.parse(authData)

        if (auth.expiresAt && auth.expiresAt < Date.now()) {
          localStorage.removeItem("adminAuth")
          return false
        }

        return auth.isAuthenticated === true
      } catch (error) {
        console.error("Auth check error:", error)
        return false
      }
    }

    const isAuth = checkAuth()
    setIsAuthenticated(isAuth)

    if (!isAuth && pathname !== "/admin/login") {
      router.push("/admin/login")
    } else {
      setIsLoading(false)
    }
  }, [pathname, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!isAuthenticated && pathname !== "/admin/login") {
    return null
  }

  return <>{children}</>
}
