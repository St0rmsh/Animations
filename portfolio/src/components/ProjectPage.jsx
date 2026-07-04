"use client"
import React, { useRef } from 'react'
import TextReveal from './TextReveal'
import gsap , { ScrollTrigger, useGSAP } from "../libs/gsap"
import useViewTransition from '@/hooks/useViewTransition'

   
 

const ProjectPage = ({project, nextProject}) => {


const containerRef = useRef(null);
const imageRef = useRef(null)

 useGSAP(()=>{

    const sections = gsap.utils.toArray("section")
    

   gsap.to(imageRef.current,{
    clipPath: "inset(0% 0 0 0)",
    scale:1,
    duration: 2.8,
    ease: "power3.out",
    delay:0.8,
   })

   sections.forEach((section, index) => {

    const container = section.children[0]

   

    gsap.to(container, {
        rotate:0,
        ease:"none",
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: " top 20%",
            scrub: true,
        }
    })

    if(index === sections.length - 1) return ;

    ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        pinSpacing:false,
    })

   })



 },{
    scope: containerRef
 })

 const {navigateTo} = useViewTransition()


  const handleClick = ()=>{
        navigateTo(`/projects/${nextProject.slug}`)
    }


  return (
    <>
    <main ref={containerRef} className='overflow-hidden'>
        <section className='h-screen w-full '>
            <div className="container h-full w-full flex gap-4 pt-28 pb-12 pl-5 pr-5 ">
                <div className="firstSegment h-full w-[12%] ">
                <TextReveal>
                    <h3 className='text-[3rem]'>
                        {project.number}
                    </h3>
                </TextReveal>
            </div>

            <div className="secondSegment h-[90%] w-[30%] ">
                <div  className="imgDiv h-full w-full overflow-hidden ">
                    <img ref={imageRef} style={{
                    clipPath: "inset(100% 0 0 0)"
                }} 
                className='h-full scale-[1.4] w-full object-cover' src={project.coverImage} alt="" />
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
            </div>

        </section>

        {project.gallery.map((elem,index)=>{

           return(
             <section key={index} className='h-screen w-full bg-red-300 ' >
                <div style={{transformOrigin: "bottom left"}} className="container h-full w-full rotate-[30deg] ">
                   <img className='h-full w-full object-cover ' src={elem} alt="" />
                </div>
             </section>
           )

        })}
        <footer className='h-screen w-full flex items-center justify-center ' >
            <h1>Next Project</h1>
            <h1 onClick={handleClick} className='cursor-pointer'>
                {nextProject.title}
            </h1>
        </footer>
    </main>
    </>
  )
}

export default ProjectPage