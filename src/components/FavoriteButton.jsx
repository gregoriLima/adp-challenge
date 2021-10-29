/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

export default function FavoriteButton({ children, onClickHandler, icon, favorite }) {
  return (
    <button className="favorite-button" type="button" onClick={onClickHandler}>
      <img className={`heart-icon ${favorite ? 'heart-red-icon' : ''}`} alt="" src={icon} />
      {children}
    </button>
  );
}

FavoriteButton.propTypes = {
  children: PropTypes.element.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
};

FavoriteButton.defaultProps = {
  favorite: false,
};
