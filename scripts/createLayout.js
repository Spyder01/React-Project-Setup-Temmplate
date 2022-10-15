import fs from "fs";
import path from "path";

const pageName = process.argv[2];

fs.mkdir(path.join(`./src/layouts/${pageName}`), (err) => {
    if (err) throw err;

    fs.mkdir(path.join(`./src/layouts/${pageName}/styles`), err => {
        if (err) throw err;

        fs.writeFile(path.join(`./src/layouts/${pageName}/styles/${pageName}.scss`), "", (err) => {
            if (err) throw err;
        })
    })

    fs.writeFile(path.join(`./src/layouts/${pageName}/index.jsx`), Page(), (err) => {
        if (err) throw err;
    })


});


const Page = () => {
    return `
import React from "react";
import useDocumentTitle from 'use-document-title';

import './styles/Home.scss';


const Component = ({children, title})=>{
    useDocumentTitle (title);

    return (
        <>
        {children}
        </>
    );
}

export default Component;
    `
}