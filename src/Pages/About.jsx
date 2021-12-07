import Top2 from '../components/Top2';
import Skills from '../components/Skills';
import React from 'react'
import Footer from '../components/Footer';
import Download from '../components/Download';

export default function About() {
    return (
        <div className="body">
            <Top2 />
            <Skills />
            <Download />
            <Footer />
        </div>
    )
}