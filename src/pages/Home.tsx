import { Hero } from "../app/components/sections/Hero";
import { Music } from "../app/components/sections/Music";
import { Videos } from "../app/components/sections/Videos";
import { Gallery } from "../app/components/sections/Gallery";
import { About } from "../app/components/sections/About";
import { Booking } from "../app/components/sections/Booking";

export function Home() {
  return (
    <>
      <Hero />
      <Music />
      <Videos />
      <Gallery />
      <About />
      <Booking />
    </>
  );
}