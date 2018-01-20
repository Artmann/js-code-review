import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ReviewRequestForm from '../src/components/review_request_form';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <ReviewRequestForm/>,
    document.getElementById('review-request-form')
  );
});