"use server";

import { pool } from "@/utils/db";
import { redirect } from "next/navigation";

export async function createQuestion(formData: FormData) {
    const question = formData.get("questionField");

    try {
        const questionTable = await pool.query(
            "CREATE TABLE IF NOT EXISTS questions (id SERIAL PRIMARY KEY ,question TEXT NOT NULL, likes NUMERIC DEFAULT 0)"
        );

        const newQuestion = await pool.query(
            "INSERT INTO questions (question) VALUES ($1) RETURNING * ",
            [question]
        );
        console.log("Post question sucess");
    } catch (err) {
        console.log("Error occurated : ", err);
    }

    redirect("/");
}

export async function getQuestions() {
    const questions = await pool.query("SELECT * FROM questions");
    const result = questions.rows;
    return result;
}
