import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-darkcolor">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          to="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img src="/banner.png" alt="Logo" />
        </Link>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/in/antonio-cuadra-quezada/"
            target="_blank"
            className="text-gray-500"
          >
            <img src="/icons/linkedin.png" alt="Linkedin" className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/AlexC01"
            target="_blank"
            className="ml-3 text-gray-500 cursor-pointer"
          >
            <img src="/icons/github_2.png" alt="Github" className="h-5 w-5" />
          </a>
          <a
            href="https://gitlab.com/acuadraq"
            target="_blank"
            className="ml-3 text-gray-500 cursor-pointer"
          >
            <img src="/icons/gitlab.png" alt="Gitlab" className="h-5 w-5" />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
