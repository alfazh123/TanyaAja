import { getQuestions } from "../lib/action";
import LikeButton from "./like-button";

export default async function QuestionField({ id }: { id: string }) {
    const questions = await getQuestions({ roomId: id });

    console.log(questions);
    return (
        <ul className="space-y-4 m-4 mb-32">
            {questions.map(
                (quest: { question: string; id: number; likes: number }) => (
                    <li
                        key={quest.id}
                        className="flex justify-between bg-slate-100 text-xl rounded-md px-4 py-5 shadow-md"
                    >
                        <p>{quest.question}</p>
                        <div>
                            <LikeButton
                                likesTotal={quest.likes}
                                questionId={quest.id}
                            />
                        </div>
                    </li>
                )
            )}
        </ul>
    );
}
