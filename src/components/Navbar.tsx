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
            <Link to="/" className="mr-5">
              Home
            </Link>
          </li>
          <li className="mr-5 hover:text-babyblue">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
