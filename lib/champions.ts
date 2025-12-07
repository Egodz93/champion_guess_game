export interface Champion {
  id: string;
  name: string;
  imageUrl: string;
}

// Using a recent version, you might want to fetch the latest version dynamically in a real app
const LATEST_VERSION = "14.9.1";

const getImageUrl = (championId: string) => `https://ddragon.leagueoflegends.com/cdn/${LATEST_VERSION}/img/champion/${championId}.png`;

export const champions: Champion[] = [
  { id: "Aatrox", name: "Aatrox" },
  { id: "Ahri", name: "Ahri" },
  { id: "Akali", name: "Akali" },
  { id: "Yasuo", name: "Yasuo" },
  { id: "Zed", name: "Zed" },
  { id: "Jinx", name: "Jinx" },
  { id: "Lux", name: "Lux" },
  { id: "Garen", name: "Garen" },
  { id: "Darius", name: "Darius" },
  { id: "Fiora", name: "Fiora" },
  { id: "Irelia", name: "Irelia" },
  { id: "LeeSin", name: "Lee Sin" },
  { id: "Teemo", name: "Teemo" },
  { id: "Vayne", name: "Vayne" },
  { id: "Caitlyn", name: "Caitlyn" },
  { id: "Ezreal", name: "Ezreal" },
  { id: "Thresh", name: "Thresh" },
  { id: "Blitzcrank", name: "Blitzcrank" },
  { id: "Katarina", name: "Katarina" },
  { id: "Riven", name: "Riven" },
].map(c => ({ ...c, imageUrl: getImageUrl(c.id) }));
