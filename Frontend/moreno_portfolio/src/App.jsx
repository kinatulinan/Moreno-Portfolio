import { useState, useEffect } from 'react'
import './index.css'
import archiquestImg from './assets/archiquest.jpg'
import fitflowImg from './assets/fitflow.jpg'
import happymedImg from './assets/happymed.jpg'
import ukayImg from './assets/ukay.jpg'
import webflowImg from './assets/webflow projects.jpg'

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const sections = document.querySelectorAll('section')
            let current = ''
            sections.forEach(section => {
                const sectionTop = section.offsetTop
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id')
                }
            })
            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal')
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        }

        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    observer.unobserve(entry.target)
                }
            })
        }, revealOptions)

        revealElements.forEach(el => revealOnScroll.observe(el))

        setTimeout(() => {
            const heroReveals = document.querySelectorAll('#hero .reveal')
            heroReveals.forEach(el => el.classList.add('active'))
        }, 100)

        return () => revealElements.forEach(el => revealOnScroll.unobserve(el)) // clean up slightly loosely, ok for top level App
    }, [])

    const currentYear = new Date().getFullYear();

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="nav-content">
                    <a href="#hero" className="logo">KM<span>.</span></a>
                    <div className="nav-links">
                        <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
                        <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
                        <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
                        <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
                    </div>
                    <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
                    </button>
                </div>
                <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#skills" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                    <a href="#projects" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                    <a href="#contact" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                </div>
            </nav>

            <section id="hero" className="hero section">
                <div className="container">
                    <div className="hero-content reveal">
                        <p className="greeting">Hello, I am</p>
                        <h1 className="name">Kyle Ezekiel Moreno<span className="dot">.</span></h1>
                        <h2 className="role">Aspiring FullStack Developer</h2>
                        <p className="hero-description"></p>
                        <div className="hero-cta">
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href="#contact" className="btn btn-outline">Get In Touch</a>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/kinatulinan" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <i className="ph ph-github-logo"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/kyle-ezekiel-moreno-9a9543389/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <i className="ph ph-linkedin-logo"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse"></div>
                </div>
            </section>

            <section id="about" className="about section">
                <div className="container">
                    <h3 className="section-title reveal">About Me</h3>
                    <div className="about-grid reveal">
                        <div className="about-text">
                            <p>I aspire to be a full stack developer, I enjoy vibe coding and not totally be dependent on AI, but to learn from AI. I am also capable of adapting to new challenges and am also a agile learner. I can collaborate well on the team and provide quality and on or before deadline outputs dependent on the client's needs. I am also affable outside the professional setting, so don't be afraid to get to know me more :D.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills section">
                <div className="container">
                    <h3 className="section-title reveal">Technical Expertise</h3>
                    <div className="skills-grid">

                        <div className="skill-category reveal">
                            <div className="category-header">
                                <i className="ph ph-layout"></i>
                                <h4>Frontend Web & Design</h4>
                            </div>
                            <ul className="skill-list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>

                        <div className="skill-category reveal" style={{ transitionDelay: '100ms' }}>
                            <div className="category-header">
                                <i className="ph ph-device-mobile"></i>
                                <h4>Software & Mobile</h4>
                            </div>
                            <ul className="skill-list">
                                <li>React Native</li>
                                <li>Expo</li>
                                <li>Android Studio</li>
                            </ul>
                        </div>

                        <div className="skill-category reveal" style={{ transitionDelay: '200ms' }}>
                            <div className="category-header">
                                <i className="ph ph-database"></i>
                                <h4>Databases & Cloud</h4>
                            </div>
                            <ul className="skill-list">
                                <li>MySQL</li>
                                <li>Supabase</li>
                                <li>Firebase</li>
                                <li>Google Cloud</li>
                            </ul>
                        </div>

                        <div className="skill-category reveal" style={{ transitionDelay: '300ms' }}>
                            <div className="category-header">
                                <i className="ph ph-code"></i>
                                <h4>Programming</h4>
                            </div>
                            <ul className="skill-list">
                                <li>C & Java</li>
                                <li>PHP</li>
                                <li>Python (Django)</li>
                            </ul>
                        </div>

                        <div className="skill-category reveal" style={{ transitionDelay: '400ms' }}>
                            <div className="category-header">
                                <i className="ph ph-palette"></i>
                                <h4>Multimedia & Design</h4>
                            </div>
                            <ul className="skill-list">
                                <li>Canva</li>
                                <li>Figma</li>
                                <li>Webflow</li>
                            </ul>
                        </div>

                        <div className="skill-category reveal" style={{ transitionDelay: '500ms' }}>
                            <div className="category-header">
                                <i className="ph ph-server"></i>
                                <h4>Backend Development</h4>
                            </div>
                            <ul className="skill-list">
                                <li>Spring Boot</li>
                                <li>Node.js</li>
                                <li>FastAPI</li>
                            </ul>
                        </div>

                        <div className="skill-category reveal" style={{ transitionDelay: '600ms' }}>
                            <div className="category-header">
                                <i className="ph ph-sparkle"></i>
                                <h4>AI & Vibe Coding</h4>
                            </div>
                            <ul className="skill-list">
                                <li>Gemini & ChatGPT</li>
                                <li>Cursor & Antigravity</li>
                                <li>v0 & Claude Code</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section id="projects" className="projects section">
                <div className="container">
                    <h3 className="section-title reveal">Featured Projects</h3>
                    <div className="projects-grid">

                        <div className="project-card reveal">
                            <div className="project-image" style={{ backgroundImage: `url(${archiquestImg})` }}></div>
                            <div className="project-content">
                                <div className="project-meta"><span>Web Application</span> • <span>AI Integration</span></div>
                                <h4 className="project-name">Archiquest</h4>
                                <p className="project-desc">A full-stack capstone web application for architectural cost estimation. Revolutionizes cost analysis with AI-powered material pricing and smart tracking for educators and students. This was our capstone project, this is the project where we were really challenged, because it's a challenging type of project since it envolves real life cost estimation in buildings. Yet, we made it as a team and passed as a team, so it was a great milestone for us. My role here was being the Full-Stack Developer.</p>
                                <a href="https://github.com/immatchAA/cost-estimator" target="_blank" rel="noreferrer" className="project-link"><i className="ph ph-github-logo"></i> View Source</a>
                                <div className="project-tags">
                                    <span className="tag">React JS</span>
                                    <span className="tag">Python</span>
                                    <span className="tag">FastAPI</span>
                                    <span className="tag">Supabase</span>
                                    <span className="tag">Gemini API</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card reveal">
                            <div className="project-image" style={{ backgroundImage: `url(${fitflowImg})` }}></div>
                            <div className="project-content">
                                <div className="project-meta"><span>Mobile Application</span></div>
                                <h4 className="project-name">FitFlow</h4>
                                <p className="project-desc">A comprehensive fitness application offering personalized workout plans, smart meal suggestions, and activity tracking. Built specifically to motivate users through analytics and AI-driven plans. This was our second project, where we learned how to integrate web application and mobile application. My role here was being the Mobile Developer, and it was pretty challenging for me to integrate both frontend and backend to, but it was a great of a challenge.</p>
                                <a href="https://github.com/kimasaph/IT342_FitFlow" target="_blank" rel="noreferrer" className="project-link"><i className="ph ph-github-logo"></i> View Source</a>
                                <div className="project-tags">
                                    <span className="tag">HTML</span>
                                    <span className="tag">CSS</span>
                                    <span className="tag">React JS</span>

                                    <span className="tag">Kotlin</span>
                                    <span className="tag">Springboot</span>
                                    <span className="tag">MySQL</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card reveal">
                            <div className="project-image" style={{ backgroundImage: `url(${ukayImg})` }}></div>
                            <div className="project-content">
                                <div className="project-meta"><span>Web Application</span></div>
                                <h4 className="project-name">ProjectUkay</h4>
                                <p className="project-desc">This is our project in certain subject, where we also learned to integrate frontend and backend. Since all of us were into thrifting, this project is an e-commerce web application that users and buy and sell thrift clothes. My role here was being the Full-Stack Developer.</p>
                                <a href="https://github.com/kinatulinan/ProjectUkay" target="_blank" rel="noreferrer" className="project-link"><i className="ph ph-github-logo"></i> View Source</a>
                                <div className="project-tags">
                                    <span className="tag">JavaScript</span>
                                    <span className="tag">Java</span>
                                    <span className="tag">Springboot</span>
                                    <span className="tag">CSS</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card reveal">
                            <div className="project-image" style={{ backgroundImage: `url(${happymedImg})` }}></div>
                            <div className="project-content">
                                <div className="project-meta"><span>Web Application</span> • <span>POS System</span></div>
                                <h4 className="project-name">HappyMed Pharmacy</h4>
                                <p className="project-desc">A Point of Sale (POS) system currently being developed for our pharmacy business to manage sales, track inventory, and streamline day-to-day operations.</p>
                                <a href="https://github.com/kinatulinan/HappyMed" target="_blank" rel="noreferrer" className="project-link"><i className="ph ph-github-logo"></i> View Source</a>
                                <div className="project-tags">
                                    <span className="tag">HTML</span>
                                    <span className="tag">CSS</span>
                                    <span className="tag">JavaScript</span>
                                    <span className="tag">Java</span>
                                    <span className="tag">Springboot</span>
                                    <span className="tag">MySQL</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card reveal">
                            <div className="project-image" style={{ backgroundImage: `url(${webflowImg})` }}></div>
                            <div className="project-content">
                                <div className="project-meta"><span>UI / UX Design</span></div>
                                <h4 className="project-name">Webflow Collection</h4>
                                <p className="project-desc">These are the series of my webflow projects out of curiosity of Webflow.</p>
                                <a href="https://www.linkedin.com/in/kyle-ezekiel-moreno-9a9543389/" target="_blank" rel="noreferrer" className="project-link"><i className="ph ph-linkedin-logo"></i> View my webflow projects here</a>
                                <div className="project-tags">
                                    <span className="tag">Webflow</span>
                                    <span className="tag">Figma</span>
                                    <span className="tag">CSS Animations</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="contact" className="contact section">
                <div className="container">
                    <div className="contact-box reveal">
                        <h3 className="contact-title">Let's work together</h3>
                        <p className="contact-subtitle">Whether you have a project in mind or just want to say hi, my inbox is always open.</p>

                        <div className="contact-methods">
                            <a href="mailto:akosikyle505@gmail.com" className="contact-item">
                                <div className="contact-icon"><i className="ph ph-envelope-simple"></i></div>
                                <div className="contact-detail">
                                    <span className="label">Email</span>
                                    <span className="value">akosikyle505@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:09621650679" className="contact-item">
                                <div className="contact-icon"><i className="ph ph-phone"></i></div>
                                <div className="contact-detail">
                                    <span className="label">Phone</span>
                                    <span className="value">09621650679</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">KM<span>.</span></div>
                        <div className="footer-links">
                            <a href="https://github.com/kinatulinan" target="_blank" rel="noreferrer"><i className="ph ph-github-logo"></i></a>
                            <a href="https://www.linkedin.com/in/kyle-ezekiel-moreno-9a9543389/" target="_blank" rel="noreferrer"><i className="ph ph-linkedin-logo"></i></a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; <span>{currentYear}</span> Kyle Ezekiel Moreno. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App
