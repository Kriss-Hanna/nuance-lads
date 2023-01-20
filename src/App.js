import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
import { bouclerieOptions, colorOptions } from "./options";

function App() {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [colorBouclerie, setColorBouclerie] = useState("");

  const handleOnChangeColor1 = (e, data) => {
    setColor1(data.value);
  };
  const handleOnChangeColor2 = (e, data) => {
    setColor2(data.value);
  };
  const handleOnChangeColorBouclerie = (e, data) => {
    setColorBouclerie(data.value);
  };

  /*   useEffect(() => {
    handleOnChangeColor1();
  }, [color1, color2, colorBouclerie]); */

  return (
    <div className="container-app">
      <h1>L'atelier de Stitch</h1>
      <p>Nuancier pour faire son choix</p>

      <div className="container-dropdown">
        <Dropdown
          placeholder="Sélectionne une première couleur"
          selection
          options={colorOptions}
          onChange={handleOnChangeColor1}
          style={{ marginBottom: "0.5rem", minWidth: "270px" }}
        />
        <Dropdown
          placeholder="Sélectionne une deuxième couleur"
          selection
          options={colorOptions}
          onChange={handleOnChangeColor2}
          style={{ marginBottom: "0.5rem", minWidth: "270px" }}
        />
        <Dropdown
          placeholder="Sélectionne une couleur de bouclerie"
          selection
          options={bouclerieOptions}
          onChange={handleOnChangeColorBouclerie}
          style={{ marginBottom: "0.5rem", minWidth: "270px" }}
        />
      </div>

      <div className="container-colors">
        {color1 && (
          <Fade left>
            <img
              className="option-container"
              src={color1}
              alt="Première couleur sélectionnée"
            />
          </Fade>
        )}

        {color2 && (
          <Fade right>
            <img
              className="option-container"
              src={color2}
              alt="Deuxième couleur sélectionnée"
            />
          </Fade>
        )}
      </div>

      {colorBouclerie && (
        <Fade bottom>
          <img
            className="option-container"
            src={colorBouclerie}
            alt="Couleur bouclerie sélectionnée"
            style={{ marginTop: "0.5rem" }}
          />
        </Fade>
      )}

      <a
        href="https://www.latelierdestitch.net/"
        target="_blank"
        rel="noreferrer"
      >
        Retour à la boutique
      </a>

      <p>L'atelier de Stitch © - 2023</p>
      <p>Tous droits reservés </p>
    </div>
  );
}

export default App;
