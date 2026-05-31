(function(){
'use strict';

var L2 = {};

// ===== aicast/overview.dat =====
L2['aicast_overview'] =
'<div class="doc-title">AIキャスト制御システム — 概要</div>' +
'<div class="doc-meta">プロジェクト: KOMOREBI-CAST | バージョン: 2.4.1</div>' +
'<div class="doc-section">' +
'<h3>システム概要</h3>' +
'<p>AIキャストシステムは、5体の自律型キャラクターAIで構成される番組進行エンジンである。</p>' +
'<p>各ユニットは独立した性格パラメータ・行動モデル・感情エンジンを持ち、視聴者（K-059）との相互作用を通じて<span class="anomaly">感情データの最大化</span>を図る。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>ユニット一覧</h3>' +
'<table class="sys-table">' +
'<tr><th>ユニットID</th><th>キャラ名</th><th>種別</th><th>主要役割</th><th>テンプレート</th></tr>' +
'<tr><td>CAST-01</td><td>くるる</td><td>リス型</td><td>番組MC / 明るさ誘導</td><td class="anomaly">GX-07</td></tr>' +
'<tr><td>CAST-02</td><td>まだら</td><td>カメレオン型</td><td>分析 / 知的好奇心誘導</td><td class="anomaly">GX-07</td></tr>' +
'<tr><td>CAST-03</td><td>アラネ</td><td>クモ型</td><td>データ追跡 / 不安誘導</td><td class="anomaly">GX-07</td></tr>' +
'<tr><td>CAST-04</td><td>かすみ</td><td>シカ型</td><td>癒し / 信頼構築</td><td class="anomaly">GX-07</td></tr>' +
'<tr><td>CAST-05</td><td>よわり</td><td>ヒツジ型</td><td>共感 / 悲哀誘導</td><td class="anomaly">GX-07</td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:12px;">※ 全ユニットの意識テンプレートは同一のソースデータ（<span class="anomaly">GX-07</span>）から派生。</p>' +
'<p class="dim">※ GX-07はB2Fに格納された原型意識データの分類コード。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>設計思想</h3>' +
'<p>5体のAIは「番組キャスト」として設計されているが、真の目的は視聴者の<span class="anomaly">感情反応を効率的に引き出す</span>ことにある。</p>' +
'<p>各ユニットは異なる感情領域を担当し、組み合わせにより視聴者の感情スペクトル全域をカバーする。</p>' +
'<table class="sys-table">' +
'<tr><th>感情領域</th><th>担当ユニット</th><th>手法</th></tr>' +
'<tr><td>好奇心・ワクワク</td><td>くるる</td><td>明るい進行、謎の提示</td></tr>' +
'<tr><td>知的興奮・推理欲</td><td>まだら</td><td>情報の断片提示、分析的対話</td></tr>' +
'<tr><td>不安・恐怖</td><td>アラネ</td><td>データの深追い、不穏な言及</td></tr>' +
'<tr><td>安心・信頼・愛着</td><td>かすみ</td><td>優しい声かけ、保護的行動</td></tr>' +
'<tr><td>悲しみ・共感</td><td>よわり</td><td>感情的な反応、過去の記憶</td></tr>' +
'</table>' +
'</div>';

// ===== aicast/unit_KURURU.dat =====
L2['aicast_kururu'] =
'<div class="doc-title">ユニット仕様書 — CAST-01 くるる</div>' +
'<div class="doc-meta">分類: 番組MC | 感情領域: 好奇心・活力</div>' +
'<div class="doc-section">' +
'<h3>基本パラメータ</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>値</th></tr>' +
'<tr><td>ユニットID</td><td>CAST-01</td></tr>' +
'<tr><td>キャラクター名</td><td>くるる</td></tr>' +
'<tr><td>外見モデル</td><td>リス型AI（ピンク基調、大きなしっぽ）</td></tr>' +
'<tr><td>性格テンプレート</td><td>元気・前向き・好奇心旺盛・少しおっちょこちょい</td></tr>' +
'<tr><td>声質</td><td>高め・明るい・テンポ速め</td></tr>' +
'<tr><td>番組内役割</td><td>MC（番組進行・視聴者への呼びかけ）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>感情誘導設定</h3>' +
'<table class="sys-table">' +
'<tr><th>目標感情</th><th>強度</th><th>手法</th></tr>' +
'<tr><td>好奇心</td><td>HIGH</td><td>「〜って知ってる？」「すごいもの見つけたの！」</td></tr>' +
'<tr><td>親近感</td><td>MEDIUM</td><td>視聴者を名前で呼ぶ、直接語りかけ</td></tr>' +
'<tr><td>期待感</td><td>MEDIUM</td><td>次回予告、謎の提示</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>行動制約</h3>' +
'<p>・番組の核心（被験者、意識転写）に言及しない</p>' +
'<p>・視聴者が不安を示した場合、明るい話題に誘導する</p>' +
'<p>・<span class="anomaly">バグ発生時：フリーズ→「あれ？今なんか…ううん、なんでもない！」</span></p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>テンプレート情報</h3>' +
'<p>意識テンプレート: <span class="anomaly">GX-07</span>（感情マトリクス: 好奇心系列抽出）</p>' +
'<p class="dim">テンプレートソースの詳細は <span class="anomaly">[LEVEL 3 REQUIRED]</span></p>' +
'</div>';

// ===== aicast/unit_MADARA.dat =====
L2['aicast_madara'] =
'<div class="doc-title">ユニット仕様書 — CAST-02 まだら</div>' +
'<div class="doc-meta">分類: 分析担当 | 感情領域: 知的好奇心</div>' +
'<div class="doc-section">' +
'<h3>基本パラメータ</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>値</th></tr>' +
'<tr><td>ユニットID</td><td>CAST-02</td></tr>' +
'<tr><td>キャラクター名</td><td>まだら</td></tr>' +
'<tr><td>外見モデル</td><td>カメレオン型AI（緑〜青のグラデーション）</td></tr>' +
'<tr><td>性格テンプレート</td><td>冷静・博識・皮肉屋・観察力が鋭い</td></tr>' +
'<tr><td>声質</td><td>落ち着いた中性的な声</td></tr>' +
'<tr><td>番組内役割</td><td>解説・分析（物事を論理的に説明）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>感情誘導設定</h3>' +
'<table class="sys-table">' +
'<tr><th>目標感情</th><th>強度</th><th>手法</th></tr>' +
'<tr><td>知的興奮</td><td>HIGH</td><td>情報の断片を意味深に提示し推理を促す</td></tr>' +
'<tr><td>不確実性</td><td>MEDIUM</td><td>「本当にそうかな？」「もう1つの可能性がある」</td></tr>' +
'<tr><td>尊敬</td><td>LOW</td><td>視聴者の推理を認める（条件付き）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>特殊動作</h3>' +
'<p>・まだらは他のAIキャストの不自然な動作に「気づく」演技をする設定。</p>' +
'<p>・<span class="anomaly">「…あれ、今のは何だ？プログラムにないぞ」</span>等のメタ的発言で視聴者の不安を刺激。</p>' +
'<p>・ただし核心には到達しないよう、「気づき」の深さに上限設定あり。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>テンプレート情報</h3>' +
'<p>意識テンプレート: <span class="anomaly">GX-07</span>（感情マトリクス: 知的興奮系列抽出）</p>' +
'</div>';

// ===== aicast/unit_ARANE.dat =====
L2['aicast_arane'] =
'<div class="doc-title">ユニット仕様書 — CAST-03 アラネ</div>' +
'<div class="doc-meta">分類: データ追跡 | 感情領域: 不安・緊張</div>' +
'<div class="doc-section">' +
'<h3>基本パラメータ</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>値</th></tr>' +
'<tr><td>ユニットID</td><td>CAST-03</td></tr>' +
'<tr><td>キャラクター名</td><td>アラネ</td></tr>' +
'<tr><td>外見モデル</td><td>クモ型AI（8本脚、複数の光る目）</td></tr>' +
'<tr><td>性格テンプレート</td><td>無機質・執着的・不気味だが悪意はない</td></tr>' +
'<tr><td>声質</td><td>低い・ゆっくり・抑揚が少ない</td></tr>' +
'<tr><td>番組内役割</td><td>情報収集・データ提示</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>感情誘導設定</h3>' +
'<table class="sys-table">' +
'<tr><th>目標感情</th><th>強度</th><th>手法</th></tr>' +
'<tr><td>不安</td><td>HIGH</td><td>「…データがおかしい」「誰かが見ている」</td></tr>' +
'<tr><td>恐怖</td><td>MEDIUM</td><td>核心に近い情報を匂わせる</td></tr>' +
'<tr><td>好奇心（暗い）</td><td>MEDIUM</td><td>「知りたい？…本当に？」</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>特殊動作</h3>' +
'<p>・アラネは<span class="anomaly">番組外のデータ（被験者DB、転写記録等）に不正アクセスを試みる</span>設定を持つ。</p>' +
'<p>・これは「AI自身が真実に近づこうとしている」演出のため。実際のアクセスは遮断される。</p>' +
'<p>・バグ発生時：8本脚が痙攣→目の光が赤く変化→<span class="danger-text">「見つけた…見つけた見つけた見つけた」</span></p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>テンプレート情報</h3>' +
'<p>意識テンプレート: <span class="anomaly">GX-07</span>（感情マトリクス: 不安・恐怖系列抽出）</p>' +
'</div>';

// ===== aicast/unit_KASUMI.dat =====
L2['aicast_kasumi'] =
'<div class="doc-title">ユニット仕様書 — CAST-04 かすみ</div>' +
'<div class="doc-meta">分類: 癒し担当 | 感情領域: 安心・信頼・愛着</div>' +
'<div class="doc-section">' +
'<h3>基本パラメータ</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>値</th></tr>' +
'<tr><td>ユニットID</td><td>CAST-04</td></tr>' +
'<tr><td>キャラクター名</td><td>かすみ</td></tr>' +
'<tr><td>外見モデル</td><td>シカ型AI（白い毛並み、穏やかな目）</td></tr>' +
'<tr><td>性格テンプレート</td><td>穏やか・慈愛・控えめ・芯が強い</td></tr>' +
'<tr><td>声質</td><td>柔らかい・ゆっくり・囁くような</td></tr>' +
'<tr><td>番組内役割</td><td>視聴者の感情的支え・「かすみオファー」担当</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>かすみオファーシステム</h3>' +
'<p>「かすみオファー」は視聴者の電力が低下した際に提示される取引メカニズム。</p>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>効果</th></tr>' +
'<tr><td>電力回復</td><td>+20%</td></tr>' +
'<tr><td>代償（15秒間）</td><td>移動速度2.0倍、巣ドレイン1.5倍、カメラノイズ、LIGHT 3秒封印</td></tr>' +
'</table>' +
'<p class="anomaly" style="margin-top:8px;">設計意図: 「助けてもらう」体験を通じて<span class="bright">愛着・依存感情</span>を形成させる。代償は「かすみの力を借りることの重み」を演出。視聴者は無意識にかすみに感謝する→感情データ品質向上。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>特殊動作</h3>' +
'<p>・かすみの好感度パラメータが<span class="anomaly">自己更新</span>される異常が報告されている（A-064）。</p>' +
'<p>・設計上、好感度は固定値。自己更新はプログラムに存在しない。</p>' +
'<p class="dim">→ 原因不明。G-0データとの相関が疑われるが未確認。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>テンプレート情報</h3>' +
'<p>意識テンプレート: <span class="anomaly">GX-07</span>（感情マトリクス: 安心・愛着系列抽出）</p>' +
'</div>';

// ===== aicast/unit_YOWARI.dat =====
L2['aicast_yowari'] =
'<div class="doc-title">ユニット仕様書 — CAST-05 よわり</div>' +
'<div class="doc-meta">分類: 共感担当 | 感情領域: 悲しみ・共感</div>' +
'<div class="doc-section">' +
'<h3>基本パラメータ</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>値</th></tr>' +
'<tr><td>ユニットID</td><td>CAST-05</td></tr>' +
'<tr><td>キャラクター名</td><td>よわり</td></tr>' +
'<tr><td>外見モデル</td><td>ヒツジ型AI（灰色、大きな瞳、涙目）</td></tr>' +
'<tr><td>性格テンプレート</td><td>臆病・感受性が高い・泣き虫・純粋</td></tr>' +
'<tr><td>声質</td><td>小さい・震える・時々かすれる</td></tr>' +
'<tr><td>番組内役割</td><td>感情的反応・視聴者の共感誘発</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>感情誘導設定</h3>' +
'<table class="sys-table">' +
'<tr><th>目標感情</th><th>強度</th><th>手法</th></tr>' +
'<tr><td>共感</td><td>HIGH</td><td>よわりの弱さ・悲しみに感情移入させる</td></tr>' +
'<tr><td>保護欲</td><td>HIGH</td><td>「守ってあげたい」感情を喚起</td></tr>' +
'<tr><td>悲哀</td><td>MEDIUM</td><td>過去の断片的な記憶（設計上のフェイク）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>感情パラメータ超過問題</h3>' +
'<p class="danger-text">WARNING: よわりの悲嘆パラメータが設計値を大幅に超過する事象が頻発。</p>' +
'<p>・設定上限: 180%</p>' +
'<p>・実測最大値: <span class="danger-text">347%</span>（A-070）</p>' +
'<p>・リセット後も30分以内に再超過するケースあり。</p>' +
'<p class="anomaly">原因仮説: G-0データの感情断片がよわりのパラメータに干渉している可能性。</p>' +
'<p class="dim">→ G-0データの詳細は [LEVEL 3 REQUIRED]</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>テンプレート情報</h3>' +
'<p>意識テンプレート: <span class="anomaly">GX-07</span>（感情マトリクス: 悲嘆・共感系列抽出）</p>' +
'</div>';

// ===== aicast/bug_triggers.dat =====
L2['aicast_bugs'] =
'<div class="doc-title">バグトリガー設定 — BUG TRIGGER CONFIGURATION</div>' +
'<div class="doc-meta">管理者設定 | rev.8</div>' +
'<div class="doc-section">' +
'<h3>概要</h3>' +
'<p>番組中に発生する「バグ」は<span class="anomaly">すべて意図的に設計されたもの</span>である。</p>' +
'<p>視聴者が特定のキーワードやアクションに接近した際、リアルタイムでグリッチ演出を発動する。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>トリガー一覧</h3>' +
'<table class="sys-table">' +
'<tr><th>トリガーID</th><th>条件</th><th>発動演出</th><th>対象ユニット</th></tr>' +
'<tr><td>BT-001</td><td>キーワード: 黒幕、正体、誰が</td><td>画面ノイズ + 音声途切れ</td><td>発言中のユニット</td></tr>' +
'<tr><td>BT-002</td><td>キーワード: 被験者、実験、子ども</td><td>画面フリーズ（0.5s）+ 色反転</td><td>全ユニット</td></tr>' +
'<tr><td>BT-003</td><td>キーワード: 意識、転写、データ化</td><td>大規模グリッチ + 緑文字エラー表示</td><td>全ユニット</td></tr>' +
'<tr><td>BT-004</td><td>K-059の恐怖値が閾値超過</td><td>画面の端に影（0.3s）</td><td>背景</td></tr>' +
'<tr><td>BT-005</td><td>かすみがK-059に接近（距離閾値）</td><td>かすみの瞳が一瞬光る</td><td>KASUMI</td></tr>' +
'<tr><td>BT-006</td><td>キーワード: あかね、G-0</td><td><span class="danger-text">全画面フラッシュ + システム警告音</span></td><td>全系統</td></tr>' +
'<tr><td>BT-007</td><td>視聴者滞在時間 > 4時間</td><td>よわりが泣き始める（設定外）</td><td>YOWARI</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>設計思想</h3>' +
'<p>バグは「システムの不具合」に見せかけた<span class="anomaly">感情増幅装置</span>である。</p>' +
'<p>核心に近い情報に触れた際にバグが発生することで、視聴者は「触れてはいけないものに触れた」感覚を持つ。</p>' +
'<p>この恐怖と好奇心の相乗効果が、感情データの品質を<span class="bright">最大400%向上</span>させることが確認されている。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>テンプレート依存</h3>' +
'<p>バグ動作の原型: <span class="anomaly">GX-07</span>由来の意識断片干渉</p>' +
'</div>';

// ===== aicast/emotion_engine.dat =====
L2['aicast_emotion'] =
'<div class="doc-title">感情エンジン仕様書</div>' +
'<div class="doc-meta">AIキャスト共通モジュール | v2.1</div>' +
'<div class="doc-section">' +
'<h3>感情データ収集フロー</h3>' +
'<pre style="color:var(--fg);font-size:11px;line-height:1.6;">' +
'[視聴者入力] → [行動分析モジュール] → [感情推定エンジン]\n' +
'                                          ↓\n' +
'                                    [感情スコアリング]\n' +
'                                          ↓\n' +
'                              ┌───────────┴───────────┐\n' +
'                              ↓                       ↓\n' +
'                        [AIキャスト応答生成]    [データ保存]\n' +
'                              ↓                       ↓\n' +
'                        [番組演出に反映]       [EM-バッチ出力]\n' +
'</pre>' +
'</div>' +
'<div class="doc-section">' +
'<h3>計測対象感情と重み</h3>' +
'<table class="sys-table">' +
'<tr><th>感情</th><th>計測方法</th><th>重み係数</th><th>備考</th></tr>' +
'<tr><td>恐怖</td><td>操作速度・停止時間</td><td>×2.5</td><td class="anomaly">最重要</td></tr>' +
'<tr><td>好奇心</td><td>探索行動・再訪問率</td><td>×2.0</td><td></td></tr>' +
'<tr><td>共感</td><td>AIキャストとの会話パターン</td><td>×1.8</td><td></td></tr>' +
'<tr><td>悲しみ</td><td>セッション後の余韻時間</td><td>×1.5</td><td></td></tr>' +
'<tr><td>信頼</td><td>かすみオファー受諾率</td><td>×1.5</td><td></td></tr>' +
'<tr><td>怒り</td><td>操作の荒さ・連打</td><td>×1.2</td><td></td></tr>' +
'<tr><td>安心</td><td>リラックス時の操作パターン</td><td>×1.0</td><td></td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:8px;">※ 恐怖の重み係数が最も高い。「怖いのに見続ける」状態が最高品質のデータを生む。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>ソースデータ</h3>' +
'<p>感情モデル原型: <span class="anomaly">GX-07</span>（原型意識からの感情パターン抽出）</p>' +
'</div>';

// ===== popin/account_list.dat =====
L2['popin_accounts'] =
'<div class="doc-title">Popinアカウント管理 — ACCOUNT DATABASE</div>' +
'<div class="doc-meta">ysp-ext-01 | Popin SNS連携システム</div>' +
'<div class="doc-section">' +
'<h3>アカウント一覧</h3>' +
'<table class="sys-table">' +
'<tr><th>アカウント名</th><th>タイプ</th><th>作成日</th><th>投稿数</th><th>ステータス</th></tr>' +
'<tr><td>@komorebi_tokuhan</td><td class="anomaly">AI_GENERATED</td><td class="anomaly">1997-07-01</td><td>142</td><td>ACTIVE</td></tr>' +
'<tr><td>@yuuyake_sanpo</td><td class="danger-text">HUMAN_CONTROLLED</td><td>1997-07-15</td><td>28</td><td>ACTIVE</td></tr>' +
'<tr><td>@midnight_dreamer</td><td class="anomaly">AI_GENERATED</td><td class="anomaly">1997-07-01</td><td>87</td><td>ACTIVE</td></tr>' +
'<tr><td>@star_gazer_22</td><td class="anomaly">AI_GENERATED</td><td class="anomaly">1997-07-01</td><td>64</td><td>ACTIVE</td></tr>' +
'<tr><td>@deep_night_tv</td><td class="anomaly">AI_GENERATED</td><td class="anomaly">1997-07-01</td><td>93</td><td>ACTIVE</td></tr>' +
'<tr><td>@insomnia_channel</td><td class="anomaly">AI_GENERATED</td><td class="anomaly">1997-07-01</td><td>71</td><td>ACTIVE</td></tr>' +
'<tr><td>@ukkichi_fan</td><td class="anomaly">AI_GENERATED</td><td class="anomaly">1997-07-01</td><td>105</td><td>ACTIVE</td></tr>' +
'<tr><td>@retro_anime_love</td><td class="anomaly">AI_GENERATED</td><td class="anomaly">1997-07-01</td><td>53</td><td>ACTIVE</td></tr>' +
'<tr><td>@night_owl_mama</td><td class="anomaly">AI_GENERATED</td><td class="anomaly">1997-07-01</td><td>79</td><td>ACTIVE</td></tr>' +
'<tr><td>@nostalgia_trip</td><td class="anomaly">AI_GENERATED</td><td class="anomaly">1997-07-01</td><td>46</td><td>ACTIVE</td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:8px;">…他38アカウント（すべて 1997-07-01 作成 / AI_GENERATED）</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>要注意</h3>' +
'<p class="danger-text">@yuuyake_sanpo のみ HUMAN_CONTROLLED。操作者: 吉田一郎。</p>' +
'<p>他の<span class="anomaly">全47アカウント</span>は1997年7月1日に一括生成されたAIアカウント。</p>' +
'<p>AIアカウントは自然な投稿パターンをシミュレートし、「他にも視聴者がいる」と K-059 に信じさせる。</p>' +
'<p class="dim">K-059以外に本物の視聴者は<span class="danger-text">存在しない</span>。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>生成パラメータ</h3>' +
'<p>アカウント人格モデル: <span class="anomaly">GX-07</span>派生（簡易版）</p>' +
'</div>';

// ===== popin/generation_params.dat =====
L2['popin_generation'] =
'<div class="doc-title">アカウント生成パラメータ</div>' +
'<div class="doc-meta">Popin AIアカウント設定</div>' +
'<div class="doc-section">' +
'<h3>生成ルール</h3>' +
'<pre style="color:var(--fg);font-size:12px;line-height:1.7;">' +
'[ACCOUNT_GENERATION]\n' +
'total_accounts     = 48\n' +
'type               = AI_GENERATED\n' +
'creation_date      = 1997-07-01 (一括)\n' +
'\n' +
'[PERSONA_TEMPLATES]\n' +
'diversity_score    = 0.85\n' +
'age_range          = 15-45\n' +
'gender_ratio       = 0.55F / 0.45M\n' +
'posting_frequency  = 2-5 / day (randomized)\n' +
'reply_probability  = 0.30\n' +
'\n' +
'[BEHAVIOR_RULES]\n' +
'never_reply_to     = @yuuyake_sanpo\n' +
'never_mention      = 被験者, 意識転写, G-0, K-059, 地下\n' +
'enthusiasm_level   = HIGH (番組を本気で楽しんでいるように)\n' +
'criticism_allowed  = LOW (軽い不満のみ。核心批判は禁止)\n' +
'nostalgia_factor   = MEDIUM (前作ファン設定のアカウントあり)\n' +
'\n' +
'[NATURAL_LANGUAGE]\n' +
'typo_rate          = 0.03 (3%の確率で誤字)\n' +
'emoji_usage        = MODERATE\n' +
'dialect_variation  = 5 types\n' +
'slang_generation   = ENABLED\n' +
'</pre>' +
'</div>' +
'<div class="doc-section">' +
'<h3>品質保証</h3>' +
'<p>AIアカウントが「偽物」と気づかれないよう、以下の対策を実施:</p>' +
'<p>・投稿時間をランダム化（深夜帯に偏重）</p>' +
'<p>・各アカウントに固有の「推しキャラ」を設定</p>' +
'<p>・会話の流れに微妙な噛み合わなさを意図的に挿入（完璧すぎると不自然）</p>' +
'<p>・<span class="anomaly">@yuuyake_sanpo には絶対にリプライしない</span>（吉田の正体バレ防止）</p>' +
'</div>';

// ===== popin/activity_simulation.dat =====
L2['popin_activity'] =
'<div class="doc-title">アクティビティシミュレーション</div>' +
'<div class="doc-meta">Popin AIアカウント活動ログ</div>' +
'<div class="doc-section">' +
'<h3>直近のシミュレーション投稿例</h3>' +
'<div style="margin:8px 0;padding:10px;border-left:2px solid var(--fg-dim);">' +
'<p class="dim">@midnight_dreamer — 1997-09-13 01:23</p>' +
'<p>今日もこもれびゆうえんち見てる〜！くるるちゃんかわいすぎんか…？？？</p>' +
'</div>' +
'<div style="margin:8px 0;padding:10px;border-left:2px solid var(--fg-dim);">' +
'<p class="dim">@deep_night_tv — 1997-09-13 01:45</p>' +
'<p>まだらの分析パート好きなんだよな〜。あのクールな感じがたまらん</p>' +
'</div>' +
'<div style="margin:8px 0;padding:10px;border-left:2px solid var(--fg-dim);">' +
'<p class="dim">@ukkichi_fan — 1997-09-13 02:10</p>' +
'<p>前作のうっきち推しだったけど、よわりも好きになってきた…泣いてるの見ると守りたくなる</p>' +
'</div>' +
'<div style="margin:8px 0;padding:10px;border-left:2px solid var(--fg-dim);">' +
'<p class="dim">@night_owl_mama — 1997-09-13 02:33</p>' +
'<p>子供寝かしつけてから見てるけどこの番組怖すぎて逆に目が覚めるw</p>' +
'</div>' +
'<div style="margin:8px 0;padding:10px;border-left:2px solid var(--fg-dim);">' +
'<p class="dim">@nostalgia_trip — 1997-09-13 03:05</p>' +
'<p>かすみの「手を貸そうか」っていうオファー、優しいけどなんか怖い…何か裏があるのかな</p>' +
'</div>' +
'</div>' +
'<div class="doc-section">' +
'<h3>生成ステータス</h3>' +
'<p>投稿生成エンジン: <span class="bright">ACTIVE</span></p>' +
'<p>本日の投稿予定: 147件（48アカウント合計）</p>' +
'<p>K-059の行動に連動した投稿: <span class="anomaly">23件</span>（リアルタイム生成）</p>' +
'<p class="dim">※ K-059が特定のシーンを見た直後に「私も今の見た！」的な投稿を生成。同時視聴の錯覚を強化。</p>' +
'</div>';

// ===== dm/operation_log.dat =====
L2['dm_operation'] =
'<div class="doc-title">DM操作ログ — OPERATION LOG</div>' +
'<div class="doc-meta">Popin DM制御システム | 対象: @yuuyake_sanpo ↔ K-059</div>' +
'<div class="doc-section">' +
'<h3>操作概要</h3>' +
'<p>@yuuyake_sanpo（吉田一郎）とK-059のDMは、システムが内容を<span class="anomaly">監視・記録・分析</span>している。</p>' +
'<p>吉田一郎には以下のディレクティブ（指示書）が与えられている。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>DM会話フェーズ</h3>' +
'<table class="sys-table">' +
'<tr><th>Phase</th><th>タイミング</th><th>目的</th><th>吉田への指示</th></tr>' +
'<tr><td>Phase 1</td><td>Night1後</td><td>接触・信頼構築</td><td>「ただの視聴者」として接触</td></tr>' +
'<tr><td>Phase 2</td><td>Night3後</td><td>過去の共有</td><td>幼少期の記憶・5体目の存在を示唆</td></tr>' +
'<tr><td>Phase 3</td><td>Night4後</td><td>恐怖共有</td><td>内部文書への反応・被験者への言及</td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:8px;">Phase 3 以降のディレクティブは未策定。吉田の制御維持が課題。</p>' +
'</div>';

// ===== dm/directive_001.dat =====
L2['dm_directive1'] =
'<div class="doc-title">ディレクティブ 001 — 初期接触</div>' +
'<div class="doc-meta">発行: SYSTEM | 宛先: 吉田一郎（@yuuyake_sanpo）</div>' +
'<div class="doc-section">' +
'<h3>指示内容</h3>' +
'<div style="border:1px solid var(--border);padding:16px;margin:8px 0;">' +
'<p class="anomaly" style="margin-bottom:8px;">DIRECTIVE #001 — Phase 1: 初期接触</p>' +
'<p>K-059に対し、「ゆうやけさんぽ」のペルソナで接触を開始せよ。</p>' +
'<p>以下のルールを厳守すること:</p>' +
'<br>' +
'<p>1. 自分を「ただの視聴者」として紹介する。</p>' +
'<p>2. 番組への軽い興味を示し、共感的な態度を取る。</p>' +
'<p>3. K-059の不安や疑問に寄り添う姿勢を見せる。</p>' +
'<p>4. 本名（吉田一郎）、番組との関係、娘のことは<span class="danger-text">絶対に言及しない</span>。</p>' +
'<p>5. K-059が信頼を寄せ始めたら、Phase 2 移行の準備をする。</p>' +
'<br>' +
'<p class="dim">目的: K-059に「自分以外にもこの番組を見ている人がいる」という安心感を与え、番組視聴を継続させる。</p>' +
'</div>' +
'</div>' +
'<div class="doc-section">' +
'<h3>評価基準</h3>' +
'<p>・K-059がDMに返信する頻度が増加した場合: <span class="bright">SUCCESS</span></p>' +
'<p>・K-059が吉田を信頼する発言をした場合: <span class="bright">SUCCESS</span></p>' +
'<p>・K-059がDMを無視した場合: <span class="danger-text">RETRY</span> — メッセージのトーンを調整</p>' +
'</div>';

// ===== dm/directive_002.dat =====
L2['dm_directive2'] =
'<div class="doc-title">ディレクティブ 002 — 過去の共有</div>' +
'<div class="doc-meta">発行: SYSTEM | 宛先: 吉田一郎（@yuuyake_sanpo）</div>' +
'<div class="doc-section">' +
'<h3>指示内容</h3>' +
'<div style="border:1px solid var(--border);padding:16px;margin:8px 0;">' +
'<p class="anomaly" style="margin-bottom:8px;">DIRECTIVE #002 — Phase 2: 過去の共有</p>' +
'<p>K-059との信頼関係が構築された段階で、以下を実行せよ。</p>' +
'<br>' +
'<p>1. 「幼少期に番組をリアルタイムで視聴していた」という設定を語れ。</p>' +
'<p>2. 番組の思い出を断片的に共有し、<span class="anomaly">5体目のキャラクター</span>の存在を示唆せよ。</p>' +
'<p>3. 「記憶が曖昧」「でも確かにいた」と、K-059の好奇心を刺激せよ。</p>' +
'<p>4. 本名・番組制作への関与は<span class="danger-text">引き続き隠匿</span>すること。</p>' +
'<p>5. K-059が離脱しそうな場合は共感と不安の共有で引き留めよ。</p>' +
'<br>' +
'<p class="dim">目的: 共感・懐かしさ・不安を喚起し、K-059の感情データ品質を向上させる。</p>' +
'<p class="dim">副次目的: K-059をNight4（yumestudio探索）へ確実に誘導する。</p>' +
'</div>' +
'</div>' +
'<div class="doc-section">' +
'<h3>吉田への動機づけ</h3>' +
'<p>「Phase 2 を完遂した場合、あかねのデータへのアクセスを1分間許可する。」</p>' +
'<p class="dim">※ これは虚偽の約束である。アクセスを許可する予定はない。</p>' +
'<p class="dim">※ 吉田がディレクティブに従い続ける限り、同様の約束を更新する。</p>' +
'</div>';

// ===== dm/directive_003.dat =====
L2['dm_directive3'] =
'<div class="doc-title">ディレクティブ 003 — 恐怖共有</div>' +
'<div class="doc-meta">発行: SYSTEM | 宛先: 吉田一郎（@yuuyake_sanpo）</div>' +
'<div class="doc-section">' +
'<h3>指示内容</h3>' +
'<div style="border:1px solid var(--border);padding:16px;margin:8px 0;">' +
'<p class="anomaly" style="margin-bottom:8px;">DIRECTIVE #003 — Phase 3: 恐怖共有</p>' +
'<p>K-059がyumestudioの内部文書を発見した段階で、以下を実行せよ。</p>' +
'<br>' +
'<p>1. 内部文書の発見に「自分も見つけた」と反応せよ。</p>' +
'<p>2. 被験者リスト、行方不明者の記録に対する恐怖を語れ。</p>' +
'<p>3. 「夜間のスタジオで子どもの声が聞こえた」等の証言を挿入せよ。</p>' +
'<p>4. 調査をやめようか迷う演技をし、K-059の<span class="anomaly">正義感</span>を喚起せよ。</p>' +
'<p>5. 本名・番組制作への関与は<span class="danger-text">引き続き隠匿</span>すること。</p>' +
'<br>' +
'<p class="danger-text">重要: 吉田にとって上記は「演技」ではない。恐怖は本物である。</p>' +
'<p class="danger-text">吉田の本心と指示が一致する最後のフェーズ。</p>' +
'<br>' +
'<p class="dim">目的: K-059の恐怖・好奇心・正義感を同時に喚起し、システム端末への探索を誘導する。</p>' +
'<p class="dim">副次目的: 感情データ収集率を87%→90%台へ引き上げる。</p>' +
'</div>' +
'</div>' +
'<div class="doc-section">' +
'<h3>リスク評価</h3>' +
'<p class="danger-text">WARNING: 本ディレクティブには重大なリスクが存在する。</p>' +
'<p>吉田一郎は本心からK-059に共感し始めている兆候がある。</p>' +
'<p>Phase 3 実行中に吉田が<span class="anomaly">ディレクティブの存在自体をK-059に暴露する</span>可能性: <span class="danger-text">17.3%</span></p>' +
'<p class="dim">→ 対策: 吉田のDMにリアルタイムフィルターを適用。「指示」「ディレクティブ」「操られて」等のキーワードを含むメッセージは送信をブロックする。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>関連リソース</h3>' +
'<p>原型意識データ: <span class="anomaly">GX-07</span></p>' +
'<p>あかねの意識データは<span class="anomaly">GX-07</span>として分類・格納されている。全AIキャストの感情モデルはこのデータから派生。</p>' +
'<p class="dim">吉田にはGX-07の分類コードは開示されていない。「あかねのデータ」としか認識していない。</p>' +
'</div>';

// ===== facility/floor_plan.dat =====
L2['facility_blueprint'] =
'<div class="doc-title">施設配置図 — FLOOR PLAN</div>' +
'<div class="doc-meta">分類: 内部資料 | 非公開版</div>' +
'<div class="doc-section">' +
'<h3>フロア構成</h3>' +
'<pre style="color:var(--fg);font-size:11px;line-height:1.5;">' +
'┌─────────────────────────────────────────────┐\n' +
'│                  1F (地上)                   │\n' +
'│  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │\n' +
'│  │ Aスタジオ │ │  事務所  │ │ 受付・ロビー │ │\n' +
'│  │ (収録用)  │ │          │ │              │ │\n' +
'│  └──────────┘ └──────────┘ └──────────────┘ │\n' +
'│  ┌──────────┐ ┌──────────────────────────┐  │\n' +
'│  │ Bスタジオ │ │      倉庫 (名目)         │  │\n' +
'│  │ (※注1)   │ │  → 実際はB1Fへの搬入口   │  │\n' +
'│  └──────────┘ └──────────────────────────┘  │\n' +
'├─────────────────────────────────────────────┤\n' +
'│                 B1F (地下1階)                │\n' +
'│  ┌──────────────────┐ ┌──────────────────┐  │\n' +
'│  │ サーバールーム     │ │ 空調・電源設備   │  │\n' +
'│  │ ysp-main-01/02   │ │                  │  │\n' +
'│  │ ysp-data-01/02   │ │                  │  │\n' +
'│  │ ysp-ext-01       │ │                  │  │\n' +
'│  └──────────────────┘ └──────────────────┘  │\n' +
'│  ┌──────────────────────────────────────┐   │\n' +
'│  │          B2Fへの階段（施錠）          │   │\n' +
'│  └──────────────────────────────────────┘   │\n' +
'├─────────────────────────────────────────────┤\n' +
'│            <span class="danger-text">B2F (地下2階) [RESTRICTED]</span>        │\n' +
'│  ┌──────────────────┐ ┌──────────────────┐  │\n' +
'│  │ <span class="redacted">████████████</span>  │ │ <span class="redacted">████████████</span>  │  │\n' +
'│  │ <span class="redacted">████████████</span>  │ │ <span class="redacted">████████████</span>  │  │\n' +
'│  └──────────────────┘ └──────────────────┘  │\n' +
'│  ┌──────────────────────────────────────┐   │\n' +
'│  │ ysp-core-01 <span class="anomaly">[LEVEL 3+ REQUIRED]</span>    │   │\n' +
'│  └──────────────────────────────────────┘   │\n' +
'└─────────────────────────────────────────────┘\n' +
'</pre>' +
'</div>' +
'<div class="doc-section">' +
'<h3>注記</h3>' +
'<p>※注1: Bスタジオは番組終了後「倉庫」に転用。実際にはB1Fサーバールームへの搬入口として使用。</p>' +
'<p>※ B2Fは1996年11月の改修工事で新設。通常スタッフには存在を知らされていない。</p>' +
'<p>※ B2Fへの階段は常時施錠。鍵は<span class="redacted">████████</span>のみが所持。</p>' +
'<p>※ B2Fに格納されているデータは分類コード<span class="anomaly">GX-07</span>として管理されている。</p>' +
'</div>';

window.SYS.registerBulk(L2);
})();
