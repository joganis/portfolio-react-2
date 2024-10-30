import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { AboutMe } from '../AboutMe/AboutMe'
import { Projects } from '../Projects/Projects'
import { Skills } from '../Skills/Skills'
import { Contact } from '../ContactMe/Contact'
import { Footer } from '../../Layouts/Footer/Footer'


export const Home = () => {
  return (
    <body>
        <Header/>
    <AboutMe />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  
    </body>
  )
  
}
