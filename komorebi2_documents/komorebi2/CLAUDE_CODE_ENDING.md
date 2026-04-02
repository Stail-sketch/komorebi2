# CLAUDE_CODE_ENDING.md
# 木漏れ日遊園地2（仮）
# ゲームタイトル：こもれびゆうえんち2
# 特番タイトル：あの番組を覚えていますか〜木漏れ日遊園地編〜- エンディング

---

## 概要

Night6クリア後に証拠の数によって3つのエンドに分岐する。
各エンドは独立したHTMLファイルで実装。

---

## 分岐条件

```javascript
// Night6クリア後に証拠数をカウントして分岐
function onNight6Clear() {
  const count = countEvidence();
  
  if (count >= 15) {
    window.location.href = '/ending_a/index.html';
  } else if (count >= 8) {
    window.location.href = '/ending_b/index.html';
  } else {
    window.location.href = '/ending_c/index.html';
  }
}
```

---

## エンドA（完全勝利）

**条件**：証拠15個以上＋正しい名前を入力

### ending_a/index.html

**第1段階：黒幕消滅**
```javascript
// 画面が激しくノイズ・バグる
function stage1() {
  document.body.classList.add('intense-glitch');
  showText('…消えていく…');
  setTimeout(() => {
    document.body.classList.remove('intense-glitch');
    document.body.style.background = 'black';
    stage2();
  }, 5000);
}
```

**第2段階：吉田一郎のモノローグ**
```javascript
const yoshidaLines = [
  '36年間、ずっと探していた',
  '見つけたと思ったら…もういなかった',
  'でも…あの子の顔が見えた気がした',
  '笑っていた',
  'それだけでよかった'
];

function stage2() {
  showLinesSequentially(yoshidaLines, 3000, () => {
    stage3();
  });
}
```

**第3段階：名前を入力する**
```javascript
function stage3() {
  document.body.innerHTML = `
    <div class="name-input-screen">
      <p>名前を呼べ</p>
      <input type="text" id="name-input" placeholder="">
      <button onclick="checkName()">呼ぶ</button>
    </div>
  `;
}

function checkName() {
  const input = document.getElementById('name-input').value;
  const correctName = localStorage.getItem('daughter_name'); // ARGで判明した名前
  
  if (input === correctName) {
    // 正しい名前→獣人消滅演出
    stage4_correct();
  } else {
    // 間違い→エンドBへ
    window.location.href = '/ending_b/index.html';
  }
}

function stage4_correct() {
  // 獣人のシルエットが白い光に変わって消えていく
  showGhostDissolveEffect();
  setTimeout(stage4_world_restored, 5000);
}
```

**第4段階：世界が戻る**
```javascript
function stage4_world_restored() {
  // 崩壊していたサイトが復元される演出
  showRestorationEffect();
  
  // 吉さんのTwitterが復活
  // キツネ団長から最後のメール
  // ぽたまるのページが復活・音楽が流れる
  
  setTimeout(stage5_epilogue, 5000);
}
```

**第5段階：エピローグ**
```javascript
const kitsuneLines = [
  '…ずっと伝えたかった',
  '…あなたが来てくれるのを待っていた',
  '…記憶の中に…みんながいる',
  '…消えても…覚えていてくれれば…それでいい',
  '…ありがとう…'
];

const playerLines = [
  'あなたは最初から狙われていた',
  '黒幕はあなたが来ることを知っていた',
  'でも…あなたは来た',
  '好奇心で。怖くても。',
  'その選択が…全てを変えた',
  '吉田一郎の娘は、今ここにはいない',
  'でも…あなたが名前を呼んだ',
  '彼女は…最後に人間として扱われた',
  'ありがとう',
  '木漏れ日遊園地の物語はここで終わります'
];

function stage5_epilogue() {
  // キツネ団長視点
  showLinesSequentially(kitsuneLines, 3000, () => {
    // プレイヤー視点
    showLinesSequentially(playerLines, 3000, () => {
      // 画面が白くなる
      fadeToWhite();
      setTimeout(() => showFinalText('おわり'), 2000);
    });
  });
}
```

---

## エンドB（普通のクリア）

**条件**：証拠8〜14個、または名前を間違える

### ending_b/index.html

**第1段階：黒幕消滅**（エンドAと同じ）

