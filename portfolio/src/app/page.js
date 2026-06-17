import TextReveal from "@/components/TextReveal";
import Image from "next/image";

export default function Home() {
  return (
   <main className="flex h-[400vh] flex-col items-center justify-between p-54 w-full">
    <div className="h-[50%]"></div>
      <TextReveal splitBy="chars" trigger="scroll" className="text-5xl font-bold">
        Hello EveryOne
      </TextReveal>
   </main>
  );
}
