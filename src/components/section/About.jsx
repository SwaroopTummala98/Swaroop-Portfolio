import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const  skills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "JAVA", "SQL", "Power BI", "DSA"];
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate web Developer with expertise in building scalable and efficient web applications. Proficient in HTML, CSS, JavaScript, and React.js. Strong problem-solving skills and a commitment to delivering high-quality code. Eager to contribute to innovative projects and collaborate with cross-functional teams.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((tech, key) => (

                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">🏫Education </h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>Bachelor of Technology in Electronics and Communication</strong> - Gayatri Vidya Parishad College of Engineering, Visakhapatnam (2020 - 2024)
                                    </li>
                                </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">💼Experience</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">Business Analyst at LTIMindtree (2022-Present)</h4>
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            <li>Gathered requirements from clients based on their needs</li>
                                            <li> Documented the Business Requirements Document (BRD) and Business Process Document (BPD) for the tool
                                            we are developing</li>
                                            <li> Created user stories to facilitate understanding and implementation</li>
                                            <li>Developed workflows to streamline processes</li>
                                            <li>Tested the SAP SD workflow for invoice processing</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">SAP BW Consultant at LTIMindtree (2021-2022)</h4>
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            <li> Responsible for Data loading, process chain creation</li>
                                            <li>Maintaining reports in Analysis for office</li>
                                            <li> Troubleshooting Process chains</li>
                                            <li>Assisted in creating Info Objects, ADSO, Process Chains, Meta Chains, Open Hubs, Transformation Routines
                                            and DTP’s</li>
                                            <li>Collaborating with cross-functional team to identify and resolve issues, improve system performance and provide
                                            solutions to meet business requirements</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};