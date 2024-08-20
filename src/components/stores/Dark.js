import { create } from "zustand";

const useDarkStore = create((set) => ({
    dark: false,
    setDark: () => set((state) => ({ dark: !state.dark })),
}))

export default useDarkStore;
