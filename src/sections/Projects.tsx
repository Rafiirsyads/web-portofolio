"use client";
import { useState } from "react";
import PDFViewer from "./PDFViewer";
import { image } from "framer-motion/client";

const projects = [
  {
    title: "Portofolio",
    description: "A collection of my academic and personal projects",
    image: "project-portofolio.png",
    role: "Featured Works",
    githubLink: "https://github.com/Rafiirsyads/web-portofolio"
  },
  {
    title: "KoolStock",
    description: "Stock Management System for PT. Koolzone Indonesia",
    role: "Project Owner",
    image: "KoolStock.png",
    link: "https://koolstock.vercel.app",
    prdDocument: "/document/PRD_KoolStock.pdf" 
  },
  {
    title: "UrbanRayaJakarta",
    description: "Digital family vacation solution with AI-powered chatbot and travel recommendations.",
    role: "AI/ML Engineer",
    image: "UrbanRayaJakarta.png",
    githubLink: "https://github.com/hikari-propen/Reccomendation_system",
    huggingfaceLink: "https://devinfaiz-chatbot.hf.space/"
  },
  {
    title: "Used Car Sales Analysis",
    description: "Analysis of key factors affecting used car profitability, sales speed, and customer feedback using classification, regression, and clustering models.",
    role: ["University Project", "Artificial Intelligence / Machine Learning"],
    image: "UCS Cover.png",
    prdDocument: "/document/Kasbobby - UCS.pdf"
  },
];

export default function Projects() {
  const [showPDF, setShowPDF] = useState(false);
  const [currentPDFUrl, setCurrentPDFUrl] = useState("");
  const [currentPDFTitle, setCurrentPDFTitle] = useState("");
  const [currentDownloadName, setCurrentDownloadName] = useState("");

  const handleViewDocument = (prdUrl: string, projectTitle: string) => {
    setCurrentPDFUrl(prdUrl);
    setCurrentPDFTitle(`${projectTitle} - Product Requirements Document`);
    setCurrentDownloadName(`PRD_${projectTitle.replace(/\s+/g, '_')}.pdf`);
    setShowPDF(true);
  };

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-primary p-6 rounded-xl border border-gray-800">
            {project.image && (
              <div className="w-full aspect-video bg-gray-900 rounded-lg mb-4 overflow-hidden flex items-center justify-center p-2">
                <img 
                  src={`/images/${project.image}`} 
                  alt={project.title}
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Role Badge */}
            {project.role && project.role !== "-" && (
              <div className="mb-4 flex flex-wrap gap-2">
                {Array.isArray(project.role) ? (
                  project.role.map((singleRole, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-vibrant-lime/20 text-vibrant-lime border border-vibrant-lime/30"
                    >
                      {singleRole}
                    </span>
                  ))
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-vibrant-lime/20 text-vibrant-lime border border-vibrant-lime/30">
                    {project.role}
                  </span>
                )}
              </div>
            )}
            
            <div className="flex items-center gap-3">
              {/* Website Link Button */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-vibrant-lime/10 hover:bg-vibrant-lime/20 rounded-lg transition-colors group"
                  title="View Website"
                >
                  <svg className="w-5 h-5 text-vibrant-lime group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {/* GitHub Link Button */}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-600/10 hover:bg-gray-600/20 rounded-lg transition-colors group"
                  title="View GitHub Repository"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}

              {/* HuggingFace Link Button */}
              {project.huggingfaceLink && (
                <a 
                  href={project.huggingfaceLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-yellow-500/10 hover:bg-yellow-500/20 rounded-lg transition-colors group"
                  title="View HuggingFace Demo"
                >
                  <svg className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zM8.4 7.2c-.663 0-1.2.537-1.2 1.2v7.2c0 .663.537 1.2 1.2 1.2s1.2-.537 1.2-1.2V8.4c0-.663-.537-1.2-1.2-1.2zm7.2 0c-.663 0-1.2.537-1.2 1.2v7.2c0 .663.537 1.2 1.2 1.2s1.2-.537 1.2-1.2V8.4c0-.663-.537-1.2-1.2-1.2z"/>
                  </svg>
                </a>
              )}

              {/* PRD Document Button */}
              {project.prdDocument && (
                <button 
                  onClick={() => handleViewDocument(project.prdDocument, project.title)}
                  className="p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-colors group"
                  title="View PRD Document"
                >
                  <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {showPDF && currentPDFUrl && (
        <PDFViewer
          isOpen={showPDF}
          onClose={() => setShowPDF(false)}
          pdfUrl={currentPDFUrl}
          type="prd"
          title={currentPDFTitle}
          downloadFileName={currentDownloadName}
        />
      )}
    </section>
  );
}