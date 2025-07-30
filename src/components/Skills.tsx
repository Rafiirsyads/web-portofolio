const skills = ["JavaScript", "TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "Python"];

export default function Skills() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-primary rounded-full text-sm border border-vibrant.cyan">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
