"use client";
import { MovieCard } from "./MovieCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type myTypes = {
  id: number;
  title: string;
  video: boolean;
  vote_average: number;
  poster_path: string | null;
};

export const MoreLikeList = ({}: any) => {
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const router = useRouter();

  const handleOneClick = (movieId: number) => {
    router.push(`/detail/${movieId}`);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/278/similar?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((res) => setMovieData(res.data.results))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div className="w-screen px-[180px] pt-[52px] pb-[82px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">More like this</h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
        >
          See more <ArrowRight />
        </Button>
      </div>

      <div className=" flex flex-wrap gap-8">
        {movieData?.slice(0, 5).map((value: any) => (
          <MovieCard
            key={value.title}
            title={value.title}
            id={value.id}
            image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
            rating={value.vote_average}
          />
        ))}
      </div>
    </div>
  );
};