**第2段階：名前入力（証拠不足の場合はスキップ）**
```javascript
// 証拠不足の場合は入力欄が出ない
if (countEvidence() >= 15) {
  showNameInput();
} else {
  // 入力欄なしで次へ
  stage3_ghost_remains();
}

// 名前を間違えた場合
function stage3_ghost_remains() {
  // 獣人のシルエットが揺れる・でも消えない
  showGhostFlickerEffect();
  showText('…聞こえなかった…');
  setTimeout(stage4_incomplete, 3000);
}
```

**第3〜4段階：不完全な復元**
```javascript
function stage4_incomplete() {
  // サイトが部分的にしか復元されない
  // 吉さんのアカウントは復活しない
  // キツネ団長からメールが途中で途切れる
  showIncompleteRestoration();
}
```

**エピローグ**
```javascript
const epilogueLines = [
  // 吉田一郎がまだ娘を探している
  'まだどこかにいるはずだ',
];

// 獣人のシルエットが画面の端にうっすら残る
showFaintGhostSilhouette();

// 「連絡、来るといいな」のツイートが残ったまま

// 「…」で終わる
showFinalText('…');
```

---

## エンドC（バッドエンド）

**条件**：証拠7個以下

### ending_c/index.html

**第1段階：K-059完成**
```javascript
function stage1() {
  document.body.style.background = 'black';
  const lines = [
    '…ありがとう',
    '…器が…完成した…'
  ];
  showLinesSequentially(lines, 3000, stage2);
}
```

**第2段階：全員飲み込まれる**
```javascript
function stage2() {
  // キツネ団長の最後のメールが届く→途中で途切れる
  showInterruptedMail();
  
  setTimeout(() => {
    // 吉さんのTwitterが消える
    // 架空Twitter全体が真っ黒になる
    // サイトが全部消える
    showCollapseSequence();
    setTimeout(stage3, 5000);
  }, 3000);
}
```

**第3段階：黒幕が外に出る**
```javascript
function stage3() {
  const lines = [
    '外に…出られる…',
    '全て…予定通りだ…'
  ];
  showLinesSequentially(lines, 4000, stage4);
}
```

**第4段階：エンド**
```javascript
function stage4() {
  // 長い沈黙（3秒）
  setTimeout(() => {
    // 「予定通りです」が画面中央にゆっくり浮かび上がる
    // 前作と同じフォント・同じ演出
    document.body.innerHTML = `
      <div class="yotei-screen">
        <p class="yotei-text">予定通りです</p>
      </div>
    `;
    
    // 画面が完全に暗くなる
    setTimeout(() => {
      document.body.style.animation = 'fadeToBlack 3s ease forwards';
    }, 5000);
  }, 3000);
}
```

```css
/* 前作と同じ演出を再現 */
.yotei-text {
  opacity: 0;
  color: white;
  font-size: 2em;
  animation: fadeInText 3s ease forwards;
  animation-delay: 1s;
}

@keyframes fadeToBlack {
  to { opacity: 0; background: black; }
}
```

---

## カスタムナイト解放

Night6クリア後（エンドA・B・Cいずれも）にカスタムナイトが解放される。

```javascript
// Night6クリア時に設定
localStorage.setItem('custom_night_unlocked', 'true');

// カスタムナイトページでチェック
if (!localStorage.getItem('custom_night_unlocked')) {
  window.location.href = '/index.html';
}
```

---

## 共通ユーティリティ

```javascript
// テキストを順番に表示する
function showLinesSequentially(lines, interval, callback) {
  let index = 0;
  
  function showNext() {
    if (index >= lines.length) {
      if (callback) callback();
      return;
    }
    appendLine(lines[index]);
    index++;
    setTimeout(showNext, interval);
  }
  
  showNext();
}

// テキストをフェードインで追加
function appendLine(text) {
  const p = document.createElement('p');
  p.textContent = text;
  p.style.opacity = '0';
  p.style.animation = 'fadeInText 1s ease forwards';
  document.getElementById('text-container').appendChild(p);
}
```

---

## 注意事項

- 娘の名前（correctName）はARGで判明した後にlocalStorageに保存される
- エンドAの名前入力でエンドBに飛ぶ場合は証拠数フラグを引き継ぐ
- エンドCは証拠数チェックのみ（名前入力なし）
- 各エンドページはNight6クリアフラグがないとアクセスできない
