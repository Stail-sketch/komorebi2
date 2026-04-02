# CLAUDE_CODE_FNAF_NIGHTS.md
# 木漏れ日遊園地2（仮）
# ゲームタイトル：こもれびゆうえんち2
# 特番タイトル：あの番組を覚えていますか〜木漏れ日遊園地編〜- FNAFパート Night1〜5

---

## 概要

監視カメラ映像を見ながら思念体の侵入を防ぐFNAFライクなゲーム。
HTML/CSS/JSで実装。各Nightは独立したHTMLファイル。

---

## 基本システム

### 画面構成（3枚モニター構成）

```
┌──────────┬──────────────┬──────────┐
│          │              │          │
│  左モニター  │  中央モニター   │  右モニター  │
│ 思念体が   │ カメラ切替     │ 思念体が   │
│ 映り込む   │ 電力・時刻     │ 映り込む   │
│ →シャット  │ ベントボタン   │ →シャット  │
│  ダウンで  │ Night表示     │  ダウンで  │
│  撃退     │              │  撃退     │
└──────────┴──────────────┴──────────┘
         デスク・キーボード（背景）
```

**プレイヤーの設定**：自宅から遠隔で監視カメラにアクセスしている一般人
**背景**：暗い自宅PC部屋・3枚モニターのデスク

### 左右モニターの役割
- 思念体が左右どちらかから近づいてくる
- 左右モニターに思念体が映り込んできたらシャットダウンボタンで撃退
- 前作の「左右シャッター」の代わり
- **モニターON**：思念体が映り込む・電力消費なし
- **モニターOFF**：思念体を防げる・電力消費あり（オフにしている間ずっと消費）
- 電力切れで全機能停止→即死

```javascript
// モニターON/OFF管理
let leftMonitorOff = false;
let rightMonitorOff = false;

function toggleMonitor(side) {
  if (side === 'left') {
    leftMonitorOff = !leftMonitorOff;
    document.getElementById('left-monitor').classList.toggle('monitor-off');
  } else {
    rightMonitorOff = !rightMonitorOff;
    document.getElementById('right-monitor').classList.toggle('monitor-off');
  }
}

// 電力消費（1秒ごと）
setInterval(() => {
  if (leftMonitorOff) powerLevel -= 0.5;
  if (rightMonitorOff) powerLevel -= 0.5;
  updatePowerDisplay();
}, 1000);
```

### 中央モニターの役割
- CAM1〜CAM8のカメラ切替
- 電力メーター表示
- 時計表示（12AM〜6AM）
- ベントボタン（Night4以降）
- Night表示

### カメラ配置
| カメラ | 場所 |
|--------|------|
| CAM1 | メインスタジオ |
| CAM2 | セット倉庫 |
| CAM3 | 人形保管室 |
| CAM4 | 控え室 |
| CAM5 | 入口付近 |
| CAM6 | 機材室 |
| CAM7 | 左通路 |
| CAM8 | 右通路 |

**ベント**：中央モニターの専用ボタンで管理（カメラとは別）
**Night6**：前作ゆめスタジオの背景に切り替わる

### 基本ルール
- 12AMから6AMまで生き延びるとクリア
- 電力制限あり（モニターシャットダウン・カメラ使用で消費）
- 電力切れで全機能停止→即死
- 思念体に侵入されると即死

### 思念体の見た目
- 半透明・ぼんやりした見た目
- 危険が近づくほど不透明になっていく
- カメラ映像に映り込む
- 「他の視聴者には見えていない」という設定を演出で表現

---

## Night毎の構成

### Night1

**登場思念体**
- リス（好奇心）：動く
- カメレオン・ホタル・クモ・ヒツジ：画面のどこかに静止している

**リスの行動パターン**
- CAM1〜8をランダムに移動する
- カメラで監視し続けると移動速度が遅くなる
- 監視をやめると移動速度が上がる
- 扉前に来たらシャッターで撃退

```javascript
// リスの速度管理
let squirrelSpeed = 'normal';
let watchTimer = null;

function onCameraSwitch(camId) {
  if (camId === squirrelLocation) {
    // 監視中→速度低下
    watchTimer = setTimeout(() => squirrelSpeed = 'slow', 3000);
  } else {
    clearTimeout(watchTimer);
    squirrelSpeed = 'normal';
  }
}
```

