import { Chip } from '@nextui-org/react'

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 py-10" id="skills">
      <h1 className="text-4xl font-bold pb-6">My Skills</h1>
      <div className="flex gap-3 w-2/3 justify-center flex-wrap">
        {[
          'HTML',
          'CSS',
          'Javascript',
          'TypeScript',
          'React Js',
          'Next Js',
          'TailWind',
          'Node Js',
          'Express',
          'Redux',
          'Mysql',
          'MongoDB',
          'Sequlize',
          'Prisma',
        ].map((el, i) => {
          return (
            <Chip radius="full" size="lg" key={i + 1}>
              {el}
            </Chip>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
