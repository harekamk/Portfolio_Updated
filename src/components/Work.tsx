import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useRef } from "react";

interface Project {
  name: string;
  category: string;
  tools: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "Custom Git CLI",
    category: "CLI Tool",
    tools: "Node.js, JavaScript, Crypto (SHA-1), CLI Development",
    description:
      "Built a Git-like version control system from scratch in Node.js — implements commits, branching, staging, and checkout using content-addressable storage and SHA-1 hashing 🔧, replicating how Git works internally.",
    image: "/images/project-custom-git-cli.png",
  },
  {
    name: "Medicine Reminder & Expiry System",
    category: "Full-Stack MERN App",
    tools: "React, Node.js, Express, MongoDB, Tailwind CSS, Nodemailer, Leaflet (Maps), JWT Auth",
    description:
      "A full-stack MERN app that tracks medicine expiry dates, sends automated email reminders ⏰, and helps users locate nearby pharmacies on an interactive map.",
    image: "/images/project-medicine-reminder.png",
  },
  {
    name: "VibecheckLocal",
    category: "Civic-Tech Platform",
    tools: "React, Node.js, Express, MongoDB, Tailwind CSS, Leaflet (Maps), Chart.js, Appwrite (Auth), Cloudinary, Razorpay",
    description:
      "A civic-tech platform that lets citizens report local issues (potholes, broken streetlights, sanitation) 🚧 with GPS-tagged locations and AI-powered auto-categorization. Includes an interactive map, admin dashboard, community voting, and Razorpay-powered community funding.",
    image: "/images/project-vibechecklocal.png",
  },
  {
    name: "Nexus",
    category: "Real-Time Chat App",
    tools: "JavaScript, Node.js, Express, Socket.IO, WebSockets",
    description:
      "A real-time chat app built with Socket.IO 🔒 where users create private rooms and share a room code to let others join. Supports adding people mid-conversation, live active-user tracking, and timezone-aware message formatting.",
    image: "/images/project-nexus.png",
  },
  {
    name: "Attenza",
    category: "Frontend Utility App",
    tools: "React, JavaScript, Vite, HTML5, CSS3",
    description:
      "A frontend-only attendance tracker that calculates your current percentage and tells you exactly how many lectures you can safely skip ✅ while still hitting your minimum attendance criteria.",
    image: "/images/project-attenza.png",
  },
  {
    name: "Orbix",
    category: "AI Chatbot",
    tools: "React, JavaScript, Vite, HTML5, CSS3, Axios, Groq SDK",
    description:
      "An AI-powered chatbot web app with a clean, responsive interface ✨, using Groq's LLM API for fast AI responses.",
    image: "/images/project-orbix.png",
  },
  {
    name: "CareLens",
    category: "Category",
    tools: "Tech stack to be added",
    description: "Description to be added.",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  const flexRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const moved = useRef(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Let touch/pen use native swipe scrolling; only hijack the mouse
    // so desktop users can click-and-drag the row sideways.
    if (e.pointerType !== "mouse") return;
    const el = flexRef.current;
    if (!el) return;
    isDragging.current = true;
    moved.current = false;
    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.classList.add("work-dragging");
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = flexRef.current;
    if (!el || !isDragging.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 3) moved.current = true;
    el.scrollLeft = startScrollLeft.current - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = flexRef.current;
    if (!el || !isDragging.current) return;
    isDragging.current = false;
    el.classList.remove("work-dragging");
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      // pointer capture may already be released
    }
  };

  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent a dragged mouse-up from also firing a click on links/buttons
    // inside a work box.
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div
          className="work-flex"
          ref={flexRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
        >
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
