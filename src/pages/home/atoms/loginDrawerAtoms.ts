import { atom } from 'jotai';

export const loginDrawerVisibleAtom = atom<boolean>(true);

export const toggleLoginDrawerAtom = atom(null, (get, set) =>
  set(loginDrawerVisibleAtom, !get(loginDrawerVisibleAtom)),
);

export const closeLoginDrawerAtom = atom(null, (_, set) =>
  set(loginDrawerVisibleAtom, false),
);
