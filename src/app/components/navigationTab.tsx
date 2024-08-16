import { Tabs, Tab } from '@nextui-org/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
// import { Route, Routes, useLocation } from 'react-router-dom'
const NavigationTab = () => {
  // const { hash } = router;
  const [navigatedTab, setNavigatedTab] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      setNavigatedTab(window.location.hash || '#home')
    }

    handleHashChange() // Log the initial hash value

    // Optionally, listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    // return () => {
    //   window.removeEventListener('hashchange', handleHashChange);
    // };
  }, [])

  return (
    <div className="flex flex-wrap items-center justify-center sticky top-0  z-50">
      <div className="flex gap-4 mt-4 bg-[#030712bf]  px-2 py-2 rounded-2xl shadow-md flex-wrap justify-center">
        {['home', 'about', 'projects', 'experience', 'contact'].map((el, i) => {
          return (
            <Link
              key={i + 1}
              onClick={() => setNavigatedTab(`#${el}`)}
              href={`#${el}`}
            >
              <div
                className={`${
                  `#${el}` === navigatedTab
                    ? 'bg-[#221818] text-white'
                    : 'text-white'
                } bg-[#151921]} px-4 py-2 rounded-2xl capitalize`}
              >
                {el}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default NavigationTab
