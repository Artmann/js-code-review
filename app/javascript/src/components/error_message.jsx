import React from 'react';

const { Component } = React;

export default class ErrorMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { message } = this.props;

    if (!message) {
      return null;
    }

    return <div className="bg-red-lightest text-red-dark p-4 rounded border border-red-lighter mb-4">
      {message}
    </div>
  }
}
