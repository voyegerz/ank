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
        data,
      );
    } catch (error) {
      console.error("CatalogService :: createCategory :: error", error);
      throw error;
    }
  }

  async getCategory(categoryId: string) {
    try {
      return await databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCategoryTableId,
        categoryId,
      );
    } catch (error) {
      console.error("CatalogService :: getCategory :: error", error);
      throw error;
    }
  }

  async getCategories() {
    try {
      return await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCategoryTableId,
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
        data,
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
        categoryId,
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
  async createProduct(data: {
    name: string;
    category: string;
    subCategory: string;
    description: string;
    image_id?: string;
    key_specs?: string[];
  }) {
    try {
      return await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductsTableId,
        ID.unique(),
        data,
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
      const { Query } = await import("appwrite");
      return await databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductsTableId,
        productId,
        [Query.select(["*", "category.name", "subCategory.name"])],
      );
    } catch (error) {
      console.error("CatalogService :: getProduct :: error", error);
      throw error;
    }
  }

  /**
   * User/Admin Side: List all products (optionally filter by Category)
   */
  async getProducts(categoryId?: string) {
    try {
      const { Query } = await import("appwrite");
      const queries: string[] = [
        // Fetch all fields plus category and subCategory names from relations
        Query.select(["*", "category.name", "subCategory.name"]),
      ];
      if (categoryId) {
        queries.push(Query.equal("category", categoryId));
      }
      return await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteProductsTableId,
        queries,
      );
    } catch (error) {
      console.error("CatalogService :: getProducts :: error", error);
      throw error;
    }
  }

  /**
   * Two-Step Resolver: Get products by category name/slug
   * 1. Resolve category name to ID
   * 2. Fetch products using that ID
   */
  async getProductsByCategoryName(categoryName: string) {
    try {
      const { Query } = await import("appwrite");

      // 1. Resolve the Name to an ID by searching the Categories collection
      const categorySearch = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCategoryTableId,
        [Query.equal("name", categoryName), Query.limit(1)],
      );

      if (categorySearch.documents.length === 0) {
        return { documents: [], total: 0 };
      }

      const categoryId = categorySearch.documents[0].$id;

      // 2. Use that ID to call existing getProducts logic
      return await this.getProducts(categoryId);
    } catch (error) {
      console.error(
        "CatalogService :: getProductsByCategoryName :: error",
        error,
      );
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
        data,
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
        productId,
      );
      return true;
    } catch (error) {
      console.error("CatalogService :: deleteProduct :: error", error);
      return false;
    }
  }

  // ==========================================
  // Sub-Categories CRUD
  // ==========================================

  async createSubCategory(data: { name: string; category: string }) {
    try {
      return await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubCategoryTableId,
        ID.unique(),
        data,
      );
    } catch (error) {
      console.error("CatalogService :: createSubCategory :: error", error);
      throw error;
    }
  }

  async getSubCategory(subCategoryId: string) {
    try {
      return await databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubCategoryTableId,
        subCategoryId,
      );
    } catch (error) {
      console.error("CatalogService :: getSubCategory :: error", error);
      throw error;
    }
  }

  async getSubCategories(categoryId?: string) {
    try {
      const { Query } = await import("appwrite");
      const queries: string[] = [
        // Fetch all fields plus parent category name from relation
        Query.select(["*", "category.name"]),
      ];
      if (categoryId) {
        queries.push(Query.equal("category", categoryId));
      }
      return await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteSubCategoryTableId,
        queries,
      );
    } catch (error) {
      console.error("CatalogService :: getSubCategories :: error", error);
      throw error;
    }
  }

  /**
   * Two-Step Resolver: Get sub-categories by category name
   * 1. Resolve category name to ID
   * 2. Fetch sub-categories using that ID
   */
  async getSubCategoriesByCategoryName(categoryName: string) {
    try {
      const { Query } = await import("appwrite");

      // 1. Resolve the Name to an ID by searching the Categories collection
      const categorySearch = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCategoryTableId,
        [Query.equal("name", categoryName), Query.limit(1)],
      );

      if (categorySearch.documents.length === 0) {
        return { documents: [], total: 0 };
      }

      const categoryId = categorySearch.documents[0].$id;

      // 2. Use that ID to call existing getSubCategories logic
      return await this.getSubCategories(categoryId);
    } catch (error) {
      console.error(
        "CatalogService :: getSubCategoriesByCategoryName :: error",
        error,
      );
      throw error;
    }
  }

  async updateSubCategory(
    subCategoryId: string,
    data: { name?: string; category?: string },
  ) {
    try {
      return await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubCategoryTableId,
        subCategoryId,
        data,
      );
    } catch (error) {
      console.error("CatalogService :: updateSubCategory :: error", error);
      throw error;
    }
  }

  async deleteSubCategory(subCategoryId: string) {
    try {
      await databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubCategoryTableId,
        subCategoryId,
      );
      return true;
    } catch (error) {
      console.error("CatalogService :: deleteSubCategory :: error", error);
      return false;
    }
  }

  // ==========================================
  // Storage Methods (Bucket: bucket_products)
  // ==========================================

  async uploadProductImage(file: File) {
    try {
      return await storage.createFile(conf.appwriteBucketID, ID.unique(), file);
    } catch (error) {
      console.error("CatalogService :: uploadProductImage :: error", error);
      throw error;
    }
  }

  async deleteProductImage(fileId: string) {
    try {
      await storage.deleteFile(conf.appwriteBucketID, fileId);
      return true;
    } catch (error) {
      console.error("CatalogService :: deleteProductImage :: error", error);
      return false;
    }
  }

  // Sync Helper: Get Image URL
  getProductImagePreview(fileId: string) {
    return storage.getFileView(conf.appwriteBucketID, fileId);
  }
}

const catalogService = new CatalogService();
export default catalogService;
