import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <section className="text-textdarkcolor">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/404.svg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p className="mb-8 leading-relaxed">
              Sorry about that! Please visit the homepage to get where you need
              to go
            </p>
            <div className="flex justify-center">
              <Link
                to="/"
                className=" text-textnav bg-darkcolor uppercase font-bold border-0 py-2 px-6 focus:outline-none hover:bg-hoverdark rounded text-lg"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound
