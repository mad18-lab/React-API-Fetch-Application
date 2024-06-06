import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto mt-8">
        <div className="w-full mx-auto bg-black text-white">
            <div className="flex flex-col gap-3 items-start p-10 md:flex-row md:justify-between">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <FaGithub />
                        <a target="_blank" href="https://github.com/mad18-lab" className="font-semibold">GitHub</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaLinkedin />
                        <a target="_blank" href="https://www.linkedin.com/in/madhav-gupta-572756202/" className="font-semibold">LinkedIn</a>
                    </div>
                </div>
                <h1 className="text-sm font-semibold md:text-base">© Madhav Gupta, 2024</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer
