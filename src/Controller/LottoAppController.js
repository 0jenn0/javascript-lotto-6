// import

import { LottoSetupController, LottoResultController } from './index.js';
import { OutputView } from '../View/index.js';
import Lotto from '../Lotto.js';
import { Console } from '@woowacourse/mission-utils';
import LottoService from '../Service/LottoService.js';

export default class LottoAppController {
  // DI
  #setupController = new LottoSetupController();
  #resultController = new LottoResultController();
  #outputView = OutputView;

  async start() {
    const purchaseAmount = await this.#setupController.initializePurchaseAmount();
    const lottoAmount = purchaseAmount / 1000;

    Console.print(`\n${lottoAmount}개를 구매했습니다.`);
    let lottos = [];
    Array.from({ length: lottoAmount }, () => {
      const lottt = new Lotto();
      lottos.push(lottt);
      Console.print(`[${lottt.getNums().join(', ')}]`);
    });

    const winningNums = await this.#setupController.initializeWinningNums();
    const bonusNum = await this.#setupController.initializeBonusNum(winningNums);

    const lottoService = new LottoService(lottos);
    const matchResult = lottoService.getLottoRank(winningNums, bonusNum);

    OutputView.printResultMessage();
    OutputView.printMatchCount(matchResult);
    const profitRate = lottoService.caculateProfitRate(matchResult, purchaseAmount);

    OutputView.printProfitRate(profitRate);
  }
}
