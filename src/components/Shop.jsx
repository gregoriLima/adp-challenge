/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Modal from './modal/Modal';

export default function Shop({ shop, children }) {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <div key={shop.id} className="shop" tabIndex={0}>
      <span className="shop-container">
        <h3 className="shop-name">
          <a target="_blank" rel="noopener noreferrer" href={shop.url}>
            {shop.name}
          </a>
        </h3>
        <div className="image-container">
          <img src={shop.img} alt="shop" className="shop-image" />
        </div>
      </span>
      <div className="Stars" style={{ '--rating': shop.rating }} />
      <b>
        {shop.review_count}
        &nbsp;reviews
      </b>
      {isModalOpen && <Modal shop={shop} onRequestClose={toggleModal} />}
      <button onClick={toggleModal} type="button">
        Show details
      </button>
      {children}
    </div>
  );
}

Shop.propTypes = {
  children: PropTypes.element.isRequired,
  shop: PropTypes.object.isRequired,
};

Shop.defaultProps = {
};
