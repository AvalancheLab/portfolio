import CoinPaletteImage from '../assets/thumbnails/coinpalette.png'
import NoveriaImage from '../assets/thumbnails/noveria.JPG'
import PortfolioImage from '../assets/thumbnails/portfolio.png'

export const projectList = [
    {
        name : "CoinPalette",
        description : "A simple REST API providing cryptocurrency logo colour palettes in RGB, HEX and HSL." ,
        thumbnail: CoinPaletteImage,
        liveLink : "https://www.coinpalette.com",
        codeLink: "https://www.github.com/avalanchelab/coinpalette"
    },
    {
        name : "Noveria",
        description : "An accountless client side cryptocurrency portfolio tracker and statistics provider." ,
        thumbnail: NoveriaImage,
        liveLink : "https://www.noveria.app",
        codeLink: "https://www.github.com/avalanchelab/noveria"
    },
    {
        name : "Portfolio",
        description : "The website you are currently viewing." ,
        thumbnail: PortfolioImage,
        liveLink : "/",
        codeLink: "https://www.github.com/avalanchelab/portfolio"
    }
]