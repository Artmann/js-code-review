import React from 'react';
import SourceFile from './source_file';

const { Component } = React;

export default class ReviewRequest extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let { files } = this.props;

    return <div>
      { files.map((file, key) => <SourceFile file={file} key={key} />) }
    </div>;
  }
}
