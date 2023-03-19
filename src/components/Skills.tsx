const Skills = () => {
  return (
    <section className="mt-8 w-full max-w-[65ch]">
      <h2 className="mb-6 text-2xl font-black text-content-text">Skills</h2>
      <ul className="">
        <li className="text-content-text">
          <span className="font-bold">Languages:</span> JavaScript, TypeScript,
          HTML, CSS, Python, C#
        </li>
        <li className="text-content-text">
          <span className="font-bold">Frameworks:</span> React, Next.js,
          Node.js, Express, Django, Bootstrap, TailwindCSS
        </li>
        <li className="text-content-text">
          <span className="font-bold">Databases:</span> MongoDB, PostgreSQL,
          SQLite
        </li>
        <li className="text-content-text">
          <span className="font-bold">Tools:</span> Git, GitHub, VS Code, Figma
        </li>
      </ul>
    </section>
  );
};

export default Skills;
