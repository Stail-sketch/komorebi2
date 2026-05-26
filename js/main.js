/* ============================================
   こもれびゆうえんち2 - 共通JS
   localStorage管理・初回演出・Night5後崩壊
   ============================================ */

// デスクトップに戻るボタン（hub以外で表示）
(function(){
  var scripts = document.getElementsByTagName('script');
  var base = '';
  for(var i=0;i<scripts.length;i++){
    var m = scripts[i].src && scripts[i].src.match(/(.*?)js\/main\.js/);
    if(m){ base = m[1]; break; }
  }
  if(!base) return;
  var hub = base + 'index.html';
  if(location.href.replace(/[#?].*$/,'').replace(/\/$/,'') === hub.replace(/\/$/,'').replace(/index\.html$/,'')) return;
  var btn = document.createElement('a');
  btn.href = hub;
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" style="fill:currentColor;vertical-align:middle;margin-right:4px;"><path d="M4 4h16v12H4V4zm-2 14h20v2H2v-2z"/></svg>Desktop';
  var s = btn.style;
  s.cssText = 'position:fixed;bottom:16px;right:16px;z-index:9999;background:rgba(26,39,68,.9);color:#fff;padding:8px 14px;border-radius:8px;font-size:12px;font-family:sans-serif;text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,.3);transition:opacity .2s;opacity:0.7;';
  btn.onmouseenter = function(){s.opacity='1';};
  btn.onmouseleave = function(){s.opacity='0.7';};
  document.body.appendChild(btn);
})();

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
      if (key.startsWith('night') || key === 'first_visit_done') {
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

// --- NEWバッジ ---
function addNewBadges(){
  var visited = [];
  try{ visited = JSON.parse(localStorage.getItem('visited_pages')||'[]'); }catch(e){}
  var sections = document.querySelectorAll('.unlocked-content');
  if(!sections.length) return;
  var st = document.createElement('style');
  st.textContent = '.new-badge{display:inline-block;background:#e53e3e;color:#fff;font-size:10px;font-weight:700;padding:1px 6px;border-radius:3px;margin-left:6px;vertical-align:middle;letter-spacing:0.05em;animation:newPulse 2s infinite;}@keyframes newPulse{0%,100%{opacity:1;}50%{opacity:0.6;}}';
  document.head.appendChild(st);
  sections.forEach(function(sec){
    var links = sec.querySelectorAll('a[href]');
    links.forEach(function(a){
      var href = a.getAttribute('href');
      if(!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('..')) return;
      var pageName = href.split('/').pop().split('?')[0].split('#')[0];
      if(pageName && visited.indexOf(pageName) === -1){
        var badge = document.createElement('span');
        badge.className = 'new-badge';
        badge.textContent = 'NEW';
        a.appendChild(badge);
      }
    });
  });
}

// --- ページ読み込み時の共通初期化 ---
document.addEventListener('DOMContentLoaded', () => {
  playDetectGlitch();
  updateUnlockedContent();
  addNewBadges();
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
      {text:'[SYSTEM] unauthorized_modification detected', color:'#0a0', delay:1200},
      {text:'', delay:2500},
      {text:'…見つけてくれたんだ', color:'#4f4', delay:3500},
      {text:'…ありがとう', color:'#4f4', delay:5500},
    ];

    lines.forEach(function(line){
      setTimeout(function(){
        if(!line.text) return;
        var p = document.createElement('p');
        p.style.cssText = 'color:'+line.color+';font-size:16px;letter-spacing:2px;margin:6px 0;opacity:0;transition:opacity 1s;text-shadow:0 0 10px rgba(0,255,0,0.5);';
        p.textContent = line.text;
        msgLayer.appendChild(p);
        setTimeout(function(){ p.style.opacity = '1'; }, 50);
      }, line.delay);
    });

    // 10秒後：完全に埋め尽くされた
    setTimeout(function(){
      clearInterval(growInterval);
      overlay.style.color = 'rgba(0,200,0,0.9)';
      overlay.style.background = '#000';
    }, 8000);

    // メッセージがフェードアウト→画面が白くフェード→遷移
    setTimeout(function(){
      msgLayer.style.transition = 'opacity 2s';
      msgLayer.style.opacity = '0';
    }, 10000);

    setTimeout(function(){
      overlay.style.transition = 'opacity 2s';
      overlay.style.opacity = '0';
      // 白フラッシュ
      var white = document.createElement('div');
      white.style.cssText = 'position:fixed;inset:0;z-index:100001;background:#000;opacity:0;transition:opacity 1.5s;';
      document.body.appendChild(white);
      setTimeout(function(){ white.style.opacity = '1'; }, 50);
      setTimeout(function(){
        window.location.href = '../night2/';
      }, 2000);
    }, 12000);
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

// --- 既読ページ管理 ---
(function(){
  // 現在のページを既読として記録
  var currentPage = location.pathname.split('/').pop() || 'index.html';
  var visited = JSON.parse(localStorage.getItem('visited_pages') || '[]');
  if(visited.indexOf(currentPage) === -1){
    visited.push(currentPage);
    localStorage.setItem('visited_pages', JSON.stringify(visited));
  }

  // CSSで既読リンクの色を変える
  var style = document.createElement('style');
  style.textContent = 'a.visited-link{color:var(--color-gray-500) !important;opacity:0.7;}';
  document.head.appendChild(style);

  // ページ内の全リンクを走査して既読マーク
  document.addEventListener('DOMContentLoaded', function(){
    var links = document.querySelectorAll('a[href]');
    links.forEach(function(a){
      var href = a.getAttribute('href');
      if(!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('..')) return;
      var pageName = href.split('/').pop().split('?')[0].split('#')[0];
      if(pageName && visited.indexOf(pageName) !== -1){
        a.classList.add('visited-link');
      }
    });
  });
})();

// --- あかね名前の黒塗り制御（EndBまで非表示） ---
// --- EndB後のサイト演出 ---
(function(){
  var endBseen = localStorage.getItem('ending_b_seen') === 'true';

  // あかね黒塗り
  var style = document.createElement('style');
  style.textContent = '.akane-name{background:#1a1a1a;color:#1a1a1a;padding:0 2px;border-radius:2px;user-select:none;-webkit-user-select:none;cursor:default;}.akane-revealed .akane-name{background:transparent;color:inherit;padding:0;user-select:text;-webkit-user-select:text;cursor:inherit;}';
  document.head.appendChild(style);

  if(endBseen){
    document.body.classList.add('akane-revealed');

    // ページ下部に2周目限定テキスト（EndB後のみ）
    var footer = document.querySelector('.site-footer');
    if(footer){
      var msg = document.createElement('div');
      msg.style.cssText = 'text-align:center;padding:8px;font-size:11px;color:rgba(100,0,0,0.15);font-family:"Courier New",monospace;letter-spacing:2px;';
      msg.textContent = 'PROCESS STILL RUNNING';
      footer.parentNode.insertBefore(msg, footer);
    }
  }
})();
