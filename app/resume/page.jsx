"use client"

import { Description } from '@radix-ui/react-dialog';
import {
  FaHtml5, 
  FaCss3, 
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs} from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

// about data
const about = {
  title: 'About me',
  description:
  "lorem ispdl sit amt consectetur. adingpisicing elite reprehederit placear ipsm preferrance.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Thanaphon Maneerat"
    },
    {
      fieldName: "Phone",
      fieldValue: "099 301 7117"
    },
    {
      fieldName: "Experience",
      fieldValue: "1 year"
    },
    {
      fieldName: "Skype",
      fieldValue: "Thanaphon Maneerat"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Thailand"
    },
    {
      fieldName: "Email",
      fieldValue: "Thanaphon.maneerat@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "Thai, English",
    }
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience & Project',
  description:
  "I have experience in internship with JOBBKK Dot Com Recruitment Company Limited for 8 months.",
  items: [
    {
      company: "Create a member dashbord page for job applicants on the JOBBKK website.",
      position: "FrontEnd Developer",
    },
    {
      company: "Edit the Member Dashboard page for entrepreneurs on the JOBBKK website.",
      position: "FrontEnd Developer",
    },
    {
      company: "Create a hotel job search page on the JOBBKK website.",
      position: "FrontEnd Developer",
    },
    {
      company: "Create a Treading search page for the JOBBKK website backend system.",
      position: "FrontEnd Developer",
    },
    {
      company: "Create an introductory website with Next.js",
      position: "FrontEnd Developer",
    },
    {
      company: "Build a CNN model for rice classification",
      position: "FrontEnd Developer",
    },
  ]
};

//education data
const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My education',
  description:
  "lorem ispdl sit amt consectetur. adingpisicing elite reprehederit placear ipsm preferrance.",
  items: [
    {
      institution: "Walailak University",
      degree: "Computer Engineering and Artificial Intelligence",
      duration: "January 2020 - present"
    },
    {
      institution: "jobbkk dot com recruitment co. ltd",
      degree: "FrontEnd Developer",
      duration: "October 2024 - April 2025"
    },
    {
      company: "jobbkk dot com recruitment co. ltd",
      position: "FrontEnd Developer",
      duration: "October 2024 - April 2025"
    }
  ]
};

//skill data
const skills = {
  title: "My skills",
  description:
    "I have a skill in HTML 5, CSS3, JS, React.js, Next.js, tailwind.css and node.js ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
};

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity:0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:ms-0">
                  {experience.description}
                </p>
                 <ScrollArea className="h-[400px]">
                  {/*
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index)=>{
                        return (
                          <li 
                            key={index} 
                            className="bg-[#232329] h-[284px] py-6 px-10 rounded-xl 
                            flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <h3 className="text-accent text-xl max-w-[260px] min-h-[160px] text-center lg:text-left">
                              {item.company}
                            </h3>
                            <div className="flex items-center gap-3">
                              <p className="text-white/60">{item.position}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  */}
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:ms-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return (
                        <li 
                          key={index} 
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                          flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index)=>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p classname="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:txet-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume