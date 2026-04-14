import { ID } from "appwrite";
import { databases } from "../client";
import conf from "../../conf/conf";

export class InquiryService {
    
    // ==========================================
    // User Side: Submit Inquiry
    // ==========================================

    /**
     * Submit a contact form / inquiry from the user facing site map.
     */
    async submitInquiry(data: { type: string, product?: string, name: string, mobile: string, company_name?: string, company_website?: string, email: string, message?: string, designation?: string, country?: string }) {
        try {
            return await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteInquiriesTableId,
                ID.unique(),
                data
            );
        } catch (error) {
            console.error("InquiryService :: submitInquiry :: error", error);
            throw error;
        }
    }

    // ==========================================
    // Admin Side: Read / Delete Inquiries
    // ==========================================

    async getInquiries(queries: string[] = []) {
        try {
            return await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteInquiriesTableId,
                queries
            );
        } catch (error) {
            console.error("InquiryService :: getInquiries :: error", error);
            throw error;
        }
    }

    async getInquiry(inquiryId: string) {
        try {
            return await databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteInquiriesTableId,
                inquiryId
            );
        } catch (error) {
            console.error("InquiryService :: getInquiry :: error", error);
            throw error;
        }
    }


    async deleteInquiry(inquiryId: string) {
        try {
            await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteInquiriesTableId,
                inquiryId
            );
            return true;
        } catch (error) {
            console.error("InquiryService :: deleteInquiry :: error", error);
            return false;
        }
    }
}

const inquiryService = new InquiryService();
export default inquiryService;
