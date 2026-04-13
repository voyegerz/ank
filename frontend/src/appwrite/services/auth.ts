import { account } from "../client";

export class AdminAuthService {
    
    // ==========================================
    // Admin Login / Logout
    // ==========================================

    /**
     * Authenticate the singular Admin user using Email/Password
     */
    async adminLogin({ email, password }: { email: string, password: string }) {
        try {
            return await account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("AdminAuthService :: adminLogin :: error", error);
            throw error;
        }
    }

    /**
     * Logs out the Admin session
     */
    async adminLogout() {
        try {
            return await account.deleteSession("current");
        } catch (error) {
            console.error("AdminAuthService :: adminLogout :: error", error);
            throw error;
        }
    }

    /**
     * Get the currently logged-in Admin session to verify they are authenticated
     */
    async getAdminSession() {
        try {
            const currentAccount = await account.get();
            // Since the project only permits one user (the Admin), 
            // having an active account session inherently means the Admin is active.
            return currentAccount;
        } catch (error) {
            console.error("AdminAuthService :: getAdminSession :: Not logged in or error");
            return null;
        }
    }
}

const adminAuthService = new AdminAuthService();
export default adminAuthService;
