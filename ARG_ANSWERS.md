# ARG 答えまとめ — こもれびゆうえんち2

## 全体フロー

```
[初回アクセス] → official/staff.html 吉田長押し → Night1
→ サイト間違い3つ修正 → Night2
→ チャットで敏感トピック3つ → Night3
→ yumestudio 6桁コード入力 → Night4
→ システム端末L5 → Night5
→ Night5クリア → EndB → DM Phase4完了 → Night6解放
→ Night6クリア → EndA
```

### DM（ゆうやけさんぽ）— ストーリー補完・Night6ゲート

パズルではなく選択肢会話。吉田一郎が偽アカウントで接触してくる。

| Phase | 解放条件 | 内容 |
|-------|---------|------|
| 1 | Night1クリア後 | 日常会話、特番のことを調べてるか聞いてくる |
| 2 | Night3クリア後 | 昔リアタイで見てた告白、キャラが4体じゃなかった記憶 |
| 3 | Night4クリア後 | 内部文書の話、被験者・行方不明者の恐怖、感情吐露 |
| 4 | EndB後 | 正体明かし（吉田一郎）、偽アカウント告白、協力要請 |

**Night6解放条件**: `night5_clear AND ending_b_seen AND dm_phase_4_complete`
**フラグ**: `dm_phase_1_complete` 〜 `dm_phase_4_complete`

---

## Night1 入口

**場所**: `official/staff.html`
**操作**: 「吉田 一郎」の名前を **10秒間長押し**
**演出**: 画面がじわじわ暗転（CSS transition: opacity 10s）
**ヒント源**: メール（Night0後に届く）「…離さないで…あの名前を…」
**cursor**: pointer（他スタッフはdefault）

**クリア時のフラグ**: `night1_clear`, `night1_pages_unlocked`, `night1_just_cleared`

---

## Night2 入口

**前提**: `night1_clear`
**操作**: サイト内の **間違い3つ** をクリックで修正 → 3つ目修正時にその場で遷移演出が発動

| # | 場所 | 間違い | 正解 |
|---|------|--------|------|
| corner | キツネ団長ページ | なぜなぜ教室 | 冒険タイム |
| song | ぽたまるページ | ぽたまるソング♪ | ぽたまるダンス♪ |
| day | 番組概要ページ | 毎週日曜日 | 毎週土曜日 |

**localStorage**: `site_errors_found` に配列 `['corner','song','day']`
**演出**: contact.html でグリッチ → 「…見つけてくれたんだ…ありがとう」→ `▶ proceed` ボタン
**ヒント源**: メール（Night1後）「…情報が…書き換えられてる…3つ…正しくないところがある…触れてみて…」

**クリア時のフラグ**: `night2_clear`, `night2_pages_unlocked`

---

## Night3 入口

**前提**: `night2_clear`
**操作**: チャット（キツネ団長DM）で **敏感トピック3つ** に触れる

| キー | トリガーワード | 内容 |
|------|---------------|------|
| chat_topic_watanabe | 田中, たなか, 脚本, 辞めた, 台本 など | 田中恵子（脚本家）のこと |
| chat_topic_bridge | ブリッジ, 映像, コーナーの間, 企画書にない など | ブリッジ映像のこと |
| chat_topic_hikari | ひかり, hikari, 5番目, 消えた, 五体 など | ひかりちゃん（消えた5番目） |

**チャット解放**: Night2クリア後のメールで添付ファイルをクリック → `chat_unlocked` フラグ
**演出**: 3つ全Hit → キツネ団長の反応が変化 → Night3リンク出現
**フラグ**: `chat_topic_watanabe`, `chat_topic_bridge`, `chat_topic_hikari`, `night3_unlocked`

**クリア時のフラグ**: `night3_clear`

---

## Night4 入口

**前提**: `night3_clear`
**操作**: ゆめスタジオプロダクション社員専用ページ（`yumestudio/staff.html`）で **6桁コード入力**

**コード**: `199703`（JS上は `0x30C17` で難読化）
**コードの導出**: hidden文書9つの管理番号 `YSP-XXXX-XX` を横断して黒塗り部分を埋める

