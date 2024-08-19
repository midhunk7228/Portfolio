import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center gap-6 py-10">
      <h1 className="text-4xl font-bold pb-6">My Projects</h1>
      {[1, 2, 3].map((e, i) => {
        return (
          <div className="w-1/3 max-sm:w-3/4" key={i + 1}>
            <Card className="pt-4 group">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 flex items-end">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl -right-1/3 group-hover:-translate-x-12"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={270}
                  />
              </CardBody>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
