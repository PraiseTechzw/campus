import { NextResponse } from "next/server"
import { getAccount, getUserDetails } from "@/lib/appwrite"

export async function GET() {
  try {
    const account = await getAccount()

    if (!account) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const userDetails = await getUserDetails(account.$id)

    return NextResponse.json({
      user: {
        id: account.$id,
        email: account.email,
        name: userDetails?.name || account.name,
        avatar: userDetails?.avatar_url,
        role: userDetails?.role || "user",
        university: userDetails?.university,
      },
    })
  } catch (error: any) {
    console.error("Get user error:", error)

    return NextResponse.json({ error: error.message || "Failed to get user" }, { status: 500 })
  }
}

