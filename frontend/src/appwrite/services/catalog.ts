import { ID } from "appwrite";
import { databases, storage } from "../client";
import conf from "../../conf/conf";

export class CatalogService {
    
    // ==========================================
    // Categories CRUD
    // ==========================================

    async createCategory(data: { name: string }) {
        try {
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCategoryTableId,
                ID.unique(),
                data
            );
        } catch (error) {
            console.error("CatalogService :: createCategory :: error", error);
            throw error;
        }
    }

    async getCategories() {
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCategoryTableId
            );
        } catch (error) {
            console.error("CatalogService :: getCategories :: error", error);
            throw error;
        }
    }

    async updateCategory(categoryId: string, data: { name?: string }) {
        try {
            return await databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCategoryTableId,
                categoryId,
                data
            );
        } catch (error) {
            console.error("CatalogService :: updateCategory :: error", error);
            throw error;
        }
    }

    async deleteCategory(categoryId: string) {
        try {
            await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCategoryTableId,
                categoryId
            );
            return true;
        } catch (error) {
            console.error("CatalogService :: deleteCategory :: error", error);
            return false;
        }
    }

    // ==========================================
    // Products CRUD & Storage
    // ==========================================

    /**
     * Admin Side: Create a product and optionally associate it with a category
     */
    async createProduct(data: { name: string, category: string, description: string, image_id?: string, key_specs?: string[] }) {
        try {
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProductsTableId,
                ID.unique(),
                data
            );
        } catch (error) {
            console.error("CatalogService :: createProduct :: error", error);
            throw error;
        }
    }

    /**
     * User/Admin Side: Get details of a single product
     */
    async getProduct(productId: string) {
        try {
            return await databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProductsTableId,
                productId
            );
        } catch (error) {
            console.error("CatalogService :: getProduct :: error", error);
            throw error;
        }
    }

    /**
     * User/Admin Side: List all products (can filter by Category via queries)
     */
    async getProducts(queries: string[] = []) {
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProductsTableId,
                queries
            );
        } catch (error) {
            console.error("CatalogService :: getProducts :: error", error);
            throw error;
        }
    }

    /**
     * Admin Side: Update a product
     */
    async updateProduct(productId: string, data: any) {
        try {
            return await databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProductsTableId,
                productId,
                data
            );
        } catch (error) {
            console.error("CatalogService :: updateProduct :: error", error);
            throw error;
        }
    }

    /**
     * Admin Side: Delete a product
     */
    async deleteProduct(productId: string) {
        try {
            await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteProductsTableId,
                productId
            );
            return true;
        } catch (error) {
            console.error("CatalogService :: deleteProduct :: error", error);
            return false;
        }
    }

    // ==========================================
    // Storage Methods (Bucket: bucket_products)
    // ==========================================

    async uploadProductImage(file: File) {
        try {
            return await storage.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("CatalogService :: uploadProductImage :: error", error);
            throw error;
        }
    }

    async deleteProductImage(fileId: string) {
        try {
            await storage.deleteFile(
                conf.appwriteBucketID,
                fileId
            );
            return true;
        } catch (error) {
            console.error("CatalogService :: deleteProductImage :: error", error);
            return false;
        }
    }

    // Sync Helper: Get Image URL
    getProductImagePreview(fileId: string) {
        return storage.getFilePreview(
            conf.appwriteBucketID,
            fileId
        );
    }
}

const catalogService = new CatalogService();
export default catalogService;
