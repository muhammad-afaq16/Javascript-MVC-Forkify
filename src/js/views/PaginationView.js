import View from "./View";

export class paginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkup() {
    console.log('this._data', this._data.results);
  }
}
