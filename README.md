## Personal Portfolio website
The personal portfolio website aims to showcase the achievements, projects, tech stacks and contact information of the owner. This has been made through the following technologies listed below. 
Feel free the use the portfolio website to your own customization, just change the information in the `src/constants/index.js` folder. The javacript file contains that is to be reflected on the website.
- p.s : the website is still under development and just offers a minimun viable product (MVP)

## Getting started
1. Locate first the folder that you wanted to contain the repository in. Then perform cloning of repository. 
```
git clone https://github.com/SchadenKai/schadenkai.github.io.git
```
2. Access the contants javascript file which where you will input your information that you wished to be reflected on your website. This can be located in `src/constants/index.js`. The javascript file contains the following constant variables :
     - `blenderModel` - input the 3d model you wanted to reflect on your browser as a background
     - `threeJSConfig` - tweak on the three js configuration values. (model scale, position, and rotational speed)
     - `socialLinks` - contains your social media accounts, including the URL leading to it.
     - `skills` - this includes your tech stack, programming / templating languages, and tools and technologies
     - `awards` - includes the awards you have attained from the past
     - `projects` - your projects that can be visible on your repository which you are working / done working on.
     - `emailJSConfig` - replace the value with your following keys (service, templating, and public key)
3. Deploy your website with github pages. This is already integrated within the `.github/workflow` directory which automaated the building of the website and deploying it into Github which it can be understanded (ReactJS, and other framework project are typically not applicable for deployment within Github pages and needs to be compiled into a new branch, `gh-pages` branch.
4. Since the project contains Github Workflow, you need top configure your Github settings on setting permission for the workflow to read and write. Go to `Settings > Actions > General > Workflow Permission`
5. Configure your Github pages in the Github website. `Settings > Pages > Branch`. Change the branch into `gh-branch`.

## Technologies used: 
- Vite 
- ReactJS
- Bootstrap
- React Three / Fiber
- React Three / Drei
- EmailJS

## Integrations
- [ ] Responsiveness / Adaptive Design 
- [ ] More interactivity on the 3d model
- [x] Adaptable source code and folder structure
