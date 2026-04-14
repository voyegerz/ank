import { ID } from "appwrite";
import { databases, storage } from "../client";
import conf from "../../conf/conf";

export class CareersService {
    
    // ==========================================
    // Vacancies CRUD (Admin Side)
    // ==========================================

    async createVacancy(data: { title: string, description: string, is_active?: boolean }) {
        try {
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteVacanciesTableId,
                ID.unique(),
                data
            );
        } catch (error) {
            console.error("CareersService :: createVacancy :: error", error);
            throw error;
        }
    }

    async getVacancy(vacancyId: string) {
        try {
            return await databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteVacanciesTableId,
                vacancyId
            );
        } catch (error) {
            console.error("CareersService :: getVacancy :: error", error);
            throw error;
        }
    }

    async getVacancies(queries: string[] = []) {
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteVacanciesTableId,
                queries
            );
        } catch (error) {
            console.error("CareersService :: getVacancies :: error", error);
            throw error;
        }
    }

    async updateVacancy(vacancyId: string, data: any) {
        try {
            return await databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteVacanciesTableId,
                vacancyId,
                data
            );
        } catch (error) {
            console.error("CareersService :: updateVacancy :: error", error);
            throw error;
        }
    }

    async deleteVacancy(vacancyId: string) {
        try {
            await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteVacanciesTableId,
                vacancyId
            );
            return true;
        } catch (error) {
            console.error("CareersService :: deleteVacancy :: error", error);
            return false;
        }
    }

    // ==========================================
    // Job Applications (User Submission)
    // ==========================================

    /**
     * Submit an application linked to a Vacancy.
     * @param vacancyId The Parent Vacancy ID
     * @param data User info including the uploaded resume file ID `resumeId`
     */
    async submitApplication(vacancy: string, data: { applicant_name?: string, applicant_email: string, address?: string, resume_id: string }) {
        try {
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteJobApplicationsTableId,
                ID.unique(),
                {
                    ...data,
                    vacancy // Relational link to the Vacancy parent
                }
            );
        } catch (error) {
            console.error("CareersService :: submitApplication :: error", error);
            throw error;
        }
    }

    // ==========================================
    // Admin Side: Read Applications
    // ==========================================

    async getApplications(queries: string[] = []) {
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteJobApplicationsTableId,
                queries
            );
        } catch (error) {
            console.error("CareersService :: getApplications :: error", error);
            throw error;
        }
    }

    // ==========================================
    // Storage Methods (Bucket: bucket_resumes)
    // ==========================================

    /**
     * User Side: Uploading a resume during application process
     */
    async uploadResume(file: File) {
        try {
            return await storage.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("CareersService :: uploadResume :: error", error);
            throw error;
        }
    }

    /**
     * Admin Side: Deleting the resume when closing an application
     */
    async deleteResume(fileId: string) {
        try {
            await storage.deleteFile(
                conf.appwriteBucketID,
                fileId
            );
            return true;
        } catch (error) {
            console.error("CareersService :: deleteResume :: error", error);
            return false;
        }
    }

    // Sync Helper: Get file download URL
    getResumeDownloadUrl(fileId: string) {
        return storage.getFileDownload(
            conf.appwriteBucketID,
            fileId
        );
    }
}

const careersService = new CareersService();
export default careersService;
