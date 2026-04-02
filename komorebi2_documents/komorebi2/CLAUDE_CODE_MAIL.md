# CLAUDE_CODE_MAIL.md
# 木漏れ日遊園地2（仮）
# ゲームタイトル：こもれびゆうえんち2
# 特番タイトル：あの番組を覚えていますか〜木漏れ日遊園地編〜- 架空Gmailメール

---

## 概要

Gmail風のUIで実装する架空メールページ。
キツネ団長・うっきち・ぽたまるからのメールが届く。
localStorageのNightクリアフラグを見てメールが増えていく。

---

## デザイン方針

- Gmailのデザインを模したUI
- 左サイドバー（受信トレイ・送信済み等）
- メール一覧・メール詳細の2ペイン構成
- カラー：白・グレー・赤（Gmail風）

---

## メールボックスの初期状態

**最初からキツネ団長からのメールが届いている**
- プレイヤーがアクセスした時点で既に届いている
- なぜ届いているのかが謎

---

## キツネ団長からのメール

### メール1（最初から届いている）
- 送信者：不明（???@???.?? など）
- 件名：（文字化け）
- 本文：
```
…離さないで…あの名前を…
```
- Night1への入口ヒントとして機能

### メール2（Night1クリア後）
- 件名：（文字化け）
- 本文：
```
…来てくれた…
…でも…まだ…
…気をつけて…
```

### メール3（Night2クリア後）
- 件名：（文字化け）
- 本文：
```
…見ている…ものがいる…
…サイトの…情報は…
…全部では…ない…
```

### メール4（Night3クリア後）
- 件名：（文字化け）
- 本文：
```
…ここで話そう…
[チャットページへのリンク]
…急いで…
```
- キツネ団長チャットへのURLが貼られている

### メール5（Night4クリア後）
- 件名：（文字化け）
- 本文：
```
…古い場所を…見た…か…
…あそこに…答えが…
…でも…気をつけて…見られている…
```

### メール6（Night5クリア後・番組終了演出前）
- 件名：（文字化け）
- 本文：
```
…もうすぐ…終わる…
…全部…
…ありがとう…
```

### 番組終了演出後（Night6前）
- 全メールの本文が真っ黒に書き換えられる
- 「…もう…話せない…」という最後のメッセージだけが残る

---

## うっきちからのメール

特定のページを踏んだ時にlocalStorageにフラグが立ちメールが届く。

```javascript
// トリガーページを踏んだ時
localStorage.setItem('ukki_mail_trigger', 'true');
```

**うっきちメールの内容**
- 送信者：（文字化け）
- 件名：（文字化け）
- 本文：（完全に文字化け）
- 添付ファイルあり（開けない・クリックしても何も起きない）

---

## ぽたまるからのメール

### Night1〜2（敵フェーズ）
- 送信者：（不気味な名前）
- 件名：（文字化け）
- 添付ファイル：audio.wav（開くと不快な音が鳴る）
  - Web Audio APIで実装

### Night3（変化の兆し）
- 同じメールを開くと添付ファイルの内容が変わっている
- 音が変わっている（不快な音→静かな音）

### Night4〜5（仲間フェーズ）
- 件名：きこえる
- 本文：
```
きこえる
```

---

## 実装方法

```javascript
// localStorageのフラグを見てメールを追加
function renderMailbox() {
  const mails = [];
  
  // 初期メール（キツネ団長メール1）
  mails.push(kitsuneMail1);
  
  // Night1クリア後
  if (localStorage.getItem('night1_clear')) {
    mails.push(kitsuneMail2);
  }
  
  // うっきちメール
  if (localStorage.getItem('ukki_mail_trigger')) {
    mails.push(ukkichiMail);
  }
  
  // ぽたまるメール
  if (localStorage.getItem('night1_clear')) {
    mails.push(potamaruMail1); // 不快な音バージョン
  }
  if (localStorage.getItem('night3_clear')) {
    // Night3以降は音が変わる
    mails.push(potamaruMail2); // 静かな音バージョン
  }
  
  // Night6前の書き換え演出
  if (localStorage.getItem('show_night6')) {
    applyNight6MailGlitch();
  }
  
  renderMailList(mails);
}

// Night6の書き換え演出
function applyNight6MailGlitch() {
  document.querySelectorAll('.mail-body').forEach(el => {
    el.style.backgroundColor = 'black';
    el.style.color = 'black';
  });
  // 最後のメッセージだけ残す
  const lastMail = document.querySelector('.mail-item:first-child .mail-body');
  if (lastMail) {
    lastMail.style.color = 'white';
    lastMail.textContent = '…もう…話せない…';
  }
}
```

---

## 音声ファイルの実装

ぽたまるの添付音声はWeb Audio APIで実装。

```javascript
// 不快な音（Night1〜2）
function playUnpleasantSound() {
  const audioCtx = new AudioContext();
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'sawtooth';
  oscillator.frequency.value = 800;
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  setTimeout(() => oscillator.stop(), 2000);
}

// 静かな音（Night3以降）
function playQuietSound() {
  // 穏やかな音色に変更
}
```

---

## 注意事項

- 架空メールは/mail/index.htmlとして実装
- 特番サイトのナビゲーションには表示しない（ARGで発見する）
- キツネ団長チャットへのURLはmail内のリンクから飛ぶ
- 音声ファイルはユーザーの操作（クリック）後に再生する（ブラウザ制限対応）
