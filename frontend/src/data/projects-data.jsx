import img_transcendance from "../images/transcendance-screen.webp";
import img_portfolio from "../images/portfolio_v2.webp";
import vid_portal from "../videos/portal-scene-video.mp4";
import vid_portfolio from "../videos/portfolio-v1-video.mp4";
import vid_python_script from "../videos/python-script-video.mp4";
import vid_cub3d from "../videos/cub3d-video.mp4";
import vid_muse from "../videos/muse-video.mp4";

const projectsData = [
  {
    title: "Muse Coffee Shop",
    tag: "React,Typescript,Framer-motion",
    description: "A showcase website for a fictional café : Muse Coffee Shop.",
    websiteUrl: "https://muse-cafe.vercel.app/",
    githubUrl: "https://github.com/sohechai/muse_cafe",
    video: vid_muse,
    tags: "developer,designer,solo project",
  },
  {
    title: "Portfolio",
    tag: "React,framer-motion,gsap,TypeScript",
    description: "My actual Portfolio to showcase my projects.",
    websiteUrl: "https://sofia-hechaichi.com/",
    githubUrl: "https://github.com/sohechai/portfolio_v2",
    image: img_portfolio,
    tags: "developer,designer,solo project",
  },
  {
    title: "Transcendance",
    tag: "React,Redux,Styled Component,NestJS,TypeScript",
    description:
      "Full-stack Pong game website with an integrated text chat feature.",
    websiteUrl: "",
    githubUrl: "",
    image: img_transcendance,
    tags: "full-stack chat feature, 4 people team, school",
  },
  {
    title: "3D Portal Scene",
    tag: "threeJS,Blender",
    description:
      "A portal scene created during my ThreeJS training: ThreeJS Journey by Bruno Simon.",
    websiteUrl: "https://portal-sh.vercel.app/",
    githubUrl: "",
    video: vid_portal,
    tags: "developer,solo project, educational",
  },
  {
    title: "Cub3D",
    tag: "C,minilibX",
    description:
      "Inspired by the game Wolfenstein 3D, Cub3D is a realistic 3D labyrinth using ray-casting.",
    websiteUrl: "",
    githubUrl: "https://github.com/sohechai/cub3D",
    video: vid_cub3d,
    tags: "game Developer, solo project, school",
  },
  {
    title: "Python Script",
    tag: "Python",
    description: "Crafted Python scripts to boost my productivity at work.",
    websiteUrl: "",
    githubUrl: "https://github.com/sohechai/Utils_Scripts_Py",
    video: vid_python_script,
    tags: "developer, solo project, personal",
  },
  {
    title: "Portfolio v1",
    tag: "reactJS,html,scss",
    description: "My very first Portfolio. We all start somewhere !",
    websiteUrl: "https://sofiahechaichi-v1.vercel.app/",
    githubUrl: "https://github.com/sohechai/portfolio",
    video: vid_portfolio,
    tags: "frontend, solo project, personal",
  },
];

export default projectsData;
