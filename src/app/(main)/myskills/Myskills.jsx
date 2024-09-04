import ReadonlyRating from "../../components/Rating";
import Image from "next/image";

export default function Myskills() {
    return (
        <div className="h-[700px] bg-gradient-to-tr from-purple-400 to-black via-black via-[20%]  flex flex-col text-center justify-center">
            <h1 className="text-5xl mb-28 md:text-7xl lg:mb-20 text-white font-serif font-bold lg:text-8xl ">My skills </h1>
            <div className="relative  lg:mb-40">
                <ReadonlyRating />
            </div>
        </div>
    );
}