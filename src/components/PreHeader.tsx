"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ShinyText from "./animated/ShinyText";

const PreHeader = () => {
  return (
    <div className="w-full bg-black h-10">
      <div className="flex items-center justify-center h-full">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[Autoplay({ delay: 5000 })]} // delay is in milliseconds
          className="w-full"
        >
          <CarouselContent className="">
            <CarouselItem className="w-full">
              <ShinyText
                className="text-sm w-full text-center"
                text="FREE WORLD WIDE SHIPPING ON ALL ORDERS"
              />
            </CarouselItem>
            <CarouselItem className="w-full">
              <ShinyText
                className="text-sm w-full text-center"
                text="WANT TO CONSIGN YOUR BAG? CONTACT US HERE!"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default PreHeader;
