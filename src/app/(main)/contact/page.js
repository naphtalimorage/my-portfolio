"use client";
import SimpleForm from "../../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="h-[700px] bg-gradient-to-r from-black to-purple-500 via-black via-[80%]">
      <h1 className="text-8xl font-serif font-bold text-center relative  text-white">
        Contact me
      </h1>
      <div className="flex items-center justify-center relative bottom-16">
        <SimpleForm />
      </div>

      <div className="flex text-center justify-center gap-8  relative bottom-10">
        <a
          href="https://wa.me/+254716220216"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#25D366" />
        </a>
        <a
          href="https://x.com/naphtalimorage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100073815214270"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
        </a>
        <a
          href="https://www.linkedin.com/in/naphtali-morage-b628a4287"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2" />
        </a>
      </div>
    </div>
  );
}