| 文書 | 管理番号 | 明かす桁 |
|------|----------|---------|
| matsumoto_memo | YSP-19██-█3 | 1桁目=1, 2桁目=9, 6桁目=3 |
| tape_catalog | YSP-█9█7-0█ | 2桁目=9, 4桁目=7, 5桁目=0 |
| tanaka_resign | YSP-██97-██ | 3桁目=9, 4桁目=7 |
| script_order | YSP-1██7-█3 | 1桁目=1, 4桁目=7, 6桁目=3 |
| prototype | YSP-██9█-03 | 3桁目=9, 5桁目=0, 6桁目=3 |
| final_recording | YSP-███7-0█ | 4桁目=7, 5桁目=0 |
| incident_report | YSP-1█9█-█3 | 1桁目=1, 3桁目=9, 6桁目=3 |
| minutes_1987 | YSP-1███-0█ | 1桁目=1, 5桁目=0 |
| blueprint | YSP-█99█-██ | 2桁目=9, 3桁目=9 |

**結果**: 1-9-9-7-0-3 → `199703`

**導線**: チャットでNight3クリア後にキツネ団長が「ゆめスタジオプロダクションのサイトがまだ残ってるみたい」と教えてくれる
**ヒント**: staff.htmlのログインフォーム下「※ 各文書の管理番号を参照してください。」

**クリア時のフラグ**: `night4_clear`, `yumestudio_unlocked`, `night4_arg_complete`

---

## Night5 入口

**前提**: `night4_clear`

**場所**: `system/index.html`（Night4クリア後にアクセス可能）
**操作**: Level5まで到達 → CORE演出 → Night5遷移
**システム端末パスコード**:
| レベル | コード | ヒント源 |
|--------|--------|---------|
| L1→L2 | `2847` | level1のファイル内に散りばめられた数字 |
| L2→L3 | `GX07` | level2のファイル内 |
| L3→L4 | `1128` | level3のトレースログ（11月28日=ysp-core-01起動日） |
| L4→L5 | `0873` | level4のファイル内（K-059の収集率87.3%） |

**演出**: L5でCOREプロセスの正体が明かされ → 暗転 → Night5遷移
**フラグ**: `night5_arg_complete`, `system_accessed`

**クリア時のフラグ**: `night5_clear`, `night5_pages_unlocked`

---

## Ending B

**前提**: `night5_clear`
**遷移**: Night5クリア画面 → `▶ PROCEED` → `ending_b/index.html`
**内容**: 黒幕の真相が明かされる演出

**クリア時のフラグ**: `ending_b_seen`, `save_point_night5`, `show_night6`, `night6_started`

---

## Night6

**前提**: `night5_clear` AND `ending_b_seen` AND `dm_phase_4_complete`
**導線**: EndB後にPopinでDM Phase4（吉田の正体明かし）を完了 → ハブ画面にNight6アイコン出現。
**ゲーム**: 最高難易度のFNAFナイト

**クリア時のフラグ**: `night6_clear`

---

## Ending A

**前提**: `ending_b_seen`（Night6クリア画面から直接遷移）
**遷移**: Night6クリア → `▶ PROCEED` → `ending_a/index.html`

**クリア時のフラグ**: `ending_a_seen`

---

## 解放コンテンツまとめ

| フラグ | 解放されるコンテンツ |
|--------|---------------------|
| `night1_clear` | official追加ページ、メール+6通、Popin Phase1投稿、DM Phase1 |
| `night2_clear` | チャット（`chat_unlocked`経由）、メール追加 |
| `night3_clear` | yumestudio導線、メール追加、DM Phase2 |
| `night4_clear` | システム端末、メール追加、DM Phase3 |
| `night5_clear` | メール追加 |
| `ending_b_seen` | 吉田ファイル（メール添付経由）、Popin投稿追加、DM Phase4 |
| `dm_phase_4_complete` | Night6解放（ハブにアイコン出現） |
| `ending_a_seen` | エクストラページ（extra/index.html） |

---

## システム端末 フォルダ構造

```
Level 1: スタッフ情報、ログ
Level 2: AIキャスト仕様、バグトリガー
Level 3: 被験者DB（G-0〜G-4, K被験者統計）、意識転写、ひかり筐体、トレースログ
Level 4: K-059プロファイル、プロジェクト計画、器仕様、吉田制御記録
Level 5: COREプロセス状態、COREからK-059へのメッセージ
```
