"use client";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  instructor: string;
  isFeautred: boolean;
}

export function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (item: Course) => item.isFeautred
  );
  return (
    <>
      <div className="py-12 bg-black/[0.93] text-white">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Referral Buzz
            </span>{" "}
            Scalable AI.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((item) => (
              <div key={item.id} className="flex justify-center">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  {/* <Image
                    src={`/jordans.webp`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                  /> */}
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      {item.price}
                    </span>
                  </button>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View Jobs
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
