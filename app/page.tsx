import InputForm from "./component/input-form";
import QuestionField from "./component/question-field";

export default async function Home() {
    return (
        <div className="max-w-[1000px] flex flex-col justify-center  mx-auto">
            <InputForm />
            <QuestionField />
        </div>
    );
}
