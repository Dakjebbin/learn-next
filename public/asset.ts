import logo from "./netflix-removebg-preview.png";
import bg from "./BG.png";
import hero from './hero-img.png';
import search from './search.svg';
import star from "./star.svg"
import no_poster from "./no poster.jpeg"

export const assets = {
    logo,
    bg,
    hero, 
    search,
    star,
    no_poster
}

let numberAdd: number = 1
type movieList = {
    id: number
    title: string,
    year: number,
    genre: string,
    rating: string,
    description: string,
    image: string
  
}

export const movieList: movieList[] = [
    {
        id: numberAdd++,
        title: "The Night Agent Redemption",
        year: 2025,
        genre: "Action",
        rating: '18+',
        description: "Brought together by a midnight phone call, an FBI agent and a cybersecurity expert must unravel an ever-growing web of political conspiracies.",
        image: "/AAAABbkYP8mdO-WUxbrz6wZFnc7DI6d2mtu6jh2SV273F1TzgNi-OfxuK3aaCSDf776P3wh2eExlUEYKjKWTqnc_Jl-452zxymFaOs8EoGDz3lMjiwrGeHc-p16_c6rVtQUBo3tg.webp"

    },
    {
        id: numberAdd++,
        title: "Young, Famous & African ",
        year: 2024,
        genre: "Reality Programming",
        rating: '16+',
        description: "This reality series follows a crew of famed, affluent stars as they work and play, flirt and feud in Johannesburg, South Africa.",
        image:  "/AAAABTU8p8yu4Z_R9h_C_jTAvk4BqsCfT-nuRwVFdEHralokj1ljn1Ez-Bii2oI9zDtJF0TSdLZyoNDiw4e3uvL1XH6vJeqemOshHZp6_N485bj0Et6EjZZFIuMm8xYKqyLnPDVv.webp"
    },
    {
        id: numberAdd++,
        title: "Squid Game",
        year: 2024,
        genre: "Dramas",
        rating: '18+',
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
        image: "/AAAABTsIHqmKvuiJaunFg-3M7eRlEBPik8Un-eqTK-od9x48LzeGITagPm82bIopTRvyhIEMehQNdXN2qfj0AVpDTMhftqYStaCieJdbO-jfhSkFUVGBs9eYkpkjdzOj_UCKZi53.webp"
    },
    {
        id: numberAdd++,
        title: "Lisabi -A Legend is born-",
        year: 2025,
        genre: "Dramas",
        rating: '16+',
        description: "The epic tale of the birth and rise of legendary folk hero Lísàbí Agbongbo-Akala, destined to save the Egba people in the face of a treacherous leader.",
        image: "/AAAABaxRhvCkeuhWtw3gppg07YmJFcWRGf2WnD4regoh3O3R38Mgl0HW4hyUdhTK7msHo_0vp8B2qs1cRMPWrrrNtsadvlshQEgWbmo.webp"
    },
    {
        id: numberAdd++,
        title: "Back in Action",
        year: 2025,
        genre: "Comedies",
        rating: '13+',
        description: "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
        image: "/AAAABeGuoJYxxzEeYpu2ldZYYkf5aZUk8snKZoH7PWo_oXwkXdw8KY9noCfu96rzWCPS_FGZlrfAmnqFBNDOdrS25JZA_NtX7TPyK6ynBjsYnIgZCKIJNrWmGGaMrxr34UHpQ3TQ.webp"
    },
    {
        id: numberAdd++,
        title: "Back in Action",
        year: 2025,
        genre: "Comedies",
        rating: '13+',
        description: "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
        image: "/AAAABeGuoJYxxzEeYpu2ldZYYkf5aZUk8snKZoH7PWo_oXwkXdw8KY9noCfu96rzWCPS_FGZlrfAmnqFBNDOdrS25JZA_NtX7TPyK6ynBjsYnIgZCKIJNrWmGGaMrxr34UHpQ3TQ.webp"
    },
    
    
    
 ]