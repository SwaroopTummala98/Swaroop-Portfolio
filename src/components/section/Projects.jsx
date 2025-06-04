import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Beautiful Portfolio</h3>
              <p className="text-gray-400 mb-4">
                Beautiful Portfolio is a personal portfolio website I built using React and Vite. 
                It’s fully responsive and showcases my projects, skills, and contact information. 
                I used Tailwind CSS for modern, clean styling and implemented smooth scroll animations for a better user experience. 
                The contact form is integrated with EmailJS, allowing visitors to send messages directly to my email. 
                I automated the deployment process using GitHub Pages, so any updates I make are quickly reflected online. 
                This project helped me strengthen my skills in React, component-based architecture, and deploying modern web apps.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Email.js", "Tailwind CSS", "Github"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://swarooptummala98.github.io/Swaroop-Portfolio/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Projects →</a>
              </div>
        </div>
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">B Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Projects →</a>
              </div>
        </div>
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">C Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Projects →</a>
              </div>
        </div>
        </div>
        </div>
        </RevealOnScroll>
    </section>
}