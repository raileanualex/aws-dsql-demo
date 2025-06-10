import { Game } from "../models/Game";

const gameMechanics = [
    "Worker Placement",
    "Deck Building",
    "Area Control",
    "Resource Management",
    "Set Collection",
    "Tile Placement",
    "Hand Management",
    "Action Points",
    "Card Drafting",
    "Dice Rolling",
    "Pattern Building",
    "Route Building",
    "Trading",
    "Auction/Bidding",
    "Push Your Luck",
    "Variable Player Powers",
    "Hidden Movement",
    "Memory",
    "Storytelling",
    "Cooperative Play"
];

const gameComponents = [
    "Cards",
    "Dice",
    "Game Board",
    "Miniatures",
    "Tokens",
    "Resource Cubes",
    "Player Boards",
    "Tiles",
    "Meeples",
    "Victory Point Track",
    "Card Deck",
    "Counters",
    "Markers",
    "Rulebook",
    "Scenario Book",
    "Custom Dice",
    "Standees",
    "Timer",
    "Reference Cards",
    "Storage Tray"
];

const themes = [
    "Medieval Fantasy",
    "Science Fiction",
    "Ancient Civilization",
    "Modern City",
    "Post-Apocalyptic",
    "Steampunk",
    "Horror",
    "Pirates",
    "Space Exploration",
    "Mythology"
];

function getRandomItems<T>(array: T[], min: number, max: number): T[] {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function generateGameTitle(): string {
    const adjectives = ["Epic", "Mystic", "Grand", "Legendary", "Ancient", "Secret", "Lost", "Eternal", "Rising", "Hidden"];
    const nouns = ["Kingdom", "Empire", "Realm", "Legacy", "Dynasty", "Quest", "Chronicles", "Legends", "Dominion", "Conquest"];
    
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const theme = themes[Math.floor(Math.random() * themes.length)];
    
    return `${adjective} ${noun}: A ${theme} Game`;
}

function generateDescription(mechanics: string[], components: string[]): string {
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const mainMechanic = mechanics[0];
    const playerCount = Math.floor(Math.random() * 4) + 2; // 2-5 players
    const playTime = (Math.floor(Math.random() * 4) + 2) * 15; // 30-90 minutes

    return `Immerse yourself in a ${theme.toLowerCase()} world where ${playerCount} players compete for supremacy. 
This ${playTime}-minute strategy game features ${mainMechanic.toLowerCase()} as its core mechanic, 
complemented by ${mechanics.slice(1).join(' and ').toLowerCase()}. 
Utilize ${components.slice(0, 3).join(', ').toLowerCase()} to achieve victory in this engaging tabletop experience.`;
}

export function generateRandomGame(): Partial<Game> {
    const mechanics = getRandomItems(gameMechanics, 2, 4);
    const components = getRandomItems(gameComponents, 4, 8);
    
    return {
        title: generateGameTitle(),
        description: generateDescription(mechanics, components),
    };
} 