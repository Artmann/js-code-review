import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/python';
import 'brace/mode/ruby';
import 'brace/mode/sass';
import 'brace/mode/markdown';
import 'brace/mode/json';
import 'brace/mode/html';
import 'brace/mode/handlebars';
import 'brace/mode/typescript';
import 'brace/mode/css';

import 'brace/theme/tomorrow';

const { Component } = React;

export default class SourceFile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { file } = this.props;

    return <div className="border rounded mb-8">
      <div className="w-full bg-grey-lightest p-4 border-b text-grey-darker">
        {file.filename}
      </div>
      <AceEditor
        mode={file.language}
        theme="tomorrow"
        readOnly={true}
        value={file.content}
        tabSize={2}
        width='100%'
      />
    </div>
  }
}
