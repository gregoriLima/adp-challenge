/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

function Select({ sortBy, onChange }) {
  return (
    <h2>
      <label htmlFor="sortBy">Top Five Ice Cream Shops in Alpharetta by </label>
      <select
        className="form-control"
        id="sortBy"
        name="sortBy"
        value={sortBy}
        onChange={(event) => onChange(event.target.value)}
      >
        <option key="rating" value="rating">
          ratings
        </option>
        <option key="review_count" value="review_count">
          reviews
        </option>
        <option key="best_match" value="best_match">
          best match
        </option>
      </select>
    </h2>
  );
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

Select.defaultProps = {
};

export default Select;
