"use client";

import InputForm from "./component/input-form";
import QuestionField from "./component/question-field";
import { useState } from "react";
import { createRoom } from "./lib/action";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
    const [roomId, setRoomId] = useState("");
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleclick = () => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        const length = 6;
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        // createRoom(result);
        setRoomId(result);
        return result;
    };

    return (
        <div className="max-w-[1000px] flex flex-col justify-center  mx-auto h-screen">
            <header className="h-32">
                <h1 className="text-3xl font-semibold">
                    Question and Answer from the community
                </h1>
                <p className="text-xl ">
                    Create a room to get questions from audience or join a room
                    to ask
                </p>
            </header>
            <div className="flex items-center gap-5 py-4">
                <button
                    type="button"
                    className="bg-green-400 px-6 py-4 rounded-md text-lg font-semibold"
                    onClick={handleclick}
                >
                    <span className="text-2xl">+</span> Create Room
                </button>
                <p className="text-xl">Room ID: {roomId}</p>
                <p>Or</p>
                <div className="flex bg-slate-200 w-full justify-between p-4 items-center rounded-md">
                    <div className="flex flex-col w-full">
                        <label htmlFor="joinRoom" className="font-semibold">
                            Join Room
                        </label>
                        <input
                            type="text"
                            name="joinRoom"
                            id="createroom"
                            title="joinRoom"
                            placeholder="Enter Room ID"
                            className="h-10 rounded-sm p-2 text-lg w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-3 py-1 rounded-md ml-4 bg-slate-300 w-20 h-10 text-lg font-semibold"
                    >
                        Join
                    </button>
                </div>
            </div>
            <Link href={`${roomId}`}>Go to link id</Link>
        </div>
    );
}
