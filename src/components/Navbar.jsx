import { useState, useRef } from "react"
import { useEffect } from "react"

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const navList = useRef()

  useEffect(() => {
    function handleResize() {
        if(window.innerWidth > 600)
          setIsActive(false)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  })

  function handleClick() {
    setIsActive(!isActive)
  }

  function closeNavigation() {
    setIsActive(false)
  }
  
  return (
        <nav className="navbar">
            <ul className={isActive && "active"} ref={navList}>
                <li className="nav-item"><a href="#presentation" onClick={isActive && closeNavigation}>Présentation</a></li>
                <li className="nav-item"><a href="#skills" onClick={isActive && closeNavigation}>Compétences</a></li>
                <li className="nav-item"><a href="#projects" onClick={isActive && closeNavigation}>Projets</a></li>
                {/* <li className="nav-item"><a href="#about">A propos</a></li> */}
                <li className="nav-item"><a href="#contact" onClick={isActive && closeNavigation}>Contact</a></li>
            </ul>
            <div className="background-navbar">
                <button className={`toggleBtn ${isActive && "active"}`} aria-label="bouton de basculement" onClick={handleClick}>
                    <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </nav>
  )
}