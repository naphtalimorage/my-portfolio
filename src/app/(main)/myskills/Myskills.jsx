import ReadonlyRating from "../../components/Rating";
import Image from "next/image";

export default function Myskills() {
    return (
        <div className="h-[700px] bg-gradient-to-tr from-purple-400 to-black via-black via-[20%]">
            <h1 className="text-8xl text-white font-serif font-bold ml-48 relative top-32 ">My skills </h1>
            <div className="mt-48 ">
                <ReadonlyRating />
            </div>
        </div>
    );
}