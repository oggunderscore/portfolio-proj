import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {experience.map((experience) => 
          <li key={experience.id}>{experience.id}</li>, (
          
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{experience.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
