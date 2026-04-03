/* ============================================
   こもれびゆうえんち2 - 共通JS
   localStorage管理・初回演出・Night5後崩壊
   ============================================ */

// --- localStorage管理 ---
const GameState = {
  // Nightクリアフラグ取得
  isNightCleared(n) {
    return localStorage.getItem(`night${n}_clear`) === 'true';
  },

  // Nightクリアを記録
  clearNight(n) {
    localStorage.setItem(`night${n}_clear`, 'true');
    if (n === 5) {
      localStorage.setItem('night5_clear_time', Date.now().toString());
    }
    localStorage.setItem(`night${n}_pages_unlocked`, 'true');
  },

  // 証拠収集
  collectEvidence(id) {
    localStorage.setItem(`evidence_${id}`, 'true');
  },

  isEvidenceCollected(id) {
    return localStorage.getItem(`evidence_${id}`) === 'true';
  },

  // 収集済み証拠数
  getEvidenceCount() {
    let count = 0;
    for (let i = 1; i <= 20; i++) {
      const key = `evidence_${String(i).padStart(2, '0')}`;
      if (localStorage.getItem(key) === 'true') count++;
    }
    return count;
  },

  // ページアンロック確認
  isPagesUnlocked(n) {
    return localStorage.getItem(`night${n}_pages_unlocked`) === 'true';
  },

  // Night5クリア時刻
  getNight5ClearTime() {
    const t = localStorage.getItem('night5_clear_time');
    return t ? parseInt(t, 10) : null;
  },

  // 初回アクセス済みか
  hasVisited() {
    return localStorage.getItem('first_visit_done') === 'true';
  },

  markVisited() {
    localStorage.setItem('first_visit_done', 'true');
  },

  // 全データリセット（デバッグ用）
  resetAll() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('night') || key.startsWith('evidence_') || key === 'first_visit_done') {
        keys.push(key);
      }
    }
    keys.forEach(k => localStorage.removeItem(k));
  }
};

// --- 初回アクセス時のグリッチ演出 ---
function playDetectGlitch() {
  if (GameState.hasVisited()) return;
  document.body.classList.add('glitch-detect');
  setTimeout(() => {
    document.body.classList.remove('glitch-detect');
    GameState.markVisited();
  }, 500);
}

// --- Nightクリアで解放されるコンテンツの表示制御 ---
function updateUnlockedContent() {
  for (let n = 1; n <= 5; n++) {
    if (GameState.isPagesUnlocked(n)) {
      const els = document.querySelectorAll(`.unlocked-night${n}`);
      els.forEach(el => el.classList.add('visible'));
    }
  }
}

// --- Night5クリア後の崩壊エフェクト CSS注入 ---
(function injectCollapseStyles() {
  if (document.getElementById('collapse-effect-styles')) return;
  const style = document.createElement('style');
  style.id = 'collapse-effect-styles';
  style.textContent = `
    /* Stage 1: Subtle glitch - font fluctuations, edge noise */
    @keyframes stage1Shake {
      0% { transform: translate(0, 0); }
      20% { transform: translate(-1px, 1px); }
      40% { transform: translate(1px, -1px); }
      60% { transform: translate(-1px, 0); }
      80% { transform: translate(1px, 1px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes stage1FontGlitch {
      0% { font-size: inherit; letter-spacing: inherit; }
      25% { font-size: calc(1em + 0.5px); letter-spacing: 0.02em; }
      50% { font-size: calc(1em - 0.3px); letter-spacing: -0.01em; }
      75% { font-size: calc(1em + 0.8px); letter-spacing: 0.03em; }
      100% { font-size: inherit; letter-spacing: inherit; }
    }
    @keyframes stage1EdgeNoise {
      0% { box-shadow: inset 0 0 30px rgba(255,0,0,0.02); }
      33% { box-shadow: inset 0 0 40px rgba(0,255,0,0.03); }
      66% { box-shadow: inset 0 0 35px rgba(0,0,255,0.02); }
      100% { box-shadow: inset 0 0 30px rgba(255,0,0,0.02); }
    }
    .glitch-stage-1 {
      animation: stage1Shake 0.5s infinite, stage1EdgeNoise 2s infinite;
    }
    .glitch-stage-1 p, .glitch-stage-1 li, .glitch-stage-1 h1,
    .glitch-stage-1 h2, .glitch-stage-1 h3, .glitch-stage-1 span, .glitch-stage-1 a {
      animation: stage1FontGlitch 0.8s infinite;
    }

    /* Stage 2: Text rewriting, flickering */
    @keyframes stage2Flicker {
      0% { opacity: 1; }
      30% { opacity: 0.4; }
      50% { opacity: 1; }
      70% { opacity: 0.6; }
      100% { opacity: 1; }
    }
    .glitch-stage-2 * {
      animation: stage2Flicker 0.3s infinite alternate;
    }
    .glitch-stage-2 {
      animation: stage1Shake 0.3s infinite;
    }

    /* Stage 3: Complete collapse - heavy distortion */
    @keyframes stage3Collapse {
      0% { filter: blur(2px) hue-rotate(30deg) brightness(0.8); }
      15% { filter: blur(0px) hue-rotate(0deg) brightness(0.1); }
      20% { filter: blur(4px) hue-rotate(90deg) brightness(1.2); }
      35% { filter: blur(1px) hue-rotate(-20deg) brightness(0.05); }
      40% { filter: blur(6px) hue-rotate(180deg) brightness(0.7); }
      55% { filter: blur(0px) hue-rotate(0deg) brightness(0); }
      60% { filter: blur(3px) hue-rotate(60deg) brightness(0.9); }
      80% { filter: blur(8px) hue-rotate(-45deg) brightness(0.3); }
      90% { filter: blur(0px) brightness(0); }
      100% { filter: blur(2px) hue-rotate(30deg) brightness(0.8); }
    }
    @keyframes stage3BlackFlash {
      0%, 100% { opacity: 0; }
      48% { opacity: 0; }
      50% { opacity: 1; }
      55% { opacity: 1; }
      57% { opacity: 0; }
      80% { opacity: 0; }
      82% { opacity: 1; }
      86% { opacity: 0; }
    }
    .glitch-stage-3 {
      filter: blur(2px) hue-rotate(30deg);
      animation: stage3Collapse 2s infinite;
    }
    .glitch-stage-3::after {
      content: '';
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: #000;
      z-index: 99990;
      pointer-events: none;
      animation: stage3BlackFlash 1.5s infinite;
    }

    /* Kuromaku (Blackmaster) overlay */
    .kuromaku-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: #000;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 1s ease;
      font-family: "MS Gothic", "Yu Gothic", monospace;
    }
    .kuromaku-overlay.active {
      opacity: 1;
    }
    .kuromaku-overlay .km-line {
      color: #a0ffb0;
      font-size: 1.3em;
      letter-spacing: 0.15em;
      margin: 8px 0;
      opacity: 0;
      transform: translateY(8px);
      transition: opacity 1.2s ease, transform 1.2s ease;
      text-shadow: 0 0 8px rgba(100, 255, 140, 0.5), 0 0 20px rgba(100, 255, 140, 0.2);
    }
    .kuromaku-overlay .km-line.visible {
      opacity: 1;
      transform: translateY(0);
    }
    @keyframes cursorBlink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .kuromaku-overlay .km-line .km-cursor {
      display: inline-block;
      width: 0.6em;
      height: 1.1em;
      background: #a0ffb0;
      vertical-align: text-bottom;
      margin-left: 2px;
      animation: cursorBlink 0.7s step-end infinite;
    }
    .kuromaku-overlay .km-line.done .km-cursor {
      display: none;
    }
    @keyframes pulseRed {
      0%, 100% { text-shadow: 0 0 8px rgba(255, 0, 0, 0.6), 0 0 20px rgba(255, 0, 0, 0.3); }
      50% { text-shadow: 0 0 16px rgba(255, 0, 0, 0.9), 0 0 40px rgba(255, 0, 0, 0.5); }
    }
    .kuromaku-overlay .km-link {
      color: #ff2020;
      font-size: 1.6em;
      letter-spacing: 0.3em;
      text-decoration: none;
      margin-top: 24px;
      opacity: 0;
      transform: translateY(8px);
      transition: opacity 1.2s ease, transform 1.2s ease;
      animation: pulseRed 1.5s ease-in-out infinite;
      animation-play-state: paused;
    }
    .kuromaku-overlay .km-link.visible {
      opacity: 1;
      transform: translateY(0);
      animation-play-state: running;
    }
    .kuromaku-overlay .km-link:hover {
      color: #ff5050;
      text-shadow: 0 0 24px rgba(255, 0, 0, 1), 0 0 60px rgba(255, 0, 0, 0.6);
    }
  `;
  document.head.appendChild(style);
})();

