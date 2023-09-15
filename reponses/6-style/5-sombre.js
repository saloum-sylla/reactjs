/**
 * Créez un composant qui permet à l'utilisateur de basculer entre un thème sombre et un thème clair.
Créez deux fichiers CSS externes, un pour chaque thème.
Lorsque l'utilisateur bascule entre les thèmes, 
chargez dynamiquement le fichier CSS approprié pour changer le style de l'application.
 */
import React, { useState } from "react";
import "./light-theme.css";
import "./dark-theme.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <button onClick={handleThemeChange}>Changer de thème</button>
      {theme === "light" ? (
        <link rel="stylesheet" href="/light-theme.css" />
      ) : (
        <link rel="stylesheet" href="/dark-theme.css" />
      )}
    </div>
  );
};

export default ThemeSwitcher;

/**
 * light-theme.css :
 body {
  background-color: #f5f5f5;
  color: #333;
}

button {
  background-color: #fff;
  color: #333;
  border: 1px solid #333;
}
 */

/**
 dark-theme.css 
 body {
  background-color: #333;
  color: #fff;
}

button {
  background-color: #333;
  color: #fff;
  border: 1px solid #fff;
}
 */
