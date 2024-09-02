import { Rating } from "@material-tailwind/react";

export default function ReadonlyRating() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2  ">
      <div className="text-white p-2 justify-start text-sm md:text-base lg:text-lg  lg:flex text-center lg:justify-center">CSS<div className="lg:ml-16"> <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={3} readonly /></div></div>
      <div className="text-white p-2 justify-start text-sm md:text-base lg:text-lg lg:flex text-center lg:justify-center">JAVASCRIPT<div className="lg:ml-10"> <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={3} readonly /></div></div>
      <div className="text-white p-2 justify-start text-sm md:text-base lg:text-lg lg:flex text-center lg:justify-center">REACT<div className="lg:ml-10"> <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={3} readonly /></div></div>
      <div className="text-white p-2 justify-start text-sm md:text-base lg:text-lg lg:flex text-center lg:justify-center">NEXTJS<div className="lg:ml-20"> <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={3} readonly /></div></div>
      <div className="text-white p-2 justify-start text-sm md:text-base lg:text-lg lg:flex text-center lg:justify-center">HTML<div className="lg:ml-12"> <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={3} readonly /></div></div>
      <div className="text-white p-2 justify-start text-sm md:text-base lg:text-lg lg:flex text-center lg:justify-center">TYPESCRIPT<div className="lg:ml-10"> <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={3} readonly /></div></div>
    </div>
  );

}