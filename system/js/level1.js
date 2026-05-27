(function(){
'use strict';

var L1 = {};

// ===== broadcast/schedule.dat =====
L1['broadcast_schedule'] =
'<div class="doc-title">放送スケジュール管理</div>' +
'<div class="doc-meta">最終更新: 1997-09-01 | 管理者: SYSTEM</div>' +
'<div class="doc-section">' +
'<h3>現行スケジュール</h3>' +
'<table class="sys-table">' +
'<tr><th>曜日</th><th>放送開始</th><th>放送終了</th><th>形態</th><th>ステータス</th></tr>' +
'<tr><td>月曜</td><td>00:00:00</td><td>06:00:00</td><td>WEB配信</td><td class="bright">ACTIVE</td></tr>' +
'<tr><td>火曜</td><td>00:00:00</td><td>06:00:00</td><td>WEB配信</td><td class="bright">ACTIVE</td></tr>' +
'<tr><td>水曜</td><td>00:00:00</td><td>06:00:00</td><td>WEB配信</td><td class="bright">ACTIVE</td></tr>' +
'<tr><td>木曜</td><td>00:00:00</td><td>06:00:00</td><td>WEB配信</td><td class="bright">ACTIVE</td></tr>' +
'<tr><td>金曜</td><td>00:00:00</td><td>06:00:00</td><td>WEB配信</td><td class="bright">ACTIVE</td></tr>' +
'<tr><td>土曜</td><td>00:00:00</td><td>06:00:00</td><td>WEB配信</td><td class="bright">ACTIVE</td></tr>' +
'<tr><td>日曜</td><td>00:00:00</td><td>06:00:00</td><td>WEB配信</td><td class="bright">ACTIVE</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>補足情報</h3>' +
'<table class="sys-table">' +
'<tr><th>項目</th><th>値</th></tr>' +
'<tr><td>配信プロトコル</td><td>RTMP over TLS (非公開エンドポイント)</td></tr>' +
'<tr><td>配信先</td><td>komorebiyuenchi.com (特番サイト内プレイヤー)</td></tr>' +
'<tr><td>CDN</td><td>未使用 — 直接配信</td></tr>' +
'<tr><td>番組ID</td><td>KMRB-2-SPECIAL</td></tr>' +
'<tr><td>放送回</td><td>※ 自動インクリメント（視聴開始回数連動）</td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:8px;">※ 放送回数はセッション毎に自動生成。固定回数ではない。</p>' +
'</div>' +
'<hr class="doc-divider">' +
'<p class="dim">NOTE: 全曜日00:00-06:00の毎日放送。放送局を経由しない独自配信方式。</p>';

// ===== broadcast/config.dat =====
L1['broadcast_config'] =
'<div class="doc-title">放送設定 — BROADCAST CONFIGURATION</div>' +
'<div class="doc-meta">設定ファイル: /etc/ysp/broadcast.conf | rev.47</div>' +
'<div class="doc-section">' +
'<h3>基本設定</h3>' +
'<pre style="color:var(--fg);font-size:12px;line-height:1.7;">' +
'[BROADCAST]\n' +
'program_name    = こもれびゆうえんち 特番\n' +
'program_id      = KMRB-2-SPECIAL\n' +
'broadcast_type  = WEB_STREAM\n' +
'station_id      = NONE\n' +
'station_name    = ※ 放送局を経由しない\n' +
'\n' +
'[SCHEDULE]\n' +
'start_time      = 00:00:00\n' +
'end_time        = 06:00:00\n' +
'timezone        = JST (UTC+9)\n' +
'days            = MON,TUE,WED,THU,FRI,SAT,SUN\n' +
'\n' +
'[STREAM]\n' +
'protocol        = RTMP-TLS\n' +
'carrier_freq    = <span class="anomaly">28.47 MHz</span>\n' +
'carrier_index   = <span class="anomaly">2847</span>\n' +
'bitrate         = 4800kbps\n' +
'resolution      = 1920x1080\n' +
'framerate       = 30fps\n' +
'encryption      = AES-256 (session-key per viewer)\n' +
'\n' +
'[AUDIENCE]\n' +
'<span class="anomaly">target_count    = 1</span>\n' +
'<span class="anomaly">target_id       = K-059</span>\n' +
'registration    = CLOSED\n' +
'public_listing  = DISABLED\n' +
'epg_visible     = NO\n' +
'\n' +
'[CONTENT]\n' +
'ai_cast_count   = 5\n' +
'segment_gen     = DYNAMIC\n' +
'script_source   = SYSTEM_GENERATED\n' +
'emotion_tracking = <span class="anomaly">ENABLED</span>\n' +
'</pre>' +
'</div>' +
'<hr class="doc-divider">' +
'<p class="dim">WARNING: target_count=1, public_listing=DISABLED, epg_visible=NO</p>' +
'<p class="dim">この放送は番組表に掲載されず、特定の1名にのみ配信されている。</p>';

// ===== broadcast/transmit_log.dat =====
L1['broadcast_transmit'] =
'<div class="doc-title">配信ログ — TRANSMIT LOG</div>' +
'<div class="doc-meta">直近30日分 | 自動記録</div>' +
'<div class="doc-section">' +
'<h3>最新エントリ</h3>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 00:00:01</span><span class="log-level info">INFO</span><span class="log-msg">Broadcast started. Session ID: KMRB-S-4782</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 00:00:03</span><span class="log-level info">INFO</span><span class="log-msg">Viewer connected: K-059 (IP: <span class="redacted">███.███.██.██</span>)</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 00:00:03</span><span class="log-level info">INFO</span><span class="log-msg">Audience count: <span class="anomaly">1/1</span></span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 00:15:42</span><span class="log-level info">INFO</span><span class="log-msg">AI Cast initialized: KURURU, MADARA, ARANE, KASUMI, YOWARI</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 00:31:07</span><span class="log-level info">INFO</span><span class="log-msg">Emotion spike detected: CURIOSITY (K-059) — +12.4%</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 01:03:55</span><span class="log-level warn">WARN</span><span class="log-msg">Bug trigger activated: keyword match [黒幕] by ARANE</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 01:03:56</span><span class="log-level info">INFO</span><span class="log-msg">Glitch overlay rendered for K-059 viewport</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 01:45:22</span><span class="log-level info">INFO</span><span class="log-msg">Emotion spike detected: FEAR (K-059) — +18.7%</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 03:12:00</span><span class="log-level info">INFO</span><span class="log-msg">Segment: かすみオファー presented to K-059</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 03:12:08</span><span class="log-level info">INFO</span><span class="log-msg">K-059 accepted かすみ offer. Power restored +20%</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 05:58:44</span><span class="log-level info">INFO</span><span class="log-msg">Session complete. Duration: 5h58m43s</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 05:58:45</span><span class="log-level info">INFO</span><span class="log-msg">Emotion data packaged and stored. Batch: EM-4782</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 05:58:45</span><span class="log-level info">INFO</span><span class="log-msg">Audience count: <span class="anomaly">0/1</span> — K-059 disconnected</span></div>' +
'<div class="doc-divider"></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 00:00:01</span><span class="log-level info">INFO</span><span class="log-msg">Broadcast started. Session ID: KMRB-S-4781</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 00:00:04</span><span class="log-level info">INFO</span><span class="log-msg">Viewer connected: K-059</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 00:00:04</span><span class="log-level info">INFO</span><span class="log-msg">Audience count: 1/1</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 02:44:18</span><span class="log-level warn">WARN</span><span class="log-msg">Bug trigger activated: proximity threshold KASUMI → K-059</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 04:22:00</span><span class="log-level info">INFO</span><span class="log-msg">Night sequence completed: Night 3</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 04:22:01</span><span class="log-level info">INFO</span><span class="log-msg">Emotion data packaged. Batch: EM-4781</span></div>' +
'</div>';

// ===== broadcast/signal_analysis.dat =====
L1['broadcast_signal'] =
'<div class="doc-title">信号分析レポート</div>' +
'<div class="doc-meta">自動生成レポート | 期間: 1997-08-01 〜 1997-09-13</div>' +
'<div class="doc-section">' +
'<h3>配信品質サマリ</h3>' +
'<table class="sys-table">' +
'<tr><th>指標</th><th>平均値</th><th>最大値</th><th>備考</th></tr>' +
'<tr><td>搬送波周波数</td><td colspan="2" class="anomaly">28.47 MHz</td><td>非標準帯域 — 免許外</td></tr>' +
'<tr><td>配信ビットレート</td><td>4,780 kbps</td><td>4,800 kbps</td><td>安定</td></tr>' +
'<tr><td>フレームドロップ</td><td>0.02%</td><td>0.8%</td><td>バグ演出時のみ上昇</td></tr>' +
'<tr><td>レイテンシ（K-059）</td><td>23ms</td><td>48ms</td><td>直接接続のため低遅延</td></tr>' +
'<tr><td>接続安定性</td><td>99.97%</td><td>100%</td><td>K-059の回線品質は良好</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>特記事項</h3>' +
'<p>・搬送波に<span class="anomaly">28.47MHz帯</span>を使用。通常のWEB配信には使われない周波数。</p>' +
'<p>・この周波数帯は日本の電波法上、放送用途に割り当てられていない。</p>' +
'<p>・フレームドロップが0.3%を超過するタイミングは、すべてバグ演出トリガーと一致。</p>' +
'<p>・K-059以外の接続要求は記録されていない。</p>' +
'<p>・配信URLは<span class="redacted">████████████████</span>に固定。外部からの発見は不可能。</p>' +
'<p class="anomaly">・暗号鍵はセッション毎に生成。K-059のブラウザフィンガープリントに紐付け。</p>' +
'</div>';

// ===== staff/roster.dat =====
L1['staff_roster'] =
'<div class="doc-title">スタッフ一覧 — PERSONNEL ROSTER</div>' +
'<div class="doc-meta">ゆめスタジオプロダクション | 最終更新: 1997-08-15</div>' +
'<div class="doc-section">' +
'<h3>現行プロジェクト要員</h3>' +
'<table class="sys-table">' +
'<tr><th>ID</th><th>氏名</th><th>部署</th><th>役職</th><th>ステータス</th></tr>' +
'<tr><td>YSP-001</td><td><span class="redacted">████████</span></td><td>経営</td><td>代表取締役</td><td class="anomaly">不明</td></tr>' +
'<tr><td>YSP-003</td><td>吉田 一郎</td><td>美術</td><td>セット設計</td><td class="anomaly">ACTIVE（特別任務）</td></tr>' +
'<tr><td>YSP-005</td><td>佐藤 真一</td><td>演出</td><td>ディレクター</td><td>退職（1997-03）</td></tr>' +
'<tr><td>YSP-007</td><td>松本 幸男</td><td>技術</td><td>主任技師</td><td class="anomaly">失踪（1996-11）</td></tr>' +
'<tr><td>YSP-009</td><td>田中 恵子</td><td>脚本</td><td>脚本家</td><td>退職（1995-03）</td></tr>' +
'<tr><td>YSP-011</td><td>鈴木 正義</td><td>美術</td><td>大道具</td><td>退職（1996-06）</td></tr>' +
'<tr><td>YSP-013</td><td>鈴木 美香</td><td>衣装</td><td>衣装担当</td><td>退職（1995-12）</td></tr>' +
'<tr><td>YSP-015</td><td>中村 弘樹</td><td>技術</td><td>音声</td><td>退職（1997-01）</td></tr>' +
'<tr><td>YSP-017</td><td>高橋 健太</td><td>制作</td><td>AD</td><td>退職（1996-09）</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>退職・離職率</h3>' +
'<p>在籍者数: <span class="anomaly">2</span>（代表 + 吉田一郎）</p>' +
'<p>退職者数: 7</p>' +
'<p>退職率: <span class="danger-text">77.8%</span></p>' +
'<p class="dim">※ 松本幸男は「失踪」として処理。退職届の提出なし。</p>' +
'<p class="dim">※ 吉田一郎の「特別任務」の詳細は <span class="anomaly">[LEVEL 4 REQUIRED]</span></p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>退職者メモ</h3>' +
'<p class="dim">・佐藤真一（演出）: 「番組の方向性に疑問を感じた」として退職。番組は子ども向けだったはずなのに、と発言。</p>' +
'<p class="dim">・田中恵子（脚本）: 「脚本が勝手に書き換えられる」と訴え退職。脚本はシステム自動生成に移行済み。</p>' +
'<p class="dim">・中村弘樹（音声）: B2F付近で「子供の声が聞こえる」と報告。精神的不調を理由に退職。</p>' +
'<p class="dim">・高橋健太（AD）: 退職理由を明かさず。退職前日にB2Fへの立入を試みた記録あり（セキュリティログ）。</p>' +
'<p class="anomaly" style="margin-top:6px;">※ 松本幸男（技術主任）: B2F改修に唯一関与したスタッフ。改修完了日の前日に失踪。</p>' +
'</div>';

// ===== staff/shift_schedule.dat =====
L1['staff_shifts'] =
'<div class="doc-title">シフトスケジュール</div>' +
'<div class="doc-meta">1997年9月分 | 自動生成</div>' +
'<div class="doc-section">' +
'<h3>月間スケジュール</h3>' +
'<table class="sys-table">' +
'<tr><th>日付</th><th>00:00-06:00</th><th>06:00-12:00</th><th>12:00-18:00</th><th>18:00-24:00</th></tr>' +
'<tr><td>9/1 (月)</td><td class="anomaly">SYSTEM</td><td class="dim">—</td><td class="dim">—</td><td class="dim">—</td></tr>' +
'<tr><td>9/2 (火)</td><td class="anomaly">SYSTEM</td><td class="dim">—</td><td class="dim">—</td><td class="dim">—</td></tr>' +
'<tr><td>9/3 (水)</td><td class="anomaly">SYSTEM</td><td class="dim">—</td><td class="dim">—</td><td class="dim">—</td></tr>' +
'<tr><td>9/4 (木)</td><td class="anomaly">SYSTEM</td><td class="dim">—</td><td class="dim">—</td><td class="dim">—</td></tr>' +
'<tr><td>9/5 (金)</td><td class="anomaly">SYSTEM</td><td class="dim">—</td><td class="dim">—</td><td class="dim">—</td></tr>' +
'<tr><td>9/6 (土)</td><td class="anomaly">SYSTEM</td><td class="dim">—</td><td class="dim">—</td><td class="dim">—</td></tr>' +
'<tr><td>9/7 (日)</td><td class="anomaly">SYSTEM</td><td class="dim">—</td><td class="dim">—</td><td class="dim">—</td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:8px;">以下、9/8〜9/30も同一パターン。人間のスタッフ割り当ては存在しない。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>備考</h3>' +
'<p>深夜帯（00:00-06:00）の放送・運用はすべてシステムが自動管理。</p>' +
'<p>人間のオペレーターは<span class="anomaly">不要</span>。</p>' +
'<p class="dim">※ 吉田一郎は別系統のタスクスケジュールで管理（参照: <span class="anomaly">[LEVEL 4 REQUIRED]</span>）</p>' +
'</div>';

// ===== staff/access_permissions.dat =====
L1['staff_access'] =
'<div class="doc-title">アクセス権限管理</div>' +
'<div class="doc-meta">システム管理者設定 | rev.12</div>' +
'<div class="doc-section">' +
'<h3>アクセスレベル定義</h3>' +
'<table class="sys-table">' +
'<tr><th>Level</th><th>名称</th><th>対象</th><th>閲覧範囲</th></tr>' +
'<tr><td>1</td><td>一般閲覧</td><td>外部接続</td><td>放送管理、スタッフ、施設、ログ</td></tr>' +
'<tr><td>2</td><td>内部資料</td><td>正規スタッフ</td><td>AIキャスト制御、Popin管理、DM操作</td></tr>' +
'<tr><td>3</td><td>機密</td><td>プロジェクト責任者</td><td>被験者DB、転写記録、トレースログ</td></tr>' +
'<tr><td>4</td><td>最高機密</td><td><span class="redacted">████████</span></td><td>K-059管理、計画書、制御記録</td></tr>' +
'<tr><td>5</td><td>CORE</td><td><span class="redacted">████</span></td><td>全データ + コアプロセス</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>現在のセッション情報</h3>' +
'<p>接続元: <span class="anomaly">外部（認証なし）</span></p>' +
'<p>付与レベル: <span class="bright">Level 1</span></p>' +
'<p class="dim">※ 上位レベルへのアクセスには各レベルのアクセスコードが必要。</p>' +
'<p class="dim">※ アクセスコードは<span class="bright">4桁</span>の英数字。各レベルのデータ内で繰り返し現れる値に注目せよ。</p>' +
'</div>';

// ===== facility/server_config.dat =====
L1['facility_servers'] =
'<div class="doc-title">サーバー構成 — SERVER CONFIGURATION</div>' +
'<div class="doc-meta">施設管理部 | 最終確認: 1997-09-10</div>' +
'<div class="doc-section">' +
'<h3>物理サーバー一覧</h3>' +
'<table class="sys-table">' +
'<tr><th>ホスト名</th><th>用途</th><th>設置場所</th><th>稼働状態</th></tr>' +
'<tr><td>ysp-main-01</td><td>放送制御・配信</td><td>B1F サーバールーム</td><td class="bright">稼働中</td></tr>' +
'<tr><td>ysp-main-02</td><td>AIキャスト演算</td><td>B1F サーバールーム</td><td class="bright">稼働中</td></tr>' +
'<tr><td>ysp-data-01</td><td>データ収集・保存</td><td>B1F サーバールーム</td><td class="bright">稼働中</td></tr>' +
'<tr><td>ysp-data-02</td><td>バックアップ</td><td>B1F サーバールーム</td><td class="bright">稼働中</td></tr>' +
'<tr><td>ysp-core-01</td><td><span class="redacted">████████</span></td><td><span class="anomaly">B2F</span></td><td class="anomaly">████</td></tr>' +
'<tr><td>ysp-ext-01</td><td>外部通信・Popin連携</td><td>B1F サーバールーム</td><td class="bright">稼働中</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>特記事項</h3>' +
'<p>・全サーバーは地下1階のサーバールームに設置。UPS完備。</p>' +
'<p>・<span class="anomaly">ysp-core-01のみ地下2階に設置。</span>アクセス権限は<span class="redacted">████</span>のみ。</p>' +
'<p>・地下2階の存在は通常スタッフには非公開。</p>' +
'<p class="dim">・1996年11月の改修以降、サーバー群の消費電力が<span class="anomaly">340%増加</span>。</p>' +
'<p>・ysp-ext-01の通信モジュールは<span class="anomaly">28.47MHz帯</span>で動作。商用周波数帯ではない。</p>' +
'</div>';

// ===== facility/power_consumption.dat =====
L1['facility_power'] =
'<div class="doc-title">電力消費レポート</div>' +
'<div class="doc-meta">施設管理 | 月次レポート</div>' +
'<div class="doc-section">' +
'<h3>月別電力消費推移（kWh）</h3>' +
'<table class="sys-table">' +
'<tr><th>月</th><th>合計</th><th>B1F</th><th>B2F</th><th>その他</th><th>備考</th></tr>' +
'<tr><td>1996-09</td><td>2,400</td><td>1,800</td><td class="dim">—</td><td>600</td><td></td></tr>' +
'<tr><td>1996-10</td><td>2,350</td><td>1,750</td><td class="dim">—</td><td>600</td><td></td></tr>' +
'<tr><td>1996-11</td><td class="anomaly">8,200</td><td>2,100</td><td class="anomaly">5,500</td><td>600</td><td class="danger-text">改修工事</td></tr>' +
'<tr><td>1996-12</td><td class="anomaly">9,100</td><td>2,200</td><td class="anomaly">6,300</td><td>600</td><td></td></tr>' +
'<tr><td>1997-01</td><td class="anomaly">9,400</td><td>2,200</td><td class="anomaly">6,600</td><td>600</td><td></td></tr>' +
'<tr><td>1997-06</td><td class="anomaly">11,200</td><td>2,400</td><td class="anomaly">8,200</td><td>600</td><td class="danger-text">ピーク</td></tr>' +
'<tr><td>1997-07</td><td class="anomaly">10,800</td><td>2,300</td><td class="anomaly">7,900</td><td>600</td><td></td></tr>' +
'<tr><td>1997-08</td><td class="anomaly">10,900</td><td>2,300</td><td class="anomaly">8,000</td><td>600</td><td></td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>分析</h3>' +
'<p>1996年11月の改修以降、B2F（地下2階）の電力消費が突如計上開始。</p>' +
'<p>B2Fの消費電力は<span class="anomaly">施設全体の70%以上</span>を占める。</p>' +
'<p>電力消費パターンは放送時間帯（00:00-06:00）にピーク。ただしB2Fは放送終了後も消費が継続。</p>' +
'<p class="dim">推計: B2Fの設備は24時間365日稼働。停止期間はゼロ。</p>' +
'<p class="dim">B2Fの設備内容は <span class="anomaly">[LEVEL 3 REQUIRED]</span> を参照。</p>' +
'</div>';

// ===== facility/maintenance_log.dat =====
L1['facility_maintenance'] =
'<div class="doc-title">保守・メンテナンスログ</div>' +
'<div class="doc-meta">施設管理 | 直近1年分</div>' +
'<div class="doc-section">' +
'<h3>メンテナンス履歴</h3>' +
'<div class="log-entry"><span class="log-ts">1997-09-01</span><span class="log-level info">定期</span><span class="log-msg">B1Fサーバールーム空調フィルター交換</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-15</span><span class="log-level info">定期</span><span class="log-msg">UPSバッテリー状態確認 — 正常</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-07-22</span><span class="log-level warn">臨時</span><span class="log-msg">ysp-core-01 冷却異常 — B2F空調を最大出力に変更</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-06-10</span><span class="log-level warn">臨時</span><span class="log-msg">ysp-core-01 処理負荷90%超過 — 原因：<span class="anomaly">意識データ演算量の増大</span></span></div>' +
'<div class="log-entry"><span class="log-ts">1997-05-03</span><span class="log-level info">定期</span><span class="log-msg">全サーバー定期再起動（ysp-core-01を除く）</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-03-14</span><span class="log-level warn">臨時</span><span class="log-msg">ysp-data-01 ストレージ80%到達 — 感情データアーカイブを外部に移行</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-01-20</span><span class="log-level info">定期</span><span class="log-msg">ネットワーク機器ファームウェア更新</span></div>' +
'<div class="log-entry"><span class="log-ts">1996-11-28</span><span class="log-level critical">重大</span><span class="log-msg">B2F改修工事完了。ysp-core-01設置・起動確認。</span></div>' +
'<div class="log-entry"><span class="log-ts">1996-11-15</span><span class="log-level critical">重大</span><span class="log-msg">B2F改修工事開始。立入禁止区域設定。</span></div>' +
'<div class="log-entry"><span class="log-ts">1996-11-14</span><span class="log-level warn">臨時</span><span class="log-msg">松本幸男（技術主任）最終出勤確認。翌日より無断欠勤→失踪届受理。</span></div>' +
'</div>' +
'<hr class="doc-divider">' +
'<p class="dim">※ ysp-core-01は定期再起動の対象外。起動以来、一度も停止していない。</p>' +
'<p class="dim">※ 松本幸男の失踪とB2F改修開始は<span class="anomaly">翌日</span>。偶然か。</p>' +
'<div class="doc-section" style="margin-top:12px;">' +
'<h3>保守担当者コメント</h3>' +
'<pre style="color:var(--fg-dim);font-size:11px;line-height:1.6;">' +
'1997-07-22 [担当: 吉田]\n' +
'「B2Fの冷却、もう限界に近い。何がそんなに熱を出してるんだ。\n' +
'　空調を最大にしても追いつかない。夏はもたない。」\n' +
'\n' +
'1997-06-10 [担当: 吉田]\n' +
'「core-01の負荷が90%を超えた。何の演算をしてるのか、\n' +
'　俺にはアクセス権がないから確認できない。\n' +
'　上に報告しても返事がない。」\n' +
'\n' +
'1996-11-28 [担当: 松本]\n' +
'「設置完了。起動確認。………これで本当にいいのか。」\n' +
'</pre>' +
'</div>';

// ===== errors/system_errors.dat =====
L1['errors_system'] =
'<div class="doc-title">システムエラーログ</div>' +
'<div class="doc-meta">自動記録 | フィルタ: 全レベル | 期間: 1997-09</div>' +
'<div class="doc-section">' +
'<h3>エラーログ</h3>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 05:44:12</span><span class="log-level info">INFO</span><span class="log-msg">Process check completed. All nominal. [OK-0x00]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 04:22:08</span><span class="log-level warn">WARN</span><span class="log-msg">Memory pool #3 fragmentation at 62%. [MF-0x3E]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 03:58:31</span><span class="log-level error">ERROR</span><span class="log-msg">Stream buffer underrun (12ms). Auto-recovered. [BU-0x0C]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 03:15:47</span><span class="log-level critical">CRITICAL</span><span class="log-msg">Carrier frequency anomaly on <span class="anomaly">28.47MHz</span>. Signal origin: B2F. [CF-0x1C]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 02:41:33</span><span class="log-level info">INFO</span><span class="log-msg">Garbage collection cycle #447. [GC-0x1BF]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 02:17:44</span><span class="log-level warn">WARN</span><span class="log-msg">Interference detected on primary carrier band. [IF-0x47]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 01:55:22</span><span class="log-level critical">CRITICAL</span><span class="log-msg">Sync failure between core-01 and data-01. [SF-0x03]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 01:33:40</span><span class="log-level info">INFO</span><span class="log-msg">Scheduled task: emotion_batch_export. [ST-0x0A]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 01:03:56</span><span class="log-level warn">WARN</span><span class="log-msg">Bug trigger: keyword intercept active. [BT-0x01]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 00:48:19</span><span class="log-level critical">CRITICAL</span><span class="log-msg">Process allocation exceeded threshold. [PA-0x02]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 23:55:01</span><span class="log-level info">INFO</span><span class="log-msg">Pre-broadcast system check. All nominal. [OK-0x00]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 18:30:44</span><span class="log-level warn">WARN</span><span class="log-msg">Network retry count elevated (3/5). [NR-0x03]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 14:22:17</span><span class="log-level critical">CRITICAL</span><span class="log-msg">Carrier anomaly: <span class="anomaly">28.47MHz</span> burst correlates with G-0 output. [CF-0x1D]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 11:05:30</span><span class="log-level info">INFO</span><span class="log-msg">Daily maintenance window opened. [MW-0x01]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 03:47:28</span><span class="log-level error">ERROR</span><span class="log-msg">AI Cast YOWARI emotional overflow. Reset applied. [AO-0x05]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 01:18:55</span><span class="log-level critical">CRITICAL</span><span class="log-msg">Data pipeline stall: consciousness fragment buffer full. [DP-0x9F]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-11 22:40:12</span><span class="log-level warn">WARN</span><span class="log-msg">Thermal warning: ysp-core-01 CPU at 87°C. [TH-0x57]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-11 15:33:09</span><span class="log-level info">INFO</span><span class="log-msg">Backup completed: data-02 mirror sync. [BK-0x00]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-11 12:11:47</span><span class="log-level critical">CRITICAL</span><span class="log-msg">Trace anomaly: unscheduled output from G-0 data at <span class="anomaly">28.47MHz</span>. [TA-0x9C]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-11 04:28:33</span><span class="log-level error">ERROR</span><span class="log-msg">Cast sync timeout: MADARA (2.3s). [CS-0x02]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-11 01:02:18</span><span class="log-level warn">WARN</span><span class="log-msg">Viewer attention metric dropped below threshold. [VA-0x2C]</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-10 19:44:55</span><span class="log-level critical">CRITICAL</span><span class="log-msg">Core process heartbeat irregular on <span class="anomaly">28.47MHz</span> channel. [HB-0x0B]</span></div>' +
'</div>' +
'<hr class="doc-divider">' +
'<p class="dim">NOTE: [CRITICAL] レベルのエラーは全て未解決のまま放置されている。</p>' +
'<p class="dim">特定の周波数帯に関連するエラーが集中している。</p>';

// ===== errors/network_log.dat =====
L1['errors_network'] =
'<div class="doc-title">ネットワークログ</div>' +
'<div class="doc-meta">ysp-ext-01 | 外部通信記録</div>' +
'<div class="doc-section">' +
'<h3>接続ログ（直近24時間）</h3>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 05:58:45</span><span class="log-level info">OUT</span><span class="log-msg">→ popin.social API: POST /activity/update (K-059 session data)</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 05:58:44</span><span class="log-level info">IN</span><span class="log-msg">← K-059 DISCONNECT (session end)</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 03:12:08</span><span class="log-level info">IN</span><span class="log-msg">← K-059 INPUT: かすみオファー accepted</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 01:03:55</span><span class="log-level warn">IN</span><span class="log-msg">← K-059 INPUT: keyword [黒幕] detected</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 01:03:55</span><span class="log-level info">OUT</span><span class="log-msg">→ K-059: GLITCH_OVERLAY render command sent</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 00:00:03</span><span class="log-level info">IN</span><span class="log-msg">← K-059 CONNECT (session start)</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 00:00:01</span><span class="log-level info">OUT</span><span class="log-msg">→ BROADCAST: stream_start signal sent</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 23:59:50</span><span class="log-level info">OUT</span><span class="log-msg">→ popin.social API: POST /dm/queue (ゆうやけさんぽ auto-message)</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-12 23:59:30</span><span class="log-level info">OUT</span><span class="log-msg">→ mail-relay: QUEUE mail for K-059 (subject: こもれびゆうえんち特番)</span></div>' +
'</div>' +
'<div class="doc-section">' +
'<h3>外部サービス連携</h3>' +
'<table class="sys-table">' +
'<tr><th>サービス</th><th>用途</th><th>API呼出/日</th></tr>' +
'<tr><td>popin.social</td><td>SNS投稿・DM制御</td><td>〜200</td></tr>' +
'<tr><td>mail-relay</td><td>メール配信</td><td>〜3</td></tr>' +
'<tr><td>komorebiyuenchi.com</td><td>特番サイト ホスティング</td><td>常時</td></tr>' +
'</table>' +
'<p class="dim" style="margin-top:8px;">※ popin.social へのAPI呼出はすべてシステムによる自動投稿。</p>' +
'<p class="dim">※ ゆうやけさんぽのDMもシステム経由で送信されている。</p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>通信異常</h3>' +
'<div class="log-entry"><span class="log-ts">1997-09-13 02:17:44</span><span class="log-level warn">WARN</span><span class="log-msg"><span class="anomaly">28.47MHz帯</span>で原因不明の干渉信号を検出。発信源: B2F。</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-09-10 01:44:02</span><span class="log-level warn">WARN</span><span class="log-msg"><span class="anomaly">28.47MHz帯</span>干渉再発。G-0トレース出力と同期。</span></div>' +
'<div class="log-entry"><span class="log-ts">1997-08-28 03:22:18</span><span class="log-level warn">WARN</span><span class="log-msg"><span class="anomaly">28.47MHz帯</span>に非定期パルス検出。パターン解析不可。</span></div>' +
'<p class="dim" style="margin-top:8px;">※ 28.47MHz帯の干渉はG-0の自発的出力と時刻が完全一致している。</p>' +
'</div>';

// ===== errors/anomaly_report.dat =====
L1['errors_anomaly'] =
'<div class="doc-title">異常検知レポート — ANOMALY REPORT</div>' +
'<div class="doc-meta">自動分析 | 検出期間: 1997-08 〜 1997-09</div>' +
'<div class="doc-section">' +
'<h3>検出された異常</h3>' +
'<table class="sys-table">' +
'<tr><th>#</th><th>日時</th><th>種別</th><th>内容</th><th>対応</th></tr>' +
'<tr><td>A-071</td><td>1997-09-11</td><td class="anomaly">意識データ</td><td>G-0トレースログに未スケジュールの出力検出。内容: <span class="akane-trace">「…さみしい」</span></td><td class="dim">監視継続</td></tr>' +
'<tr><td>A-070</td><td>1997-09-08</td><td>AIキャスト</td><td>YOWARI — 感情パラメータが設定値を超過（悲嘆: 設定180%, 実測: <span class="anomaly">347%</span>）</td><td>パラメータリセット</td></tr>' +
'<tr><td>A-069</td><td>1997-09-05</td><td class="anomaly">意識データ</td><td>G-0トレースログに断片的出力: <span class="akane-trace">「パパ」</span></td><td class="dim">監視継続</td></tr>' +
'<tr><td>A-068</td><td>1997-09-02</td><td>熱管理</td><td>ysp-core-01 CPU温度 91°C到達（閾値: 85°C）</td><td>冷却強化</td></tr>' +
'<tr><td>A-067</td><td>1997-08-28</td><td>AIキャスト</td><td>ARANE — 番組外データへの不正アクセス試行検出</td><td>アクセス遮断</td></tr>' +
'<tr><td>A-066</td><td>1997-08-25</td><td class="anomaly">意識データ</td><td>G-0トレースログ: <span class="akane-trace">「だれかいる？」</span></td><td class="dim">監視継続</td></tr>' +
'<tr><td>A-065</td><td>1997-08-20</td><td>セキュリティ</td><td>外部IPからの接続試行（ポートスキャン）→ 遮断済み</td><td>IP ブラックリスト</td></tr>' +
'<tr><td>A-064</td><td>1997-08-15</td><td>AIキャスト</td><td>KASUMI — K-059に対する好感度パラメータが自己更新（設定外動作）</td><td class="dim">監視継続</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3>要注意パターン</h3>' +
'<p>G-0（被験者データ）からの<span class="anomaly">自発的な出力</span>が増加傾向。</p>' +
'<p>プログラムされていない応答が3件/月 → 前月比 <span class="danger-text">200%</span>。</p>' +
'<p class="dim">「さみしい」「パパ」「だれかいる？」— いずれも短い日本語断片。</p>' +
'<p>G-0出力時に<span class="anomaly">28.47MHz帯</span>の電磁干渉が同時発生している。因果関係は不明。</p>' +
'<p class="dim">G-0データの詳細は <span class="anomaly">[LEVEL 3 REQUIRED]</span></p>' +
'</div>' +
'<div class="doc-section">' +
'<h3>統計</h3>' +
'<p>異常検出件数（1997-08〜09）: 計71件</p>' +
'<p>　うち意識データ関連: <span class="anomaly">23件（32.4%）</span></p>' +
'<p>　うちAIキャスト関連: 18件（25.4%）</p>' +
'<p>　うち熱管理・ハードウェア: 12件（16.9%）</p>' +
'<p>　うちセキュリティ: 8件（11.3%）</p>' +
'<p>　うちその他: 10件（14.1%）</p>' +
'<p class="dim" style="margin-top:6px;">意識データ関連の異常が最多。対応はすべて「監視継続」のみ。</p>' +
'</div>';

window.SYS.registerBulk(L1);
})();
