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

