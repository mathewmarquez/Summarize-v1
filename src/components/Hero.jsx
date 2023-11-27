import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-container" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/mathewmarquez/", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
      <span className="orange_gradient">Summarize</span> articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI</span>
      </h1>

      <h2 className="desc">
        Simplify all your readings with Summarize, an open-source article summarizer that transforms lengthy articles into clear and useful summaries. Add a URL in the section below to get a summarized version of the page:
      </h2>
    </header>
  );
};

export default Hero;
