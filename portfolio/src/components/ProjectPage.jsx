import React from 'react'
import TextReveal from './TextReveal'
import {useGasp} from "../libs/gsap"

const ProjectPage = ({project}) => {
  return (
    <>
    <main>
        <section className='h-screen w-full flex gap-4 pt-[7rem] pb-[3rem] pl-5 pr-5 '>
            <div className="firstSegment h-full w-[12%] ">
                <TextReveal>
                    <h3 className='text-[3rem]'>
                        {project.number}
                    </h3>
                </TextReveal>
            </div>

            <div className="secondSegment h-[90%] w-[30%] bg-blue-400">
                <div className="imgDiv h-full w-full ">
                    <img className='h-full w-full object-cover' src={project.coverImage} alt="" />
                </div>
            </div>

            <div className="thirdSegment h-[90%] w-[60%] flex  flex-col justify-end">
              
              <div className="heading">
                <TextReveal delay="0.9" splitBy="chars">
                    <h1 className='text-[3rem] leading-[1.1]'>
                        {project.title}
                    </h1>
                </TextReveal>
              </div>
            <div className="subHeading flex gap-[0.9rem] ">
                <TextReveal  delay="0.9" splitBy="words">
                    <h1 className='text-[1.8rem]'>
                        {project.subtitle}
                    </h1>
                </TextReveal>
                <TextReveal delay="0.9" splitBy="chars">
                    <h1 className='text-[1.8rem]'>
                        {project.year}
                    </h1>
                </TextReveal>
              </div> 

            <div className="description mt-6 w-[50%] text-balanced">
                <TextReveal delay="0.9" splitBy="words">
                    <p className='text-[1.2rem] leading-[1.2]'>
                        {project.description}
                    </p>
                </TextReveal>
              </div> 

            </div>

        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <footer></footer>
    </main>
    </>
  )
}

export default ProjectPage