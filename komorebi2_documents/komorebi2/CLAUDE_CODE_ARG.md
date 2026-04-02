# CLAUDE_CODE_ARG.md
# 木漏れ日遊園地2（仮）
# ゲームタイトル：こもれびゆうえんち2
# 特番タイトル：あの番組を覚えていますか〜木漏れ日遊園地編〜- ARG謎解き

---

## 概要

各Nightへの入口となる謎解きの実装。
F12・URL予測打ち等の専門知識不要。
サイトを普通に見ていたら気づける謎のみ使用。

---

## Night1への入口

**場所**：staff.html（スタッフクレジット）
**仕掛け**：「吉田一郎」のテキストを2秒長押し→隠しリンクが出現
**ヒント**：架空メール1通目「…離さないで…あの名前を…」

```javascript
// staff.htmlに実装
let pressTimer;
const yoshidaEl = document.getElementById('yoshida-name');

yoshidaEl.addEventListener('mousedown', (e) => {
  e.preventDefault();
  pressTimer = setTimeout(() => {
    const link = document.getElementById('night1-hidden-link');
    link.style.display = 'block';
    link.style.animation = 'fadeIn 1s ease';
  }, 2000);
});

yoshidaEl.addEventListener('mouseup', () => clearTimeout(pressTimer));
yoshidaEl.addEventListener('mouseleave', () => clearTimeout(pressTimer));
```

**隠しリンクの演出**
- ゆっくりフェードインで出現
- 「…ここから…」というテキストとリンク

---

## Night2への入口

**場所**：Night1クリア後の3ページ＋お問い合わせフォーム
**仕掛け**：3ページに散らばった「変な部分」を見つけて合言葉を作る→フォームに入力

**3つの仕掛け**

1. **旧4体写真ページ**
   - 各キャラのキャプションに1文字ずつ変な文字が混じっている
   - 例：キャプションの特定の位置の文字が全角/半角で違う

2. **基本資料ページ**
   - 特定の文字だけ色が微妙に違う（#333と#2d2dの差程度）
   - よく見ると気づける

3. **視聴者コメントページ**
   - 一つだけ文体が全く違うコメントが混じっている
   - そのコメントの特定の単語が合言葉の一部

**合言葉**：未定（ロア設計時に決定）

```javascript
// contact.htmlのフォーム送信処理
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const subject = document.getElementById('subject').value;
  
  if (subject === NIGHT2_PASSWORD) {
    // Night2への遷移
    localStorage.setItem('night2_unlocked', 'true');
    window.location.href = '/night2/index.html';
  } else {
    // 通常の送信完了メッセージ
    showMessage('お問い合わせを受け付けました。');
  }
});
```

---

## Night3への入口

**場所**：ゆめスタジオ調査記録ページ＋キツネ団長チャット
**仕掛け**：調査記録の矛盾を3つ発見→チャットで報告→ヒントが集まる→入口判明

**矛盾の内容**（具体的な内容はロア設計時に決定）
- 矛盾1：時系列の矛盾（未定）
- 矛盾2：人数・名前の矛盾（未定）
- 矛盾3：場所・日付の矛盾（未定）

**チャットで3つ全部報告すると**
```javascript
// チャットで矛盾が全部報告されたら
if (localStorage.getItem('night3_hints_complete')) {
  // Night3へのリンクを表示
  showNight3Link();
}
```

---

## Night4への入口

**場所**：特番サイト＋前作公式サイト＋架空メール
**仕掛け**：前作サイトと今作サイトを見比べて差分を発見→メールと組み合わせて入口判明

**前作サイトの出てき方**
Night3クリア後の追加ページ（視聴者証言コーナー等）の参考資料欄に前作サイトのURLが貼られている。

**差分の内容**（具体的な内容はロア設計時に決定）
- 前作にあった情報が今作では消えている・書き換えられている
- 前作プレイ済みでないと気づけない仕掛け

**メールとの組み合わせ**
- 架空メール（Night4クリア後）のヒントと差分を組み合わせる
- 具体的な組み合わせ方はロア設計時に決定

---

## Night5への入口

**場所**：全ページ（特番サイト・架空Twitter・架空メール・キツネ団長チャット・前作サイト）
**仕掛け**：全ページに散らばったヒントを集める→URL組み立て→Night5へ

