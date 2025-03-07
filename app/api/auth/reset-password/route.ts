import { NextResponse } from "next/server"
import { account } from "@/lib/appwrite"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Basic validation
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Create password recovery
    const recovery = await account.createRecovery(email, `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password`)

    return NextResponse.json({
      message: "Password reset email sent",
    })
  } catch (error: any) {
    console.error("Password reset error:", error)

    return NextResponse.json({ error: error.message || "Failed to send password reset email" }, { status: 500 })
  }
}

