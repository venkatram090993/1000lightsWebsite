import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './layout.css'


const InstallationSteps = () => {

const codeString = `import React from 'react'; 
import { Button } from 'react-native-ui-kitten'; 
export const AwesomeButton = () => (<Button>BUTTON</Button>);`;

const codeString2=`npm i react-native-ui-kitten @eva-design/eva`


  return (
    <div class="flex lg:flex-row justify-center my-10 lg:w-5/6 m-auto sm: w-4/5 sm: flex-col">

      <div class="back col-md-6 lg:py-20 w-full flex flex-col justify-center sm: py-10" style={{background: "linear-gradient(to right top, #022b29, #195d5a)"}}> 
          <h1 class="lg:text-5xl text-center text-white font-bold lg:my-10 sm: text-2xl sm: m-5">How to <br /> use 1000 Lights</h1>
          <button class="lg:text-xl w-2/6 p-1 rounded-lg text-white m-auto bg-green-600">Get Started</button>
          </div> 

          <div class="col-md-6 bg-gray-400 lg:py-20 w-full flex flex-col justify-center px-5">
      <div class="py-2">
          <p class="text-xl py-2">1. Install the UI Kitten package from the NPM</p>
          <SyntaxHighlighter language="javascript" style={docco}>
      {codeString2}
    </SyntaxHighlighter>
          </div>
          <div class="py-2">
          <p class="text-xl py-2">2. Import the component and use it in your project
</p>
          <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
          </div>
          
      </div>
    </div>
  )
}

export default InstallationSteps
