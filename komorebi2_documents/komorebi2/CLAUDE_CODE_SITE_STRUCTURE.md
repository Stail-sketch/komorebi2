# CLAUDE_CODE_SITE_STRUCTURE.md
# 木漏れ日遊園地2（仮）
# ゲームタイトル：こもれびゆうえんち2
# 特番タイトル：あの番組を覚えていますか〜木漏れ日遊園地編〜- サイト基本構造

---

## 概要

HTML/CSS/JSのみでブラウザゲームとして実装する。GitHub Pagesで公開予定。個人制作。

---

## ディレクトリ構造

```
/
├── index.html              # 特番サイト TOP
├── gaiyou.html             # 番組概要
├── schedule.html           # 放送スケジュール
├── staff.html              # スタッフクレジット
├── contact.html            # お問い合わせフォーム
├── night1/
│   └── index.html          # Night1ゲームパート
├── night2/
│   └── index.html
├── night3/
│   └── index.html
├── night4/
│   └── index.html
├── night5/
│   └── index.html
├── night6/
│   └── index.html
├── custom/
│   └── index.html          # カスタムナイト
├── twitter/
│   └── index.html          # 架空Twitter
├── mail/
│   └── index.html          # 架空Gmailメール
├── chat/
│   └── index.html          # キツネ団長チャット
├── ending_a/
│   └── index.html
├── ending_b/
│   └── index.html
├── ending_c/
│   └── index.html
├── css/
│   └── style.css
└── js/
    └── main.js             # localStorage管理・共通処理
```

---

## 特番サイトのデザイン方針

**コンセプト：「ちゃんとしたテレビ局の特番サイト」**

- 2026年の現代的なデザイン
- 清潔感がある・信頼感がある
- でも細部に違和感が仕込まれている
- フォント：ゴシック体・現代的
- カラー：白・グレー・深い紺（テレビ局っぽい）
- ロゴ：「木漏れ日遊園地 〜あの子を探して〜」的な番組タイトル

---

## 特番サイト 各ページの内容

### index.html（TOP）
- 番組タイトル・ロゴ
- 番組の概要（「木漏れ日遊園地について知っている方はご連絡ください」）
- ナビゲーション（番組概要・放送スケジュール・スタッフ・お問い合わせ）
- **開いた瞬間に微妙な演出**（黒幕がプレイヤーを検知）
  - 実装：ページ読み込み直後に画面が一瞬ブレる・ノイズが走る（0.5秒程度）
  - CSSアニメーションで実装

### gaiyou.html（番組概要）
- 番組の説明テキスト
- 1991〜1997年に放送された子ども番組「木漏れ日遊園地」について
- 行方不明者・関係者を探している旨
- **Night2謎解き用の仕掛け**：特定の文字だけ色が微妙に違う（#333333と#2d2d2d程度の差）

### schedule.html（放送スケジュール）
- 放送日時・チャンネル情報
- 生放送中という体裁

### staff.html（スタッフクレジット）
- 番組スタッフ一覧
- **「吉田一郎」の名前が記載されている**（セット設計担当）
- 「番組企画・監修」欄が黒塗りされている
- **Night1謎解き用の仕掛け**：「吉田一郎」のテキストに長押しイベントを実装
  - 2秒長押しで隠しリンクが出現→Night1へ

```javascript
// 長押し実装例
let pressTimer;
const yoshida = document.getElementById('yoshida-name');
yoshida.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    document.getElementById('hidden-link').style.display = 'block';
  }, 2000);
});
yoshida.addEventListener('mouseup', () => clearTimeout(pressTimer));
yoshida.addEventListener('mouseleave', () => clearTimeout(pressTimer));
```

### contact.html（お問い合わせフォーム）
- 名前・メールアドレス・件名・本文の入力欄
- **Night2謎解きの答え合わせ**に使用
- 特定の合言葉を件名に入力するとNight2へ遷移
  - 合言葉：未定（ロア設計時に決定）

---

## localStorage管理（js/main.js）

全ページで読み込む共通JSファイル。以下のフラグを管理する。

```javascript
// Nightクリアフラグ
localStorage.setItem('night1_clear', 'true');
localStorage.setItem('night2_clear', 'true');
// ...

// Night5クリア時刻（番組終了演出のカウントダウン用）
localStorage.setItem('night5_clear_time', Date.now());

// 証拠収集フラグ（15〜20個）
localStorage.setItem('evidence_01', 'true');
// ...

// ページ追加フラグ（Nightクリアごとに新ページが追加される）
localStorage.setItem('night1_pages_unlocked', 'true');
// ...
```

---

## Nightクリアごとに追加されるページ

localStorageのフラグを見て、追加ページへのリンクをTOPに表示する。

| フラグ | 追加されるページ |
|--------|----------------|
| night1_clear | 視聴者情報提供コーナー・旧4体写真ページ・基本資料ページ |
| night2_clear | 視聴者証言まとめ・ゆめスタジオ調査記録・スタッフクレジット更新 |
| night3_clear | 視聴者証言コーナー・被験者番号リスト・情報提供フォーム・参考資料（前作サイトURL） |
| night4_clear | 実験記録断片・匿名関係者インタビュー・内部文書 |
| night5_clear | 緊急情報提供・最終調査結果・大量の情報提供ページ |

---

## Night5クリア後の番組終了演出

全ページの先頭で以下のコードを実行する。

```javascript
const clearTime = localStorage.getItem('night5_clear_time');
if (clearTime) {
  const elapsed = Date.now() - clearTime;
  const remaining = 60000 - elapsed; // 1分後
  if (remaining > 0) {
    setTimeout(() => startGlitchEffect(), remaining);
  } else {
    startGlitchEffect();
  }
}

function startGlitchEffect() {
  // 第1段階：フォント崩れ・BGMノイズ・画面端のノイズ
  // 第2段階：各要素が書き換えられる
  // 第3段階：完全崩壊
  // 第4段階：黒幕の語りかけ→Night6リンク表示
}
```

---

## 注意事項

- ローカルストレージはドメイン単位で共有される
- GitHub Pagesで公開する場合はhttpsが必要
- スマホ対応は後回しでOK（PC優先）
- 外部ライブラリは使用しない（vanilla JS・CSS）
