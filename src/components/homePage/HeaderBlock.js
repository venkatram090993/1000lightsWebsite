import React from "react"
import bannerImg from "../images/banner.png"
const HeaderBlock = () => {
  return (
    <div
      class="flex lg:flex-row sm: flex-col sm: justify-center sm: flex-col-reverse  sm: py-5"
      style={{
        background: "linear-gradient( to right bottom, #022b29, #195d5a)",
      }}
    >
      <div class="flex flex-col col-md-6 w-full justify-center lg:py-10 ">
        <div class="lg:w-5/6 m-auto">
          {" "}
          <h1
            class="lg:text-6xl lg:text-left lg:pl-10 font-extrabold sm: text-3xl sm: text-center"
            style={{ color: "white" }}
          >
            1000 Lights
          </h1>
          <p
            class="lg:text-2xl lg:text-left lg:px-10 m-2 sm: text-base sm: text-center sm: mt-5"
            style={{ color: "gray" }}
          >
            React Native library to build ultra modern mobile applications.
            OpenSource and free for you build awesome looking apps with ease.
          </p>
          <div class="flex lg:flex-row lg:justify-start lg:mt-5 lg:ml-10  sm: flex-col sm: m-auto sm: mt-5">
            <button class=" text-white bg-green-500 rounded-lg  p-2  lg:m-2 lg:w-2/6 sm: m-auto sm: w-3/6 sm: my-1 ">
              Get Started
            </button>
            <button class=" text-white bg-green-500 rounded-lg  p-2  bg-green-500 lg:m-2 sm: m-auto lg:w-2/6 sm: w-3/6 sm: my-1">
              Git Hub
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-6 w-full sm: mt-10">
        <div class="flex flex-col sm: mb-5">
          <img src={bannerImg} class=" w-8/12 m-auto" alt="banner img" />
        </div>
      </div>
    </div>
  )
}

export default HeaderBlock
