import { create } from 'zustand';

interface AppState {
  // Add your global state properties here
  isLoading: boolean;
  user: { id: string; name: string } | null;

  // Actions
  setLoading: (loading: boolean) => void;
  setUser: (user: { id: string; name: string } | null) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>(set => ({
  // Initial state
  isLoading: false,
  user: null,

  // Actions
  setLoading: loading => set({ isLoading: loading }),
  setUser: user => set({ user }),
  reset: () => set({ isLoading: false, user: null }),
}));
