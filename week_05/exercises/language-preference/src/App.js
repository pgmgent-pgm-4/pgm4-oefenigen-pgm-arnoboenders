import "./App.css";
import Language from "./components/Language";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Language />
    </LanguageProvider>
  );
}

export default App;
