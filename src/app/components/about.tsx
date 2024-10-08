const About = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 py-10" id="about">
            <h1 className="text-4xl font-bold">About</h1>
            <div className="flex flex-col w-2/3 justify-center gap-4">
                <p className="text-center text-lg leading-8 gap-3 flex flex-col">
                    After graduating with a degree in Accounting, I decided to
                    pursue my passion for programming. I enrolled in a coding
                    bootcamp and learned full-stack web development. My favorite
                    part of programming is the problem-solving aspect. I love
                    the feeling of finally figuring out a solution to a problem.
                    My core stack is React, Next.js, Node.js, and MongoDB. I am
                    also familiar with TypeScript and Prisma. I am always
                    looking to learn new technologies. I am currently looking
                    for a full-time position as a software developer.
                </p>
                    <p className="text-center text-lg leading-8 gap-3 flex flex-col">
                        When I&apos;m not coding, I enjoy playing video games,
                        watching movies, and playing with my dog. I also enjoy
                        learning new things. I am currently learning about
                        history and philosophy. I&apos;m also learning how to
                        play the guitar.
                    </p>
            </div>
        </div>
    )
}

export default About
