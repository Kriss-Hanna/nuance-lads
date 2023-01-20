import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const colorsArr = [
  "Rouge",
  "Rose Passion",
  "Violet Pastel",
  "Rose Fluo",
  "Rose pastel",
  "Corail",
  "Orange",
  "Pêche",
  "Jaune Fluo",
  "Jaune",
  "Tan",
  "Or",
  "Vert Fluo",
  "Vert Pastel",
  "Vert Pomme",
  "Caraïbe",
  "Sarcelle",
  "Lagune",
  "Vert Foncé",
  "Navy",
  "Violet",
  "Bleu Foncé",
  "Bleu Pétrole",
  "Bleu Clair",
  "Bleu Skyan",
  "Bleu Pastel",
  "Beige",
  "Militaire",
  "Marron Clair",
  "Lie de vin",
  "Coyote",
  "Marron",
  "Marron foncé",
  "Blanc",
  "Gris",
  "Noir",
  "Émeraude",
  "Orange Brûlée",
  "Jaune Pastel",
  "Saddle",
  "Or Clair",
  "Argent",
  "Or Rose",
  "Améthyste",
];

const bouclerieArr = [
  {
    key: "Or",
    text: "Or",
    value: "Or",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC79ojqD8W6yHpOI5SO0n4GLkv3GyR5GDjg&usqp=CAU",
  },
  {
    key: "Acier inoxydable",
    text: "Acier inoxydable",
    value: "Acier inoxydable",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC79ojqD8W6yHpOI5SO0n4GLkv3GyR5GDjg&usqp=CAU",
  },
  {
    key: "Laiton vieilli",
    text: "Laiton vieilli",
    value: "Laiton vieilli",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC79ojqD8W6yHpOI5SO0n4GLkv3GyR5GDjg&usqp=CAU",
  },
];

const colorOptions = [];

for (const color of colorsArr) {
  colorOptions.push({
    key: color,
    text: color,
    value: color,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC79ojqD8W6yHpOI5SO0n4GLkv3GyR5GDjg&usqp=CAU",
  });
}

function App() {
  const [color1, setColor1] = useState();
  const [color2, setColor2] = useState();

  const handleOnChange = (e, data) => {
    console.log(data);
    setColor1(data.value);
  };

  return (
    <div className="container-app">
      <h1>L'atelier de Stitch</h1>
      <p>Nuancier pour faire son choix</p>

      <div className="container-dropdown">
        <Dropdown
          placeholder="Selectionne une première couleur"
          selection
          options={colorOptions}
          onChange={handleOnChange}
          style={{ marginBottom: "0.5rem" }}
        />
        <Dropdown
          placeholder="Selectionne une deuxième couleur"
          selection
          options={colorOptions}
          onChange={(e) => console.log(e)}
          style={{ marginBottom: "0.5rem" }}
        />
        <Dropdown
          placeholder="Selectionne une couleur bouclerie"
          selection
          options={bouclerieArr}
          onChange={(e) => console.log(e)}
          style={{ marginBottom: "0.5rem" }}
        />
      </div>

      <div className="container-colors">
        <img
          className="color1"
          /*  src={color1} */
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADDCAMAAACxkIT5AAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+BsYMAAFjd3WkAAAAAElFTkSuQmCC"
          alt="Première couleur sélectionnée"
        />
        <img
          className="color2"
          /*  src={color2} */
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          alt="Deuxième couleur sélectionnée"
        />
      </div>
      <img
        className="color2"
        /*  src={color2} */
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
        alt="Deuxième couleur sélectionnée"
        style={{ marginTop: "0.5rem" }}
      />

      <a
        href="https://www.latelierdestitch.net/"
        target="_blank"
        rel="noreferrer"
      >
        Retour à la boutique
      </a>
    </div>
  );
}

export default App;
