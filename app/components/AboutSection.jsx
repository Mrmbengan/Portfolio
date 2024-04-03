"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Express.js</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Prisma</li>
                <li>DataGrid</li>
                <li>SQL</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Python</li>
                <li>PHP</li>
                <li>WordPress</li>
            </ul>
        ),

    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Higher Vocational Education Frontend Developer / Borås YrkesHögskola</li>
                <li>Advanced Management / Eazl</li>
                <li>Technical Advisor/ Peugeot Örebro</li>
                <li>Certified Car Mechanic / Hulebäcks gymnasiet</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Higher Vocational Education Diploma for Frontend Developer</li>
                <li>Advanced Management / Eazl</li>
            </ul>
        ),
    },


];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl-px-16'>
            <Image src="/images/computer.png" width={500} height={500} alt="computer" />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold mb-4 text-white'>About Me</h2>
                <p className='text-base md:text-lg py-4'>I am a Frontend Developer and Fullstack JS Developer with a passion for creating interactive and responsive web applications.
                 I have experience working with JavaScript, TypeScript, React, Next.js, Express.js , Redux, Node.js, MongoDB, Mongoose, Prisma, DataGrid, SQL.
                  Tailwind CSS, Bootstrap, and other front-end technologies.
                  Also Python who was my first love of coding and PHP with WordPress. 
                  I am a quick learner and i am always looking for new challenges to improve my skills.
                  I am a Team player and i am excited to work with others to create amazing applications.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} > {" "}Skills{" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} > {" "}Education{" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"} > {" "}Certifications{" "} </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection