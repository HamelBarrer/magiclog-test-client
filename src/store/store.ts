import { create } from 'zustand';
import { AuthSlice, createAuthSlice } from '../modules/core/slices/auth.slice';
import {
  SearchSlice,
  createSearchSlice,
} from '../modules/search/slices/search.slice';

export const useStore = create<AuthSlice & SearchSlice>()((...a) => ({
  ...createAuthSlice(...a),
  ...createSearchSlice(...a),
}));
