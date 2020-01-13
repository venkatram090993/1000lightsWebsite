import React from "react"
import guildImg from '../images/guide.svg'
import componentImg from '../images/browser.svg'
import themeImg from '../images/theme.svg'
import '../css/about.css'

const About = () => {
  return (
    <div class="flex flex-col m-auto">
      <div class="lg:w-5/6 m-auto sm: w-5/6">
        <h1 class="text-center lg:text-5xl sm: text-2xl font-bold">What is 1000 lights</h1>
        <p class="text-center lg:text-2xl mt-4 whitespace-pre-wrap sm: text-base" style={{ color: "#7C8088" }}>
          UI Kitten is a React Native implementation of Eva Design System. It
          contains a set of general purpose UI components styled in a similar
          way. You focus on business logic and the Kitten takes care of visual
          appearance. And the most awesome thing: the themes can be changed in
          the runtime, without any need of reloading the application.
        </p>
      </div>

      <div class="flex lg:flex-row lg:w-5/6 m-auto my-10 sm: flex-col sm: m-auto">

        <div class="box col-md-4 lg:m-5 lg:w-full md:w-full flex flex-col lg:p-2 m-auto sm: my-2 sm: w-5/6">
            <div>
            <img src={componentImg} alt="image" class="h-40 m-auto mt-10 mb-5"  />
            </div>
            <div class="flex flex-col justify-center">
                <h1 class="text-center text-xl sm: font-semibold lg:mt-5">Components</h1>
                <p class="text-center text-base mx-8 my-5 text-gray-600">Customizable Design System easily adaptable to your Brand. Available for Sketch and Figma with Mobile and Web component libraries.</p>
                
            </div>
        </div>

        <div class="box col-md-4 lg:m-5 lg:w-full md:full flex flex-col lg:p-2 m-auto sm: my-2 sm: w-5/6">
            <div>
            <img src={themeImg} alt="image" class="h-40 m-auto pl-10 mt-10 mb-5"  />
            </div>
            <div class="flex flex-col justify-center ">
            <h1 class="text-center text-xl sm: font-semibold lg:mt-5">Theme</h1>
                <p class="text-center text-base mx-8 my-5 text-gray-600">Customizable Design System easily adaptable to your Brand. Available for Sketch and Figma with Mobile and Web component libraries.</p>
                
            </div>
        </div>

        <div class="box col-md-4 lg:m-5 lg:w-full md:full flex flex-col lg:p-2 m-auto sm: my-2 sm: w-5/6">
            <div>
                <img src={guildImg} alt="image" class="h-40 m-auto pl-10 mt-10 mb-5"  />
            </div>
            <div class="flex flex-col justify-center ">
                  <h1 class="text-center text-xl sm: font-semibold lg:mt-5">Guide</h1>
                <p class="text-center text-base mx-8 my-5 text-gray-600">Customizable Design System easily adaptable to your Brand. Available for Sketch and Figma with Mobile and Web component libraries.</p>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
