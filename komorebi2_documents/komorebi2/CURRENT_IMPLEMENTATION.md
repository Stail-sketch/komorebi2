# こもれびゆうえんち2 — 現在の実装状態
# 最終更新：2026-04-05

---

## 全体構成

```
PCデスクトップ（index.html）
  ├── ブラウザ → 特番サイト（official/）
  ├── Popin → 架空SNS + DM（twitter/）
  ├── メール → 受信ボックス（mail/）
  ├── チャット → キツネ団長チャット（chat/）※Night2クリア後メールで解放
  ├── 旧サイト → 前作アーカイブ（archive/）※Night3クリア後に出現
  ├── sys_log.txt → EndB後に出現
  ├── 吉田調査ファイル → yoshida/ ※DM Phase4完了後に出現
  ├── エクストラ → extra/ ※EndA後に出現
  └── カスタムナイト → custom/ ※EndA後に出現
```

技術: Pure HTML/CSS/JS, GitHub Pages, no外部ライブラリ, PC前提

---

## Night1への入口

**場所**: official/staff.html
**仕掛け**: 「吉田一郎」を10秒間長押し
**演出**: 画面が10秒かけてフェードtoブラック、途中で離すと戻る
**URL**: `../night1/`
**localStorage**: チェックなし（常にアクセス可能）
**ヒント**: メール初期メッセージ「…離さないで…あの名前を…」

---

## Night2への入口

**方式**: サイト内の間違い3つをクリックして修正
**前提**: `night1_clear === 'true'` かつ `night2_clear !== 'true'`

**3つの間違い**:
1. character_kitsune.html — 「キツネ団長のなぜなぜ教室」→ 正: 冒険タイム
2. character_potamaru.html — 「ぽたまるソング♪」→ 正: ぽたまるダンス♪
3. about_program.html — 「毎週日曜日」→ 正: 毎週土曜日

**クリック時**: グリッチ演出 → 正しい値に修正 → 緑色に光る
**3つ修正後**: `triggerNight2Transition()` — 緑バグ文字が画面を埋め尽くす → システムログ表示 → Night2へ遷移
**URL**: `../night2/`
**localStorage**: `site_errors_found` に配列保存

**副ルート**: contact.htmlで「サイト内容の誤りを報告する」→ キーワード入力でも可

---

## Night3への入口

**方式**: キツネ団長チャット（chat/）で敏感トピック3つに触れる（尋問型）
**前提**: `night2_clear === 'true'`、チャット解放済み（`chat_unlocked === 'true'`）

**ウォームアップ会話**: 3段階の自然な会話後「なんでも聞いてよ！」で自由会話モードへ

**敏感トピック3つ**（プレイヤーが自分から話題を振る）:
1. 田中恵子 / 脚本 / 辞めた → キツネ団長「…それ…知ってるの…？」
2. ブリッジ映像 / コーナーの間 → キツネ団長「…！ 知ってるんだ…」
3. ひかりちゃん / 5番目 / 消えた → キツネ団長「…………」（沈黙）

**localStorage**: `chat_topic_watanabe`, `chat_topic_bridge`, `chat_topic_hikari`
**3トピック後**: 「……なんでそんなこと知ってるの？……怖いよ……でも……来てくれる？」→ Night3リンク
**URL**: `../night3/`

---

## Night4への入口

**方式**: DMでゆうやけさんぽにNight3後の追加資料の内容をぶつける（尋問型）
**前提**: `night3_clear === 'true'`、DM Phase1解放済み
**状態**: 設計中（トピック・キーワード・反応は未確定）

**設計方針**:
- Night3と同じ「尋問」方式だがDMで相手が違う
- Night3後に解放されたページ（被験者リスト、行方不明者、事件年表等）の情報をぶつける
- 3トピック触れるとゆうやけさんぽが崩れてNight4解放
- キツネ団長は怯えるが、ゆうやけさんぽはもっと重い反応

---

## Night5への入口

**方式**: 全ツール横断の最難関ARG（contactフォーム使用）
**前提**: `night4_clear === 'true'`
**状態**: 設計中

**設計方針**:
- official + Popin + メール + チャット + DM + アーカイブに散らばった情報を組み立てる
- contactフォームに何かを入力して送信
- 前作もNight5でcontactフォームを使ったためオマージュ
- 全ページ横断、シリーズ最高難度

---

## Night6への入口

**方式**: DM Phase3の最終会話で自動遷移
**前提**: `night5_clear === 'true'` かつ `ending_b_seen === 'true'`

**仕掛け**: `triggerFinalConversation()` → 「一緒に終わらせよう」→「…行こう」
**演出**: 暗転 → 自動リダイレクト
**URL**: `../night6/`（自動遷移）
**localStorage**: `final_conversation_done = 'true'`
**ビジュアル**: `.night6-override` — 全体が赤/ダークレッドに変化

---

## Nightクリア時の共通処理

各Night完了時に設定されるフラグ:

| Night | フラグ | 追加フラグ | 遷移先 |
|-------|--------|-----------|--------|
| Night1 | `night1_clear` | `night1_pages_unlocked`, `night1_just_cleared` | ../index.html |
| Night2 | `night2_clear` | `night2_pages_unlocked`, `night2_just_cleared` | ../index.html |
| Night3 | `night3_clear` | `night3_pages_unlocked`, `night3_just_cleared` | ../index.html |
| Night4 | `night4_clear` | `night4_pages_unlocked`, `night4_just_cleared` | ../index.html |
| Night5 | `night5_clear` | `night5_pages_unlocked`, `night5_clear_time`, `save_point_night5` | PROCEEDボタン → ../ending_b/ |
| Night6 | `night6_clear` | `night6_pages_unlocked`, `custom_night_unlocked` | PROCEEDボタン → ../ending_a/ |

