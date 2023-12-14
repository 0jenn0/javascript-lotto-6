import AppError from '../Error/AppError.js';

export default class LottoNumsValidator {
  static validateType(nums) {
    if (nums.some((num) => Number.isNaN(Number(num)))) {
      throw new AppError('로또 번호는 숫자만 입력 가능합니다.');
    }
  }

  static validateNumsLength(nums) {
    if (nums.length !== 6) {
      throw new AppError('로또 번호는 6개입니다.');
    }
  }

  static validateNumsRange(nums) {
    nums.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new AppError('로또 번호는 1~45 사이입니다.');
      }
    });
  }

  static validateNumsDuplicate(nums) {
    const set = new Set(nums);
    if (set.size !== nums.length) {
      throw new AppError('로또 번호는 중복될 수 없습니다.');
    }
  }

  static check(nums) {
    LottoNumsValidator.validateType(nums);
    LottoNumsValidator.validateNumsLength(nums);
    LottoNumsValidator.validateNumsRange(nums);
    LottoNumsValidator.validateNumsDuplicate(nums);
  }
}
