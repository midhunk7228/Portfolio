import { Tabs, Tab } from '@nextui-org/react'
const NavigationTab = () => {
      
  return (
    <div className="flex flex-wrap gap-4 justify-center pt-8">
      <Tabs
        radius="full"
        aria-label="Tabs sizes"
        color="default"
        className="fixed z-50"
        // selectedKey={hashedValue}
      >
        <Tab key="#home" title="Home" href="#home">
          <div className=''></div>
        </Tab>
        <Tab key="#about" title="About" href="/#about" />
        <Tab key="#project" title="Projects" href="#project" />
        <Tab key="#skills" title="Skills" href="#skills"/>
        <Tab key="#experinece" title="Experience" href="#experinece" />
        <Tab key="#home" title="Contact" href="#home" />
      </Tabs>
    </div>
  )
}

export default NavigationTab
