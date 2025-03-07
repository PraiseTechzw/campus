import { Client, Account, Databases, Storage, ID, Query } from "appwrite"

// Initialize Appwrite
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("your-appwrite-project-id") // Your project ID

// Export Appwrite services
export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)

// Auth helper functions
export const createUserAccount = async ({
  email,
  password,
  name,
  university,
}: {
  email: string
  password: string
  name: string
  university: string
}) => {
  try {
    // Create user account
    const newAccount = await account.create(ID.unique(), email, password, name)

    if (!newAccount) throw Error

    // Create user session
    const session = await account.createEmailSession(email, password)

    // Create user document in database
    await databases.createDocument("your-database-id", "users", ID.unique(), {
      user_id: newAccount.$id,
      name,
      email,
      university,
      avatar_url: null,
      role: "user", // default role
    })

    return newAccount
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const signIn = async ({ email, password }: { email: string; password: string }) => {
  try {
    const session = await account.createEmailSession(email, password)
    return session
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getAccount = async () => {
  try {
    const currentAccount = await account.get()
    return currentAccount
  } catch (error) {
    console.log(error)
  }
  return null
}

export const getUserDetails = async (userId: string) => {
  try {
    const user = await databases.listDocuments("your-database-id", "users", [Query.equal("user_id", userId)])

    if (user.documents.length > 0) {
      return user.documents[0]
    }
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

export const signOut = async () => {
  try {
    const session = await account.deleteSession("current")
    return session
  } catch (error) {
    console.log(error)
  }
}

export const isAdmin = async () => {
  try {
    const currentAccount = await account.get()
    const user = await getUserDetails(currentAccount.$id)
    return user?.role === "admin"
  } catch (error) {
    console.log(error)
    return false
  }
}

