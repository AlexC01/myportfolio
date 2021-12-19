import React from "react"
import Layout from "../components/Layout"
import Tags from "../../content/Tags.json"

const index = () => {
  return (
    <Layout>
      <>
        <div className="hero bg-darkcolor py-16">
          <div className="container px-4 sm:px-8 lg:px-16 xl:px-44 mx-auto">
            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="hero-text col-span-6">
                <h3 className="text-lg text-textnav">
                  Hello,{" "}
                  <span className="text-babyblue">I'm Antonio Cuadra</span>
                </h3>
                <hr className="w-12 h-1 bg-babyblue rounded-full mt-5" />
                <h1 className="mt-8 font-bold text-4xl md:text-5xl max-w-xl text-textnav leading-tight">
                  Web Developer
                </h1>
              </div>
              <div className="hero-image col-span-6">
                <img src="/hero.svg" alt="Hero logo" width="600" height="400" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10" id="about">
          <div className="w-full grid justify-items-center">
            <h1 className="text-4xl uppercase text-darkcolor font-bold tracking-widest">
              About
            </h1>
            <hr className="w-16 h-1 bg-thisblue rounded-full mt-5" />
          </div>
          <div className="2xl:container mt-8 px-4 sm:px-8 lg:px-16 xl:px-24 gap-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:pr-12 lg:pr-24">
                <h3 className="text-thisblue font-bold text-lg">Who am I?</h3>
                <h2 className="text-black text-lg mt-4 font-bold">
                  I'm Antonio Cuadra, a Web developer focus on the Front-end
                </h2>
                <p className="mt-5 text-black text-md text-justify leading-9">
                  I am a graduated student and worked as a Web Developer for the
                  past year. I am passionate for tecnologies such as React,
                  Gatsby, and learning new things everyday to accomplish goals
                  on the best way possible.
                </p>
                <div className="mt-8 mb-8 md:mb-0">
                  <a
                    href="/CV.pdf"
                    download
                    className=" p-2 px-5 mb-8 md:mb-8 font-bold text-darkcolor bg-babyblue hover:bg-hoverblue"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-thisblue font-bold text-lg">My Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-5 gap-5">
                  {Tags.content.map(tag => (
                    <div
                      key={tag.id}
                      className="bg-darkcolor p-6 rounded-md grid justify-items-center"
                    >
                      <img src={tag.icon} alt="HTML" width="52" height="52" />
                      <h2 className="text-textnav text-lg font-bold uppercase mt-5 text-center">
                        {tag.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10" id="experience">
          <div className="w-full grid justify-items-center">
            <h1 className="text-4xl uppercase text-darkcolor font-bold tracking-widest">
              Experience
            </h1>
            <hr className="w-16 h-1 bg-thisblue rounded-full mt-5" />
          </div>
          <div className="container px-4 sm:px-8 lg:px-16 xl:px-44 mx-auto">
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
              <div className="bg-darkcolor p-5 grid justify-items-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-textnav"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h2 className="text-textnav mt-2 font-bold">Development</h2>
                <p className="text-center mt-5 text-textnav text-sm">
                  Experienced in web development as well as frontend and backend
                </p>
              </div>
              <div className="bg-darkcolor p-5 grid justify-items-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-textnav"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="text-textnav mt-2 font-bold">Creative Design</h2>
                <p className="text-center mt-5 text-textnav text-sm">
                  Creating good, responsive and attractive web designs
                </p>
              </div>
              <div className="bg-darkcolor p-5 grid justify-items-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-textnav"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
                <h2 className="text-textnav mt-2 font-bold">Database</h2>
                <p className="text-center mt-5 text-textnav text-sm">
                  Database knowledge such as SQL, MySQL and PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default index
