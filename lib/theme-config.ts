export const themes = ["sunset", "forest", "abyss", "coffee", "night", "dim"] as const;

export type Theme = typeof themes[number];

// Function to get a random theme
export function getRandomTheme(): Theme {
  return themes[Math.floor(Math.random() * themes.length)];
} 