"use client"
import { useRef } from "react";
import TextReveal from "./TextReveal";
import gsap from "gsap";
import useViewTransition from "@/hooks/useViewTransition";


const CARD_W = 320;
const CARD_H = 300;
const SLCALE = 1.25;

const CarouselCard = ({project, onHoverStart, onHoverEnd}) => {

    const cardRef = useRef(null)
    const imageRef = useRef(null)

    const numberRef = useRef(null)
    const titleRef = useRef(null)

    const onEnter = () => {
      onHoverStart?.();

      gsap.to(cardRef.current,{
        width: CARD_W * SLCALE,
        height: CARD_H * SLCALE,
        duration: 0.25,
        ease: "power3.out"

      })

      gsap.to(imageRef.current,{
        scale: 1,
        duration: 0.25,
        ease: "power3.out"
      })

      numberRef.current?.play();
      titleRef.current?.play()

    }

    const onLeave = () => {
       onHoverEnd?.();

      gsap.to(cardRef.current,{
        width: CARD_W ,
        height: CARD_H ,
        duration: 0.2,
        ease: "power3.out"

      })

      
      gsap.to(imageRef.current,{
        scale: 1.6,
        duration: 0.2,
        ease: "power3.out"
      })

      numberRef.current?.reverse();
      titleRef.current?.reverse()
    }

    const {navigateTo} = useViewTransition()

    const handleClick = () => {
      navigateTo(`/projects/${project.slug}`)
    }

  return (
    <div ref={cardRef} onClick={handleClick} onMouseEnter={onEnter}  onMouseLeave={onLeave} style={{width:CARD_W, height:CARD_H, flexShrink:0, overflow:"visible", cursor:"pointer"}} className="relative ">
        {/* Title Panel */}

        <div style={{bottom: `calc(100% + 1.5rem)`}} 
        className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-4 ">
            <TextReveal ref={numberRef} duration="0.25" trigger="manual" splitBy="chars" >
              <h3 className="text-[1.3rem] text-[#010101]">
               {project.number}
              </h3>
            </TextReveal>

             <TextReveal ref={titleRef} duration="0.1" trigger="manual" splitBy="chars" >
              <h3 className="text-[1.3rem] text-[#ffff]">
               {project.title}
              </h3>
            </TextReveal>
        </div>

        <div className="imageDiv absolute h-full w-full overflow-hidden ">
          <img style={{transformOrigin: "center center", userSelect: "none"}} className="h-full w-full scale-[1.6] object-cover" ref={imageRef} src={project.coverImage} alt={project.title} />
        </div>

    </div>
  )
}

export default CarouselCard