
/* =====================================
   DEVELOPER PORTFOLIO
   Project Gallery
===================================== */

const projects = [
  {
    title: "3-Column Preview Card",
    description:
      "A responsive three-column layout featuring clean styling and modern card design.",
    folder: "3ColumnPreviewCardComponent",
    technologies: ["HTML", "CSS", "Sass"]
  },
  {
    title: "NFT Preview Card",
    description:
      "An NFT product preview component with interactive styling and a modern interface.",
    folder: "NFTCardFinal",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Order Summary",
    description:
      "A subscription order summary interface with pricing information and action buttons.",
    folder: "OrderSummaryFinal",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Product Preview Card",
    description:
      "A responsive product card with images, pricing, and interactive elements.",
    folder: "ProductPreviewCardFinal",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Profile Card",
    description:
      "A profile component displaying user information in a clean card layout.",
    folder: "ProfileCardFinal",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "QR Code Component",
    description:
      "A minimal QR code card with a responsive layout.",
    folder: "QRCodeFinal",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Recipe Page",
    description:
      "A structured recipe webpage with readable typography and responsive design.",
    folder: "Recipe Page Final",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Results Summary",
    description:
      "A results summary interface displaying scores and performance metrics.",
    folder: "Results Summary Final",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Social Links Profile",
    description:
      "A social profile page with accessible links and interactive buttons.",
    folder: "SocialLinksFinal",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Stats Preview Card",
    description:
      "A responsive statistics card featuring key metrics and modern layout techniques.",
    folder: "StatsPreviewCardComponent",
    technologies: ["HTML", "CSS"]
  }
];

/* =====================================
   GENERATE PROJECT CARDS
===================================== */

const projectsGrid = document.getElementById("projects-grid");

if (projectsGrid) {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const content = document.createElement("div");
    content.className = "project-content";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const techContainer = document.createElement("div");
    techContainer.className = "project-tech";

    project.technologies.forEach((tech) => {
      const tag = document.createElement("span");
      tag.className = "tech-tag";
      tag.textContent = tech;
      techContainer.appendChild(tag);
    });

    const links = document.createElement("div");
    links.className = "project-links";

    const demoLink = document.createElement("a");

    // Original projects are one folder above portfolio-v2.
    demoLink.href =
      "../" + encodeURIComponent(project.folder) + "/index.html";

    demoLink.textContent = "View Project →";
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";

    links.appendChild(demoLink);

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(techContainer);
    content.appendChild(links);

    card.appendChild(content);
    projectsGrid.appendChild(card);
  });
}

/* =====================================
   AUTOMATIC FOOTER YEAR
===================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