**URL組み立ての方法**
- 各ページに断片的な文字列が隠されている
- 全部集めると`/night5/[文字列]/`というパスが完成する
- 具体的な文字列はロア設計時に決定

**Stage1**：各ページからヒントを収集
**Stage2**：ヒントを組み合わせてURL完成→Night5へ

---

## 証拠の実装

Nightクリアごとに追加されるページに証拠が3〜4個散らばっている。
プレイヤーが特定の場所を見つけるとlocalStorageにフラグが立つ。

```javascript
// 証拠発見時の処理
function discoverEvidence(evidenceId) {
  localStorage.setItem(`evidence_${evidenceId}`, 'true');
  showEvidenceFoundEffect(); // 小さな演出
}

// 証拠数のカウント
function countEvidence() {
  let count = 0;
  for (let i = 1; i <= 20; i++) {
    const id = String(i).padStart(2, '0');
    if (localStorage.getItem(`evidence_${id}`)) count++;
  }
  return count;
}
```

**証拠の具体的な内容と隠し場所**：未定（ロア設計時に決定）

---

## 吉田一郎vs黒幕の綱引き（Night3以降）

Night3以降、プレイヤーが証拠を発見すると該当ページが書き換えられる。

```javascript
// Night3以降のページ読み込み時
if (localStorage.getItem('night3_clear')) {
  checkAndApplyBlackmasterCensorship();
}

function checkAndApplyBlackmasterCensorship() {
  // 発見済みの証拠に対応するページ要素を書き換える
  if (localStorage.getItem('evidence_05')) {
    // 証拠5を発見済みなら該当部分を黒塗りに
    document.getElementById('evidence-05-element').classList.add('blacked-out');
  }
  // 他の証拠も同様
}
```

---

## Night5クリア後の番組終了演出（全ページ共通）

js/main.jsに実装。全ページで読み込む。

```javascript
// ページ読み込み時にチェック
window.addEventListener('load', () => {
  const clearTime = localStorage.getItem('night5_clear_time');
  if (!clearTime) return;
  
  const elapsed = Date.now() - clearTime;
  const remaining = 60000 - elapsed; // 1分
  
  if (remaining > 0) {
    setTimeout(startGlitchSequence, remaining);
  } else if (!localStorage.getItem('show_night6')) {
    startGlitchSequence();
  }
});

function startGlitchSequence() {
  // 第1段階（0秒）
  document.body.classList.add('glitch-stage-1');
  
  // 第2段階（10秒後）
  setTimeout(() => {
    document.body.classList.add('glitch-stage-2');
    rewriteKitsuneMessages();
  }, 10000);
  
  // 第3段階（25秒後）
  setTimeout(() => {
    document.body.classList.add('glitch-stage-3');
    collapseAllSites();
  }, 25000);
  
  // 第4段階（40秒後）
  setTimeout(() => {
    showBlackmasterMessage();
  }, 40000);
}

function showBlackmasterMessage() {
  // 画面を真っ暗に
  document.body.innerHTML = `
    <div class="blackmaster-screen">
      <p class="bm-text">ようやく来たか</p>
      <p class="bm-text">ずっと待っていた</p>
      <p class="bm-text">お前のことは最初から知っていた</p>
      <p class="bm-text">予定通りだ</p>
      <p class="bm-text">さあ…お前を取り込んでやる</p>
      <br>
      <a href="/night6/index.html" class="night6-link">来い</a>
    </div>
  `;
  localStorage.setItem('show_night6', 'true');
}
```

**CSSアニメーション**
```css
/* テキストが1行ずつゆっくり表示される */
.bm-text {
  opacity: 0;
  animation: fadeInText 2s ease forwards;
}
.bm-text:nth-child(1) { animation-delay: 1s; }
.bm-text:nth-child(2) { animation-delay: 4s; }
.bm-text:nth-child(3) { animation-delay: 7s; }
.bm-text:nth-child(4) { animation-delay: 10s; }
.bm-text:nth-child(5) { animation-delay: 13s; }

.night6-link {
  opacity: 0;
  animation: fadeInText 2s ease forwards;
  animation-delay: 18s;
}
```

---

## 注意事項

- 合言葉・矛盾の内容・差分の内容・URL文字列は全てロア設計時に決定
- 証拠の具体的な内容と隠し場所もロア設計時に決定
- ショートカット防止：前のNightクリアフラグがないと次のNightにアクセスできない
