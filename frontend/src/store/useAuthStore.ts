import { create } from 'zustand';
import adminAuthService from '../appwrite/services/auth';

interface AuthState {
  admin: any | null;
  isAuthenticated: boolean;
  loading: boolean;
  setAdmin: (admin: any) => void;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  admin: null,
  isAuthenticated: false,
  loading: true,

  setAdmin: (admin) => set({ admin, isAuthenticated: !!admin, loading: false }),

  login: async (credentials) => {
    set({ loading: true });
    try {
      await adminAuthService.adminLogin(credentials);
      const admin = await adminAuthService.getAdminSession();
      set({ admin, isAuthenticated: !!admin, loading: false });
    } catch (error) {
      set({ admin: null, isAuthenticated: false, loading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await adminAuthService.adminLogout();
    } finally {
      set({ admin: null, isAuthenticated: false, loading: false });
    }
  },

  checkAuth: async () => {
    set({ loading: true });
    try {
      const admin = await adminAuthService.getAdminSession();
      set({ admin, isAuthenticated: !!admin, loading: false });
    } catch (error) {
      set({ admin: null, isAuthenticated: false, loading: false });
    }
  },
}));
