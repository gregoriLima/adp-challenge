/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchReview } from '../../services/index';
import './modal.scss';

const Modal = ({ shop, onRequestClose }) => {
  const [review, setReview] = useState({});

  useEffect(async () => {
    try {
      const result = await fetchReview(shop.id);
      setReview(result.reviews[1]);
    } catch (error) {
      setReview({});
    }

    function onKeyDown(event) {
      if (event.keyCode === 27) {
        onRequestClose();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        <button type="button" onClick={onRequestClose}>
          Close
        </button>
        <h1 className="modal__title">
          {shop.name}
        </h1>
        <h3 className="modal__title">
          {shop.location.address1}
        </h3>
        <div className="placeholder medium">
          {!Object.keys(review).length
            ? (
              <>
                <p>
                  Wait, ice cream is loading . . .&nbsp;&#127848;&emsp;&#127848;&emsp;&#127848;
                </p>
                <div id="loading" />
              </>
            )
            : (
              <>
                <i>
                  &ensp;
                  {review.text}
                </i>
                &ensp;
                <b>{review.user.name}</b>
                {'\n'}
                <div className="Stars" style={{ '--rating': review.rating }} />
              </>
            )}

        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  shop: PropTypes.element.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
};

export default Modal;
