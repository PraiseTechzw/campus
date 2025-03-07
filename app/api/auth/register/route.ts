import { NextResponse } from "next/server"
import { createUserAccount } from "@/lib/appwrite"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, name, university } = body

    // Basic validation
    if (!email || !password || !name || !university) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate university email
    if (!email.endsWith(".edu")) {
      return NextResponse.json({ error: "Please use a valid university email" }, { status: 400 })
    }

    // Create user account in Appwrite
    const newUser = await createUserAccount({
      email,
      password,
      name,
      university,
    })

    return NextResponse.json({ message: "Account created successfully", user: newUser }, { status: 201 })
  } catch (error: any) {
    console.error("Registration error:", error)

    return NextResponse.json({ error: error.message || "Failed to create account" }, { status: 500 })
  }
}

