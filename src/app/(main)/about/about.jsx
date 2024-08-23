import Image from "next/image"
import Link from "next/link"
export default function About() {
   return (
      <div className="h-[800px] bg-gradient-to-r from-black to-purple-500 via-black via-[80%]">
         <div className="relative mr-8 top-40 ">
            <p className="text-white font-bold text-8xl font-serif text-center justify-center">About</p>
            <p className="text-white font-bold text-8xl font-serif ml-[480px]">me</p>
         </div>
         <div className="ml-44  mb-7  w-[700px]">
            <Image src="/pic2.jpeg" width={400} priority height={400} alt="" className="rounded-full w-[450px] h-[450px] " />
         </div>
         <div className="text-white relative bottom-80 left-[700px]  w-[450px]">
            Im a Computer Science graduate from Laikipia University,<br/> a Full-Stack Web Developer and Software Engineer with <br />a proven record of academic and project success.

            If you <br />are interested in working with me or have a question, <br />please feel free to get in touch.
         </div>
         <div>
            <Link href="/contact">
               <button className="bg-purple-600 hover:bg-purple-400 active:px-[85px] py-3 px-20 rounded-full text-white relative bottom-52 left-[700px]">
                  Contact me
               </button>
            </Link>

         </div>
      </div>
   )
}