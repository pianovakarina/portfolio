import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="h-[50px] w-full bg-white shadow-footer">
      <div className="flex flex-row gap-4 justify-center items-center h-full text-blue-light">
        <a href="">
          <AiFillLinkedin size={30} />
        </a>
        <a href="">
          <MdEmail size={30} />
        </a>
        <a href="">
          <AiFillInstagram size={30} />
        </a>
        <a href="">
          <AiOutlineTwitter size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
