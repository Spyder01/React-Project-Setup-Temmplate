import fs from "fs";
import path from "path";

const pageName = process.argv[2];

fs.mkdir(path.join(`./src/views/${pageName}`), (err) => {
    if (err) throw err;

    fs.mkdir(path.join(`./src/views/${pageName}/styles`), err => {
        if (err) throw err;

        fs.writeFile(path.join(`./src/views/${pageName}/styles/${pageName}.scss`), "", (err) => {
            if (err) throw err;


        })
    })

    fs.writeFile(path.join(`./src/views/${pageName}/index.jsx`), Page(), (err) => {
        if (err) throw err;
    })


});


const Page = () => {
    return `
import React from "react";
import './styles/Home.scss';


const Page = ()=>{
    return (
        <></>
    );
}

export default Page;
    `
}