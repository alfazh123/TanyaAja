"use client";

import { useState } from "react";
import { likeQuestion } from "../../app/lib/action";
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

interface LikeButtonProps {
    likesTotal: number;
}

export default function LikeButton({
    likesTotal,
    questionId,
}: {
    likesTotal: number;
    questionId: number;
}) {
    const [likes, setLikes] = useState(Number(likesTotal));
    const [isLike, setIsLike] = useState(false);

    function handleclick() {
        setLikes(likes + (isLike ? -1 : 1));
        setIsLike(!isLike);
    }

    const handleLike = async () => {
        const newLikes = await likeQuestion(questionId, isLike);
        setIsLike(!isLike);
        console.log(`Question ${questionId} now has ${newLikes} likes.`);
        setLikes(newLikes);
    };

    return (
        <div className="p-4 flex flex-col justify-center items-center ">
            <button type="button" onClick={handleLike}>
                {isLike ? (
                    <AiFillLike className="w-10 h-10" />
                ) : (
                    <AiTwotoneLike className="w-10 h-10" />
                )}
            </button>
            {likes} {likes <= 1 ? "like" : "likes"}
        </div>
    );
}
