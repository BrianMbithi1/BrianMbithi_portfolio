const skills = ["HTML", "CSS", "Javascript", "Python"];
 const skillsList = document.getElementById("skills-list");

 skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
 });

 const projects = [
   {
      title: "Delta eSports",
      description: "A website for a growing eSports Organisation",
      tech: "HTML, CSS, Javascript",
 },
   {
      title: "Adventures in Fire Island",
      description: "A HTML page with multiple sections and external css",
      tech: "HTML, CSS",
 },
   {
      title: "Inventory Management",
      description: "A project for testing javascript functions knowledge",
      tech: "Javascript",
 },
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach((project) => {
   const card = document.createElement("div");
   card.classList.add("project-card");

   const title = document.createElement("h3");
   title.textContent = project.title;

   const description = document.createElement("p");
   description.textContent = project.description;
   
   const tech = document.createElement("p");
   tech.classList.add("tech");
   tech.textContent = project.tech;

   if (project.link && project.link !== "#") {
      const link = document.createElement("a");
      link.href = project.link;
      link.textContent = "View project";
      link.target = "_blank";
      link.rel = "noopener";
      card.appendChild(link);
}
projectsContainer.appendChild(card);
});
