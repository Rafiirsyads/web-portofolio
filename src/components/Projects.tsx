const projects = [
  {
    title: "AI Chatbot for Tourism",
    description: "Built with NLP and deployed with Next.js & Hugging Face Spaces.",
    link: "#"
  },
  {
    title: "Project Management System",
    description: "Internal tool to centralize WSM process and approvals.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-primary p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-2">{project.description}</p>
            <a href={project.link} className="text-vibrant.lime hover:underline text-sm">View project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}