// --- Night5クリア後の崩壊タイマー ---
function checkNight5Collapse() {
  const clearTime = GameState.getNight5ClearTime();
  if (!clearTime) return;

  // official/ ディレクトリ内のページでのみ崩壊を発動
  const path = window.location.pathname;
  if (!path.includes('/official/')) return;

  const elapsed = Date.now() - clearTime;
  const remaining = 60000 - elapsed;

  if (remaining > 0) {
    setTimeout(() => startCollapseEffect(), remaining);
  } else {
    startCollapseEffect();
  }
}

// 崩壊用のテキストスクランブル文字セット
const _GLITCH_CHARS = '壊崩滅亡闇黒呪怨悪魔鬼死■▓▒░█▄▀▐▌▊';

function _scrambleText(text) {
  return text.split('').map(ch => {
    if (ch === ' ' || ch === '\n' || ch === '\t') return ch;
    if (Math.random() > 0.4) {
      return _GLITCH_CHARS[Math.floor(Math.random() * _GLITCH_CHARS.length)];
    }
    return ch;
  }).join('');
}

function startCollapseEffect() {
  // ===== Stage 1 (0s): Subtle glitch =====
  document.body.classList.add('glitch-stage-1');

  // Font glitch interval - randomly tweak font sizes on text nodes
  const _fontGlitchInterval = setInterval(() => {
    const els = document.querySelectorAll('p, li, h1, h2, h3, span, a, td, th');
    els.forEach(el => {
      if (Math.random() > 0.7) {
        const shift = (Math.random() - 0.5) * 3;
        el.style.fontSize = `calc(1em + ${shift}px)`;
      }
    });
  }, 200);

  // ===== Stage 2 (10s): Text rewriting =====
  setTimeout(() => {
    document.body.classList.remove('glitch-stage-1');
    document.body.classList.add('glitch-stage-2');

    // Progressively scramble paragraphs
    const paragraphs = document.querySelectorAll('p, li, td, th, h1, h2, h3');
    let scrambleIndex = 0;
    const scrambleInterval = setInterval(() => {
      if (scrambleIndex >= paragraphs.length) {
        clearInterval(scrambleInterval);
        return;
      }
      // Scramble a few at a time
      for (let i = 0; i < 3 && scrambleIndex < paragraphs.length; i++, scrambleIndex++) {
        const el = paragraphs[scrambleIndex];
        if (el.children.length === 0) {
          el.textContent = _scrambleText(el.textContent);
        }
      }
    }, 400);
  }, 10000);

  // ===== Stage 3 (25s): Complete collapse =====
  setTimeout(() => {
    clearInterval(_fontGlitchInterval);
    document.body.classList.remove('glitch-stage-2');
    document.body.classList.add('glitch-stage-3');

    // Garble ALL remaining text
    const allText = document.querySelectorAll('p, li, td, th, h1, h2, h3, span, a, label');
    allText.forEach(el => {
      if (el.children.length === 0 && el.textContent.trim()) {
        el.textContent = _scrambleText(el.textContent);
      }
    });
  }, 25000);

  // ===== Stage 4 (40s): Blackmaster speaks =====
  setTimeout(() => {
    document.body.classList.remove('glitch-stage-1', 'glitch-stage-2', 'glitch-stage-3');
    showKuromakuMessage();
  }, 40000);
}

function showKuromakuMessage() {
  // Reset body filter
  document.body.style.filter = 'none';

  // Create full-screen overlay (do NOT destroy body content - overlay on top)
  const overlay = document.createElement('div');
  overlay.className = 'kuromaku-overlay';
  document.body.appendChild(overlay);

  // Fade in the black overlay
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add('active');
    });
  });

  // Messages with delays (ms from overlay appearing)
  const messages = [
    { text: 'ようやく来たか', delay: 1000 },
    { text: 'ずっと待っていた', delay: 4000 },
    { text: 'お前のことは最初から知っていた', delay: 7000 },
    { text: '1997年のあの夜も…予定通りだった', delay: 10000 },
    { text: '予定通りだ', delay: 13000 },
    { text: 'さあ…お前を取り込んでやる', delay: 16000 }
  ];

  // Typewriter-style reveal for each line
  function typewriterReveal(lineEl, text, onDone) {
    const cursor = document.createElement('span');
    cursor.className = 'km-cursor';
    lineEl.appendChild(cursor);
    lineEl.classList.add('visible');

    let charIndex = 0;
    const speed = 60 + Math.random() * 30; // ms per character
    const interval = setInterval(() => {
      if (charIndex < text.length) {
        lineEl.insertBefore(document.createTextNode(text[charIndex]), cursor);
        charIndex++;
      } else {
        clearInterval(interval);
        lineEl.classList.add('done');
        if (onDone) onDone();
      }
    }, speed);
  }

  messages.forEach(({ text, delay }) => {
    const line = document.createElement('div');
    line.className = 'km-line';
    overlay.appendChild(line);

    setTimeout(() => {
      typewriterReveal(line, text);
    }, delay);
  });

  // Night6 link at 20s
  setTimeout(() => {
    const link = document.createElement('a');
    link.href = '../night6/';
    link.className = 'km-link';
    link.textContent = '来い';
    overlay.appendChild(link);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        link.classList.add('visible');
      });
    });

    // Set localStorage flags for Night6
    localStorage.setItem('show_night6', 'true');
    localStorage.setItem('night6_started', 'true');
  }, 20000);
}

