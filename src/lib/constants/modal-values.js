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
        alt: 'Tetris Clock',
        descriptionText: 'A work in progress clock made with a Matrix Portal M4 and a dot matrix display on it. The idea is to have tetriminos fall down and form the numbers displaying the time.',
        srcLink: 'https://github.com/ImJustinTIme/tetris-clock',
        title: 'Tetris Clock'
    },
    {
        title: 'Kitchen Korner',
        alt: 'Kitchen Korner',
        descriptionText: 'Android app build at Iowa State University for COMS 311. It lets the user save and search for recipes from a variety of online apis. Writen in Kotlin',
        srcLink: 'https://github.com/ImJustinTIme/kitchenkorner'
    }
];
