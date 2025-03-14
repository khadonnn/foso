"use client";

import { useReactionStore } from "@/store/useReaction";
import Image from "next/image";
import { ReactionId } from "@/store/useReaction";
const reactions = [
  { id: "useful", label: "Hữu ích", icon: "/thumnail_up.png" },
  { id: "love", label: "Yêu thích", icon: "/heart.png" },
  { id: "funny", label: "Thú vị", icon: "/start_struck.png" },
  { id: "surprised", label: "Bất ngờ", icon: "/hushed_face.png" },
  { id: "boring", label: "Nhàm chán", icon: "/yawing_face.png" },
  { id: "angry", label: "Tức giận", icon: "/pouting_face.png" },
];

const ReactionComponent = () => {
  const { selected, counts, setReaction } = useReactionStore();

  return (
    <div className="p-4 mb-8 border border-gray/20 rounded-xl bg-white shadow-md text-center w-3/4 mt-8 px-32">
      <p className="text-lg font-semibold">Bạn thấy bài viết như thế nào?</p>
      <p className="text-sm text-gray-700 mb-3">{Object.values(counts).reduce((a, b) => a + b)} phản hồi</p>

      <div className="flex justify-between items-center gap-2">
        {reactions.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setReaction(id as ReactionId)}
            className={`flex flex-col items-center w-20 p-2 rounded-lg border ${
              selected === id ? "border-green-500 text-green-500" : "border-none hover:bg-gray-100"
            }`}
          >
            <Image
              src={icon}
              alt={label}
              width={48}
              height={48}
              className={selected === id ? "opacity-100" : "opacity-60"}
            />
            <span className="text-sm font-medium">{counts[id as ReactionId]}</span>
            <span className={selected === id ? " text-green-500 text-xs" : "text-gray-500 text-xs"}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReactionComponent;
