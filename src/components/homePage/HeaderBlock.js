import React from "react"
import bannerImg from "../images/banner.png"
import gitHubImg from '../images/github.svg'
import { navigate} from "gatsby"

const HeaderBlock = () => {
  return (
    <div
      class="flex lg:flex-row sm: flex-col sm: justify-center sm: flex-col-reverse  sm: py-5 sm: mt-5 lg:mt-0"
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
            class="lg:text-2xl lg:text-left lg:px-10 m-2 sm: text-xl sm: px-2 sm: text-center sm: mt-5"
            style={{ color: "lightgray" }}
          >
            React Native library to build ultra modern mobile applications.
            OpenSource and free for you build awesome looking apps with ease.
          </p>
          <div class="flex lg:flex-row lg:justify-start lg:mt-5 lg:ml-10  sm: flex-col sm: m-auto sm: mt-5">


          <div class=" bg-green-500 text-white rounded-md border-green-500 bg-transparent border-2 p-2 lg:m-2 sm: m-auto lg:w-2/6  sm:w-3/12 xs: w-3/6 sm: my-1 flex flex-row justify-center cursor-pointer align-middle"  onClick={()=>{navigate("/gettingStarted")}}>
              {/* <img src={gitHubImg} style={{height:"35px", width:40, marginLeft:"-10px"}} /> */}
              <p class="lg:text-2xl sm:text-md" >Get Started</p>
            </div> 
            
            <a  href="https://github.com/pipesort/native-components" class=" text-white rounded-md border-white bg-transparent border-2 p-2 lg:m-2 sm: m-auto lg:w-2/6  sm:w-3/12 xs: w-3/6 sm: my-1 flex flex-row lg:justify-center cursor-pointer align-middle sm:justify-evenly xs: justify-around">
              <img src={gitHubImg} class="xs: w-6 sm:w-6  lg:w-8" />
              <p class="lg:text-2xl sm:text-md lg:ml-6 sm: -ml-4  " >GitHub</p>
            </a>
              
           

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
