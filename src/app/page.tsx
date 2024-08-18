import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 items-center justify-center p-8 text-white  space-x-20">
        <div className="max-w-xl space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaLocationArrow className="w-8 h-8 text-cyan-400"  />
            </div>
            <h1 className="text-4xl font-bold">Ding Dong! Osh here.</h1>
            <p className="text-muted-foreground">
              I'm an aspiring scientific illustrator expertise in blender and illustrator. I'm also a recent graduate from IISER - Mohali.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/osh.jpg" 
            alt="osh's pic"
            width={256}
            height={256}
            className="rounded-l-lg"  
          />
        </div>
      </main>
    </>
  );
}
