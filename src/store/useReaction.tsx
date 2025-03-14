import { create } from "zustand";

export type ReactionId =
  | "useful"
  | "love"
  | "funny"
  | "surprised"
  | "boring"
  | "angry";

interface ReactionState {
  selected: ReactionId | null;
  counts: Record<ReactionId, number>;
  setReaction: (id: ReactionId) => void;
}

export const useReactionStore = create<ReactionState>((set) => ({
  selected: null,
  counts: {
    useful: 1,
    love: 2,
    funny: 0,
    surprised: 1,
    boring: 0,
    angry: 0,
  },
  setReaction: (id) =>
    set((state) => ({
      selected: id,
      counts: {
        ...state.counts,
        [id]: state.counts[id || 0] + 1,
      },
    })),
}));
