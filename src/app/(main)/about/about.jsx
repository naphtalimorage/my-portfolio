import Image from "next/image";
import Link from "next/link";

export default function About() {
   return (
      <div className="h-fit bg-gradient-to-r from-black to-purple-500 via-black via-[80%] ">
         <div className="text-center relative top-5 lg:top-40  lg:mr-24">
            <p className="text-white font-bold text-5xl md:text-6xl lg:text-8xl font-serif">About</p>
            <p className="text-white font-bold text-5xl md:text-6xl lg:text-8xl font-serif lg:mr-36 lg:inline-block">me</p>
         </div>
         <div className=" flex flex-col lg:flex-row gap-14">
            <div className="mt-10 md:mt-8 flex justify-center md:justify-center lg:justify-start md:ml-10 lg:ml-32">
               <Image
                  src="/pic2.jpeg"
                  width={400}
                  height={400}
                  priority
                  alt="Naphtali Morage"
                  className="rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]"
               />
            </div>


            <div className="text-white flex flex-col  lg:ml-10  lg:w-[450px] lg:relative lg:top-40">
               <div className="p-5 md:p-6 text-sm  lg:text-xl  md:text-base lg:p-0">
                  Im a Computer Science graduate from Laikipia University, a Full-Stack Web Developer and Software Engineer with a proven record of academic and project success.
                  If you are interested in working with me or have a question, please feel free to get in touch.
               </div>
               <div className="flex justify-center mb-10 lg:justify-start">
                  <Link href="/contact">
                     <button className="bg-purple-600 hover:bg-purple-400  mt-6 py-3 px-10 lg:px-20 rounded-full text-white">
                        Contact me
                     </button>
                  </Link>
               </div>

            </div>
         </div>

      </div>
   );
}
