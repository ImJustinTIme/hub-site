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
    },
    {
        alt: 'Angular Tetris Screenshot',
        descriptionText: "Nes style tetris written with angular to try it out",
        srcLink: 'https://github.com/ImJustinTIme/tetris-ang',
        title: 'Angular Tetris'
    },
];


export const projectsPageContentArr = [
    {
        appLink: 'https://imjustintime.github.io/asteroids.js/',
        alt: 'AsteroidsJs Screenshot',
        imgSrc: '/AsteroidsJs.png',
        descriptionText: "A web version of the classic game asteroids written in vanilla javascript with the ability to save local highscores.",
        srcLink: 'https://github.com/ImJustinTIme/asteroids.js',
        title: 'AsteroidsJs'
    },
];
