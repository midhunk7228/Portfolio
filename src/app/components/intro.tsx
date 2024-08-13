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
        src="https://media.licdn.com/dms/image/D5603AQEj95Zc5iYckA/profile-displayphoto-shrink_800_800/0/1712234035584?e=1728518400&v=beta&t=CyV-t_XzP10262lLY3hEtlDON2RMQKMv91dGo4u8_mA"
      />
      <h1 className="text-4xl font-bold">Hello, I&apos;m Midhun</h1>
      <div className="flex items-center justify-center w-2/3">
        <p className="text-lg text-center">
          I&apos;m a full-stack developer with 3 years of experience. I enjoy
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
        <Button isIconOnly radius="full" variant="faded" aria-label="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/midhun-k-030131208/")}>
          <FaLinkedin />
        </Button>
        <Button isIconOnly radius="full" variant="faded" aria-label="Github" onClick={() => window.open("https://github.com/midhunk7228")}>
          <FaGithub />
        </Button>
      </div>
    </div>
  );
};

export default Intro;
