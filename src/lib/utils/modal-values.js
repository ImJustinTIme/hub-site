import GameCorner from "Components/modals/GameCorner.svelte";

export const modalPages = {
    'gameCorner': GameCorner
};

export const gameCorner = 'gameCorner';

export const gameCornerContentArr = [
    {
        appLink: 'https://imjustintime.github.io/asteroids.js/',
        alt: 'AsteroidsJs Screenshot',
        imgScr: '/AsteroidsJs.png',
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
