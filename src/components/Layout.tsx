import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"
import Footer from "./Footer"

type child = {
  children: React.ReactChild
}

const Layout = ({ children }: child) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio A. Cuadra</title>
        <link rel="icon" href="/coding.png" />
      </Helmet>
      <div className="font-poppins">
        <Navbar />
        <section className="bg-textnav min-h-screen">{children}</section>
        <Footer />
      </div>
    </>
  )
}

export default Layout
