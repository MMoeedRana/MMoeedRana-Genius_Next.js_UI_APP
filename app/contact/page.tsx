import React from 'react'
import { Navbar } from '../components/sections/Navbar'
import Contact from '../components/sections/Contact'
import { CallToAction } from '../components/sections/CallToAction'

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <Contact />
      <CallToAction />
    </div>
  )
}
