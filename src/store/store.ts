import { create } from 'zustand';
import { AuthSlice, createAuthSlice } from '../modules/core/slices/auth.slice';

export const useStore = create<AuthSlice>()((...a) => ({
  ...createAuthSlice(...a),
}));
