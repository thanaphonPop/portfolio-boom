"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Create a member dashbord page for job applicants on the JOBBKK website.",
    title: "Frontend",
    description:
      "Create a page for job seekers who use the JOBBKK website that will have various systems to help users, such as a statistics system that can tell users various numbers, a job recommendation system to recommend jobs that are suitable for users, a menu for users to increase convenience, etc.",
    stack: [{name: "HTML 5",}, {name: "CSS 3",}, {name: "Javascript",}, {name: "PHP",}],
    image: "/assets/work/Screenshot_20250518_134512_Chrome.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Edit the Member Dashboard page for entrepreneurs on the JOBBKK website.",
    title: "Frontend",
    description:
      "Fix the page for entrepreneurs who use the JOBBKK website by adding a change function, adding a statistics system for entrepreneurs. Create a Tourguide system for entrepreneurs who use it for the first time.",
    stack: [{name: "HTML 5",}, {name: "CSS 3",}, {name: "Javascript",}],
    image: "/assets/work/Dashbord_I.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Create a hotel job search page on the JOBBKK website.",
    title: "Frontend",
    description:
      "Create a page for job seekers who want to find hotel jobs on the JOBBKK website.",
    stack: [{name: "HTML 5",}, {name: "CSS 3",}, {name: "Javascript",}],
    image: "/assets/work/Hotel.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Create a Treading search page for the JOBBKK website backend system.",
    title: "Frontend",
    description:
      "Create a page for adding words from the back-end system. Add it to the Treading search system on the main page of the JOBBKK website.",
    stack: [{name: "HTML 5",}, {name: "CSS 3",}, {name: "Javascript",}],
    image: "/assets/work/Screenshot_20250518_134304_Chrome.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity:0 }}
      animate={{ 
        opacity:1 ,
        transition:{ delay: 2.4, duration:0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <h3 className="text-[32px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>
              <p className="text-white/60">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index)=> {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border-t-2 border-white/20">
                {/* button */}
                {/* 
                <div className="flex items-center gap-4">
                  <Link href={project.github}>
                    <TooltipProvider deleyDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                        bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Live project
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={project.github}>
                    <TooltipProvider deleyDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                        bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Github repository
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
                */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=> {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center
                    items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full 
                      bg-black/10 z-10">

                      </div>
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image} 
                          fill
                          className="object-cover" 
                          alt="" 
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* button */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] 
                  flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;