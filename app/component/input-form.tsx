"use client";

import { createQuestion } from "../lib/action";

export default function InputForm({ id }: { id: string }) {
    return (
        <form
            action={createQuestion}
            className="flex justify-between fixed bottom-0 right-0 left-0 m-4  p-4 rounded-md gap-4 bg-slate-200"
        >
            <input type="hidden" name="roomId" value={id} readOnly />
            <div className="flex flex-col w-5/6">
                <label htmlFor="number">Question</label>
                <input
                    type="text"
                    name="questionField"
                    id="questionField"
                    className="text-black rounded-md p-2 h-10 w-full bg-slate-100 border-2 focus:border-0 border-slate-400 focus:ring-4"
                    placeholder="Enter your question"
                />
            </div>
            <div className="relative flex justify-center items-center">
                <button
                    type="submit"
                    className="absolute right-0 bottom-0 bg-slate-100 py-2 px-4 rounded-md hover:bg-slate-300 shadow-lg"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
