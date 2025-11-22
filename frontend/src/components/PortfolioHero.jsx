// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "./Navbar";
// import CodeBlock from "./CodeBlock";
// import bg from "../assets/hero.svg";

// const PortfolioHero = () => {
//   return (
//     <div
//   className="min-h-screen bg-[#0c0e1e] text-white flex flex-col pt-20"
//   style={{
//     backgroundImage: `url(${bg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
// >
//       {/* <Navbar /> */}
//       <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between flex-1 px-8 lg:px-16 gap-8">
//         <motion.div
//           className="flex flex-col items-start"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.h2
//             className="text-4xl lg:text-6xl font-bold leading-tight"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//           >
//             Hello, <br />
//             This is <span className="text-[#f9a826]">Angad Yadav</span>, <br />
//             I'm a Professional <br />
//             <span className="text-[#16f2b3]">Software Developer.</span>
//           </motion.h2>

//           <motion.div
//             className="flex mt-6 space-x-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.4 }}
//           >
//             <a
//               href="#contact"
//               className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md flex items-center space-x-2"
//             >
//               <span>Contact Me</span>
//             </a>
//             <a
//               href="https://drive.google.com/file/d/1bfZjkhrLxbrcb7opxLWIfe1dECZZWLjE/view?usp=sharing"
//               download="AngadYadavResume.pdf"
//               className="bg-transparent border border-pink-500 hover:bg-pink-500 text-white py-2 px-4 rounded-md flex items-center space-x-2"
//             >
//               <span>Get Resume</span>
//             </a>
//           </motion.div>

//           <motion.div
//             className="flex mt-4 space-x-4 text-pink-400"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.6 }}
//           >
//             <a href="https://github.com/imangadydv" className="hover:text-white">
//               <i className="fab fa-github"></i>
//             </a>
//             <a href="https://www.linkedin.com/in/imangadydv/" className="hover:text-white">
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a href="https://instagram.com/im_angadydv" className="hover:text-white">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Right Section */}
       
//     <CodeBlock />
 
//       </div>
//     </div>
//   );
// };

// export default PortfolioHero;
// import React from "react";
// import { motion } from "framer-motion";
// import CodeBlock from "./CodeBlock";
// import bg from "../assets/hero.svg";

// const neonColors = ["#16f2b3", "#f9a826", "#00eaff", "#ff4ecd", "#fff200"];
// const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];

// const PortfolioHero = () => {
//   return (
//     <div
//       className="min-h-screen bg-[#0c0e1e] text-white flex flex-col pt-20"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex flex-col lg:flex-row items-center justify-between flex-1 px-8 lg:px-16 max-w-7xl mx-auto gap-12">
        
//         {/* Left Section */}
//         <motion.div
//           className="flex flex-col items-start bg-black/30 p-6 rounded-2xl backdrop-blur-md"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.h2
//             className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-sm"
//             style={{
//               color: randomColor,
//               textShadow: `0 0 8px ${randomColor}55`,
//             }}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//           >
//             Hi, I'm <br />
//             <span className="text-white">Angad Yadav</span>
//           </motion.h2>

//           <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-yellow-300 rounded-full mt-3"></div>

//           <motion.p
//             className="text-lg mt-4 text-gray-300 max-w-xl leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.4 }}
//           >
//             MERN Stack Developer | C++ DSA | Tech Community Leader <br />
//             I build performant and visually captivating web applications.
//           </motion.p>

//           <motion.div
//             className="flex mt-6 space-x-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.6 }}
//           >
//             <a className="bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded-md">
//               Contact Me
//             </a>
//             <a
//               href="https://drive.google.com/file/d/1bfZjkhrLxbrcb7opxLWIfe1dECZZWLjE/view?usp=sharing"
//               className="border border-pink-500 hover:bg-pink-500 py-2 px-4 rounded-md"
//             >
//               Get Resume
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Right Section: CodeBlock */}
//         <CodeBlock />
//       </div>
//     </div>
//   );
// };

// export default PortfolioHero;
// import React from "react";
// import { motion } from "framer-motion";
// import CodeBlock from "./CodeBlock";
// import bg from "../assets/hero.svg";

// const PortfolioHero = () => {
//   return (
//     <div
//       className="min-h-screen bg-[#0c0e1e] text-white flex flex-col pt-24"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-10 py-10
//         bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.15)]"
//       >
//         {/* LEFT TEXT SECTION */}
//         <motion.div
//           className="flex flex-col w-full lg:w-[45%]"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-wide">
//             Hi, I’m
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
//               Angad Yadav
//             </span>
//           </h2>

//           <p className="text-gray-300 text-lg mt-4">
//             MERN Stack Developer • C++ DSA • Community Leader
//           </p>

//           <div className="h-[3px] w-36 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full mt-4"></div>

//           <div className="flex mt-6 space-x-4">
//             <a
//               href="#contact"
//               className="bg-pink-500 hover:bg-pink-600 py-2 px-5 rounded-md font-semibold shadow-lg transition-all"
//             >
//               Contact Me
//             </a>
//             <a
//               href="https://drive.google.com/file/d/1bfZjkhrLxbrcb7opxLWIfe1dECZZWLjE/view?usp=sharing"
//               className="border border-pink-500 hover:bg-pink-500 py-2 px-5 rounded-md font-semibold transition-all"
//             >
//               Get Resume
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT CODE BLOCK */}
//         <motion.div
//           className="w-full lg:w-[55%] flex justify-center"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           <CodeBlock />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioHero;

import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "./CodeBlock";
import bg from "../assets/hero.svg";

const PortfolioHero = () => {
  return (
    <div
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col pt-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between flex-1 px-8 lg:px-16 gap-10">

        {/* LEFT BLOCK */}
        <motion.div
          className="flex flex-col w-full lg:w-[45%] items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-bold leading-tight tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            Hello,
            <br />
            This is <span className="text-[#f9a826] drop-shadow-[0px_0px_1px_#f9a826]">Angad Yadav</span>,
            <br />
            I'm a Professional <br />
            <span className="text-[#16f2b3] drop-shadow-[0px_0px_1px_#16f2b3]">
              Software Developer.
            </span>
          </motion.h2>

          <motion.div
            className="flex mt-6 space-x-4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <a className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
              href="#contact"
            >
              Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/1bfZjkhrLxbrcb7opxLWIfe1dECZZWLjE/view?usp=sharing"
              className="border border-pink-500 hover:bg-pink-500 py-2 px-4 rounded-md transition-all duration-300"
            >
              Get Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex mt-6 space-x-5 text-[#f9a826] text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <a href="https://github.com/imangadydv" className="hover:text-white transition-all hover:scale-110">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/imangadydv/" className="hover:text-white transition-all hover:scale-110">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/im_angadydv" className="hover:text-white transition-all hover:scale-110">
              <i className="fab fa-instagram"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* CENTER DIVIDER LINE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="hidden lg:block w-[3px] h-72 bg-gradient-to-b from-pink-500 to-cyan-400 rounded-full shadow-[0_0_20px_#16f2b3]"
        />

        {/* RIGHT CODE BLOCK */}
        <motion.div
  className="w-full lg:w-[50%] flex justify-center items-center"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
  whileHover={{ scale: 1.02 }}
>
  <CodeBlock />
</motion.div>


      </div>
    </div>
  );
};

export default PortfolioHero;

