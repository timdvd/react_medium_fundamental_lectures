import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";

import MarvelService from "./services/MarvelService";

const marvelService = new MarvelService();
const id = Math.floor(Math.random() * 19 + 1)

marvelService.getCharacter(id).then(item => {
    console.log(item.data.results[id].name);
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
