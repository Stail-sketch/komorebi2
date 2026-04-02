# CLAUDE_CODE_NIGHT6.md
# 木漏れ日遊園地2（仮）
# ゲームタイトル：こもれびゆうえんち2
# 特番タイトル：あの番組を覚えていますか〜木漏れ日遊園地編〜- Night6

---

## 概要

最終Night。新キャラ5体＋旧4体全員＋黒幕の攻撃が加わる最高難度Night。
Night5クリアフラグ＋番組終了演出後にのみアクセス可能。

---

## アクセス条件

```javascript
// Night6ページ読み込み時にチェック
if (!localStorage.getItem('night5_clear') || !localStorage.getItem('show_night6')) {
  window.location.href = '/index.html';
}
```

---

## 登場キャラクター

### 新キャラ5体（Night5までと同じ対処法）
- リス（好奇心）：カメラ監視で遅くなる・シャッター撃退
- カメレオン（不信感）：外枠追う・SE→シャッター
- ホタル（郷愁）：光を灯し直す
- クモ（執着）：ベントボタン
- ヒツジ（罪悪感）：アクション毎に速くなる・撃退でリセット

### 旧4体（前作と同じ対処法）

**キツネ団長**
- 時計ゲージが画面に表示される
- ゲージが減っていき0になると即死
- CAM2（時計のカメラ）で時計を巻き直す

**かあ博士**
- ランダムで左右どちらかから来る
- カメラで位置確認→正しいシャッター

**うっきち**
- カメラに映った通路と反対側から来る
- 反対側のシャッターを閉める

**ぽたまる**
- ダンス音楽が流れる
  - 音楽A→右シャッター
  - 音楽B→左シャッター

### 黒幕の攻撃
- ランダムなタイミングでシャッターが勝手に開く
- 効果音（機械的なノイズ音）が鳴る
- プレイヤーが気づいて閉め直す必要がある

```javascript
// 黒幕の攻撃
function blackmasterAttack() {
  const side = Math.random() < 0.5 ? 'left' : 'right';
  openShutter(side); // シャッターを強制的に開く
  playGlitchSound();
  
  // 一定時間後に再び攻撃
  setTimeout(blackmasterAttack, Math.random() * 30000 + 20000);
}
```

---

## Night6専用の演出

**開始時の演出**
- 通常のNightと違い、画面が暗い状態から始まる
- 不気味なBGMが流れる

**クリア条件**
- 6AMまで生き延びる

---

## クリア後の処理

証拠の数によってエンドが分岐する。

```javascript
function onNight6Clear() {
  const evidenceCount = countEvidence();
  
  if (evidenceCount >= 15) {
    // エンドA候補→名前入力画面へ
    window.location.href = '/ending_a/index.html';
  } else if (evidenceCount >= 8) {
    // エンドB
    window.location.href = '/ending_b/index.html';
  } else {
    // エンドC
    window.location.href = '/ending_c/index.html';
  }
}

function countEvidence() {
  let count = 0;
  for (let i = 1; i <= 20; i++) {
    if (localStorage.getItem(`evidence_${String(i).padStart(2, '0')}`)) count++;
  }
  return count;
}
```

---

## カスタムナイトの解放

Night6クリア後にカスタムナイトが解放される。

```javascript
localStorage.setItem('custom_night_unlocked', 'true');
```

---

## Night6のTwitter演出

Night6開始と同時に架空Twitterが異常を起こす。
（架空TwitterページはNight6フラグを見て自動的に異常表示に切り替わる）

- 全アカウントの投稿が「予定通りです」に書き換えられる
- タイムラインが崩壊・文字化け
- 吉さん・かあ博士・うっきち・ぽたまる全アカウントが同時に同じ投稿をする
