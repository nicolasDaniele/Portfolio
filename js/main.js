import {
    select,
    responsiveMenu,
    initializeNavigation
} from "./navigation.js";

import {
    initializeScrollSpy
} from "./scrollSpy.js";

import {
    initializeCarousel
} from "./carousel.js";

initializeScrollSpy();
initializeCarousel();
initializeNavigation();

window.select = select;
window.responsiveMenu = responsiveMenu;