---

## エンド分岐

### エンドB（1周目 — 必ずここに来る）
- **トリガー**: Night5クリア → 自動で ending_b/ へ
- **設定フラグ**: `ending_b_seen = 'true'`, `save_point_night5 = 'true'`
- **戻り先**: ../index.html
- **解放コンテンツ**: sys_log.txt、DM Phase4、あかね黒塗り解除（19ファイル）、yoshida/ディレクトリ、新メール5通、Popin新投稿5件

### エンドA（2周目 — EndB後にNight6クリアで到達）
- **トリガー**: Night6クリア → 自動で ending_a/ へ
- **アクセス条件**: `ending_b_seen` + `yoshida_files_read` + `final_conversation_done`
- **設定フラグ**: `ending_a_seen = 'true'`
- **削除フラグ**: `save_point_night5`, `current_night`, `game_progress`
- **戻り先**: ../index.html
- **解放コンテンツ**: extra/（STORY/CHARACTERS/GALLERY/DEV COMMENT）、custom/（カスタムナイト）

---

## デスクトップアイコン解放

| アイコン | 解放条件 | localStorage |
|---------|---------|-------------|
| ブラウザ | 最初から | — |
| Popin | 最初から | — |
| メール | 最初から | — |
| チャット | Night2後メールで解放 | `chat_unlocked === 'true'` |
| 旧サイト | Night3クリア後 | `night3_clear === 'true'` |
| sys_log.txt | EndB後（EndA後も残る） | `ending_b_seen === 'true'` |
| 吉田調査 | DM Phase4完了後 | `yoshida_files_sent === 'true'` |
| エクストラ | EndA後 | `ending_a_seen === 'true'` |
| カスタムナイト | EndA後 | `ending_a_seen === 'true'` |

---

## Popin DMフェーズ

| Phase | 解放条件 | 内容 |
|-------|---------|------|
| 0 | Night2以前 | DM非表示 |
| 1 | Night3クリア後 | ゆうやけさんぽと初会話 + Night4尋問トリガー（設計中） |
| 2 | Night4クリア後 | 過去の関与告白 + Night5自動遷移トリガー |
| 3 | Night5クリア後 | 真相告白 + Night6自動遷移トリガー |
| 4 | EndB後 | 説得キーワード解放（吉田/あかね/騙されてる/K-059等、3つ以上でEndA条件） |

---

## Night6 ゲーム仕様

**時間**: 150秒（2分30秒）
**全9体同時稼働**: F1旧4体 + F2新5体 + Blackmaster攻撃

### F2新5体

| キャラ | 仕組み | 主要パラメータ |
|--------|--------|--------------|
| くるる | カメラ経路移動、見ると減速 | 移動3秒(通常)/6秒(減速)、ドア待機4.5秒 |
| まだら | ステルス経路移動（opacity 0.1） | 移動4.5秒、ドア待機4秒 |
| かすみ | オファーシステム（後述） | 出現10-18秒間隔、タイムアウト8秒 |
| アラネ | 蜘蛛の巣ゲージ管理 | 消費0.5/tick、回復2/tick（CAM9長押し） |
| よわり | カメラに出現、クリックで消す | 出現12-20秒間隔、放置で全敵1.5倍速 |

### F1旧4体

| キャラ | 仕組み |
|--------|--------|
| キツネ団長 | CAM2のクロックゲージ、クリックで巻く（0%で死亡） |
| かあ博士 | 左右移動型、ドアで防御 |
| うっきち | 逆サイド攻撃（CAM7にいるが右ドアから来る等） |
| ぽたまる | 音楽A/Bで方向判断、正しいドアを閉める |

### かすみオファーシステム（Night3-6共通）

| 行動 | 効果 | エスカレート |
|------|------|------------|
| **放置（8秒）** | ゲームオーバー | — |
| **受け取る** | +20パワー + デバフ（敵2倍速・カメラノイズ） | デバフ時間が回数ごとに+5秒（15s→20s→25s…） |
| **断る** | 5秒間パワー消費1.3倍 | 全敵5%永続加速（累積） |

### パワー消費

| 項目 | 消費/tick(500ms) |
|------|-----------------|
| 基本 | 0.15 |
| カメラ | +0.09 |
| ドア(片方) | +0.50 |
| ライト(片方) | +0.15 |
| かすみ断りペナルティ | 全体×1.3（5秒間） |

### Blackmaster
- 12-20秒間隔でランダムにドアを強制解除

---

## メールシステム

| タイミング | 通数 | 主要メール |
|-----------|------|-----------|
| 初期 | 3通 | 初期メッセージ（ヒント含む） |
| Night1後 | 6通 | ぽたまる音声、間違い探し誘導 |
| Night2後 | 7通 | チャット解放ボタン付きメール |
| Night3後 | 5通 | — |
| Night4後 | 4通 | — |
| Night5後 | 7通 | — |
| EndB後 | 5通 | あかね関連、吉田関連 |

---

## コンテンツ解放（officialサイト）

`updateUnlockedContent()` が `.unlocked-night{N}` クラスの要素を表示制御。
各Nightクリアごとにページ内の隠しセクションが出現する。

---

## 壁紙

| 状態 | 壁紙 |
|------|------|
| 通常 | 青グラデーション（Windows風） |
| EndB後（EndA前） | 緑グリッチ（endb-wallpaper） |
| EndA後 | 穏やかな壁紙（enda-wallpaper） |
