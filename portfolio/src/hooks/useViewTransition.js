"use client"

import React from 'react'
import gsap from '@/libs/gsap'
import { useRouter } from 'next/navigation'
import {useCallback, useEffect} from "react"


const STRIP_COUNT = 7

const createStrips = () => {
    
    if (typeof document === "undefined") return null;

    const overlay = document.createElement('div')
    overlay.id = 'page-transition-overlay'
    overlay.style.cssText = `
       position: fixed;
       z-index: 9999;
       inset: 0;
       pointer-events: none;
       display: flex;
    `

    for (let i = 0; i < STRIP_COUNT; i++) {
        const strip = document.createElement('div')
        strip.className = 'page-transition-strip'
        strip.style.cssText = `
            flex: 1;
            height: 100%;
            background-color: #010101;
            transform: ScaleY(0);
            transform-origin: bottom;
        `
        overlay.appendChild(strip)
    }

    document.body.appendChild(overlay)

    return overlay
}

const removeOverlay = ()=>{
    const element = document.getElementById('page-transition-overlay')
    if (element) {
        element.remove()
    }
}

const useViewTransition = () => {

    useEffect(() => {
        removeOverlay();
    }, []);

    const router = useRouter()

    const navigateTo = useCallback((href)=>{

         

       const overlay = createStrips()

       if (!overlay) {
            router.push(href);
            return;
        }

       const strip = Array.from(overlay.children)

         gsap.to(strip, {
         scaleY: 1,
         duration:0.5,
         ease:"power3.inOut",
            stagger:{
                each:0.06,
                from: "random"
            },
            onComplete: ()=>{
            router.push(href)

            gsap.to(strip,{
                scaleY: 0,
                duration:0.5,
                ease:"power3.inOut",
                delay:0.3,
                 stagger:{
                each:0.06,
                from: "random"
                },
                transformOrigin:"top",
                onComplete: removeOverlay,
            })
            }
    })
    },[router])

   

  return { navigateTo }
}

export default useViewTransition