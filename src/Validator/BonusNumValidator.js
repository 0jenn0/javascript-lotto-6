import AppError from '../Error/AppError.js';

export default class BonusNumValidator {
  static validateType(num) {
    if (Number.isNaN(Number(num))) {
      throw new AppError('보너스 번호는 숫자만 입력 가능합니다.');
    }
  }

  static validateNumsLength(nums) {
    if (nums.split(',').length !== 1) {
      throw new AppError('보너스 번호는 1개입니다.');
    }
  }

  static validateNumsRange(num) {
    if (num < 1 || num > 45) {
      throw new AppError('보너스 번호는 1~45 사이입니다.');
    }
  }

  static check(num) {
    BonusNumValidator.validateType(num);
    BonusNumValidator.validateNumsLength(num);
    BonusNumValidator.validateNumsRange(num);
  }
}
