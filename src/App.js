import { LottoAppController } from './Controller/index.js';

class App {
  async play() {
    const lottoApp = new LottoAppController();
    await lottoApp.start();
  }
}

export default App;
