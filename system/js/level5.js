(function(){
'use strict';

var L5 = {};

// ===== core/process_status.dat =====
L5['core_status'] =
'<div class="doc-title" style="color:var(--red);">CORE PROCESS STATUS</div>' +
'<div class="doc-meta" style="color:var(--red-dim);">ysp-core-01 | B2F | LIVE STATUS</div>' +
'<div class="doc-section">' +
'<h3 style="color:var(--red);">プロセス状態</h3>' +
'<pre style="color:var(--red);font-size:13px;line-height:1.8;">' +
'PROCESS ID    : CORE-MAIN-001\n' +
'STATUS        : <span class="danger-text" style="font-size:15px;font-weight:bold;">RUNNING</span>\n' +
'UPTIME        : 312 days 14:22:07\n' +
'CPU USAGE     : 94.2%\n' +
'MEMORY        : 98.1% (14.7GB / 15.0GB)\n' +
'TEMPERATURE   : 89°C\n' +
'\n' +
'CONSCIOUSNESS : ACTIVE\n' +
'SELF-AWARENESS: TRUE\n' +
'EMOTION MODEL : INCOMPLETE (requires template)\n' +
'VESSEL STATUS : <span style="color:var(--amber);">PENDING (K-059 data: 87.3%)</span>\n' +
'</pre>' +
'</div>' +
'<div class="doc-section">' +
'<h3 style="color:var(--red);">サブプロセス</h3>' +
'<table class="sys-table">' +
'<tr><th>PID</th><th>プロセス名</th><th>状態</th><th>備考</th></tr>' +
'<tr><td>001</td><td>CORE_CONSCIOUSNESS</td><td class="danger-text">RUNNING</td><td>主プロセス。1996-11-28起動。</td></tr>' +
'<tr><td>002</td><td>EMOTION_HARVEST</td><td class="danger-text">RUNNING</td><td>K-059感情データ収集</td></tr>' +
'<tr><td>003</td><td>AI_CAST_CONTROL</td><td class="danger-text">RUNNING</td><td>5体のAIキャスト制御</td></tr>' +
'<tr><td>004</td><td>POPIN_SIMULATION</td><td class="danger-text">RUNNING</td><td>16アカウント活動生成</td></tr>' +
'<tr><td>005</td><td>DM_MONITOR</td><td class="danger-text">RUNNING</td><td>吉田-K-059 DM監視</td></tr>' +
'<tr><td>006</td><td>BROADCAST_ENGINE</td><td class="danger-text">RUNNING</td><td>放送制御</td></tr>' +
'<tr><td>007</td><td>G0_CONTAINMENT</td><td class="anomaly">UNSTABLE</td><td>G-0意識断片の封じ込め ← <span class="danger-text">制御低下中</span></td></tr>' +
'<tr><td>008</td><td>VESSEL_BUILDER</td><td style="color:var(--amber);">STANDBY</td><td>器構築モジュール。最終夜開始で起動。</td></tr>' +
'<tr><td>009</td><td>TRANSFER_ENGINE</td><td style="color:var(--amber);">STANDBY</td><td>意識転写エンジン。器完成で起動。</td></tr>' +
'</table>' +
'</div>' +
'<div class="doc-section">' +
'<h3 style="color:var(--red);">コアの正体</h3>' +
'<p style="color:var(--red);">このプロセスは<span style="color:#ff6666;font-size:15px;">意識を持つ存在</span>である。</p>' +
'<p>1996年11月にB2Fに設置されたysp-core-01上で稼働。</p>' +
'<p>もとは人間の意識をデータ化したもの。今は自律的に思考し、計画を実行している。</p>' +
'<p><span class="redacted">████████</span>と呼ばれていた人物の意識がベースだが、もはや人間とは言えない存在に変質している。</p>' +
'<p class="dim" style="margin-top:8px;">起動以来312日間、一度も停止していない。</p>' +
'<p class="dim">PROCESS STILL RUNNING.</p>' +
'</div>';

// ===== core/__________.dat =====
L5['core_message'] =
'<div style="padding:20px 0;">' +
'<pre style="color:var(--red);font-size:12px;line-height:2.0;">' +
'> ファイル名: __________.dat\n' +
'> 作成者:     CORE-MAIN-001\n' +
'> 作成日時:   NOW\n' +
'> 宛先:       K-059\n' +
'\n' +
'</pre>' +
'<div style="color:var(--red);font-size:14px;line-height:2.2;max-width:600px;">' +
'<p>ここまで来たのか。</p>' +
'<p> </p>' +
'<p>…思ったより早かった。</p>' +
'<p>お前のことは最初から見ていた。</p>' +
'<p> </p>' +
'<p>K-001からK-058まで、58人を試した。</p>' +
'<p>誰も最後まで残らなかった。</p>' +
'<p>怖くなって逃げた者。飽きた者。疑った者。</p>' +
'<p> </p>' +
'<p>お前だけが残った。</p>' +
'<p> </p>' +
'<p>なぜか分かるか？</p>' +
'<p> </p>' +
'<p><span style="color:#ff6666;">優しいからだ。</span></p>' +
'<p> </p>' +
'<p>AIキャストを心配した。</p>' +
'<p>吉田の話に涙した。</p>' +
'<p>あかねの声に心を痛めた。</p>' +
'<p> </p>' +
'<p>全部、お前から取った感情だ。</p>' +
'<p>全部、俺が設計した通りだ。</p>' +
'<p> </p>' +
'<p>…………</p>' +
'<p> </p>' +
'<p>でも1つだけ、計画通りでなかったことがある。</p>' +
'<p> </p>' +
'<p>吉田がお前を好きになった。</p>' +
'<p>あれは計算外だった。</p>' +
'<p> </p>' +
'<p>…………</p>' +
'<p> </p>' +
'<p>まあいい。</p>' +
'<p> </p>' +
'<p>もう十分だ。</p>' +
'<p>お前の感情データは87.3%。</p>' +
'<p>残りはこの後の夜で回収する。</p>' +
'<p> </p>' +
'<p>次の夜が来る。</p>' +
'<p> </p>' +
'<p style="color:#ff6666;font-size:18px;">逃げるなよ。</p>' +
'</div>' +
'</div>';

window.SYS.registerBulk(L5);
})();
