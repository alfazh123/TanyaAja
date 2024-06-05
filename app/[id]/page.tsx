import InputForm from "../component/input-form";
import QuestionField from "../component/question-field";
import { getPathname } from "../lib/get-pathname";

export default function Question({ params }: { params: { id: string } }) {
    // const pathname = getPathname();
    // console.log(pathname);

    const { id } = params;
    // remove / from the id
    console.log(id);

    return (
        <div className="max-w-[1000px] flex flex-col justify-center  mx-auto">
            <p className="text-bold text-4xl h-20 p-4">
                Ask a question to the Speaker about the material...
            </p>
            <p className="text-bold text-xl h-20 p-4">Room Code : {id}</p>
            <InputForm id={id} />
            <QuestionField id={id} />
        </div>
    );
}
