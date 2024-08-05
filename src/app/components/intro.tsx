import { Avatar, Button } from "@nextui-org/react";
import { MdFileDownload } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-14 pt-32 gap-5" id="home">
      <Avatar
        isBordered
        color="default"
        className="w-24 h-24"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      />
      <h1 className="text-4xl font-bold">Hello, I&apos;m John Doe</h1>
      <div className="flex items-center justify-center w-2/3">
        <p className="text-lg text-center">
          I&apos;m a full-stack developer with 8 years of experience. I enjoy
          building sites & apps. My focus is React (Next.js).
        </p>
      </div>
      <div className="flex gap-4">
        <Button
          color="primary"
          variant="faded"
          radius="full"
          className="p-2 px-6"
        >
          Download CV <MdFileDownload />
        </Button>
        <Button isIconOnly radius="full" variant="faded" aria-label="LinkedIn">
          <FaLinkedin />
        </Button>
        <Button isIconOnly radius="full" variant="faded" aria-label="Github">
          <FaGithub />
        </Button>
      </div>
    </div>
  );
};

export default Intro;
