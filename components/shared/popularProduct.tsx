import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface Props {
  className?: string;
}

export const PopularProduct: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-[#FFFFFF]">
      <Carousel className="max-w-[1200px] max-h-[1396px] mx-auto my-auto ">
        <h1 className="">ПОПУЛЯРНЫЕ ТОВАРЫ</h1>
        <CarouselContent className=" flex items-center  ">
          <CarouselItem className=" flex justify-between">
            <img
              src="/product1.png"
              alt="product1"
              width="290px"
              height="300px"
            />
            <img
              src="/product2.png"
              alt="product2"
              width="290px"
              height="300px"
            />
            <img
              src="/product3.png"
              alt="product3"
              width="290px"
              height="300px"
            />
            <img
              src="/product4.png"
              alt="product4"
              width="290px"
              height="300px"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/product1.png"
              alt="product1"
              width="290px"
              height="300px"
            />
            <img
              src="/product2.png"
              alt="product2"
              width="290px"
              height="300px"
            />
            <img
              src="/product3.png"
              alt="product3"
              width="290px"
              height="300px"
            />
            <img
              src="/product4.png"
              alt="product4"
              width="290px"
              height="300px"
            />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
/*<Carousel className="ml-[125px] w-full max-w-xs">
      <CarouselContent>
        <Image src="/Logo.jpg" alt="logo" width={271} height={69} />
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>*/
