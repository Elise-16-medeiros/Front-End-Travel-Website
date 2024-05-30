import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="font-title bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 text-gray-30 mt-6 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 md:flex-row">
          <Button className="btn_green">Download App</Button>
          <Button className="btn_white_text">
            <Image
              src="/play.svg"
              alt="play"
              width={25}
              height={25}
              className="mr-1"
            />
            How we work?
          </Button>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <Card className="bg-green-90 relative z-20 w-[268px] flex-col gap-8 rounded-3xl">
          <CardHeader>
            <CardTitle className="regular-16 text-gray-20 flex items-center justify-between gap-x-28">
              Location
              <X />
            </CardTitle>
            <CardDescription className="bold-20 text-white">
              Aguas Calientes
            </CardDescription>
          </CardHeader>
          <CardContent className="flexBetween">
            <div>
              <p className="regular-16 text-gray-20 block">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div>
              <p className="regular-16 text-gray-20 block">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
