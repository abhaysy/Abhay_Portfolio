import React from "react";
import { education } from "../../data/Educations";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        {/* horizontal line */}
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        {/* Subtitle */}
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My Academic Background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle with School Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-16 h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "mr-auto pr-10" : "ml-auto pl-10"
              }`}
            >
              {/* School, Degree, Date */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-md sm:text-sm text-gray-300">
                  {edu.school}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
              </div>

              {/* Grade */}
              <p className="text-gray-300 font-semibold mb-2">
                Grade: <span className="text-purple-400">{edu.grade}</span>
              </p>

              {/* Description */}
              <p className="text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