// --- 証拠収集システム ---

// CSS注入（証拠発見通知用）
(function injectEvidenceStyles() {
  if (document.getElementById('evidence-notification-styles')) return;
  const style = document.createElement('style');
  style.id = 'evidence-notification-styles';
  style.textContent = `
    #evidence-notification {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    #evidence-notification.active {
      opacity: 1;
    }
    #evidence-notification.fade-out {
      opacity: 0;
      transition: opacity 0.8s ease;
    }
    #evidence-notification .evidence-overlay {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    #evidence-notification .evidence-text {
      position: relative;
      z-index: 1;
      color: #fff;
      font-size: 1.4em;
      letter-spacing: 0.15em;
      padding: 14px 36px;
      background: rgba(10, 10, 10, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 4px;
      box-shadow: 0 0 20px rgba(180, 180, 255, 0.25), 0 0 60px rgba(100, 100, 200, 0.1);
      text-shadow: 0 0 8px rgba(200, 200, 255, 0.6);
      font-family: "Yu Gothic", "Meiryo", sans-serif;
    }
  `;
  document.head.appendChild(style);
})();

// 証拠発見エフェクト表示
function showEvidenceEffect() {
  let el = document.getElementById('evidence-notification');
  if (!el) {
    el = document.createElement('div');
    el.id = 'evidence-notification';
    el.innerHTML = '<div class="evidence-overlay"></div><div class="evidence-text">証拠を発見</div>';
    document.body.appendChild(el);
  }

  // リセット
  el.classList.remove('active', 'fade-out');
  void el.offsetWidth; // reflow

  el.classList.add('active');

  setTimeout(() => {
    el.classList.add('fade-out');
    el.classList.remove('active');
  }, 1200);

  setTimeout(() => {
    el.classList.remove('fade-out');
  }, 2000);
}

// 証拠収集（重複防止・エフェクト付き）
function collectEvidence(id) {
  if (localStorage.getItem('evidence_' + id) === 'true') return; // already collected
  localStorage.setItem('evidence_' + id, 'true');
  showEvidenceEffect();
}

// 収集済み証拠カウント
function getEvidenceCount() {
  let count = 0;
  for (let i = 1; i <= 20; i++) {
    const key = 'evidence_' + String(i).padStart(2, '0');
    if (localStorage.getItem(key) === 'true') count++;
  }
  return count;
}

// グローバル公開
window.collectEvidence = collectEvidence;
window.getEvidenceCount = getEvidenceCount;

// --- ページ読み込み時の共通初期化 ---
document.addEventListener('DOMContentLoaded', () => {
  playDetectGlitch();
  updateUnlockedContent();
  checkNight5Collapse();
  initSiteErrors();
});

// --- サイト内の間違いクリック（Night2入口） ---
var ERROR_CORRECTIONS = {
  corner: {wrong:'キツネ団長のなぜなぜ教室', right:'キツネ団長の冒険タイム'},
  song: {wrong:'ぽたまるソング♪', right:'ぽたまるダンス♪'},
  day: {wrong:'毎週日曜日に', right:'毎週土曜日に'}
};

function getFoundErrors(){
  try{return JSON.parse(localStorage.getItem('site_errors_found')||'[]');}catch(e){return [];}
}

