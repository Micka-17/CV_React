import Top from '../components/Top';
import Skills from '../components/Skills';

import React from 'react'
import Footer from '../components/Footer';
import Download from '../components/Download';


export default function Home() {
    
    return (
    <div className="body">
        <Top />
        <Skills page = "home"/>
        <Download />
        <Footer />
    </div>
    )
}