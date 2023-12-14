import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = this.generateLottoNums();
  }

  generateLottoNums() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  getLottoMatchCount(winningNumbers, bonumNumber) {
    const count = this.#numbers.filter((number) => winningNumbers.includes(number)).length;
    const isBonus = winningNumbers.includes(bonumNumber);

    return { count, isBonus };
  }

  getNums() {
    return this.#numbers;
  }
}

export default Lotto;
