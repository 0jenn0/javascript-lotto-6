import AppError from '../Error/AppError.js';

export default class PurchaseAmountValidator {
  static validateAmount(input) {
    if (Number(input) % 1000 !== 0 || Number(input) < 1000) {
      throw new AppError('로또 구입 금액은 최소 1,000원 이상입니다.');
    }
  }
  static validateType(input) {
    if (Number.isNaN(Number(input))) {
      throw new AppError('로또 구입 금액은 숫자만 입력 가능합니다.');
    }
  }

  static check(input) {
    PurchaseAmountValidator.validateAmount(input);
    PurchaseAmountValidator.validateType(input);
  }
}
