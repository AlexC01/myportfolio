import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

type child = {
  children: React.ReactChild
}

const Layout = ({ children }: child) => {
  return (
    <div className="font-poppins">
      <Navbar />
      <section className="bg-textnav min-h-screen">{children}</section>
      <Footer />
    </div>
  )
}

export default Layout
