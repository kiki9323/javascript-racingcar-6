import InputView from './InputView.js';
import OutputView from './OutputView.js';
class View {
  #inputView = InputView;
  #outputView = OutputView;

  async readNumbers() {
    const input = await this.#inputView.readNumber();
    return input;
  }

  printError(error) {
    this.#outputView.print(error.message);
  }

  printEmptyLine(error) {
    this.#outputView.print('\n');
  }
}

export default View;
