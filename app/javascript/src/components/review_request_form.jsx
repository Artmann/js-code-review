import ErrorMessage from './error_message';
import File from '../file';
import FileForm from './file_form';
import React from 'react';

const { Component } = React;

export default class RequestReviewForm extends Component {
  constructor(props) {
    super(props);

    const files = [
      new File()
    ];

    this.state = { errorMessage: null, files, isPublishing: false, title: '' };
  }

  errorMessage() {
    if (!errorMessage) {
    return (<div></div>);
    }

    return (
      <div>
        {state.errorMessage}
      </div>
    );
  }

  render() {
    const { state } = this;

    return <div >
      <ErrorMessage message={state.errorMessage} />

      <div className="mb-4">
        <input
          type="text"
          placeholder="Title..."
          value={state.title}
          onChange={({ target }) => this.setState({ title: target.value })}
        />
      </div>

      {state.files.map((file, key) => {
        return <FileForm
          key={key}
          file={file}
          onTitleChange={this.updateFilename.bind(this, key)}
          onContentChange={this.updateContent.bind(this, key)}
        />
      })}
      <div className="flex justify-between">
        <button className="button text-sm" onClick={this.addFile.bind(this)}>
          Add file
        </button>
        <button className="button button--cta text-sm" onClick={this.publish.bind(this)} disabled={state.isPublishing}>
          Publish
        </button>
      </div>
    </div >
  }

  updateFilename(index, event) {
    let files = this.state.files.slice();
    files[index].setFilename(event.target.value);
    this.setState({ files });
  }

  updateContent(index, content) {
    let files = this.state.files.slice();
    files[index].content = content;
    this.setState({ files });
  }

  addFile(event) {
    event.preventDefault();

    let files = this.state.files.slice();
    files.push(new File());
    this.setState({ files });
  }

  publish(event) {
    event.preventDefault();

    let { files, title } = this.state;
    this.setState({ isPublishing: true });

    const token = document.getElementsByTagName('meta')['csrf-token'].getAttribute('content');
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('X-CSRF-Token', token)

    fetch('/api/review-requests', {
      body: JSON.stringify({ files, title }),
      credentials: 'same-origin',
      headers,
      method: 'POST'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      if (response.error) {
        throw Error(response.error);
      }
      this.setState({ errorMessage: null, isPublishing: false });
      window.location = `/review-requests/${response['review-request'].id}`;
    }).catch(({ message }) =>  {
      this.setState({ errorMessage: message, isPublishing: false });
    });
  }
}