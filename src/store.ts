import { create } from "zustand";

type PkData = {
  pkData: string;
  setPkData: (pkData: string) => void;
};

const useStore = create<PkData>((set) => ({
  pkData: "red",
  setPkData: (pkData) => set({ pkData }),
}));

export default useStore;
