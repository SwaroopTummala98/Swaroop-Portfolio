import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                Hi, I'm Swaroop Tummala
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a Business Analyst with 4+ years of experience at LTIMindtree, 
            transitioning into a Software Development Engineer role. 
            I’m currently building my development portfolio using React,
            while strengthening my skills in DSA, Java, and system design. 
            My goal is to create scalable, user-focused software solutions that solve real-world problems.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)">View Projects</a>

                <a href="#contact" className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.2) hover:bg-blue-500/10 ">Contact ME</a>

            </div>
        </div>
        </RevealOnScroll>
    </section>

}