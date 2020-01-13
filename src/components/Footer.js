import React from "react"
// import logo from "../images/footer-logo.png";
import logo from "../images/logo.svg"
import YouTubeIcon from "@material-ui/icons/YouTube"
import TwitterIcon from "@material-ui/icons/Twitter"
import { Link } from "gatsby"

function Footer() {
  return (
    <section
      class="mt-10"
      style={{ fontFamily: "montserrat", background: "rgb(255, 255, 255)" }}
    >
      <h3 class="text-center p-4">Built by Pipesort Technologies</h3>
      <div class="row flex">
        <div class=" col-md-4 w-full lg:p-8">
            <div>
                <img src={logo} alt="alt" class="m-auto w-1/6" />
            </div>
          {/* <ul class="lg:text-5xl lg:leading-none font-bold index ">
            <h4 class="lg:text-2xl" style={{ color: "#b7b7b7d4" }}>
              Company
            </h4>
            <li class="cursor-pointer index ">
              <Link to={"/ServicesPage/"}>Services </Link>
            </li>
            <li class="cursor-pointer ">
              {" "}
              <Link to={"/blog/"}>Blog </Link>
            </li>
            <li class="cursor-pointer ">
              <Link to={"/Training/"}>Training </Link>
            </li>
            <li class="cursor-pointer ">
              {" "}
              <Link to={"/ContactPage/"}>Contact </Link>
            </li>

          </ul> */}
        </div>
        <div class="col-md-4 w-full lg:p-8 lg:text-left lg:block md:block sm: hidden">
          {" "}
          <ul>
            <h4 class="lg:text-2xl">
              Services
            </h4>
            <li>
              <div class="text-left">
                <p class="font-bold">Web</p>
                {/* <div>
                  <p class="text-sm -mt-4">
                    ASP.NET, Postgresql, ES6 (JavaScript), Vue.js, Redis, MS SQL
                    Server (T-SQL), CSS, React.js, Node.js, PHP, Angular.js
                  </p> 
                </div> */}
              </div>
            </li>
            <li>
              <div class="text-left">
                <p class="font-bold">Mobile</p>
                {/* <div>
                  <p class="text-sm -mt-4">
                    React Native, NativeScript, Objective-C, Crossplatform ,
                    iOS, Android
                  </p>
                </div> */}
              </div>
            </li>
            <li>
              <p class="font-bold">QA</p>
            </li>
            <li>
              <p class="font-bold">Dedicated team</p>
            </li>
            <li>
              <p class="font-bold">Traning</p>
            </li>
          </ul>
        </div>
        <div class="col-md-4 w-full lg:p-8 mr-4">
          {" "}
          <ul>
            {/* <img src={logo}/> */}
            <h4 class="mt-4">Follow us @</h4>
            <div class="-mt-4 flex flex-row">
              <div class="m-2">
                {" "}
                <a
                  href="https://www.youtube.com/channel/UCE5FFEtQLTQu5r6icuPrd0A"
                  target="_blank"
                >
                  {" "}
                  <YouTubeIcon />
                </a>
              </div>
              <div class="m-2">
                {" "}
                <a href="https://twitter.com/pipesort" target="_blank">
                  {" "}
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Footer