function fixError(id, el){
  if(!el) return;
  var n1 = localStorage.getItem('night1_clear') === 'true';
  var n2 = localStorage.getItem('night2_clear') === 'true';
  if(!n1 || n2) return; // Night1クリア後〜Night2クリア前のみ有効

  var found = getFoundErrors();
  if(found.indexOf(id) !== -1) return;
  found.push(id);
  localStorage.setItem('site_errors_found', JSON.stringify(found));

  // グリッチ演出：テキストが壊れて正しい値に変わる
  var correction = ERROR_CORRECTIONS[id];
  if(!correction) return;

  el.style.transition = 'none';
  el.style.color = '#ff0033';
  el.style.textShadow = '2px 0 #f00, -2px 0 #0ff';
  el.style.cursor = 'default';

  // テキストをグリッチさせてから修正
  var glitchChars = '\u2588\u2591\u2592\u2593\u25a0\u25a1';
  var steps = 0;
  var glitchInterval = setInterval(function(){
    var t = '';
    for(var i=0; i<correction.right.length; i++){
      t += Math.random() > 0.4 ? glitchChars[Math.floor(Math.random()*glitchChars.length)] : correction.right[i];
    }
    el.textContent = t;
    steps++;
    if(steps > 8){
      clearInterval(glitchInterval);
      el.textContent = correction.right;
      el.style.color = '#33aa33';
      el.style.textShadow = '0 0 8px rgba(50,200,50,0.5)';
      setTimeout(function(){
        el.style.textShadow = 'none';
        el.style.color = '';
        // 3つ揃ったらその場で演出→Night2遷移
        if(found.length >= 3) triggerNight2Transition();
      }, 800);
    }
  }, 60);
}

function triggerNight2Transition(){
  var ch = '\u2588\u2591\u2592\u2593\u25a0\u25a1\u2502\u2500\u253c\u00a7';
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:99999;pointer-events:none;font-family:monospace;font-size:14px;line-height:1.1;color:rgba(0,200,0,0.4);overflow:hidden;word-break:break-all;';
  document.body.appendChild(overlay);

  // 緑のバグ文字が徐々に画面を埋め尽くす
  var density = 0;
  var maxChars = 10000;
  var growInterval = setInterval(function(){
    density += 200;
    if(density > maxChars) density = maxChars;
    var s = '';
    for(var i = 0; i < density; i++) s += ch[Math.floor(Math.random()*ch.length)];
    overlay.textContent = s;
    // 徐々に濃く
    var opacity = Math.min(0.9, 0.2 + (density / maxChars) * 0.7);
    overlay.style.color = 'rgba(0,200,0,' + opacity + ')';
  }, 100);

  // 3秒後：文字が画面を埋め尽くし始めたらテキスト表示
  setTimeout(function(){
    // 中央にメッセージ用レイヤー
    var msgLayer = document.createElement('div');
    msgLayer.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:100000;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:"Courier New",monospace;pointer-events:none;';
    document.body.appendChild(msgLayer);

    var lines = [
      {text:'[SYSTEM] 3 errors corrected', color:'#0f0', delay:0},
      {text:'[SYSTEM] unauthorized_modification detected', color:'#0a0', delay:1000},
      {text:'', delay:1800},
      {text:'…見つけてくれたんだ', color:'#4f4', delay:2500},
      {text:'…ありがとう', color:'#4f4', delay:3500},
    ];

    lines.forEach(function(line){
      setTimeout(function(){
        if(!line.text) return;
        var p = document.createElement('p');
        p.style.cssText = 'color:'+line.color+';font-size:16px;letter-spacing:2px;margin:6px 0;opacity:0;transition:opacity 0.5s;text-shadow:0 0 10px rgba(0,255,0,0.5);';
        p.textContent = line.text;
        msgLayer.appendChild(p);
        setTimeout(function(){ p.style.opacity = '1'; }, 50);
      }, line.delay);
    });

    // 7秒後：完全に埋め尽くされた→自動遷移
    setTimeout(function(){
      clearInterval(growInterval);
      overlay.style.color = 'rgba(0,200,0,0.9)';
      overlay.style.background = '#000';
      // 2秒後に自動でNight2へ
      setTimeout(function(){
        window.location.href = '../night2/';
      }, 2000);
    }, 5000);
  }, 3000);

  // バグ文字の更新を続ける（ランダムに書き換わり続ける）
  setInterval(function(){
    if(density >= maxChars){
      var s = '';
      for(var i = 0; i < maxChars; i++) s += ch[Math.floor(Math.random()*ch.length)];
      overlay.textContent = s;
    }
  }, 150);
}

function initSiteErrors(){
  // 既に見つけた間違いを修正済み表示にする
  var found = getFoundErrors();
  found.forEach(function(id){
    var el = document.getElementById('error-'+id);
    if(el && ERROR_CORRECTIONS[id]){
      el.textContent = ERROR_CORRECTIONS[id].right;
      el.style.cursor = 'default';
      el.onclick = null;
    }
  });

  // CSSスタイル注入（見た目は完全に周囲と同じ、バレない）
  var style = document.createElement('style');
  style.textContent = '.site-error{cursor:inherit;color:inherit;text-decoration:none;-webkit-user-select:text;user-select:text;}';
  document.head.appendChild(style);
}

window.fixError = fixError;
