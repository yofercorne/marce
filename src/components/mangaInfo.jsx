import React from 'react';
import "./cards-perfil.css"

function MangaInfo({ title, imageURL, genres, author, synopsis, rating, votes }) {
  console.log('MangaInfo Props:', { title, imageURL, genres, author, synopsis, rating, votes });  return (
    <div className="manga-background">
      <h1 className="manga-title">{title}</h1>
      <div className="manga-details">
        <div className="manga-cover">
          <img src={imageURL} alt={`Portada de ${title}`} />
        </div>
        <div className="manga-info">
          <div className="genre-buttons">
            {genres.map((genre, index) => (
              <button key={index} className="advanced-button">{genre}</button>
            ))}
          </div>
          <div className="manga-author">
            <h1>Autor:</h1> <span>{author}</span>
          </div>
          <p className="manga-synopsis">{synopsis}</p>
          <div className="rating-container">
            <div className="rating-summary">
              <p className="average-rating">{rating}</p>
            </div>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <input
                  key={index}
                  type="radio"
                  id={`star${5 - index}`}
                  name="rating"
                  value={5 - index}
                />
              ))}
              {Array.from({ length: 5 }, (_, index) => (
                <label key={index} htmlFor={`star${5 - index}`}></label>
              ))}
              <p className="total-votes">{votes} votos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MangaInfo;
