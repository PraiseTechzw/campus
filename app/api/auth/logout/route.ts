import { NextResponse } from "next/server"
import { signOut } from "@/lib/appwrite"

export async function POST() {
  try {
    await signOut()

    return NextResponse.json({ message: "Logged out successfully" })
  } catch (error: any) {
    console.error("Logout error:", error)

    return NextResponse.json({ error: error.message || "Failed to log out" }, { status: 500 })
  }
}

