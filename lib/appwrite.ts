import { Client, Account, Databases, Storage, ID, Query } from "appwrite";

// Initialize Appwrite
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

// Export Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Auth helper functions
export const createUserAccount = async ({
  email,
  password,
  name,
  university,
  firstName,
  lastName,
}: {
  email: string;
  password: string;
  name: string;
  university: string;
  firstName: string;
  lastName: string;
}) => {
  try {
    // Create user account with a properly formatted ID
    const newAccount = await account.create(ID.unique(), email, password, name)

    if (!newAccount) throw Error;

    // Create user session
    const session = await account.createSession(email, password);

    // Create user document in database with a properly formatted ID
    const docId = `doc${Date.now().toString(36)}`;
    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID!,
      docId,
      {
        user_id: newAccount.$id,
        name,
        first_name: firstName,
        last_name: lastName,
        email,
        university,
        avatar_url: null,
        role: "user", // default role
        status: "active",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
    );

    return newAccount;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const session = await account.createSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAccount = async () => {
  try {
    const currentAccount = await account.get();
    return currentAccount;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const getUserDetails = async (userId: string) => {
  try {
    const user = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID!,
      [Query.equal("user_id", userId)]
    );

    if (user.documents.length > 0) {
      return user.documents[0];
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const signOut = async () => {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async () => {
  try {
    const currentAccount = await account.get();
    const user = await getUserDetails(currentAccount.$id);
    return user?.role === "admin";
  } catch (error) {
    console.log(error);
    return false;
  }
};
