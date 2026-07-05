"use client"
import TextReveal from '@/components/TextReveal'
import React from 'react'

const stack = [
    { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'GSAP', 'Three.js / R3F'] },
    { label: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Redis'] },
    { label: 'Infra', items: ['Kubernetes', 'Docker', 'Skaffold', 'RabbitMQ'] },
]

const AboutPage = () => {
  return (
    <main className="w-full bg-[#0a0a0a] text-[#f4f4f2] overflow-hidden">

        {/* section 1 — statement */}
        <section className="h-screen w-full flex items-center justify-center px-6 md:px-16">
            <div className="max-w-4xl">
                <TextReveal splitBy="words">
                    <h1 className="font-space-grotesk font-medium text-[8vw] md:text-[4.5rem] leading-[1.05] tracking-tight text-center">
                        I build interfaces that feel considered, not just functional.
                    </h1>
                </TextReveal>
            </div>
        </section>

        <div className="w-full h-px bg-[#f4f4f2]/10" />

        {/* section 2 — background */}
        <section className="h-screen w-full flex items-center px-6 md:px-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-[0.3fr_1fr] gap-10 items-start">
                <TextReveal>
                    <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50">
                        01 — Background
                    </span>
                </TextReveal>

                <TextReveal splitBy="words" delay="0.15">
                    <p className="font-manrope text-[1.4rem] md:text-[1.8rem] leading-[1.4] text-[#f4f4f2]/80 max-w-3xl">
                        I'm Sujit Kumar — a full-stack developer working across product UI, backend
                        services, and cloud-native infrastructure. My work spans everything
                        from designing motion-driven interfaces to standing up Kubernetes
                        microservices from scratch. I like projects that force me to go deep:
                        debugging a Redis TTL edge case one day, tuning a GSAP loop seam the next.
                    </p>
                </TextReveal>
            </div>
        </section>

        <div className="w-full h-px bg-[#f4f4f2]/10" />

        {/* section 3 — toolkit */}
        <section className="h-screen w-full flex items-center px-6 md:px-16">
            <div className="w-full">
                <TextReveal>
                    <span className="font-manrope text-xs md:text-sm tracking-[0.25em] uppercase text-[#f4f4f2]/50 mb-10 block">
                        02 — Toolkit
                    </span>
                </TextReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                    {stack.map((group) => (
                        <div key={group.label}>
                            <TextReveal>
                                <h3 className="font-space-grotesk text-[1.6rem] mb-4">
                                    {group.label}
                                </h3>
                            </TextReveal>
                            <ul className="space-y-2">
                                {group.items.map((item) => (
                                    <li key={item}>
                                        <TextReveal splitBy="words">
                                            <span className="font-manrope text-[1.05rem] text-[#f4f4f2]/60">
                                                {item}
                                            </span>
                                        </TextReveal>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <div className="w-full h-px bg-[#f4f4f2]/10" />

        {/* section 4 — closing / CTA */}
        <section className="h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 text-center">
            <TextReveal splitBy="chars">
                <h2 className="font-space-grotesk font-medium text-[7vw] md:text-[3.5rem] leading-[1.1] tracking-tight mb-6">
                    Let's build something considered.
                </h2>
            </TextReveal>
            <TextReveal delay="0.2">
                <a
                    href="/contact"
                    className="font-manrope text-sm tracking-[0.2em] uppercase border border-[#f4f4f2]/30 rounded-full px-8 py-3 hover:bg-[#f4f4f2] hover:text-[#0a0a0a] transition-colors duration-300"
                >
                    Get in touch
                </a>
            </TextReveal>
        </section>

    </main>
  )
}

export default AboutPage