import { Rating } from "@material-tailwind/react";

export default function ReadonlyRating() {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 ml-52">
      <div className="text-white text-lg">CSS <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={3} readonly /></div>
      <div className="text-white text-lg">JAVASCRIPT <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple"  value={2} readonly /></div>
      <div className="text-white text-lg">REACT <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={2} readonly /></div>
      <div className="text-white text-lg">NEXTJS <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={3} readonly /></div>
      <div className="text-white text-lg">HTML <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={4} readonly /></div>
      <div className="text-white text-lg">TYPESCRIPT <Rating unratedColor="purple" ratedColor="purple" value={5} readonly /><Rating unratedColor="purple" ratedColor="purple" value={1} readonly /></div>
    </div>
  );

}