document.addEventListener("DOMContentLoaded", () => {
  // Tab switching
  const buttons = document.querySelectorAll(".tab-nav button");
  const sections = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const tab = button.getAttribute("data-tab");
      sections.forEach(section => {
        section.classList.toggle("active", section.id === tab);
      });
    });
  });

  // Story Builder: generate a full story paragraph from scratch
  document.getElementById("continueStoryBtn").addEventListener("click", () => {
    const storyBox = document.getElementById("storyPrompt");

    const subjects = ["She", "He", "They", "The cat", "A girl", "An explorer", "The robot"];
    const verbs = ["found", "entered", "discovered", "followed", "built", "opened", "touched"];
    const objects = ["a glowing door", "a secret tunnel", "a floating island", "a magical book", "a talking tree", "a rainbow bridge", "a crystal orb"];
    const endings = [
      "and everything changed.",
      "that led to a new world.",
      "filled with sparkling stars.",
      "where dreams could come true.",
      "guarded by a friendly dragon.",
      "that whispered ancient secrets.",
      "with music playing in the air."
    ];

    let paragraph = "";
    for (let i = 0; i < 5; i++) {
      const subject = subjects[Math.floor(Math.random() * subjects.length)];
      const verb = verbs[Math.floor(Math.random() * verbs.length)];
      const object = objects[Math.floor(Math.random() * objects.length)];
      const ending = endings[Math.floor(Math.random() * endings.length)];
      paragraph += `${subject} ${verb} ${object} ${ending} `;
    }

    storyBox.value += "\n\n" + paragraph.trim();
  });
});
