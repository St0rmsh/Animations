"use client"
import React, { useEffect, useRef } from 'react'
import CarouselCard from './CarouselCard';
import gsap from 'gsap';


const CARD_W = 320;
const CARD_H = 300;
const SLCALE = 1.4;
const CARD_GAP = 10.35;
const DURATION = 8;

const TRACK_H = CARD_H * SLCALE;


const InfiniteCarousel = ({projects}) => {
    const trackRef = useRef(null)
    const tweenRef = useRef(null)

    const doubled = [...projects, ...projects,  ...projects, ...projects]


    useEffect(()=>{
        const singleWidth = projects.length * (CARD_W + CARD_GAP);

        tweenRef.current = gsap.to(trackRef.current, {
            x: -singleWidth,
            ease: "none",
            duration: DURATION,
            repeat: -1,
            

        })

        return()=> tweenRef.current?.kill();

        }, [projects])
        

  return (
    <div style={{padding: `${TRACK_H * 0.5}px 0 24px`}} 
    className='overflow-hidden' >
        <div ref={trackRef} style={{gap: `${CARD_GAP}px`, width: "max-content", height:`${TRACK_H}px`}} className="track flex items-center">
           {doubled.map((project, index) => (
            <CarouselCard key={index} project={project} onHoverStart={()=>tweenRef.current?.pause()} onHoverEnd={()=> tweenRef.current?.play()} />
           ))}
        </div>
    </div>
  )
}

export default InfiniteCarousel