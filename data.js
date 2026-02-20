const desktopData = {
    resume: {
        title: "Resume",
        content: `
            <div class="resume-content">
                <div style="display:flex;gap:10px;align-items:center;justify-content:space-between;">
                    <h2 style="margin:0;">Rohan</h2>
                    <a href="./resume/rohan_resume.pdf" download style="display:inline-block;padding:8px 12px;background:#0078d7;color:#fff;border-radius:4px;text-decoration:none;">Download</a>
                </div>
                <p>Full Stack Developer</p>
                <div style="margin-top:12px;height:450px;border:1px solid #eee;border-radius:6px;overflow:hidden;">
                    <iframe src="./resume/index.html"></iframe>
                </div>
            </div>
        `
    },
    about: {
        title: "About Me",
        content: `
            <div class="about-content">
                <p>Hi, I'm Rohan, a developer focused on building responsive, user-friendly web apps.</p>
                <p>I work with HTML, CSS, JavaScript, Bootstrap and the MERN stack. I enjoy designing REST APIs, implementing CRUD, and improving UX through debugging and problem solving.</p>
                <p>Recent projects include an E-commerce Website, a To-Do List Web App, a Garbage Reporting App built with MERN, and a Raspberry Pi–based assistive device for the blind.</p>
            </div>
        `
    },
    skills: {
        title: "Skills",
        content: `
            <div class="skills-content">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
                    <li>Basic Python</li>
                    <li>REST APIs, CRUD Operations</li>
                    <li>Git & GitHub</li>
                    <li>Responsive Web Design</li>
                    <li>Problem Solving & Debugging</li>
                </ul>
            </div>
        `
    },
    projects: {
        title: "Projects",
        content: `
            <div class="projects-content">
                <div class="project-item">
                    <h4>E-commerce Website</h4>
                    <p>Product listing, cart, and checkout with responsive UI.</p>
                </div>
                <div class="project-item">
                    <h4>To-Do List Web App</h4>
                    <p>CRUD tasks with local storage and clean interface.</p>
                </div>
                <div class="project-item">
                    <h4>Garbage Reporting App (MERN Stack)</h4>
                    <p>Report and track issues with authentication and REST APIs.</p>
                </div>
                <div class="project-item">
                    <h4>Raspberry Pi–Based Assistive Device for the Blind</h4>
                    <p>Hardware-software solution for accessibility and guidance.</p>
                </div>
            </div>
        `
    }
};
