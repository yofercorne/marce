import React, { useEffect } from 'react';
import "./cards-perfil.css"
import { useParams } from 'react-router-dom';
import { cardData } from './cardData';

function MangaPerfilCard({ title, imageURL, description, seasonButtonText, favoriteButtonText }) {
  return (
    <div className="manga-card">
      <div className="manga-card-image">
        <img src={imageURL} alt={`Imagen de la Card ${title}`} />
      </div>
      <div className="manga-card-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="advanced-button">{seasonButtonText}</button>
        <button className="advanced-button">{favoriteButtonText}</button>
      </div>
    </div>
  );
}

function MangaPerfilCards() {
  const { id } = useParams();
  const index = parseInt(id, 10);

  useEffect(() => {
    // Tu código aquí
    // Por ejemplo, si estás tratando de asignar un evento onclick, hazlo aquí.
  }, []); 


  if (isNaN(index) || index < 0 || index >= cardData.length) {
    return <p>Manga no encontrado</p>;
  }

  const manga = cardData[index];

  return (
    <div className="manga-perfil-cards">
      {manga.seasons.map((season, seasonIndex) => (
        <MangaPerfilCard
          key={seasonIndex}
          title={season.title}
          imageURL={season.imageUrl}
          description={season.description}
          seasonButtonText={`VER TEMPORADA ${seasonIndex + 1}`}
          favoriteButtonText="AÑADIR A FAVORITOS"
        />
      ))}
    </div>
  );
}

export default MangaPerfilCards;
