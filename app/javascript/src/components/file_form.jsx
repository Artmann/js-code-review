import File from '../file';
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

export default class FileForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props, state } = this;

    return <div className="border rounded mb-8">
      <div className="w-full bg-grey-lightest p-4 border-b">
        <div className="w-full lg:w-1/3">
          <input
            type="text"
            placeholder="Filename including extension..."
            onChange={props.onTitleChange}
          />
        </div>
      </div>
      <div className="w-full bg-grey-lightest bg-white mb-2 flex">
        <AceEditor
          mode={props.file.language}
          theme="tomorrow"
          onChange={props.onContentChange}
          editorProps={{$blockScrolling: true}}
          value={props.file.content}
        />
      </div>
    </div>;
  }
}