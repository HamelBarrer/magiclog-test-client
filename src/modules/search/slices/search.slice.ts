import { StateCreator } from 'zustand';
import { IProvider } from '../types/search.type';

export interface SearchSlice {
  searchFilteredProviders: IProvider[];
  searchSetAddFilteredProviders: (provider: IProvider) => void;
  searchSetRemoveFilteredProviders: (provider: IProvider) => void;
}

export const createSearchSlice: StateCreator<SearchSlice> = (set) => ({
  searchFilteredProviders: [],

  searchSetAddFilteredProviders: (provider: IProvider) => {
    set((state) => ({
      searchFilteredProviders: [...state.searchFilteredProviders, provider],
    }));
  },

  searchSetRemoveFilteredProviders: (provider: IProvider) => {
    set((state) => ({
      searchFilteredProviders: state.searchFilteredProviders.filter(
        (el) => el.userId !== provider.userId,
      ),
    }));
  },
});
