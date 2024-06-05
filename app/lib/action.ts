"use server";

import { pool } from "@/utils/db";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";

export async function createQuestion(formData: FormData) {
    const question = formData.get("questionField");
    const roomId = formData.get("roomId");

    try {
        const questionTable = await pool.query(
            "CREATE TABLE IF NOT EXISTS questions (id SERIAL PRIMARY KEY ,question TEXT NOT NULL, likes NUMERIC DEFAULT 0)"
        );

        const newQuestion = await pool.query(
            "INSERT INTO questions (question, idRoom) VALUES ($1, $2) RETURNING * ",
            [question, roomId]
        );
        console.log("Post question sucess");
    } catch (err) {
        console.log("Error occurated : ", err);
    }

    redirect(`/${roomId}`);
}

export async function getQuestions({ roomId }: { roomId: string }) {
    const questions = await pool.query(
        "SELECT * FROM questions WHERE idRoom = $1 ORDER BY likes DESC",
        [roomId]
    );
    const result = questions.rows;
    return result;
}

export async function likeQuestion(id: number, isLike: boolean) {
    const question = await pool.query("SELECT * FROM questions WHERE id = $1", [
        id,
    ]);
    const likes = Number(question.rows[0].likes) + (isLike ? -1 : 1);
    const newLikes = await pool.query(
        "UPDATE questions SET likes = $1 WHERE id = $2 RETURNING *",
        [likes, id]
    );

    return newLikes.rows[0].likes;
}

export async function createRoom(roomId: string) {
    try {
        const newRoom = await pool.query("INSERT INTO rooms (id) VALUES ($1)", [
            roomId,
        ]);
    } catch (err) {
        console.log("Error occured: ", err);
    }
}
