import React from "react";

const CodeBlock = () => {
  return (
    <div className="bg-[#0f0b34] p-6 rounded-lg w-full lg:w-1/2 shadow-lg">
      <pre className="text-sm lg:text-base text-gray-300 overflow-x-auto">
        <span className="text-[#f9a826]">{`const`}</span> coder = {"{"}
        <br />
        {"  "}
        <span className="text-[#f9a826]">name</span>: <span className="text-[#16f2b3]">'Angad Yadav'</span>,
        <br />
        {"  "}
        <span className="text-[#f9a826]">skills</span>: [
        <br />
        {"    "}
        <span className="text-[#16f2b3]">'React'</span>,{" "}
        <span className="text-[#16f2b3]">'NextJS'</span>,{" "}
        <span className="text-[#16f2b3]">'Node'</span>,{" "}
        <span className="text-[#16f2b3]">'Express'</span>,
        <br />
        {"    "}
        <span className="text-[#16f2b3]">'NestJS'</span>,{" "}
        <span className="text-[#16f2b3]">'MySQL'</span>,{" "}
        <span className="text-[#16f2b3]">'MongoDB'</span>,{" "}
        <span className="text-[#16f2b3]">'JavaScript'</span>,
        <br />
        {"    "}
        <span className="text-[#16f2b3]">'Tailwind'</span>,{" "}
        <span className="text-[#16f2b3]">'MaterialUI'</span>,{" "}
        <span className="text-[#16f2b3]">'Python'</span>,{" "}
        <span className="text-[#16f2b3]">'Java'</span>,
        <br />
        {"    "}
        <span className="text-[#16f2b3]">'C#'</span>,{" "}
        <span className="text-[#16f2b3]">'Kotlin'</span>
        <br />
        {"  "}
        ],
        <br />
        {"  "}
        <span className="text-[#f9a826]">hardWorker</span>: <span className="text-[#16f2b3]">true</span>,
        <br />
        {"  "}
        <span className="text-[#f9a826]">quickLearner</span>: <span className="text-[#16f2b3]">true</span>,
        <br />
        {"  "}
        <span className="text-[#f9a826]">problemSolver</span>: <span className="text-[#16f2b3]">true</span>,
        <br />
        {"  "}
        <span className="text-[#f9a826]">hireable</span>: <span className="text-[#16f2b3]">function</span>(){" "}
        <span className="text-[#f9a826]">{"{"}</span>
        <br />
        {"    "}
        <span className="text-[#f9a826]">return</span> (
        <br />
        {"      "}this.<span className="text-[#f9a826]">hardWorker</span> &&
        <br />
        {"      "}this.<span className="text-[#f9a826]">problemSolver</span> &&
        <br />
        {"      "}this.<span className="text-[#f9a826]">skills</span>.length{" "}
        <span className="text-[#16f2b3]">=</span> <span className="text-[#f9a826]">5</span>
        <br />
        {"    "}
        <span className="text-[#f9a826]">)</span>;
        <br />
        {"  "}
        <span className="text-[#f9a826]">{"}"}</span>;
        <br />
        {"}"}
      </pre>
    </div>
  );
};

export default CodeBlock;
