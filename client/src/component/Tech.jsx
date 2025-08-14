import React from 'react'
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiPostman, SiFirebase, SiFlutter } from 'react-icons/si'

const Tech = () => {
    const frontend = [
        { name: 'React', icon: <FaReact className="text-blue-500 text-4xl" /> },
        { name: 'Flutter', icon: <SiFlutter className="text-blue-400 text-4xl" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    ]

    const backend = [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-700 text-4xl" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-400 text-4xl" /> },
    ]

    const tools = [
        { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-600 text-4xl" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500 text-4xl" /> },
    ]

    return (
        <section className="mt-10 max-w-6xl mx-auto px-4">
            <h2 data-aos="zoom-in" className="text-3xl font-bold text-center text-blue-600 mb-4">Tech I Use</h2>

            <p data-aos="zoom-in" className="max-w-3xl mx-auto text-center text-gray-700 mb-10 px-4">
                Using modern tools and frameworks, I build fast, scalable, and beautiful apps that bring your ideas to life.
            </p>

            <div className="grid sm:grid-cols-3 gap-10 text-center">
                {/* Frontend */}
                <div>
                    <h3 data-aos="zoom-in" className="text-xl font-semibold mb-3">Frontend</h3>
                    <div data-aos="zoom-in" className="flex flex-col gap-4 items-center">
                        {frontend.map((tech) => (
                            <div key={tech.name} className="flex flex-row border w-full sm:w-60 px-3 py-3 rounded-4xl items-center">
                                {tech.icon}
                                <p className="ml-4 text-gray-700">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div>
                    <h3 data-aos="zoom-in" className="text-xl font-semibold mb-3">Backend</h3>
                    <div data-aos="zoom-in" className="flex  flex-col gap-4 items-center">
                        {backend.map((tech) => (
                            <div key={tech.name} className="flex flex-row border w-full sm:w-60 px-3 py-3 rounded-4xl items-center">
                                {tech.icon}
                                <p className="ml-4 text-gray-700">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <h3 data-aos="zoom-in" className="text-xl font-semibold mb-3">Tools & Others</h3>
                    <div data-aos="zoom-in" className="flex flex-col gap-4 items-center">
                        {tools.map((tech) => (
                            <div key={tech.name} className="flex flex-row border w-full sm:w-60 px-3 py-3 rounded-4xl items-center">
                                {tech.icon}
                                <p className="ml-4 text-gray-700">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tech
