import React, {useEffect, useState} from 'react';
import Data from '../data/document.json';
import Layout from '../components/layout'
import SEO from "../components/seo"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Scrollspy from 'react-scrollspy'
import '../css/documentation.css'
import img from "../images/c.svg"


const Documentation = () =>{

    const [id, setid] = useState(img);

    console.log("myid",id)


    useEffect(()=>{

        const sectionMargin = 200;
        let currentActive = 0;
        const container = document.getElementById('container')
        const sections = document.querySelectorAll(".template__section");
        const menu_links = document.querySelectorAll(".template__nav-item a");
        function srl(){
            const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
            let currentID= sections[current].getAttribute("id");
            setid(currentID)
        }
        document.addEventListener("scroll", srl)
    })


    


    
    
    
    
    const arr = [];
    
    Data.map(items=>{
        items.items.map(sub=>{
            arr.push(sub.name)
        })
    })


    return(
        <Layout>
        <SEO title="Home" />
        <div class=" mt-20 w-full flex flex-row">
            <div class="col-md-4 flex flex-col w-1/6 mt-8 px-12 lg:block md:hidden sm: hidden ">
            <p>Components</p>

            {
            Data.map(category=>{
                return(
                    <div>
               <p>{category.category}</p>
               <ul>
                   {
                   
                   category.items.map((subitem) =>{
                       return(

                           <li class="template__nav-item"> <a href={`#${subitem.name}`}>{subitem.name}</a></li>
                       )
                   }
                   )}
</ul>
                </div>
                )
            })
        }
            </div>

            <div id="container" class="col-md-8 flex flex-col lg:w-5/6 sm: w-full" style={{maxHeight:"100vh", overflow:"scroll"}}>

            {
            Data.map(category=>{
                return(
                    <div class=" w-5/6 m-auto">
                   {
                   
                   category.items.map((subitem) =>{
                       return(
                        <div class="template__section" id={subitem.name}>
                        <br /><br /><br /> <br />
                        <p>{subitem.name}</p>
                        <p >{subitem.description}</p>

                        <SyntaxHighlighter language="javascript" style={docco}>
      {subitem.code}
    </SyntaxHighlighter>
                        </div>
                        
                        )
                   }
                   )}
                        </div>
                )
            })
        }



            </div>          
        </div>
</Layout>           
    )
}

export default Documentation