**静止思念体の演出**
- 4体がカメラのどこかに静止している
- プレイヤーが気づいてもいいし気づかなくてもいい
- 不気味な存在感として機能する

---

### Night2

**追加：カメレオン（不信感）**

**カメレオンの行動パターン**
- カメラ映像では外枠だけ見える（半透明より更に薄い）
- カメラを見ないとどちらの扉に来るかわからない
- 扉前に来たら特定のSEが鳴る→シャッターで撃退→撃退成功でSEが鳴る

```javascript
// カメレオンの外枠表示
// opacity: 0.1程度・borderだけ表示
.chameleon-ghost {
  opacity: 0.08;
  border: 2px solid rgba(255,255,255,0.5);
  background: transparent;
}
```

---

### Night3

**追加：ホタル（郷愁）**

**ホタルの行動パターン**
- 特定のカメラに留まって光っている
- ランダムで光が消える
- 光が消えるとじわじわ扉に近づいてくる（カメラで距離がわかる）
- 該当カメラに切り替えてクリックで光を灯し直す
- 灯し直したら即座に元の位置に戻る

```javascript
// ホタルの光管理
let fireflyLight = true;
let fireflyPosition = 'cam3'; // 初期位置

setInterval(() => {
  if (Math.random() < 0.1) { // ランダムで光が消える
    fireflyLight = false;
    startFireflyMovement(); // じわじわ移動開始
  }
}, 1000);

function onCameraClick(camId) {
  if (!fireflyLight && camId === fireflyCurrentCam) {
    fireflyLight = true;
    fireflyPosition = 'cam3'; // 元の位置に戻る
    stopFireflyMovement();
  }
}
```

---

### Night4

**追加：クモ（執着）＋ベント**

**ベントの追加**
- 画面にベントのUI追加
- ベントボタンを押すと一定時間塞げる（例：30秒）
- 時間切れで解除→またクモが来る

**クモの行動パターン**
- ベントから侵入してくる
- ボタン1つで一定時間塞ぐ
- 時間切れで再侵入（何度も来る・執着）

```javascript
let ventBlocked = false;
let ventTimer = null;

document.getElementById('vent-btn').addEventListener('click', () => {
  ventBlocked = true;
  clearTimeout(ventTimer);
  ventTimer = setTimeout(() => {
    ventBlocked = false; // 30秒後に解除
  }, 30000);
});
```

---

### Night5

**追加：ヒツジ（罪悪感）**

**ヒツジの行動パターン**
- 全てのアクション（シャッター・カメラ切替・ベントボタン）を起こすたびに速くなる
- 速くなるのは最大3段階まで
- 扉前に来たらシャッターで撃退
- 撃退成功したら速度リセット

```javascript
let sheepSpeed = 0; // 0=遅い, 1=普通, 2=速い, 3=最速
const MAX_SPEED = 3;

function onAnyAction() {
  if (sheepSpeed < MAX_SPEED) {
    sheepSpeed++;
    updateSheepMovementSpeed();
  }
}

function onSheepDefeated() {
  sheepSpeed = 0; // リセット
  updateSheepMovementSpeed();
}
```

---

## クリア演出

各Nightクリア時：
1. 6AMになると「NIGHT X CLEAR」表示
2. localStorageにクリアフラグを保存
3. 特番サイトのTOPに戻る（新しいページが追加されている）

```javascript
function onNightClear(nightNumber) {
  localStorage.setItem(`night${nightNumber}_clear`, 'true');
  // Night5の場合はタイムスタンプも保存
  if (nightNumber === 5) {
    localStorage.setItem('night5_clear_time', Date.now());
  }
  showClearScreen(nightNumber);
}
```

---

## ゲームオーバー演出

思念体に侵入された場合：
1. ジャンプスケア（思念体の顔ドアップ＋衝撃音）
2. 「GAME OVER」表示
3. リトライボタン→同じNightをやり直し

---

## 注意事項

- 各Nightは独立したHTMLファイルで実装
- Night間の引き継ぎはlocalStorageで管理
- Night2〜5は前のNightクリアフラグがないとアクセスできない（リダイレクト）
- パフォーマンス：requestAnimationFrameで描画
