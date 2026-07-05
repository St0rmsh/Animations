'use client';

import { useRef, useState } from 'react';

export default function Footer({ nextProject, handleClick }) {
    const containerRef = useRef(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <footer className="relative h-screen w-full bg-[#0a0a0a] text-[#f4f4f2] flex flex-col justify-between overflow-hidden">
            {/* top rule + eyebrow */}
            <div className="flex items-center justify-between px-8 md:px-16 pt-10">
                <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50">
                    Next Project
                </span>
                <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50">
                    05 / 05
                </span>
            </div>
            <div className="w-full h-px bg-[#f4f4f2]/10" />

            {/* main title */}
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={handleClick}
                className="relative flex-1 flex items-center justify-center cursor-pointer select-none px-6"
            >
                <h1
                    className="font-space-grotesk font-medium text-center leading-[0.95]
                    text-[13vw] md:text-[8vw] tracking-tight
                    transition-colors duration-500"
                    style={{
                        color: hovering ? '#f4f4f2' : '#f4f4f2cc',
                    }}
                >
                    {nextProject.title}
                </h1>

                {/* cursor-following badge */}
                <div
                    className="pointer-events-none absolute rounded-full bg-[#f4f4f2] text-[#0a0a0a]
                    flex items-center justify-center font-manrope text-sm tracking-wide uppercase
                    transition-transform duration-150 ease-out"
                    style={{
                        width: 120,
                        height: 120,
                        left: coords.x,
                        top: coords.y,
                        transform: hovering
                            ? 'translate(-50%, -50%) scale(1)'
                            : 'translate(-50%, -50%) scale(0)',
                        opacity: hovering ? 1 : 0,
                        transitionProperty: 'transform, opacity',
                    }}
                >
                    View →
                </div>
            </div>

            {/* bottom rule + hint */}
            <div className="w-full h-px bg-[#f4f4f2]/10" />
            <div className="flex items-center justify-center px-8 md:px-16 pb-10 pt-6">
                <p className="font-manrope text-xs md:text-sm text-[#f4f4f2]/40 tracking-wide">
                    Click anywhere to view the project
                </p>
            </div>
        </footer>
    );
}