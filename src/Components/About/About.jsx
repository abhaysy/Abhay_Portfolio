 import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-16 px-[7vw] font-sans"
    >
      <div className="flex flex-col items-center text-center max-w-3xl">
        {/* Greeting */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          Hi, I am
        </h1>

        {/* Name */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Abhay Singh Yadav
        </h2>

        {/* Skills Heading with Typing Effect */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
          <span className="text-white">I am a </span>
          <Typewriter
            words={[
              'Fullstack Developer',
              'Software Engineer',
              'UI/UX Designer',
              'Coder',
            ]}
            loop={0} // 0 = infinite
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
            cursor
            cursorStyle="|"
          />
        </h3>

        {/* About Me Paragraph */}
        <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            A B.Tech graduate from MNNIT in Electrical Engineering, with a passion for building scalable, user-focused applications and solving real-world problems through code. Beyond development, I enjoy the challenge of competitive programming, I hold a Knight badge on LeetCode (top 5%) and a peak Specialist rating on Codeforces (top 20%). I’m actively looking for opportunities to contribute, learn, and grow in challenging development environments. Let’s connect!
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1khTsIvHB-M_kgHc9zPwaiT0m7SVEGDsp/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default About;
