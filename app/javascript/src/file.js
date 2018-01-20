
export default class File {
  constructor() {
    this.filename = '';
    this.content = '';
    this.language = 'javascript';
  }

  setFilename(filename) {
    this.filename = filename;
    this.setLanguage();
  }

  setLanguage() {
    const parts = this.filename.split('.');
    const extension = parts.length > 1 ? parts[parts.length - 1].toLowerCase() : 'js';

    switch(extension) {
      case 'py':
        this.language = 'python';
        break;
      case 'rb':
        this.language = 'ruby';
        break;
      case 'scss':
        this.language = 'sass';
        break;
      case 'md':
        this.language = 'markdown';
        break;
      case 'json':
        this.language = 'json';
        break;
      case 'html':
        this.language = 'html';
        break;
      case 'hbs':
        this.language = 'handlebars';
        break;
      case 'ts':
        this.language = 'typescript';
        break;
      case 'css':
        this.language = 'css';
        break;
      default:
        this.language = 'javascript';
    }
    console.log(this.language);
  }
}