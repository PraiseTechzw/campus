import { ID, Query } from 'appwrite';
import { account, databases, storage } from './appwrite';

// Auth Utilities
export const authUtils = {
    // Create a new account
    createAccount: async (email: string, password: string, name: string) => {
        try {
            const response = await account.create(ID.unique(), email, password, name);
            return response;
        } catch (error) {
            throw error;
        }
    },

    // Login
    login: async (email: string, password: string) => {
        try {
            const response = await account.createEmailSession(email, password);
            return response;
        } catch (error) {
            throw error;
        }
    },

    // Logout
    logout: async () => {
        try {
            await account.deleteSession('current');
        } catch (error) {
            throw error;
        }
    },

    // Get current user
    getCurrentUser: async () => {
        try {
            const user = await account.get();
            return user;
        } catch (error) {
            throw error;
        }
    }
};

// Database Utilities
export const dbUtils = {
    // Create a document
    createDocument: async (collectionId: string, data: any) => {
        try {
            const response = await databases.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                collectionId,
                ID.unique(),
                data
            );
            return response;
        } catch (error) {
            throw error;
        }
    },

    // List documents
    listDocuments: async (collectionId: string, queries: string[] = []) => {
        try {
            const response = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                collectionId,
                queries
            );
            return response;
        } catch (error) {
            throw error;
        }
    },

    // Get a document
    getDocument: async (collectionId: string, documentId: string) => {
        try {
            const response = await databases.getDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                collectionId,
                documentId
            );
            return response;
        } catch (error) {
            throw error;
        }
    },

    // Update a document
    updateDocument: async (collectionId: string, documentId: string, data: any) => {
        try {
            const response = await databases.updateDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                collectionId,
                documentId,
                data
            );
            return response;
        } catch (error) {
            throw error;
        }
    },

    // Delete a document
    deleteDocument: async (collectionId: string, documentId: string) => {
        try {
            await databases.deleteDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                collectionId,
                documentId
            );
        } catch (error) {
            throw error;
        }
    }
};

// Storage Utilities
export const storageUtils = {
    // Upload a file
    uploadFile: async (bucketId: string, file: File) => {
        try {
            const response = await storage.createFile(
                bucketId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            throw error;
        }
    },

    // Get file preview
    getFilePreview: (bucketId: string, fileId: string) => {
        return storage.getFilePreview(bucketId, fileId);
    },

    // Delete a file
    deleteFile: async (bucketId: string, fileId: string) => {
        try {
            await storage.deleteFile(bucketId, fileId);
        } catch (error) {
            throw error;
        }
    },

    // List files
    listFiles: async (bucketId: string) => {
        try {
            const response = await storage.listFiles(bucketId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}; 