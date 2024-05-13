import "./App.css";
import { useEffect, useState } from "react";
import allEmojis from "./data/emojis.json";
import EmojiSearchForm from "./components/EmojiSearchForm";
import EmojiResults from "./components/EmojiResults";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [emojis, setEmojis] = useState(allEmojis);
  const [filteredEmojis, setFilteredEmojis] = useState(allEmojis);

  useEffect(() => {
    const newEmojis = emojis.filter(
      (emoji) =>
        emoji.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
        emoji.keywords.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setFilteredEmojis(newEmojis);
  }, [inputSearch]);
  return (
    <div>
      <EmojiSearchForm
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
      <EmojiResults emojis={filteredEmojis} />
    </div>
  );
}

export default App;
