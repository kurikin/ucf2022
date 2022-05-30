export const questions = {
  1: {
    questionText: '休日はどうやって過ごす？',
    longChoice: false,
    firstChoice: 'アウトドア',
    secondChoice: 'インドア',
    firstChoiceNextPath: 'questions/2',
    secondChoiceNextPath: 'questions/17',
  },
  2: {
    questionText: '海外に興味がある',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'そうでもない...',
    firstChoiceNextPath: 'questions/3',
    secondChoiceNextPath: 'questions/11',
  },
  3: {
    questionText: 'とにかく現場に出たい',
    longChoice: false,
    firstChoice: 'いいえ',
    secondChoice: 'はい',
    firstChoiceNextPath: 'questions/4',
    secondChoiceNextPath: 'questions/10',
  },
  4: {
    questionText: '昔の都市にロマンを感じる',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'questions/5',
    secondChoiceNextPath: 'questions/8',
  },
  5: {
    questionText: '行くならどっち？',
    longChoice: false,
    firstChoice: 'ヨーロッパ',
    secondChoice: 'アジア',
    firstChoiceNextPath: 'questions/6',
    secondChoiceNextPath: 'questions/7',
  },
  6: {
    questionText: 'クラシックを聴く？',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'results/komiya',
    secondChoiceNextPath: 'results/osuka',
  },
  7: {
    questionText: '古い文献や古地図が好きだ',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'results/tsuji',
    secondChoiceNextPath: 'results/park',
  },
  8: {
    questionText: '観光に行くなら？',
    longChoice: true,
    firstChoice: 'A. 有名な観光スポットを巡りたい',
    secondChoice: 'B. 人の暮らしが感じられる場所を自分で探して歩きたい',
    firstChoiceNextPath: 'results/hasegawa',
    secondChoiceNextPath: 'questions/9',
  },
  9: {
    questionText: 'ジェンダーの問題についてよく考える',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'そうでもない',
    firstChoiceNextPath: 'results/hirano',
    secondChoiceNextPath: 'results/matsumoto',
  },
  10: {
    questionText: '特定の地域／国に集中してコミットしたい',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'results/fujikake',
    secondChoiceNextPath: 'results/sato',
  },
  11: {
    questionText: '異文化を研究したい',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'questions/12',
    secondChoiceNextPath: 'questions/14',
  },
  12: {
    questionText: 'ボランティアには積極的に参加するほうだ',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'results/sato',
    secondChoiceNextPath: 'questions/13',
  },
  13: {
    questionText: 'ジェンダーの問題についてよく考える',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'そうでもない',
    firstChoiceNextPath: 'results/hirano',
    secondChoiceNextPath: 'results/matsumoto',
  },
  14: {
    questionText: '社会の格差や制度政策に興味がある',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'questions/15',
    secondChoiceNextPath: 'questions/16',
  },
  15: {
    questionText: '自由気ままな性格だと思う',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'results/saito',
    secondChoiceNextPath: 'results/miura',
  },
  16: {
    questionText: '芸術に関わるなら？',
    longChoice: true,
    firstChoice: 'A. 作品を鑑賞したい',
    secondChoice: 'B. 自ら作りたい',
    firstChoiceNextPath: 'results/kurenuma',
    secondChoiceNextPath: 'results/hirakura',
  },
  17: {
    questionText: 'どっちが好き？',
    longChoice: true,
    firstChoice: 'A. 何かを分析したい',
    secondChoice: 'B. 自分で表現したい',
    firstChoiceNextPath: 'questions/18',
    secondChoiceNextPath: 'questions/24',
  },
  18: {
    questionText: '紛争や政治学に興味がある',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'questions/19',
    secondChoiceNextPath: 'questions/22',
  },
  19: {
    questionText: '映像作品を見るのが好き',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'questions/20',
    secondChoiceNextPath: 'questions/21',
  },
  20: {
    questionText: 'どっちが好き？',
    longChoice: false,
    firstChoice: 'アニメ',
    secondChoice: '映画',
    firstChoiceNextPath: 'results/sugawa',
    secondChoiceNextPath: 'results/fabien',
  },
  21: {
    questionText: '数字やデータに抵抗がない',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'results/kamahara',
    secondChoiceNextPath: 'results/osuka',
  },
  22: {
    questionText: '自分はオタクだと思う',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'results/sugawa',
    secondChoiceNextPath: 'questions/23',
  },
  23: {
    questionText: 'ジェンダーの問題についてよく考える',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'results/hirano',
    secondChoiceNextPath: 'results/matsumoto',
  },
  24: {
    questionText: '文章を書くのが好きだ',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'questions/25',
    secondChoiceNextPath: 'questions/27',
  },
  25: {
    questionText: '「サウンドアート」という言葉を聞いて',
    longChoice: false,
    firstChoice: 'やってみたい！',
    secondChoice: 'そうでもない...',
    firstChoiceNextPath: 'results/nakagawa',
    secondChoiceNextPath: 'questions/26',
  },
  26: {
    questionText: '今のあなたにより近いのは？',
    longChoice: true,
    firstChoice: 'A. 自分のことで悩んでいる',
    secondChoice: 'B. 社会全体のことについて疑問がある',
    firstChoiceNextPath: 'results/kiyota',
    secondChoiceNextPath: 'results/hikoe',
  },
  27: {
    questionText: '映像作品を見るのが好きだ',
    longChoice: false,
    firstChoice: 'はい',
    secondChoice: 'いいえ',
    firstChoiceNextPath: 'questions/28',
    secondChoiceNextPath: 'questions/29',
  },
  28: {
    questionText: 'どっちが好き？',
    longChoice: false,
    firstChoice: 'アニメ',
    secondChoice: '映画',
    firstChoiceNextPath: 'results/sugawa',
    secondChoiceNextPath: 'results/fabien',
  },
  29: {
    questionText: '芸術に関わるなら？',
    longChoice: true,
    firstChoice: 'A. 作品を鑑賞したい',
    secondChoice: 'B. 自ら作りたい',
    firstChoiceNextPath: 'results/hirakura',
    secondChoiceNextPath: 'results/kurenuma',
  },
}
