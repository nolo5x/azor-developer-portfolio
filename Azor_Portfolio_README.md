# Azor — Frontend Developer Portfolio

A personal portfolio showcasing **Azor's frontend development projects**, with a redesigned, visually distinctive interface and links to working project demos.

The portfolio brings together a collection of HTML and CSS practice projects in one place, making it easy to browse designs, explore individual pages, and see progress in frontend development.

## About the Portfolio

The updated portfolio uses a **retro-futuristic, cyber-inspired aesthetic** with dark backgrounds, neon accents, distinctive typography, and a project gallery. Each project card is designed to feature a preview, title, short description, and a link to the working implementation.

The redesign preserves the original projects while presenting them through a more cohesive portfolio experience.

## Featured Projects

| Project | Focus |
| --- | --- |
| 3-Column Preview Card | Multi-column card layout |
| NFT Preview Card | Image and content card design |
| Order Summary | Checkout-style summary component |
| Product Preview Card | Product presentation and responsive layout |
| Profile Card | Profile information component |
| QR Code | Simple centered component layout |
| Recipe Page | Long-form content and typography |
| Results Summary | Score summary interface |
| Social Links | Profile and social link layout |
| Stats Preview Card | Statistics-focused responsive card |

> Project titles describe the original collection. Open the individual project directories to explore their implementations.

## Features

- Portfolio landing page with a distinctive dark, neon-inspired design
- Project gallery with preview images, centered titles, and descriptions
- **View Project** links that open the actual rendered projects
- Responsive layouts for different screen sizes
- Separate project source files retained for exploration and learning

## Built With

- **HTML5** — page structure and semantic content
- **CSS3** — layout, responsive design, styling, and visual effects
- **Sass/SCSS** — used in parts of the original project collection
- **JavaScript** — where applicable to portfolio interactions

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
```

### 2. Open the portfolio

Open the portfolio's main `index.html` file in VS Code. If your redesigned site is in a `portfolio-v2` folder, open `portfolio-v2/index.html` instead.

### 3. Run with Live Server

For reliable project navigation, use the **Live Server** extension in VS Code:

1. Install the *Live Server* extension.
2. Open the repository's root folder in VS Code.
3. Right-click the portfolio's entry `index.html` file.
4. Select **Open with Live Server**.
5. Use **View Project** on a card to open the corresponding working demo.

**Tip:** Keep the original project directories in their existing relative locations. Moving the portfolio page without updating its links can cause project buttons to show source text, blank pages, or missing styles.

## Project Organization

The repository contains the **portfolio redesign** and the **original frontend project folders**. The exact folder names may vary depending on how the repository was uploaded.

```text
Azor-Portfolio/
├── portfolio-v2/          # Redesigned portfolio (if retained under this name)
│   ├── index.html
│   └── images/            # Project previews and other assets
├── [project folders]/     # Original HTML/CSS component projects
└── README.md
```

## Deployment

This is a static frontend portfolio and can be hosted with **GitHub Pages**.

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose `main` and the folder containing the published entry page (`/root` or `/docs`, depending on your repository layout).
5. Save and wait for deployment.

If the redesigned `index.html` is inside `portfolio-v2`, GitHub Pages will not automatically use it as the repository homepage when deploying from the root. Move or copy the entry page and adjust relative asset/project links, or configure an appropriate publishing folder.

**Live site:** Add your published URL here after deployment.

## Future Improvements

- Add screenshots and short technical notes for each project
- Add links to individual project source directories
- Improve keyboard navigation and accessibility checks
- Test all project links after deployment
- Add an About section and contact/social links approved by the portfolio owner

## Credits

Portfolio design and frontend projects by **Azor**. Some original component challenges may have been inspired by frontend practice exercises; include attribution and links to the challenge providers where required.

## License

No license is specified in this README. Add a `LICENSE` file if the owner chooses to grant reuse permissions.
