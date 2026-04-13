import { ID } from "appwrite";
import { databases, storage } from "../client";
import conf from "../../conf/conf";

export class ContentService {
    
    // ==========================================
    // Case Studies CRUD (Parent Node)
    // ==========================================

    async createCaseStudy(data: { title: string, content: string, image_id?: string }) {
        try {
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCaseStudiesTableId,
                ID.unique(),
                data
            );
        } catch (error) {
            console.error("ContentService :: createCaseStudy :: error", error);
            throw error;
        }
    }

    async getCaseStudy(caseStudyId: string) {
        try {
            return await databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCaseStudiesTableId,
                caseStudyId
            );
        } catch (error) {
            console.error("ContentService :: getCaseStudy :: error", error);
            throw error;
        }
    }

    async getCaseStudies(queries: string[] = []) {
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCaseStudiesTableId,
                queries
            );
        } catch (error) {
            console.error("ContentService :: getCaseStudies :: error", error);
            throw error;
        }
    }

    async updateCaseStudy(caseStudyId: string, data: any) {
        try {
            return await databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCaseStudiesTableId,
                caseStudyId,
                data
            );
        } catch (error) {
            console.error("ContentService :: updateCaseStudy :: error", error);
            throw error;
        }
    }

    async deleteCaseStudy(caseStudyId: string) {
        try {
            await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCaseStudiesTableId,
                caseStudyId
            );
            return true;
        } catch (error) {
            console.error("ContentService :: deleteCaseStudy :: error", error);
            return false;
        }
    }

    // ==========================================
    // Case Study Items CRUD (Child Node) Relational Logic
    // ==========================================

    /**
     * Admin Side: Append a detail/item child to a specific parent Case Study.
     */
    async addItemToStudy(caseStudies: string, data: { label: string, description: string }) {
        try {
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCaseStudyItemsTableId,
                ID.unique(),
                {
                    ...data,
                    caseStudies // Establishes relation to the parent collection
                }
            );
        } catch (error) {
            console.error("ContentService :: addItemToStudy :: error", error);
            throw error;
        }
    }

    async getStudyItemsByStudyId(queries: string[] = []) {
        // Assume one of the queries is Query.equal("caseStudyId", [studyId]);
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCaseStudyItemsTableId,
                queries
            );
        } catch (error) {
            console.error("ContentService :: getStudyItemsByStudyId :: error", error);
            throw error;
        }
    }

    async updateStudyItem(itemId: string, data: any) {
        try {
            return await databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCaseStudyItemsTableId,
                itemId,
                data
            );
        } catch (error) {
            console.error("ContentService :: updateStudyItem :: error", error);
            throw error;
        }
    }

    async deleteStudyItem(itemId: string) {
        try {
            await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCaseStudyItemsTableId,
                itemId
            );
            return true;
        } catch (error) {
            console.error("ContentService :: deleteStudyItem :: error", error);
            return false;
        }
    }

    // ==========================================
    // Storage Methods (Bucket: bucket_projects)
    // ==========================================

    async uploadProjectImage(file: File) {
        try {
            return await storage.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("ContentService :: uploadProjectImage :: error", error);
            throw error;
        }
    }

    async deleteProjectImage(fileId: string) {
        try {
            await storage.deleteFile(
                conf.appwriteBucketID,
                fileId
            );
            return true;
        } catch (error) {
            console.error("ContentService :: deleteProjectImage :: error", error);
            return false;
        }
    }

    getProjectImagePreview(fileId: string) {
        return storage.getFilePreview(
            conf.appwriteBucketID,
            fileId
        );
    }
}

const contentService = new ContentService();
export default contentService;
