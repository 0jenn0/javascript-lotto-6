import LottoNumsValidator from '../Validator/LottoNumsValidator.js';
import { PurchaseAmountValidator, CommonValidator } from '../Validator/index.js';
import { InputView } from '../View/index.js';
import ErrorHandler from '../Error/ErrorHandler.js';
import AppError from '../Error/AppError.js';
import BonusNumValidator from '../Validator/BonusNumValidator.js';

export default class SetupController {
  async setupPurchaseAmount() {
    const inputLottoBuyAmount = await InputView.promptLottoBuyAmount();
    CommonValidator.check(inputLottoBuyAmount);
    PurchaseAmountValidator.check(inputLottoBuyAmount);

    return Number(inputLottoBuyAmount);
  }

  async setupWinningLottoNums() {
    const inputWinningLottoNums = await InputView.promptWinningLottoNums();
    CommonValidator.check(inputWinningLottoNums);
    LottoNumsValidator.check(inputWinningLottoNums);

    return inputWinningLottoNums.map((num) => Number(num));
  }

  async setupBonusNum(winnigLottoNums) {
    const inputBonusNum = await InputView.promptWinningLottoBonusNum();

    CommonValidator.check(inputBonusNum);
    BonusNumValidator.check(inputBonusNum);

    const isDulicate = winnigLottoNums.includes(Number(inputBonusNum));

    if (isDulicate) {
      throw new AppError('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
    return Number(inputBonusNum);
  }

  async initializePurchaseAmount() {
    const purchaseAmount = await ErrorHandler(this.setupPurchaseAmount);

    // 콜백함수에 파라미터 있는 경우는 바인딩해줘야함.
    //    const data2 = await ErrorHandler(this.setupData2.bind(param));

    return purchaseAmount;
  }

  async initializeWinningNums() {
    const winningNums = await ErrorHandler(this.setupWinningLottoNums);

    return winningNums;
  }

  async initializeBonusNum(winnigLottoNums) {
    const bonusNum = await ErrorHandler(this.setupBonusNum.bind(this, winnigLottoNums));

    return bonusNum;
  }
}
