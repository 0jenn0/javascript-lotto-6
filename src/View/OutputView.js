import { Console } from '@woowacourse/mission-utils';

const OutputView = Object.freeze({
  print: (message) => {
    Console.print(message);
  },

  printResultMessage: () => {
    Console.print(`\n당첨 통계\n---`);
  },

  printMatchCount: (matchResult) => {
    const message = {
      fifth: '3개 일치 (5,000원) - ',
      fourth: '4개 일치 (50,000원) - ',
      third: '5개 일치 (1,500,000원) - ',
      second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      first: '6개 일치 (2,000,000,000원) - ',
    };
    Object.keys(matchResult)
      .reverse()
      .forEach((key) => {
        Console.print(`${message[key]}${matchResult[key]}개`);
      });
  },

  printProfitRate: (profitRate) => {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },
});

export default OutputView;
