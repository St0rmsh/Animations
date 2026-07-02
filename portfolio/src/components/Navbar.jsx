import React from 'react'
import TextReveal from './TextReveal'

const Navbar = () => {
  return (
    <div className='w-full bg-red-400 px-[1.7rem] fixed top-0 left-0 h-[8vh] z-25 flex items-center justify-between'>
        <div className="leftNameSide  ">
            <TextReveal>
                <h3 className='text-[1.4rem] uppercase '>
                    Sujit  Kumar
                </h3>
            </TextReveal>

        </div>
        <div className="rightLinkSide flex items-center justify-between gap-6">
             <TextReveal>
                 <h3 className='text-[1.02rem] uppercase'>
                 Home
                 </h3>
             </TextReveal>

               <TextReveal>
                 <h3 className='text-[1.02rem] uppercase'>
                 About
                 </h3>
             </TextReveal>

               <TextReveal>
                 <h3 className='text-[1.02rem] uppercase'>
                 Contact
                 </h3>
             </TextReveal>
        </div>

    </div>
  )
}

export default Navbar