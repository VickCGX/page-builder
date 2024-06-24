import { atom, useAtom } from "jotai";

export const sharedImage = atom<string | null>("");
const useSharedImage = () => useAtom(sharedImage);

export default useSharedImage;
