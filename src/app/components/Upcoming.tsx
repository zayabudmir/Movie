"use client";
import { Slide } from "./Slide";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const movies = [
  { title: "Dear Santa", image: "Slide 4_3 - 1.png", rating: 6.9 },
  {
    title: "How To Train Your Dragon Live Action",
    image: "Slide 4_3 - 1 (1).png",
    rating: 6.9,
  },
  { title: "Alien Romulus", image: "Slide 4_3 - 1 (2).png", rating: 6.9 },
  { title: "From the Ashes", image: "Slide 4_3 - 1 (3).png", rating: 6.9 },
  { title: "Space Dogg", image: "Slide 4_3 - 1 (4).png", rating: 6.9 },
  { title: "The Order", image: "Slide 4_3 - 1 (5).png", rating: 6.9 },
  { title: "Y2K", image: "Slide 4_3 - 1 (6).png", rating: 6.9 },
  {
    title: "Solo Leveling: ReAwakening",
    image: "Slide 4_3 - 1 (7).png",
    rating: 6.9,
  },
  { title: "Get Away", image: "Slide 4_3 - 1 (8).png", rating: 6.9 },
  {
    title: "Sonic the Hedgehog 3",
    image: "Slide 4_3 - 1 (9).png",
    rating: 6.9,
  },
];

export default function Upcoming() {
  return (
    <div className="max-w-6xl mx-auto px-[8opx] pt-[52px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">Upcoming</h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
        >
          See more <ArrowRight />
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[32px]">
        {movies.map((movie, index) => (
          <Slide
            key={index}
            title={movie.title}
            image={movie.image}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}
