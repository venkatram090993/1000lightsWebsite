import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

const InstallationSteps = () => {
  const codeString = `import React from 'react';
import SelectBox from 'react-native-1000lights/ColoredCards';
export const AwesomeButton = () => (<SelectBox options={options} data={data} />);`

  const codeString2 = `npm i react-native-1000lights`

  return (
    <div class="flex lg:flex-row justify-center my-10 lg:w-5/6 m-auto sm: w-4/5 sm: flex-col">
      <div
        class="back col-md-6 lg:py-20 w-full flex flex-col justify-center sm: py-10"
        style={{
          background: "linear-gradient(to right top, #022b29, #195d5a)",
        }}
      >
        <h1 class="lg:text-5xl text-center text-white font-bold lg:my-10 sm: text-4xl sm: m-5">
          How to <br /> use 1000 Lights
        </h1>
        <button class="lg:text-xl lg:w-2/6 lg:p-1 rounded-lg text-white m-auto bg-green-600 sm: w-3/6 sm: p-2">
          Get Started
        </button>
      </div>

      <div class="col-md-6 bg-gray-400 lg:py-10 w-full flex flex-col justify-center px-5 sm: py-10">
        <div class="lg:py-2">
          <p class="text-xl lg:py-2 sm: py-5">
            1. Install the 1000lights package from the NPM or Yarn
          </p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString2}
          </SyntaxHighlighter>
        </div>
        <div class="lg:py-2">
          <p class="text-xl lg:py-2 sm: py-5">
            2. Import the component and use it in your project
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
