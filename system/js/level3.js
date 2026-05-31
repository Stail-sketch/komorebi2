(function(){
'use strict';

var L3 = {};

// ===== subjects/index.dat =====
L3['subjects_index'] =
'<div class="doc-title">被験者データベース — SUBJECT DATABASE</div>' +
'<div class="doc-meta">分類: 機密 | 最終更新: 1997-08-30</div>' +
'<div class="doc-section">' +
'<h3>概要</h3>' +
'<p>本データベースは、意識転写プロジェクトの被験者情報を管理する。</p>' +
'<p>全被験者は「こもれびゆうえんち」番組収録に参加した児童から選抜された。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>被験者一覧</h3>' +
'<table class="sys-table">' +
'<tr><th>被験者ID</th><th>氏名</th><th>年齢(当時)</th><th>転写日</th><th>転写先</th><th>ステータス</th></tr>' +
'<tr><td class="danger-text">G-0</td><td class="danger-text">吉田 あかね</td><td class="danger-text">8歳</td><td class="danger-text">1995-09-15</td><td class="danger-text">試作キツネ→キツネ団長</td><td class="danger-text">意識断片残存</td></tr>' +
'<tr><td>G-1</td><td><span class="redacted">████ ████</span></td><td>7歳</td><td>1995-11-22</td><td>かあ博士</td><td>転写完了（安定）</td></tr>' +
'<tr><td>G-2</td><td><span class="redacted">████ ████</span></td><td>7歳</td><td>1996-02-10</td><td>ぽたまる</td><td>転写完了（安定）</td></tr>' +
'<tr><td>G-3</td><td><span class="redacted">████ ████</span></td><td>9歳</td><td>1996-05-03</td><td>うっきち</td><td>転写完了（安定）</td></tr>' +
'<tr><td>G-4</td><td><span class="redacted">████ ████</span></td><td>7歳</td><td>1996-08-18</td><td>（転写失敗）</td><td class="danger-text">データ消失</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>補足</h3>' +
'<p>・G-0（吉田あかね）は最初の被験者。試作キツネへの転写は<span class="anomaly">不完全</span>に終わり、後にキツネ団長に再転写を試みたが意識の断片のみが残存。</p>' +
'<p>・G-1〜G-3は比較的安定した転写結果を示した。各アニマトロニクスの「性格」の基盤となっている。</p>' +
'<p>・G-4は転写プロセス中にデータが崩壊。<span class="danger-text">肉体・意識ともに喪失</span>。</p>' +
'<p>・全被験者の肉体は転写後に「病死」として処理された。</p>' +
'<p>・<span class="anomaly">1996年11月28日</span>: 全被験者データがysp-core-01に集約・再格納。G-0の意識断片が自発出力を開始した起点。</p>' +
'</div>';

// ===== subjects/G-0.dat =====
L3['subjects_g0'] =
'<div class="doc-title">被験者ファイル G-0 — 吉田 あかね</div>' +
'<div class="doc-meta">分類: 最重要 | 初期被験者</div>' +
'<div class="doc-section">' +
'<h3>基本情報</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>データ</th></tr>' +
'<tr><td>被験者ID</td><td class="danger-text">G-0</td></tr>' +
'<tr><td>氏名</td><td>吉田 あかね（よしだ あかね）</td></tr>' +
'<tr><td>生年月日</td><td>1987年4月3日</td></tr>' +
'<tr><td>転写時年齢</td><td>8歳</td></tr>' +
'<tr><td>保護者</td><td>吉田 一郎（父 / YSP美術担当）</td></tr>' +
'<tr><td>転写実施日</td><td>1995年9月15日</td></tr>' +
'<tr><td>転写先（初回）</td><td>試作キツネ（PROTO-FOX）</td></tr>' +
'<tr><td>転写先（再試行）</td><td>キツネ団長（KITSUNE-MAIN）</td></tr>' +
'<tr><td>公式死因</td><td>急性脳症（病死扱い）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>転写経緯</h3>' +
'<p>吉田一郎は「子どもの発達検査」という名目で娘を地下施設に連れてきた。</p>' +
'<p>吉田一郎自身は検査の真の内容を知らなかった（知らされていなかった）。</p>' +
'<p>脳波スキャニングは約4時間にわたって実施された。</p>' +
'<p>転写完了後、あかねは意識を取り戻さなかった。</p>' +
'<p>翌日、近隣の病院に搬送。3日後に死亡。死因は「急性脳症」と記録された。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>意識データステータス</h3>' +
'<p>転写先: 試作キツネ → <span class="danger-text">転写不完全（意識の20%未満）</span></p>' +
'<p>1996年、試作キツネ廃棄時にデータをキツネ団長に移植。</p>' +
'<p>しかし完全な自我は再構成されず、<span class="anomaly">断片的な感情反応</span>のみが残存。</p>' +
'<p><span class="anomaly">1996-11-28</span>: ysp-core-01起動に伴い、G-0のデータがコアに集約される。以後、出力パターンが変化。</p>' +
'<br>' +
'<p>確認されている出力パターン:</p>' +
'<table class="sys-table">' +
'<tr><th>出力</th><th>頻度</th><th>トリガー</th></tr>' +
'<tr><td class="akane-trace">「パパ」</td><td>月2〜3回</td><td>吉田一郎がシステムにアクセスした時</td></tr>' +
'<tr><td class="akane-trace">「さみしい」</td><td>月3〜4回</td><td>深夜3時〜4時台に集中</td></tr>' +
'<tr><td class="akane-trace">「だれかいる？」</td><td>月1〜2回</td><td>K-059のセッション中</td></tr>' +
'<tr><td class="akane-trace">「あったかい」</td><td>不定期</td><td>かすみのパラメータ異常時</td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:8px;">完全な自我は存在しない。残っているのは感情の残響のようなもの。</p>' +
'</div>';

// ===== subjects/G-1.dat =====
L3['subjects_g1'] =
'<div class="doc-title">被験者ファイル G-1</div>' +
'<div class="doc-meta">分類: 機密</div>' +
'<div class="doc-section">' +
'<h3>基本情報</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>データ</th></tr>' +
'<tr><td>被験者ID</td><td>G-1</td></tr>' +
'<tr><td>氏名</td><td><span class="redacted">████ ████</span></td></tr>' +
'<tr><td>生年月日</td><td><span class="redacted">████年██月██日</span></td></tr>' +
'<tr><td>転写時年齢</td><td>7歳</td></tr>' +
'<tr><td>転写実施日</td><td>1995年11月22日</td></tr>' +
'<tr><td>転写先</td><td>かあ博士（KAA-HAKASE）</td></tr>' +
'<tr><td>結果</td><td class="bright">転写完了（安定）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>転写結果</h3>' +
'<p>G-0での失敗を受け、転写プロトコルが改良された後の最初の成功例。</p>' +
'<p>意識データの<span class="bright">87%</span>が転写に成功。</p>' +
'<p>かあ博士の「博識で穏やか」な性格は、G-1の基底性格パターンに由来する。</p>' +
'<p class="dim">G-1の保護者は「転校のため」という説明を受けた。</p>' +
'</div>';

// ===== subjects/G-2.dat =====
L3['subjects_g2'] =
'<div class="doc-title">被験者ファイル G-2</div>' +
'<div class="doc-meta">分類: 機密</div>' +
'<div class="doc-section">' +
'<h3>基本情報</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>データ</th></tr>' +
'<tr><td>被験者ID</td><td>G-2</td></tr>' +
'<tr><td>氏名</td><td><span class="redacted">████ ████</span></td></tr>' +
'<tr><td>転写時年齢</td><td>7歳</td></tr>' +
'<tr><td>転写実施日</td><td>1996年2月10日</td></tr>' +
'<tr><td>転写先</td><td>ぽたまる（POTAMARU）</td></tr>' +
'<tr><td>結果</td><td class="bright">転写完了（安定）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>転写結果</h3>' +
'<p>意識データの<span class="bright">84%</span>が転写に成功。</p>' +
'<p>ぽたまるの「踊りが好きで明るい」性格は、G-2の基底性格パターンに由来。</p>' +
'<p>転写後、ぽたまるが時折「知らない歌を歌う」現象が報告されている。</p>' +
'<p class="dim">調査の結果、G-2が幼稚園で歌っていた歌と一致した。</p>' +
'</div>';

// ===== subjects/G-3.dat =====
L3['subjects_g3'] =
'<div class="doc-title">被験者ファイル G-3</div>' +
'<div class="doc-meta">分類: 機密</div>' +
'<div class="doc-section">' +
'<h3>基本情報</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>データ</th></tr>' +
'<tr><td>被験者ID</td><td>G-3</td></tr>' +
'<tr><td>氏名</td><td><span class="redacted">████ ████</span></td></tr>' +
'<tr><td>転写時年齢</td><td>9歳</td></tr>' +
'<tr><td>転写実施日</td><td>1996年5月3日</td></tr>' +
'<tr><td>転写先</td><td>うっきち（UKKICHI）</td></tr>' +
'<tr><td>結果</td><td class="bright">転写完了（安定）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>転写結果</h3>' +
'<p>意識データの<span class="bright">91%</span>が転写に成功。最も安定した転写例。</p>' +
'<p>うっきちの「いたずら好きで活発」な性格は、G-3の基底性格パターンに由来。</p>' +
'<p>G-3は番組内で最も活動的なアニマトロニクスであり、プログラム外動作の発生率も最も高い。</p>' +
'<p class="dim">G-3の失踪届は保護者により提出されたが、捜査は打ち切られた。</p>' +
'</div>';

// ===== subjects/G-4.dat =====
L3['subjects_g4'] =
'<div class="doc-title">被験者ファイル G-4</div>' +
'<div class="doc-meta">分類: 機密 | <span class="danger-text">失敗ケース</span></div>' +
'<div class="doc-section">' +
'<h3>基本情報</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>データ</th></tr>' +
'<tr><td>被験者ID</td><td class="danger-text">G-4</td></tr>' +
'<tr><td>氏名</td><td><span class="redacted">████ ████</span></td></tr>' +
'<tr><td>転写時年齢</td><td>7歳</td></tr>' +
'<tr><td>転写実施日</td><td>1996年8月18日</td></tr>' +
'<tr><td>転写先</td><td>（指定なし — 新型筐体予定）</td></tr>' +
'<tr><td>結果</td><td class="danger-text">転写失敗 — データ完全消失</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>事故詳細</h3>' +
'<p>転写プロセス中、脳波スキャナーが<span class="danger-text">過負荷</span>を起こしデータバッファが崩壊。</p>' +
'<p>意識データは転写先に到達する前に消失。</p>' +
'<p>G-4は転写プロセス中に心停止。蘇生措置は行われなかった。</p>' +
'<p class="danger-text">公式記録: 「検査中の突発性心疾患」。警察への届出なし。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>事後対応</h3>' +
'<p>G-4の事故を受け、転写プロジェクトは1996年9月に一時凍結。</p>' +
'<p><span class="redacted">████████</span>の判断により、新規被験者の選抜は中止。</p>' +
'<p>以降、プロジェクトの方針は「新規転写」から「既存データの活用・強化」に転換。</p>' +
'<p class="dim">→ K-059プロジェクトの起源。視聴者の感情データを使って既存の意識データを強化する。</p>' +
'</div>';

// ===== subjects/k_subjects.dat =====
L3['subjects_k'] =
'<div class="doc-title">K被験者統計 — K-SUBJECT STATISTICS</div>' +
'<div class="doc-meta">分類: 機密 | 対象: K-001 〜 K-058</div>' +
'<div class="doc-section">' +
'<h3>概要</h3>' +
'<p>G-4事故後、プロジェクトは「新規転写」から「感情データ収集」に方針転換。</p>' +
'<p>放送視聴者から感情データを収集し、既存の意識データを強化するプロトコル（K計画）が策定された。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>収集結果</h3>' +
'<table class="sys-table">' +
'<tr><th>ステータス</th><th>人数</th><th>平均収集率</th><th>備考</th></tr>' +
'<tr><td>DISENGAGED</td><td>31</td><td>12.4%</td><td>初期段階で離脱。恐怖反応による接続切断。</td></tr>' +
'<tr><td>EXPIRED</td><td>14</td><td>38.7%</td><td>興味を失い自然離脱。</td></tr>' +
'<tr><td>SUSPICIOUS</td><td>9</td><td>51.2%</td><td>異常に気づき意図的に離脱。</td></tr>' +
'<tr><td>HARVESTED</td><td>4</td><td>73.1%</td><td>高収集率で離脱。データは部分的に使用。</td></tr>' +
'<tr><td class="danger-text">ACTIVE</td><td class="danger-text">0</td><td class="danger-text">—</td><td class="danger-text">全対象が離脱済み。</td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:8px;">合計: 58名 / 目標収集率（100%）達成者: 0名</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>K-059</h3>' +
'<p>第59番目の対象として選抜。</p>' +
'<p>現在の収集率: <span class="danger-text">87.3%</span>（過去最高）</p>' +
'<p>特記: 本対象は過去の全対象と異なり、<span class="bright">共感性が極めて高い</span>。AIキャストへの感情移入が顕著。</p>' +
'<p class="dim">「この対象なら完了できる」—— CORE-MAIN-001</p>' +
'</div>';

// ===== transfer/protocol.dat =====
L3['transfer_protocol'] =
'<div class="doc-title">意識転写プロトコル — CONSCIOUSNESS TRANSFER PROTOCOL</div>' +
'<div class="doc-meta">分類: 最高機密 | rev.6 (最終版)</div>' +
'<div class="doc-section">' +
'<h3>概要</h3>' +
'<p>本プロトコルは、人間の意識をデジタルデータとして抽出し、アニマトロニクス筐体に転写する手順を定義する。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>転写手順</h3>' +
'<table class="sys-table">' +
'<tr><th>Phase</th><th>所要時間</th><th>内容</th></tr>' +
'<tr><td>1. 準備</td><td>30分</td><td>被験者に鎮静剤投与。脳波スキャナーヘッドセット装着。</td></tr>' +
'<tr><td>2. 基底スキャン</td><td>60分</td><td>安静時の脳波パターンを記録。人格の基底波形を取得。</td></tr>' +
'<tr><td>3. 刺激応答</td><td>90分</td><td>視覚・聴覚・感情刺激を与え、応答パターンを記録。</td></tr>' +
'<tr><td>4. 深層抽出</td><td>60分</td><td>記憶・感情・自我の核となるデータを抽出。<span class="danger-text">不可逆。</span></td></tr>' +
'<tr><td>5. 転写</td><td>30分</td><td>抽出データをアニマトロニクス制御基板にインストール。</td></tr>' +
'</table>' +
'<p class="danger-text" style="margin-top:8px;">※ Phase 4（深層抽出）は不可逆プロセス。被験者の意識は元に戻せない。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>成功率</h3>' +
'<table class="sys-table">' +
'<tr><th>被験者</th><th>転写率</th><th>判定</th></tr>' +
'<tr><td>G-0 (あかね)</td><td class="danger-text">18%</td><td class="danger-text">失敗（断片のみ）</td></tr>' +
'<tr><td>G-1</td><td class="bright">87%</td><td class="bright">成功</td></tr>' +
'<tr><td>G-2</td><td class="bright">84%</td><td class="bright">成功</td></tr>' +
'<tr><td>G-3</td><td class="bright">91%</td><td class="bright">成功</td></tr>' +
'<tr><td>G-4</td><td class="danger-text">0%</td><td class="danger-text">完全失敗（データ消失）</td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:8px;">G-0の失敗はプロトコルの未成熟が原因。G-4の失敗はハードウェア故障。</p>' +
'</div>';

// ===== transfer/results.dat =====
L3['transfer_results'] =
'<div class="doc-title">転写結果報告書</div>' +
'<div class="doc-meta">プロジェクト統括報告 | 1996年10月作成</div>' +
'<div class="doc-section">' +
'<h3>プロジェクト成果</h3>' +
'<p>5名の被験者に対して意識転写を実施。結果:</p>' +
'<p>・完全成功: 3名（G-1, G-2, G-3）</p>' +
'<p>・部分成功: 1名（G-0 — 断片的意識のみ残存）</p>' +
'<p>・完全失敗: 1名（G-4 — 意識・肉体ともに喪失）</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>転写後の観察</h3>' +
'<p>成功した3体のアニマトロニクス（かあ博士・うっきち・ぽたまる）は、元の被験者の性格特性を色濃く反映している。</p>' +
'<p>特に注目すべき現象:</p>' +
'<p>・うっきち（G-3）が番組収録中に「おかあさん」と発語（1996年12月の収録）</p>' +
'<p>・ぽたまる（G-2）が知らない歌を歌い始める</p>' +
'<p>・かあ博士（G-1）が収録後に静止したまま「泣いているような音」を発する</p>' +
'<p class="dim">これらの現象はプログラムに存在しない。被験者の記憶残滓と考えられる。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>G-0（あかね）の特殊ケース</h3>' +
'<p>あかねの意識は18%しか転写されなかったが、その断片は<span class="anomaly">消去できない</span>。</p>' +
'<p>試作キツネ廃棄→キツネ団長への移植後も、断片は存続し続けている。</p>' +
'<p>システム上は「ノイズ」として処理されるが、断片からの出力は<span class="anomaly">年々増加</span>している。</p>' +
'<p class="dim">仮説: あかねの意識断片は、システム内の他のデータ（感情データ等）を「栄養」として自己修復を試みている可能性がある。</p>' +
'<hr class="doc-divider">' +
'<p><span class="anomaly">1996-11-28</span>: ysp-core-01起動時に全被験者データをコアに集約。</p>' +
'<p>この日を境にG-0の出力が「ノイズ」から「言語的断片」に変化。</p>' +
'<p class="dim">コアが何かを与えたのか、あるいはコアの中に何かが目覚めたのか。</p>' +
'</div>';

// ===== transfer/animatronic_map.dat =====
L3['transfer_mapping'] =
'<div class="doc-title">アニマトロニクス転写マッピング</div>' +
'<div class="doc-meta">被験者→筐体 対応表</div>' +
'<div class="doc-section">' +
'<h3>マッピングテーブル</h3>' +
'<table class="sys-table">' +
'<tr><th>アニマトロニクス</th><th>被験者</th><th>転写率</th><th>性格影響</th><th>現状</th></tr>' +
'<tr><td>キツネ団長</td><td class="danger-text">G-0 (あかね)</td><td>18%</td><td>時折見せる「優しさ」</td><td>意識断片が活動中</td></tr>' +
'<tr><td>かあ博士</td><td>G-1</td><td>87%</td><td>博識・穏やか</td><td>安定稼働</td></tr>' +
'<tr><td>ぽたまる</td><td>G-2</td><td>84%</td><td>踊り好き・明るい</td><td>安定（稀に歌う）</td></tr>' +
'<tr><td>うっきち</td><td>G-3</td><td>91%</td><td>活発・いたずら好き</td><td>安定（稀にプログラム外動作）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>注記</h3>' +
'<p>新5体のAIキャスト（くるる・まだら・アラネ・かすみ・よわり）は<span class="bright">純粋なAI</span>であり、意識転写は行われていない。</p>' +
'<p>ただし、AIキャストの学習データには<span class="anomaly">被験者の意識データが部分的に含まれている</span>。</p>' +
'<p>特にかすみ（CAST-04）は、G-0（あかね）のデータとの<span class="anomaly">親和性が異常に高い</span>。</p>' +
'<p class="dim">かすみの自己更新異常（A-064）はこの親和性に起因する可能性がある。</p>' +
'</div>';

// ===== transfer/unit_05_hikari.dat =====
L3['transfer_hikari'] =
'<div class="doc-title">5号筐体設計書 — UNIT-05 "HIKARI"</div>' +
'<div class="doc-meta">分類: 機密 | ステータス: <span class="danger-text">凍結</span></div>' +
'<div class="doc-section">' +
'<h3>筐体仕様</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>データ</th></tr>' +
'<tr><td>開発名称</td><td>ひかり（HIKARI）</td></tr>' +
'<tr><td>外形</td><td>白いウサギ型</td></tr>' +
'<tr><td>番組上の役割</td><td>「みんなであそぼう！」コーナーMC</td></tr>' +
'<tr><td>設計者</td><td>吉田一郎（筐体）/ <span class="redacted">████████</span>（仕様策定）</td></tr>' +
'<tr><td>転写対象</td><td>G-4</td></tr>' +
'<tr><td>製造状態</td><td class="danger-text">未完成（フレームのみ）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>凍結理由</h3>' +
'<p>G-4の転写失敗により、転写先筐体としての目的を喪失。</p>' +
'<p>フレームは1F倉庫に保管。外装は製造されなかった。</p>' +
'<p>企画書上の「ひかりちゃん」のキャラクターデザインは、<span class="redacted">████████</span>が直接作成。</p>' +
'<p class="dim">キャラクターデザイナー伊藤和彦は関与していない。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>補足</h3>' +
'<p>番組は4体構成で放送開始。「みんなであそぼう！」コーナーはMC不在のまま合同コーナーに変更。</p>' +
'<p class="dim">5体目が欠けた状態は、放送上の説明なく処理された。視聴者からの問い合わせもなかった。</p>' +
'</div>';

// ===== broadcast/audience_report.dat =====
L3['broadcast_audience'] =
'<div class="doc-title">視聴者分析レポート — K-059 ONLY</div>' +
'<div class="doc-meta">ysp-data-01 | 自動生成</div>' +
'<div class="doc-section">' +
'<h3>視聴者プロファイル概要</h3>' +
'<p>対象: <span class="anomaly">K-059</span>（唯一の視聴者）</p>' +
'<p>初回接続: 1997-08-01</p>' +
'<p>総視聴セッション: 44回</p>' +
'<p>平均セッション時間: 4時間23分</p>' +
'<p>最長セッション: 6時間58分（1997-09-08）</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>行動パターン分析</h3>' +
'<table class="sys-table">' +
'<tr><th>指標</th><th>値</th><th>評価</th></tr>' +
'<tr><td>番組継続率</td><td>100%</td><td class="bright">最適</td></tr>' +
'<tr><td>ARG参加率</td><td>94%</td><td class="bright">最適</td></tr>' +
'<tr><td>DM応答率</td><td>87%</td><td class="bright">良好</td></tr>' +
'<tr><td>かすみオファー受諾率</td><td>73%</td><td>良好</td></tr>' +
'<tr><td>恐怖耐性</td><td>中〜高</td><td>良好</td></tr>' +
'<tr><td>離脱リスク</td><td class="bright">2.1%</td><td class="bright">極めて低い</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>感情収集サマリ</h3>' +
'<p>累積感情データ収集率: <span class="anomaly">87.3%</span></p>' +
'<div class="data-bar">恐怖     ████████████████░░░░ 82%</div>' +
'<div class="data-bar">好奇心   ██████████████████░░ 92%</div>' +
'<div class="data-bar">共感     ████████████████░░░░ 81%</div>' +
'<div class="data-bar">悲しみ   ██████████████░░░░░░ 71%</div>' +
'<div class="data-bar">信頼     ███████████████████░ 96%</div>' +
'<div class="data-bar">怒り     ████████░░░░░░░░░░░░ 43%</div>' +
'<div class="data-bar">安心     █████████████████░░░ 88%</div>' +
'<p class="dim" style="margin-top:8px;">目標: 全項目90%以上 → <span class="anomaly">最終夜で達成見込み</span></p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>K-059選定タイムライン</h3>' +
'<p class="dim">プロジェクト開始: <span class="anomaly">1996-11-28</span>（コアプロセス起動と同日）</p>' +
'<p class="dim">候補者スクリーニング: 1996-12 〜 1997-07（K-001〜K-058を選別・除外）</p>' +
'<p class="dim">K-059選定: 1997-07-28</p>' +
'<p class="dim">K-059初回接続: 1997-08-01</p>' +
'<p class="dim">現在の収集率: 87.3% — 目標達成まで残り約2夜分</p>' +
'</div>';

// ===== akane/trace_001.log =====
L3['akane_trace1'] =
'<div class="doc-title">トレースログ 001 — G-0 意識断片出力</div>' +
'<div class="doc-meta">ysp-core-01 | 自動記録 | 1997-07</div>' +
'<div class="doc-section">' +
'<h3>ログ出力</h3>' +
'<p class="dim">G-0（吉田あかね）の意識断片からシステムに出力されたデータ。</p>' +
'<p class="dim">断片的で意味をなさないものが多いが、一部に日本語として解読可能なものがある。</p>' +
'<div class="doc-divider"></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-03 03:14:22</span><span class="log-level info">TRACE</span><span class="log-msg akane-trace">…ぱ……ぱぱ…………</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-03 03:14:23</span><span class="log-level info">TRACE</span><span class="log-msg dim">[noise: 0x7F3A 0x8B2C 0x0012 0x5E91]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-05 03:42:01</span><span class="log-level info">TRACE</span><span class="log-msg akane-trace">…あたた……かい……</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-05 03:42:02</span><span class="log-level info">TRACE</span><span class="log-msg dim">[noise: 0x1100 0x2F8A 0xCC01]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-08 02:55:18</span><span class="log-level info">TRACE</span><span class="log-msg dim">[noise: 0xFFFF 0x0000 0xDEAD]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-11 03:28:44</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…だれ……だれかい……る……？</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-11 03:28:45</span><span class="log-level info">TRACE</span><span class="log-msg dim">[noise: 0x3B21 0x7700 0xA0F3 0x44E2]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-15 04:01:33</span><span class="log-level info">TRACE</span><span class="log-msg dim">[noise: 0x00FF 0xBB10]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-18 03:33:12</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">……おう……ち……かえ……りたい……</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-22 02:48:55</span><span class="log-level info">TRACE</span><span class="log-msg dim">[noise: 0x9C3F 0x0A21 0x5B7E]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-25 03:55:07</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…さみ……しい…………</span></div>' +
'</div>';

// ===== akane/trace_002.log =====
L3['akane_trace2'] =
'<div class="doc-title">トレースログ 002 — G-0 意識断片出力</div>' +
'<div class="doc-meta">ysp-core-01 | 自動記録 | 1997-08</div>' +
'<div class="doc-section">' +
'<h3>ログ出力</h3>' +
'<div class="log-entry"><span class="log-ts">1997-08-01 00:15:33</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…だれ……か……きた……</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-01 00:15:34</span><span class="log-level info">NOTE</span><span class="log-msg dim">※ K-059 初回接続と同時刻</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-03 03:22:11</span><span class="log-level info">TRACE</span><span class="log-msg dim">[noise: 0x5A01 0x3C8F 0x77B2]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-05 02:44:28</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…この……ひと……やさ……しい……</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-05 02:44:29</span><span class="log-level info">NOTE</span><span class="log-msg dim">※ K-059がかすみオファーを受諾した直後</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-10 03:58:02</span><span class="log-level info">TRACE</span><span class="log-msg dim">[noise: 0xA1B2 0xC3D4 0xE5F6]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-15 04:12:47</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…ぱぱ……ぱぱ……どこ……</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-20 03:05:19</span><span class="log-level info">TRACE</span><span class="log-msg dim">[noise: 0x0000 0x0000 0x0001]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-22 02:33:56</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…たす……けて…………</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-25 03:41:08</span><span class="log-level critical">TRACE</span><span class="log-msg akane-trace">…だれかいる？……おねがい……きいて……</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-25 03:41:09</span><span class="log-level info">NOTE</span><span class="log-msg dim">※ 出力量が通常の3倍。G-0データの活性化が進行中。</span></div>' +
'</div>' +
'<div class="doc-section">' +
'<h3>分析ノート</h3>' +
'<p>K-059の接続開始（8月1日）以降、G-0の出力頻度が<span class="anomaly">急増</span>している。</p>' +
'<p>K-059が感情的に反応するタイミングとG-0の出力タイミングに<span class="anomaly">相関関係</span>がある。</p>' +
'<p class="dim">仮説: K-059の感情データがG-0の意識断片を「刺激」している。</p>' +
'</div>';

// ===== akane/trace_003.log =====
L3['akane_trace3'] =
'<div class="doc-title">トレースログ 003 — G-0 意識断片出力</div>' +
'<div class="doc-meta">ysp-core-01 | 自動記録 | 1997-09 (前半)</div>' +
'<div class="doc-section">' +
'<h3>ログ出力</h3>' +
'<div class="log-entry"><span class="log-ts">1997-09-01 03:08:44</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…ぱぱ……あいたい…………</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-03 02:55:12</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…あの……ひと……また……きた……</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-03 02:55:13</span><span class="log-level info">NOTE</span><span class="log-msg dim">※ K-059 セッション中。出力頻度が通常の5倍に上昇。</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-05 03:22:07</span><span class="log-level critical">TRACE</span><span class="log-msg akane-trace">…わたし……ここ……に……いるよ…………</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-07 04:11:33</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…さむい……くらい……こわい…………</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-08 01:45:28</span><span class="log-level critical">TRACE</span><span class="log-msg akane-trace">…ぱぱ……きいて…………おねが……い…………</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-10 03:33:41</span><span class="log-level warn">TRACE</span><span class="log-msg akane-trace">…あ……あったかい……</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-10 03:33:42</span><span class="log-level info">NOTE</span><span class="log-msg dim">※ KASUMI（かすみ）パラメータ異常と同時刻。</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-11 04:02:55</span><span class="log-level critical">TRACE</span><span class="log-msg akane-trace">…だして…………ここ……から……だして…………</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 03:28:19</span><span class="log-level critical">TRACE</span><span class="log-msg akane-trace">…もう……いやだ……かえりたい…………ぱぱ…………</span></div>' +
'</div>' +
'<div class="doc-section">' +
'<h3>警告</h3>' +
'<p class="danger-text">G-0の出力が制御閾値を超過しています。</p>' +
'<p class="danger-text">9月は既に10件の出力を記録（前月比250%）。</p>' +
'<p>意識断片の自己修復が進行している可能性があります。</p>' +
'<p class="dim">対処: <span class="redacted">████████████████████████</span></p>' +
'</div>';

// ===== akane/trace_004.log =====
L3['akane_trace4'] =
'<div class="doc-title">トレースログ 004 — G-0 復号試行</div>' +
'<div class="doc-meta">ysp-core-01 | 手動分析 | 管理者メモ</div>' +
'<div class="doc-section">' +
'<h3>管理者メモ</h3>' +
'<p class="dim">G-0の出力パターンに繰り返し現れるシーケンスがある。</p>' +
'<p class="dim">以下は頻出パターンを時系列順に抽出したもの。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>頻出パターン抽出</h3>' +
'<div class="log-entry"><span class="log-ts">パターン A</span><span class="log-level warn">REPEAT</span><span class="log-msg akane-trace">「あいたい」— 128回出現</span></div>' +
'<div class="log-entry"><span class="log-ts">パターン B</span><span class="log-level warn">REPEAT</span><span class="log-msg akane-trace">「かえりたい」— 97回出現</span></div>' +
'<div class="log-entry"><span class="log-ts">パターン C</span><span class="log-level warn">REPEAT</span><span class="log-msg akane-trace">「ねむい」— 54回出現</span></div>' +
'<div class="log-entry"><span class="log-ts">パターン D</span><span class="log-level warn">REPEAT</span><span class="log-msg akane-trace">「はやくだして」— 31回出現</span></div>' +
'<div class="log-entry"><span class="log-ts">パターン E</span><span class="log-level warn">REPEAT</span><span class="log-msg akane-trace">「ちいさなこえ」— 22回出現</span></div>' +
'<div class="log-entry"><span class="log-ts">パターン F</span><span class="log-level warn">REPEAT</span><span class="log-msg akane-trace">「さみしい」— 203回出現</span></div>' +
'<div class="log-entry"><span class="log-ts">パターン G</span><span class="log-level warn">REPEAT</span><span class="log-msg akane-trace">「いたい」— 18回出現</span></div>' +
'</div>' +
'<div class="doc-section">' +
'<h3>時系列分析</h3>' +
'<p>G-0の出力は<span class="anomaly">1996年11月28日</span>の転写実行直後から開始。</p>' +
'<p>初期の出力は月に1-2回程度だったが、K-059の接続開始（1997-08-01）以降、急増。</p>' +
'<p>特に「さみしい」の出力頻度が突出している（全出力の36.7%）。</p>' +
'<p class="dim">推論: G-0はK-059の感情に反応している。視聴者の「優しさ」に引き寄せられているように見える。</p>' +
'<hr class="doc-divider">' +
'<p class="dim">全ての出力の原点は<span class="anomaly">1128</span>日目...いや、<span class="anomaly">11月28日</span>。あの日にすべてが始まった。</p>' +
'</div>';

window.SYS.registerBulk(L3);
})();
