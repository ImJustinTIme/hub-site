import GameCorner from "Components/modals/GameCorner.svelte";
import AboutMe from "Components/modals/AboutMe.svelte";
import ProjectsPage from "Components/modals/ProjectsPage.svelte";
export const modalPages = {
    'gameCorner': GameCorner,
    'aboutMe': AboutMe,
    'projectsPage': ProjectsPage
};

export const gameCorner = 'gameCorner';
export const aboutMe = 'aboutMe';
export const projectsPage = 'projectsPage';

export const gameCornerContentArr = [
    {
        appLink: 'https://imjustintime.github.io/asteroids.js/',
        alt: 'AsteroidsJs Screenshot',
        imgSrc: '/AsteroidsJs.png',
        descriptionText: "A web version of the classic game asteroids written in vanilla javascript with the ability to save local highscores.",
        srcLink: 'https://github.com/ImJustinTIme/asteroids.js',
        title: 'AsteroidsJs'
    }
];


export const projectsPageContentArr = [
    {
        alt: 'Dri-Stack Website',
        imgSrc: 'DriStack.png',
        descriptionText: 'First projected worked on at QCI for a startup trying to dry corn and grain faster using Iot devices.I Make the website side in React with the ant design UI library. The backend is written in C# with MySql database. Also was the first time using Threejs to model a grain bin to show the status of it in real time.',
        title: 'QCI Work: Dri-Stack Website'
    },
    {
        alt: 'Onlink Redesign',
        imgSrc: '/Onlink.png',
        descriptionText: 'Current project that I have been working on for the last couple of years. Working with John Deere to redesign and overhaul a startup bought by them called Onlink. The Website is now written in React with a java backend. We are currently working on changing out the backend database from cassandra to PostGreSQL.',
        title: 'QCI Work: Onlink Redesign'
    },
    {
        alt: 'Tetris Clock',
        imgSrc: '/tetris clock.png',
        descriptionText: 'A work in progress clock made with a Matrix Portal M4 and a dot matrix display on it. The idea is to have tetriminos fall down and form the numbers displaying the time.',
        srcLink: 'https://github.com/ImJustinTIme/tetris-clock',
        title: 'Tetris Clock'
    },
    {
        title: 'Kitchen Korner',
        imgSrc: '/KitchenKorner.png',
        imgFit: 'contain',
        alt: 'Kitchen Korner',
        descriptionText: 'Android app build at Iowa State University for COMS 309. It lets the user save and search for recipes from a variety of online apis. Writen in Kotlin',
        srcLink: 'https://github.com/ImJustinTIme/kitchenkorner'
    }
];
