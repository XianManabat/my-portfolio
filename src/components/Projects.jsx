import { useState } from 'react'
import './Projects.css'

function Projects() {
    const [selectedProject, setselectedProject] = useState(null)

    const projectsData = [
        {
            id: 1,
            title: "Smartflow",
            image: "./src/assets/smartflow.png",
            shortDesc: "ESP32-based ventilation system with mobile app",
            caseStudy: {
                problem: "Poor air circulation in indoor spaces leading to health issues",
                solution: "Developed an IoT system that monitors air quality and automatically controls ventilation",
                techStack: ["ESP32", "React Native", "Arduino", "MQTT"],
                challenges: "Battery optimization and real-time data sync",
                outcome: "30% reduction in energy consumption, improved air quality"
            }
        },
        {
            id: 2,
            title: "Line-Following Robot",
            image: "./src/assets/microP.png",
            shortDesc: "PID-controlled robot with 7 IR sensors",
            caseStudy: {
                problem: "Need for autonomous navigation in industrial settings",
                solution: "Built a robot that follows lines with PID control for smooth movement",
                techStack: ["Arduino", "C++", "PID Control", "IR Sensors"],
                challenges: "Tuning PID parameters for different speeds",
                outcome: "95% accuracy in line following at high speeds"
            }
        },
        {
            id: 3,
            title: "Digital Signal Processing Lab",
            image: "./src/assets/dsp.jpg",
            shortDesc: "Complete DSP tool: Sine waves, Sampling, Aliasing, Image Processing, Digital Filtering, FFT, Windowing, Z-Transform",
            caseStudy: {
                problem: "Engineering students need a comprehensive tool to understand complex DSP concepts",
                solution: "Developed an all-in-one DSP laboratory with interactive modules for every major concept",
                techStack: ["Python", "NumPy", "Matplotlib", "SciPy", "OpenCV", "Scikit-image"],
                features: [
                    "Sine Wave Generator - Adjustable frequency, amplitude, phase",
                    "Sampling & Aliasing - Visualize Nyquist theorem",
                    "Image Processing - Filters, edge detection, transformations",
                    "Digital Filtering - Low-pass, High-pass, Band-pass filters",
                    "DFT & FFT Analysis - Time to frequency domain conversion",
                    "Windowing Functions - Hamming, Hanning, Blackman windows",
                    "Z-Transform - Pole-zero plots and stability analysis"
                ],
                challenges: "Implementing accurate mathematical algorithms for real-time visualization",
                outcome: "Interactive learning tool used by 50+ students in DSP course"
            }
        },
        {
            id: 4,
            title: "My Portfolio Website",
            image: "./src/assets/portfolio.jpg",
            shortDesc: "Personal portfolio built with React",
            caseStudy: {
                problem: "Need to showcase my projects and skills",
                solution: "Built a responsive portfolio with project cards, modal popups, and admin panel",
                techStack: ["React", "Vite", "CSS", "React Icons"],
                challenges: "Modal implementation and responsive design",
                outcome: "Live portfolio deployed on Vercel"
            }
        }
    ]

    const openModal = (project) => {
        setselectedProject(project)
        document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setselectedProject(null)
        document.body.style.overflow = "auto"
    }

    return(
        <div className='projects'>
            <div className='dividerLine'>
                <span className='divider-text'>Projects</span>
                <div className='divider-line'></div>
            </div>

            <div className='projectCards'>
                {projectsData.map(project => (
                    <div 
                        key={project.id}
                        className='projectTab'
                        onClick={() => openModal(project)}
                    >
                        <img src={project.image} alt={project.title}/>
                        <h3>{project.title}</h3>
                        <p className='description'>{project.shortDesc}</p>
                        <button className='viewBtn'>View Case Study</button>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <button className='modal-close' onClick={closeModal}>✕</button>
                        
                        <h2>{selectedProject.title}</h2>
                        
                        <div className='case-study'>
                            <div className='case-section'>
                                <h3>Problem</h3>
                                <p>{selectedProject.caseStudy.problem}</p>
                            </div>
                            
                            <div className='case-section'>
                                <h3>Solution</h3>
                                <p>{selectedProject.caseStudy.solution}</p>
                            </div>
                            
                            <div className='case-section'>
                                <h3>Tech Stack</h3>
                                <div className='tech-tags'>
                                    {selectedProject.caseStudy.techStack.map((tech, index) => (
                                        <span key={index} className='tech-tag'>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Features section - only show if features exist */}
                            {selectedProject.caseStudy.features && (
                                <div className='case-section'>
                                    <h3>Features</h3>
                                    <ul className='features-list'>
                                        {selectedProject.caseStudy.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            <div className='case-section'>
                                <h3>Challenges</h3>
                                <p>{selectedProject.caseStudy.challenges}</p>
                            </div>
                            
                            <div className='case-section'>
                                <h3>Outcome</h3>
                                <p>{selectedProject.caseStudy.outcome}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects