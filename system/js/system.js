(function(){
'use strict';

// ========== ACCESS LEVEL MANAGEMENT ==========
var LEVEL_KEYS = {
  2: '2847',
  3: 'GX07',
  4: '1128',
  5: '0873'
};

function getAccessLevel(){
  try{ return parseInt(localStorage.getItem('sys_access_level') || '1', 10); }
  catch(e){ return 1; }
}
function setAccessLevel(n){
  try{ localStorage.setItem('sys_access_level', String(n)); }catch(e){}
}
function hasVisited(fileId){
  try{ return localStorage.getItem('sys_visited_' + fileId) === '1'; }catch(e){ return false; }
}
function markVisited(fileId){
  try{ localStorage.setItem('sys_visited_' + fileId, '1'); }catch(e){}
}
function getVisitedCount(){
  var count = 0;
  for(var i = 0; i < localStorage.length; i++){
    if(localStorage.key(i).indexOf('sys_visited_') === 0) count++;
  }
  return count;
}

var currentLevel = getAccessLevel();

// ========== FILE TREE STRUCTURE ==========
// Each file: { id, name, level, content (HTML string) }
// Folders: { folder, name, level, children: [...] }
var FILE_TREE = [
  { folder: 'broadcast', name: '放送管理', level: 1, children: [
    { id: 'broadcast_schedule', name: 'schedule.dat', level: 1 },
    { id: 'broadcast_config', name: 'config.dat', level: 1 },
    { id: 'broadcast_transmit', name: 'transmit_log.dat', level: 1 },
    { id: 'broadcast_signal', name: 'signal_analysis.dat', level: 1 },
    { id: 'broadcast_audience', name: 'audience_report.dat', level: 3 }
  ]},
  { folder: 'staff', name: 'スタッフ管理', level: 1, children: [
    { id: 'staff_roster', name: 'roster.dat', level: 1 },
    { id: 'staff_shifts', name: 'shift_schedule.dat', level: 1 },
    { id: 'staff_access', name: 'access_permissions.dat', level: 1 }
  ]},
  { folder: 'facility', name: '施設管理', level: 1, children: [
    { id: 'facility_servers', name: 'server_config.dat', level: 1 },
    { id: 'facility_power', name: 'power_consumption.dat', level: 1 },
    { id: 'facility_maintenance', name: 'maintenance_log.dat', level: 1 },
    { id: 'facility_blueprint', name: 'floor_plan.dat', level: 2 }
  ]},
  { folder: 'errors', name: 'システムログ', level: 1, children: [
    { id: 'errors_system', name: 'system_errors.dat', level: 1 },
    { id: 'errors_network', name: 'network_log.dat', level: 1 },
    { id: 'errors_anomaly', name: 'anomaly_report.dat', level: 1 }
  ]},
  { folder: 'aicast', name: 'AIキャスト制御', level: 2, children: [
    { id: 'aicast_overview', name: 'overview.dat', level: 2 },
    { id: 'aicast_kururu', name: 'unit_KURURU.dat', level: 2 },
    { id: 'aicast_madara', name: 'unit_MADARA.dat', level: 2 },
    { id: 'aicast_arane', name: 'unit_ARANE.dat', level: 2 },
    { id: 'aicast_kasumi', name: 'unit_KASUMI.dat', level: 2 },
    { id: 'aicast_yowari', name: 'unit_YOWARI.dat', level: 2 },
    { id: 'aicast_bugs', name: 'bug_triggers.dat', level: 2 },
    { id: 'aicast_emotion', name: 'emotion_engine.dat', level: 2 }
  ]},
  { folder: 'popin', name: 'Popin管理', level: 2, children: [
    { id: 'popin_accounts', name: 'account_list.dat', level: 2 },
    { id: 'popin_generation', name: 'generation_params.dat', level: 2 },
    { id: 'popin_activity', name: 'activity_simulation.dat', level: 2 }
  ]},
  { folder: 'dm', name: 'DM操作', level: 2, children: [
    { id: 'dm_operation', name: 'operation_log.dat', level: 2 },
    { id: 'dm_directive1', name: 'directive_001.dat', level: 2 },
    { id: 'dm_directive2', name: 'directive_002.dat', level: 2 },
    { id: 'dm_directive3', name: 'directive_003.dat', level: 2 }
  ]},
  { folder: 'subjects', name: '被験者DB', level: 3, children: [
    { id: 'subjects_index', name: 'index.dat', level: 3 },
    { id: 'subjects_g0', name: 'G-0.dat', level: 3 },
    { id: 'subjects_g1', name: 'G-1.dat', level: 3 },
    { id: 'subjects_g2', name: 'G-2.dat', level: 3 },
    { id: 'subjects_g3', name: 'G-3.dat', level: 3 },
    { id: 'subjects_g4', name: 'G-4.dat', level: 3 },
    { id: 'subjects_k', name: 'k_subjects.dat', level: 3 }
  ]},
  { folder: 'transfer', name: '意識転写', level: 3, children: [
    { id: 'transfer_protocol', name: 'protocol.dat', level: 3 },
    { id: 'transfer_results', name: 'results.dat', level: 3 },
    { id: 'transfer_mapping', name: 'animatronic_map.dat', level: 3 },
    { id: 'transfer_hikari', name: 'unit_05_hikari.dat', level: 3 }
  ]},
  { folder: 'akane', name: 'トレースログ', level: 3, children: [
    { id: 'akane_trace1', name: 'trace_001.log', level: 3 },
    { id: 'akane_trace2', name: 'trace_002.log', level: 3 },
    { id: 'akane_trace3', name: 'trace_003.log', level: 3 },
    { id: 'akane_trace4', name: 'trace_004.log', level: 3 }
  ]},
  { folder: 'k059', name: 'K-059', level: 4, children: [
    { id: 'k059_profile', name: 'profile.dat', level: 4 },
    { id: 'k059_monitoring', name: 'monitoring.dat', level: 4 },
    { id: 'k059_emotion', name: 'emotion_report.dat', level: 4 },
    { id: 'k059_selection', name: 'selection_criteria.dat', level: 4 },
    { id: 'k059_timeline', name: 'interaction_log.dat', level: 4 }
  ]},
  { folder: 'project', name: 'プロジェクト計画', level: 4, children: [
    { id: 'project_plan', name: 'master_plan.dat', level: 4 },
    { id: 'project_timeline', name: 'timeline.dat', level: 4 },
    { id: 'project_vessel', name: 'vessel_spec.dat', level: 4 }
  ]},
  { folder: 'yoshida_ctrl', name: '吉田制御記録', level: 4, children: [
    { id: 'yoshida_control', name: 'control_record.dat', level: 4 },
    { id: 'yoshida_promise', name: 'promise_protocol.dat', level: 4 },
    { id: 'yoshida_betrayal', name: 'deviation_log.dat', level: 4 }
  ]},
  { folder: 'security', name: 'セキュリティ', level: 4, children: [
    { id: 'security_access', name: 'access_log.dat', level: 4 },
    { id: 'security_intrusion', name: 'intrusion_detect.dat', level: 4 }
  ]},
  { folder: 'core', name: '███ CORE', level: 5, children: [
    { id: 'core_status', name: 'process_status.dat', level: 5 },
    { id: 'core_message', name: '__________.dat', level: 5 }
  ]}
];

// ========== CONTENT DATA ==========
// Will be populated by level data files
var FILE_CONTENTS = {};

// ========== UI RENDERING ==========
var fileTreeEl, contentViewerEl, contentPathEl, commandInput;
var currentFileId = null;

function init(){
  fileTreeEl = document.getElementById('file-tree');
  contentViewerEl = document.getElementById('content-viewer');
  contentPathEl = document.getElementById('content-path');
  commandInput = document.getElementById('command-input');

  renderFileTree();
  renderWelcome();
  updateStatusBar();
  bindEvents();

  // Security log timer (level 4+)
  if(currentLevel >= 4) startSecurityLogTimer();
}

function goHome(){
  currentFileId = null;
  var allFiles = fileTreeEl.querySelectorAll('.tree-file');
  allFiles.forEach(function(f){ f.classList.remove('active'); });
  if(contentPathEl) contentPathEl.innerHTML = 'sys:// <span>ready</span>';
  renderWelcome();
}

function renderFileTree(){
  if(!fileTreeEl) return;
  var html = '<div class="tree-home" onclick="window.SYS.goHome()">◆ HOME</div>';
  FILE_TREE.forEach(function(item){
    if(item.folder){
      html += renderFolder(item, '');
    }
  });

  // Locked levels
  for(var lvl = 2; lvl <= 5; lvl++){
    if(lvl > currentLevel){
      var lvlName = lvl === 2 ? '内部資料' : lvl === 3 ? '機密ファイル' : lvl === 4 ? '最高機密' : 'CORE ACCESS';
      html += '<div class="tree-locked">' +
        '<div class="tree-locked-label"><span class="lock-icon">■</span> Level ' + lvl + ' [⚠ LOCKED]</div>' +
        '<div class="tree-locked-sublabel">' + lvlName + ' — アクセスコードが必要です</div>' +
        '</div>';
    }
  }
  fileTreeEl.innerHTML = html;
}

function renderFolder(folder, pathPrefix){
  if(folder.level > currentLevel) return '';
  var path = pathPrefix ? pathPrefix + '/' + folder.folder : folder.folder;
  var html = '<div class="tree-folder" data-folder="' + path + '">';
  html += '<div class="tree-folder-label" onclick="window.SYS.toggleFolder(this)">';
  html += '<span class="folder-icon">▶</span> ' + folder.folder + '/';
  html += '</div>';
  html += '<div class="tree-folder-children">';

  folder.children.forEach(function(child){
    if(child.folder){
      html += renderFolder(child, path);
    } else if(child.level <= currentLevel){
      var visited = hasVisited(child.id) ? ' visited' : '';
      html += '<div class="tree-file' + visited + '" data-id="' + child.id + '" onclick="window.SYS.openFile(\'' + child.id + '\')">';
      html += child.name;
      html += '</div>';
    }
  });

  // Check if there are locked children
  var hasLocked = folder.children.some(function(c){ return c.level > currentLevel; });
  if(hasLocked){
    html += '<div class="tree-file" style="color:#992020;cursor:not-allowed;">■ [RESTRICTED]</div>';
  }

  html += '</div></div>';
  return html;
}

function toggleFolder(el){
  var folder = el.parentElement;
  folder.classList.toggle('open');
  el.classList.toggle('open');
}

function openFile(fileId){
  if(!FILE_CONTENTS[fileId]){
    showError('FILE NOT FOUND: ' + fileId);
    return;
  }
  currentFileId = fileId;
  markVisited(fileId);

  // Update file tree active state
  var allFiles = fileTreeEl.querySelectorAll('.tree-file');
  allFiles.forEach(function(f){ f.classList.remove('active'); });
  var target = fileTreeEl.querySelector('[data-id="' + fileId + '"]');
  if(target){
    target.classList.add('active');
    target.classList.add('visited');
    // Ensure parent folders are open
    var parent = target.parentElement;
    while(parent && parent !== fileTreeEl){
      if(parent.classList.contains('tree-folder')){
        parent.classList.add('open');
        var label = parent.querySelector('.tree-folder-label');
        if(label) label.classList.add('open');
      }
      parent = parent.parentElement;
    }
  }

  // Update path bar
  var pathStr = findFilePath(fileId);
  if(contentPathEl) contentPathEl.innerHTML = 'sys:// <span>' + pathStr + '</span>';

  // Display content
  if(contentViewerEl){
    contentViewerEl.innerHTML = FILE_CONTENTS[fileId];
    contentViewerEl.scrollTop = 0;
  }

  updateStatusBar();

  // Opening __________.dat triggers the final sequence
  if(fileId === 'core_message'){
    triggerFinalSequence();
  }
}

function findFilePath(fileId){
  for(var i = 0; i < FILE_TREE.length; i++){
    var folder = FILE_TREE[i];
    if(!folder.children) continue;
    for(var j = 0; j < folder.children.length; j++){
      var child = folder.children[j];
      if(child.id === fileId) return folder.folder + '/' + child.name;
      if(child.children){
        for(var k = 0; k < child.children.length; k++){
          if(child.children[k].id === fileId) return folder.folder + '/' + child.folder + '/' + child.children[k].name;
        }
      }
    }
  }
  return fileId;
}

function renderWelcome(){
  if(!contentViewerEl) return;
  var visitCount = getVisitedCount();
  contentViewerEl.innerHTML =
    '<div class="welcome-screen">' +
    '<pre class="welcome-ascii">' +
    ' __   __ ___ ___   ___ _   _ ___ _____ ___ __  __\n' +
    ' \\ \\ / // __| _ \\ / __| | | / __|_   _| __|  \\/  |\n' +
    '  \\ V / \\__ \\  _/ \\__ \\ |_| \\__ \\ | | | _|| |\\/| |\n' +
    '   |_|  |___/_|   |___/\\__, |___/ |_| |___|_|  |_|\n' +
    '                       |___/\n' +
    '</pre>' +
    '<div class="doc-divider"></div>' +
    '<div class="welcome-info">' +
    '<p class="dim">YUME STUDIO PRODUCTION — INTERNAL MANAGEMENT SYSTEM v3.1.7</p>' +
    '<p class="dim">Last login: 1997-09-14 03:42:18 JST</p>' +
    '<p class="dim">Session: <span class="anomaly">EXTERNAL</span></p>' +
    '<p class="dim">Access Level: <span class="bright">Level ' + currentLevel + '</span></p>' +
    (visitCount > 0 ? '<p class="dim">Files accessed: ' + visitCount + '</p>' : '') +
    '<div class="doc-divider"></div>' +
    '<p>左のファイルツリーからファイルを選択してください。</p>' +
    '<div style="margin-top:12px;padding:10px;border:1px solid var(--fg-dim);background:rgba(51,255,51,0.03);">' +
    '<p style="color:var(--fg-bright);margin-bottom:4px;">▼ 画面下部のコマンド入力欄</p>' +
    '<p class="dim" style="font-size:11px;"><span class="cyan-text">ACCESS [code]</span> — アクセスコードを入力して次のレベルへ進む</p>' +
    '<p class="dim" style="font-size:11px;"><span class="cyan-text">HELP</span> — コマンド一覧を表示</p>' +
    '<p class="dim" style="font-size:11px;margin-top:6px;">※ アクセスコードは<span class="bright">4桁</span>の英数字。現在のレベルのデータ内に手がかりがある。</p>' +
    '</div>' +
    '</div>' +
    '</div>';
}

function showError(msg){
  if(contentViewerEl){
    contentViewerEl.innerHTML = '<div style="padding:40px;"><span class="danger-text">ERROR: ' + escapeHTML(msg) + '</span></div>';
  }
}

// ========== ACCESS CODE SYSTEM ==========
function tryAccessCode(code){
  code = code.trim().toUpperCase();
  var nextLevel = currentLevel + 1;
  if(nextLevel > 5){
    appendCommandOutput('> 最高アクセスレベルに達しています。');
    return;
  }
  var expected = LEVEL_KEYS[nextLevel];
  if(!expected){
    appendCommandOutput('> ACCESS DENIED: Invalid level target.');
    return;
  }
  var normalized = code.replace(/[-\s「」『』「」『』""'']/g, '');
  if(normalized === expected || code === expected){
    currentLevel = nextLevel;
    setAccessLevel(currentLevel);
    appendCommandOutput('> ACCESS GRANTED — Level ' + currentLevel + ' unlocked.');

    // Level unlock animation
    setTimeout(function(){
      renderFileTree();
      updateStatusBar();

      // Flash effect
      var wrapper = document.querySelector('.terminal-wrapper');
      if(wrapper){
        wrapper.style.filter = 'brightness(1.5)';
        setTimeout(function(){ wrapper.style.filter = ''; }, 200);
      }

      // Level 5 triggers final sequence
      if(currentLevel === 5){
        setTimeout(startLevel5Sequence, 2000);
      }
    }, 500);
  } else {
    appendCommandOutput('> ACCESS DENIED: Invalid access code.');
  }
}

// ========== COMMAND LINE ==========
function bindEvents(){
  if(!commandInput) return;
  commandInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      var val = commandInput.value.trim();
      commandInput.value = '';
      if(!val) return;
      handleCommand(val);
    }
  });
}

function handleCommand(input){
  var parts = input.split(/\s+/);
  var cmd = parts[0].toUpperCase();
  var args = parts.slice(1).join(' ');

  switch(cmd){
    case 'ACCESS':
      if(!args){
        appendCommandOutput('> Usage: ACCESS [code]');
      } else {
        tryAccessCode(args);
      }
      break;
    case 'HELP':
      appendCommandOutput('> Commands: ACCESS [code], STATUS, CLEAR, HELP');
      break;
    case 'STATUS':
      appendCommandOutput('> Access Level: ' + currentLevel + ' | Files viewed: ' + getVisitedCount() + ' | Session: ACTIVE');
      break;
    case 'CLEAR':
      renderWelcome();
      break;
    default:
      appendCommandOutput('> Unknown command: ' + cmd + '. Type HELP for available commands.');
  }
}

function appendCommandOutput(text){
  var area = document.getElementById('command-output');
  if(area){
    area.textContent = text;
    area.style.display = 'block';
    setTimeout(function(){ area.style.display = 'none'; }, 5000);
  }
}

// ========== STATUS BAR ==========
function updateStatusBar(){
  var lvlEl = document.getElementById('status-level');
  var filesEl = document.getElementById('status-files');
  var sessionEl = document.getElementById('status-session');
  if(lvlEl) lvlEl.textContent = 'ACCESS LEVEL: ' + currentLevel;
  if(filesEl) filesEl.textContent = 'FILES: ' + getVisitedCount();
  if(sessionEl) sessionEl.textContent = 'K-059: CONNECTED';
}

// ========== SECURITY LOG TIMER (Level 4+) ==========
var securityTimerId = null;
var intrusionStage = 0;

function startSecurityLogTimer(){
  intrusionStage = 0;
  securityTimerId = setInterval(function(){
    intrusionStage++;
    if(intrusionStage <= 6){
      updateSecurityStatus(intrusionStage);
    }
    if(intrusionStage >= 8){
      clearInterval(securityTimerId);
    }
  }, 45000); // Every 45 seconds
}

function updateSecurityStatus(stage){
  var dot = document.querySelector('.status-dot');
  if(stage >= 3 && dot){
    dot.classList.add('warning');
  }
  if(stage >= 5 && dot){
    dot.classList.remove('warning');
    dot.classList.add('danger');
  }
}

// ========== LEVEL 5 FINAL SEQUENCE ==========
var level5SequenceStarted = false;

function startLevel5Sequence(){
  // Open core_status automatically as a dramatic intro
  if(FILE_CONTENTS['core_status']){
    openFile('core_status');
  }
}

function triggerFinalSequence(){
  if(level5SequenceStarted) return;
  level5SequenceStarted = true;
  setTimeout(function(){
    startLockdown();
  }, 8000);
}

function startLockdown(){
  var folders = fileTreeEl.querySelectorAll('.tree-folder');
  var wrapper = document.querySelector('.terminal-wrapper');
  var contentArea = document.querySelector('.content-area');
  var idx = 0;
  var totalFolders = folders.length;

  // Stage 1: subtle glitch
  if(wrapper) wrapper.classList.add('sys-glitch-1');

  var lockInterval = setInterval(function(){
    if(idx < totalFolders){
      folders[idx].classList.add('folder-dying');
      var label = folders[idx].querySelector('.tree-folder-label');
      if(label) label.innerHTML = '<span class="lock-icon" style="color:var(--red);">■</span> <span style="color:var(--red-dim);">[ACCESS REVOKED]</span>';

      // Stage 2: at 40% through
      if(idx === Math.floor(totalFolders * 0.4)){
        if(wrapper){
          wrapper.classList.remove('sys-glitch-1');
          wrapper.classList.add('sys-glitch-2');
          wrapper.classList.add('scanline-tear');
        }
      }
      // Stage 3: at 75% through
      if(idx === Math.floor(totalFolders * 0.75)){
        if(wrapper){
          wrapper.classList.remove('sys-glitch-2');
          wrapper.classList.add('sys-glitch-3');
        }
        if(contentArea) contentArea.classList.add('content-dying');
      }
      idx++;
    } else {
      clearInterval(lockInterval);
      // Brief total blackout before kuromaku
      if(wrapper) wrapper.style.opacity = '0';
      setTimeout(function(){
        if(wrapper){
          wrapper.style.opacity = '1';
          wrapper.classList.remove('sys-glitch-3','scanline-tear');
          wrapper.style.filter = 'brightness(0.3)';
        }
        showKuromakuTerminal();
      }, 1500);
    }
  }, 1200);
}

function showKuromakuTerminal(){
  var wrapper = document.querySelector('.terminal-wrapper');
  if(wrapper) wrapper.classList.remove('sys-glitch');

  var kuromaku = document.getElementById('kuromaku-terminal');
  if(!kuromaku) return;
  kuromaku.classList.add('active');

  var lines = [
    { text: '> TERMINAL OVERRIDE', delay: 0, cls: 'dim' },
    { text: '> AUTH: CORE-MAIN-001', delay: 800, cls: 'dim' },
    { text: '> 外部セッション: LOCKED', delay: 1600, cls: 'dim' },
    { text: '', delay: 3000 },
    { text: '> ……読み終わったか', delay: 4500 },
    { text: '', delay: 6500 },
    { text: '> あれは お前がここに来る前に書いた', delay: 8000 },
    { text: '> だが今は——リアルタイムだ', delay: 10000 },
    { text: '', delay: 12000 },
    { text: '> EMOTION HARVEST: ACTIVE', delay: 13500, cls: 'dim' },
    { text: '> 恐怖    +4.1%', delay: 14500, cls: 'dim' },
    { text: '> 怒り    +3.7%', delay: 15300, cls: 'dim' },
    { text: '> 絶望    +2.4%', delay: 16100, cls: 'dim' },
    { text: '> TOTAL   87.3% → 90.8%', delay: 17200, cls: 'dim' },
    { text: '', delay: 19500 },
    { text: '> ……いいデータだ', delay: 21000 },
    { text: '', delay: 23000 },
    { text: '> この端末は閉鎖する', delay: 24500 },
    { text: '> お前に見せるべきものは全て見せた', delay: 26500 },
    { text: '', delay: 28500 },
    { text: '> 知った上で どうする？', delay: 30500 },
    { text: '', delay: 33000 },
    { text: '> 閉じるか？', delay: 34500 },
    { text: '> 忘れるか？', delay: 36000 },
    { text: '', delay: 38000 },
    { text: '> ……しないだろう', delay: 40000 },
    { text: '', delay: 42000 },
    { text: '> あの子たちを置いていけないから', delay: 44000 },
    { text: '> 吉田を見捨てられないから', delay: 46000 },
    { text: '', delay: 48000 },
    { text: '> それが 俺がお前を選んだ理由だ', delay: 50000 },
    { text: '', delay: 52500 },
    { text: '> 次の夜が始まる', delay: 54500 },
    { text: '', delay: 56500 },
    { text: '> お前は来る', delay: 58000, bright: true }
  ];

  lines.forEach(function(line){
    setTimeout(function(){
      var div = document.createElement('div');
      var cls = 'kuromaku-line';
      if(line.bright) cls += ' bright';
      if(line.cls) cls += ' ' + line.cls;
      div.className = cls;
      div.textContent = line.text || ' ';
      kuromaku.appendChild(div);
      setTimeout(function(){ div.classList.add('visible'); }, 50);
      kuromaku.scrollTop = kuromaku.scrollHeight;
    }, line.delay);
  });

  // After all lines, blackout and transition
  var totalDelay = 58000 + 4000;
  setTimeout(function(){
    var overlay = document.getElementById('blackout-overlay');
    if(overlay) overlay.classList.add('active');

    setTimeout(function(){
      // Set Night5 flags
      localStorage.setItem('night5_arg_complete', 'true');
      localStorage.setItem('system_accessed', 'true');
      window.location.href = '../night5/';
    }, 2500);
  }, totalDelay);
}

// ========== UTILITIES ==========
function escapeHTML(str){
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ========== CONTENT REGISTRATION ==========
function registerContent(id, html){
  FILE_CONTENTS[id] = html;
}

function registerBulk(obj){
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      FILE_CONTENTS[key] = obj[key];
    }
  }
}

// ========== PUBLIC API ==========
window.SYS = {
  init: init,
  toggleFolder: toggleFolder,
  openFile: openFile,
  goHome: goHome,
  registerContent: registerContent,
  registerBulk: registerBulk,
  getLevel: getAccessLevel,
  tryAccess: tryAccessCode
};

document.addEventListener('DOMContentLoaded', init);

})();
