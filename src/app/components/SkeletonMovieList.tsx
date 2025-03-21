import { SkeletonCard } from "./SkeletonCard";

export const SkeletonMovieList = () => {
  return (
    <div className="px-[80px]">
      <div className="flex justify-between items-start pb-[32px]">
        <div className="w-[250px] h-[32px] bg-[#F4F4F5] rounded-lg shadow-md"></div>
        <div className="w-[165px] h-[36px] bg-[#F4F4F5] rounded-lg shadow-md"></div>
      </div>

      <div className="flex flex-wrap gap-[32px]">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};
