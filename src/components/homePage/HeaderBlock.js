import React from "react"
import bannerImg from "../images/banner.png"
import gitHubImg from '../images/github.svg'
import lightImg from '../images/light-bulb.svg'
import { navigate} from "gatsby"

const HeaderBlock = () => {
  return (
    <div
      class="flex lg:flex-row sm: flex-col sm: flex-col-reverse  sm: py-5 sm: mt-5 lg:mt-0"
      style={{
        background: "linear-gradient( to right bottom, #022b29, #195d5a)",
      }}
    >
      <div class="flex flex-col col-md-6 w-full  sm:justify-center lg:py-10 ">
        <div class="lg:w-5/6 m-auto">

        <div class="flex flex-row lg:justify-start sm: justify-center ">
            <img src={lightImg} class="w-1/6 md:ml-5 lg:block sm: hidden" />
        <h1
            class="xl:text-8xl  lg:ml-2 lg:tracking-widest  text-yellow-500 lg:text-left lg:mt-4 font-extrabold sm:ml-6 sm:text-5xl sm:text-center xs: ml-2 xs: text-5xl xs: text-center "
        
          >
            LIGHTS
          </h1>
        </div>
         
          <p
            class="lg:text-xl lg:text-left xl:px-10 lg:px-5 m-2 sm:text-xl sm:px-2 sm:text-center xs: text-sm xs: px-5 xs: text-center"
            style={{ color: "lightgray" }}
          >
            React Native library to build ultra modern mobile applications.
            OpenSource and free for you build awesome looking apps with ease.
          </p>

          <div class="flex lg:flex-row lg:justify-start lg:mt-10 xl:ml-10 lg:ml-5  sm: flex-col sm: m-auto sm: mt-5">


          <div class=" bg-green-500 text-white rounded-md border-green-500 bg-transparent border-2 xl:p-2 lg:p-1 lg:m-2 sm: m-auto lg:w-2/6 sm:w-3/12  xs: w-2/6 xs: py-1 sm: my-1 flex flex-row justify-center sm:py-2 cursor-pointer align-middle"  onClick={()=>{navigate("/gettingStarted")}}>
              {/* <img src={gitHubImg} style={{height:"35px", width:40, marginLeft:"-10px"}} /> */}
              <p class="lg:text-xl sm:text-md" >Get Started</p>
            </div> 
            
            <a  href="https://github.com/pipesort/native-components" class=" text-white rounded-md border-white bg-transparent border-2 lg:p-1 xl:p-2 lg:m-2 sm: m-auto lg:w-2/6  sm:w-3/12  xs: py-1 xs: w-2/6 sm: my-1 flex flex-row lg:justify-center sm:py-2 cursor-pointer align-middle sm:justify-evenly xs: justify-center" target="_blank">
              <img src={gitHubImg} class="xs: w-6 xs: -ml-2 sm:w-6 sm:-mr-5 ml-2  lg:w-6 lg:-mr-5" />
              <p class="lg:text-xl sm:text-md lg:ml-6 sm:-ml-4 xs: px-2   " >GitHub</p>
            </a>
              
           

          </div>
        </div>
      </div>

      <div class="col-md-6 w-full sm: mt-10">
        <div class="flex flex-col sm: mb-5">
          <img src={bannerImg} class=" xl:w-8/12 lg:w-full m-auto sm:w-7/12 xs: w-12/12 " alt="banner img" />
        </div>
      </div>
    </div>
  )
}

export default HeaderBlock
