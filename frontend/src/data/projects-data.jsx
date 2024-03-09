import img_cub3d from '../images/cub3d-screen.png';
import img_transcendance from '../images/transcendance-screen.png';
import img_python_script from '../images/python-script-screen.png';
import img_portfolio from '../images/portfolio-screen.png';
import img_portal from '../images/portal-screen.png';
import vid_portal from '../videos/portal-scene-video.mp4'
import vid_portfolio from '../videos/portfolio-v1-video.mp4'
import vid_python_script from '../videos/python-script-video.mp4'
import vid_cub3d from '../videos/cub3d-video.mp4'

const projectsData = [
	{
		title: '3D Portal Scene',
		tag: 'threeJS,Blender',
		description: 'A portal scene created during my ThreeJS training: ThreeJS Journey by Bruno Simon.',
		websiteUrl: 'https://portal-sh.vercel.app/',
		githubUrl: '',
		video: vid_portal,
		tags: 'Developer, solo project, educational',
	},
	{
		title: 'Transcendance',
		tag: 'React,Redux,Styled Component,NestJS,TypeScript',
		description: 'Full-stack Pong game website with an integrated text chat feature.',
		websiteUrl: '',
		githubUrl: '',
		image: img_transcendance,
		tags: 'Full-stack chat feature, 4 people team, school',
	},
	{
		title: 'Cub3D',
		tag: 'C,minilibX',
		description: 'Inspired by the game Wolfenstein 3D, Cub3D is a realistic 3D labyrinth using ray-casting.',
		websiteUrl: '',
		githubUrl: 'https://github.com/sohechai/cub3D',
		video: vid_cub3d,
		tags: 'Game Developer, solo project, school',
	},
	{
		title: 'Python Script',
		tag: 'Python',
		description: 'Crafted Python scripts to boost my productivity at work.',
		websiteUrl: '',
		githubUrl: 'https://github.com/sohechai/Utils_Scripts_Py',
		video: vid_python_script,
		tags: 'Developer, solo project, personal',
	},
	{
		title: 'Portfolio v1',
		tag: 'reactJS,html,scss',
		description: 'My very first Portfolio. We all start somewhere !',
		websiteUrl: 'https://sofiahechaichi-v1.vercel.app/',
		githubUrl: 'https://github.com/sohechai/portfolio',
		video: vid_portfolio,
		tags: 'Frontend Developer, solo project, personal',
	},
];

export default projectsData;