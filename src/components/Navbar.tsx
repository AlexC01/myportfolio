import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header className="body-font sticky top-0 bg-darkcolor z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src="/banner.png" alt="Logo" />
        </Link>
        <ul className="md:ml-auto flex text-textnav flex-wrap items-center text-base justify-center">
          <li className="mr-5 hover:text-babyblue">
            <a href="#about">About</a>
          </li>
          <li className="mr-5 hover:text-babyblue">
            <a href="#experience">Experience</a>
          </li>
          <li className="mr-5 hover:text-babyblue">
            <a href="#projects">Projects</a>
          </li>
          <li className="mr-5 hover:text-babyblue">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
