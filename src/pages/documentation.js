import React, { useEffect, useState } from 'react';
import Data from '../data/document.json';
import Layout from '../components/layout'
import SEO from "../components/seo"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Scrollspy from 'react-scrollspy'
import '../css/documentation.css'
import img from "../images/c.svg"
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const Documentation = () => {

    const [id, setid] = useState(img);
    const classes = useStyles();
    console.log("myid", id)


    useEffect(() => {

        const sectionMargin = 200;
        let currentActive = 0;
        const container = document.getElementById('container')
        const sections = document.querySelectorAll(".template__section");
        const menu_links = document.querySelectorAll(".template__nav-item a");
        function srl() {
            const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1
            let currentID = sections[current].getAttribute("id");
            setid(currentID)
        }
        // const x = document.addEventListener('click', () => {
        //     var btns = document.getElementById("maindiv");
        //     const v = btns.getElementsByTagName('div');
        //     console.log(v)
        //     for (var i = 0; i < v.length; i++) {
        //     
        //         var current = document.getElementById("subheadings");
        //         console.log(current)
        //     }
        // })

    })



    function a11yProps(index) {
        return {
            id: `subheadings`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }


    const arr = [];

    Data.map(items => {
        items.items.map(sub => {
            arr.push(sub.name)
        })
    })


    return (
        <Layout>
            <SEO title="Home" />
            <div class=" mt-20 w-full flex flex-row">
               
                    <div id='maindiv' class="col-md-4 flex flex-col w-1/6 mt-8 px-12 lg:block md:hidden sm: hidden ">
                    <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                        <p>Components</p>

                        {
                            Data.map(category => {
                                return (
                                    <div>
                                        <p>{category.category}</p>
                                        <ul>
                                            {

                                                category.items.map((subitem, index) => {
                                                    console.log(index)
                                                    return (

                                                        <li class="template__nav-item">
                                                            <a href={`#${subitem.name}`}>

                                                                <Tab label={subitem.name} {...a11yProps(index)} />

                                                            </a></li>
                                                    )
                                                }
                                                )}
                                        </ul>
                                    </div>
                                )
                            })
                        }</Tabs>
                </div>

                <div id="container" class="col-md-8 flex flex-col lg:w-5/6 sm: w-full" style={{ overflow: "scroll" }}>

                    {
                        Data.map(category => {
                            return (
                                <div class=" w-5/6 m-auto">
                                    {

                                        category.items.map((subitem) => {
                                            return (
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