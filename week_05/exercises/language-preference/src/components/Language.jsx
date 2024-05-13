import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Language() {
  const [language, setLanguage] = useContext(LanguageContext);
  const [flag, setFlag] = useState("⛳");
  useEffect(() => {
    if (language === "dutch") {
      setFlag("⛳");
    } else if (language === "german") {
      setFlag("🏁");
    } else {
      setFlag("🎌");
    }
  }, [language]);
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div>
      <label htmlFor="languages">Pick a language</label> <br />
      <select name="languages" id="languages" onChange={handleChange}>
        <option value="dutch">NL</option>
        <option value="german">DE</option>
        <option value="french">FR</option>
      </select>
      <p>{flag}</p>
    </div>
  );
}
