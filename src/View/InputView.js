import { Console } from '@woowacourse/mission-utils';
import SYMBOLS from '../Constants/Symbol';

const InputView = Object.freeze({
  prompt: async () => {},
  promptLottoBuyAmount: async () => {
    const input = await Console.readLineAsync(`구입금액을 입력해 주세요.\n`);

    return input.split(SYMBOLS.comma);
  },

  promptWinningLottoNums: async () => {
    const input = await Console.readLineAsync(`당첨 번호를 입력해 주세요.\n`);

    return input.split(SYMBOLS.comma);
  },

  promptWinningLottoBonusNum: async () => {
    const input = await Console.readLineAsync(`당첨 번호를 입력해 주세요.\n`);

    return input;
  },
});

export default InputView;
