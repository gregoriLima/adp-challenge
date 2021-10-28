import React from "react";

export default function FavoriteButton({ children, onClickHandler, icon, favorite }) {
  return (
    <button className="favorite-button" onClick={onClickHandler}>
      <img className={`heart-icon ${favorite ? 'heart-red-icon' : '' }`} alt="" src={icon} />
      {children}
    </button>
  );
}
