"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getAccount, getUserDetails, signOut as appwriteSignOut } from "@/lib/appwrite"

type User = {
  id: string
  name: string
  email: string
  avatar?: string | null
  role: string
  university?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  isAdmin: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isAdmin: false,
  signOut: async () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const account = await getAccount()
        if (account) {
          const userDetails = await getUserDetails(account.$id)

          if (userDetails) {
            setUser({
              id: account.$id,
              name: userDetails.name,
              email: account.email,
              avatar: userDetails.avatar_url,
              role: userDetails.role,
              university: userDetails.university,
            })
          }
        }
      } catch (error) {
        console.error("Auth error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const signOut = async () => {
    try {
      await appwriteSignOut()
      setUser(null)
      router.push("/auth/login")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAdmin: user?.role === "admin",
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

