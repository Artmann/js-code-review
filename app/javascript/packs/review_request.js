import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ReviewRequest from '../src/components/review_request';

document.addEventListener('turbolinks:load', () => {
  let container = document.getElementById('review-request');
  let files = JSON.parse(container.getAttribute('data-files'));

  ReactDOM.render(
    <ReviewRequest files={files}/>,
    container
  );
});