# CLAUDE_CODE_CHAT.md
# 木漏れ日遊園地2（仮）
# ゲームタイトル：こもれびゆうえんち2
# 特番タイトル：あの番組を覚えていますか〜木漏れ日遊園地編〜- キツネ団長チャット

---

## 概要

MSNメッセンジャー風のUIで実装するチャットページ。
Night3クリア後に架空メールからURLが届く。
APIなし・固定返答パターンで実装。
キーワード部分一致で検知し、キャラクターとして応答する。

---

## デザイン方針

- MSNメッセンジャー（2000年代）のUIを模したデザイン
- 背景：薄い青・グラデーション
- チャットウィンドウ：白
- 送信ボタン・絵文字ボタン（ダミー）
- 相手のアイコン：キツネ団長のシルエット（薄い・不明瞭）
- 相手の名前：「???」→ARGを進めると「キツネ団長」に変わる

---

## アクセス条件

```javascript
// Night3クリアフラグがないとアクセスできない
if (!localStorage.getItem('night3_clear')) {
  window.location.href = '/index.html';
}
```

---

## キャラクター設定

**キツネ団長の話し方**
- 言葉が途切れ途切れ（…を多用）
- 断片的・不完全な情報しか伝えられない
- 黒幕の支配下にあるので全てを話せない
- 古風な言い回し
- 一人称：「わたし」または省略

**話せること**
- 危険の警告
- 過去の断片的な記憶
- プレイヤーへの励まし
- ARGのヒント（断片的）

**話せないこと**
- 黒幕の正体
- K-059の意味
- 具体的な答え

---

## 演出

```javascript
// タイピング演出
function showTypingIndicator() {
  typingEl.style.display = 'block'; // 「…入力中…」表示
  setTimeout(() => {
    typingEl.style.display = 'none';
    showResponse();
  }, 2000 + Math.random() * 1000);
}

// たまにノイズで途切れる
function showResponse() {
  if (Math.random() < 0.2) { // 20%の確率でノイズ
    showNoise();
    return;
  }
  showMessage(getResponse(userInput));
}

function showNoise() {
  const noiseMsg = '…ノイズが…聞こえ…な…';
  appendMessage('kitsune', noiseMsg);
}
```

---

## キーワード返答パターン

```javascript
const responses = [
  {
    keywords: ['吉田', 'よしだ', 'ヨシダ', 'セット'],
    response: '…知っている…あの人は…でも…言えない…'
  },
  {
    keywords: ['黒幕', 'くろまく', '敵', 'やつ'],
    response: '…危ない…それ以上は…聞かないで…'
  },
  {
    keywords: ['獣人', 'じゅうじん', '白い目', 'シルエット'],
    response: '…あの子は…かわいそうな…助けて…あげて…'
  },
  {
    keywords: ['K-059', 'k059', 'K059'],
    response: '…ノイズが…聞こえ…な…'
  },
  {
    keywords: ['矛盾', 'おかしい', 'ちがう', '変'],
    response: '…そう…気づいた…か…もっと…探して…'
  },
  {
    keywords: ['危険', 'あぶない', 'こわい', '怖い'],
    response: '…逃げ…て…でも…もう遅い…かもしれない…'
  },
  {
    keywords: ['ありがとう', 'ありがと'],
    response: '…こちらこそ…来てくれて…'
  },
  {
    keywords: ['名前', 'なまえ'],
    response: '…名前は…大事…覚えていて…'
  },
  {
    keywords: ['記憶', 'きおく', '覚えている'],
    response: '…わたしは…記憶を…司る…全部…覚えている…でも…伝えられない…'
  },
  // Night3謎解き用（矛盾を報告するためのヒント）
  {
    keywords: ['調査記録', 'ゆめスタジオ', '記録'],
    response: '…よく…見て…おかしな…ところが…ある…三つ…'
  },
  {
    keywords: ['1986', '1988', '1990', '1991'],
    response: '…その年に…何かが…あった…'
  },
];

// デフォルト返答
const defaultResponses = [
  '…聞こえているよ…でも…うまく…話せない…',
  '…ノイズが…',
  '…続けて…探して…',
  '…気をつけて…'
];

function getResponse(input) {
  for (const pattern of responses) {
    if (pattern.keywords.some(kw => input.includes(kw))) {
      return pattern.response;
    }
  }
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
```

---

## Night3謎解き連動

ゆめスタジオ調査記録の矛盾を3つ報告するとヒントが集まる。

```javascript
// 矛盾報告フラグ
const contradictions = {
  'contradiction_1': false, // 矛盾1
  'contradiction_2': false, // 矛盾2
  'contradiction_3': false, // 矛盾3（具体的な内容はロア設計時に決定）
};

function checkContradiction(input) {
  // 各矛盾のキーワードを検知
  if (input.includes('矛盾1のキーワード')) {
    contradictions.contradiction_1 = true;
    return '…そう…それは…おかしい…一つ目…見つけた…';
  }
  if (input.includes('矛盾2のキーワード')) {
    contradictions.contradiction_2 = true;
    return '…二つ目…気づいた…もう一つ…ある…';
  }
  if (input.includes('矛盾3のキーワード')) {
    contradictions.contradiction_3 = true;
    return '…全部…見えた…次は…[ヒント]…';
  }
}

// 3つ全部報告したらNight3への入口ヒントを表示
function checkAllContradictions() {
  if (Object.values(contradictions).every(v => v)) {
    localStorage.setItem('night3_hints_complete', 'true');
  }
}
```

---

## Night6後の変化

Night6開始後にチャットを開くと…

```javascript
if (localStorage.getItem('night6_started')) {
  // キャラ名が変わる
  document.getElementById('chat-partner-name').textContent = '???';
  // 最後のメッセージだけ残す
  clearChat();
  appendMessage('kitsune', '…もう…話せない…');
  // 入力欄を無効化
  document.getElementById('chat-input').disabled = true;
}
```

---

## 注意事項

- チャットは/chat/index.htmlとして実装
- 特番サイトのナビゲーションには表示しない
- メールのリンクからのみアクセス可能
- 入力履歴はlocalStorageに保存しない（毎回リセット）
- 矛盾の具体的なキーワードはロア設計時に決定
