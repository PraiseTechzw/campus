import { NextResponse } from "next/server"
import { signIn, getUserDetails } from "@/lib/appwrite"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Create session
    const session = await signIn({ email, password })

    if (!session) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Get user details
    const userDetails = await getUserDetails(session.userId)

    return NextResponse.json({
      message: "Login successful",
      session,
      user: userDetails,
    })
  } catch (error: any) {
    console.error("Login error:", error)

    return NextResponse.json({ error: error.message || "Failed to authenticate" }, { status: 500 })
  }
}

