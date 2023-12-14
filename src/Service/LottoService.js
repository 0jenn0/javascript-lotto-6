export default class LottoService {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  getLottoRank(winningNumbers, bonusNumber) {
    const matchs = this.#lottos.map((lotto) =>
      lotto.getLottoMatchCount(winningNumbers, bonusNumber),
    );

    const matchResult = matchs.reduce(
      (acc, { count, isBonus }) => {
        count === 6 && acc['first']++;
        count === 5 && isBonus && acc['second']++;
        count === 5 && !isBonus && acc['third']++;
        count === 4 && acc['fourth']++;
        count === 3 && acc['fifth']++;
        return acc;
      },
      {
        first: 0, // 첫 번째 등수의 카운트
        second: 0, // 두 번째 등수의 카운트
        third: 0, // 세 번째 등수의 카운트
        fourth: 0, // 네 번째 등수의 카운트
        fifth: 0, // 다섯 번째 등수의 카운트
      },
    );

    return matchResult;
  }

  caculateProfitRate(matchResult, purchaseAmount) {
    const totalPrize =
      matchResult['first'] * 2_000_000_000 +
      matchResult['second'] * 30_000_000 +
      matchResult['third'] * 1_500_000 +
      matchResult['fourth'] * 50_000 +
      matchResult['fifth'] * 5_000;

    return (totalPrize / purchaseAmount) * 100;
  }
}
