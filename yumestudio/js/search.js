/* ===================================================
   ゆめスタジオプロダクション サイト内検索システム
   通常検索 + 隠しキーワードで内部文書がヒット
   =================================================== */

(function() {
  'use strict';

  // ===== 通常ページのインデックス =====
  const pageIndex = [
    { title: '会社概要', url: 'about.html', keywords: '会社概要 会社 概要 ゆめスタジオ プロダクション 設立 1988 世田谷 映像制作 子ども 番組', snippet: '株式会社ゆめスタジオプロダクションの会社概要。1988年設立、東京都世田谷区。子ども向けテレビ番組の企画・制作。' },
    { title: '代表挨拶', url: 'message.html', keywords: '代表 挨拶 社長 メッセージ 理念 子ども エンターテインメント', snippet: '代表取締役よりご挨拶。「子どもたちの笑顔のために」——当社の理念と番組制作への想い。' },
    { title: '会社沿革', url: 'history.html', keywords: '沿革 歴史 1988 1991 1992 1993 1994 1995 1996 設立 放送開始 年表', snippet: '1988年の設立から現在までの歩み。番組「木漏れ日遊園地」の放送開始、イベント開催など。' },
    { title: '事業内容', url: 'business.html', keywords: '事業 事業内容 番組制作 企画 制作 キャラクター開発 映像 テレビ', snippet: 'テレビ番組の企画・制作、キャラクター開発、イベント企画など、当社の事業分野をご紹介。' },
    { title: '番組紹介「木漏れ日遊園地」', url: 'program.html', keywords: '木漏れ日遊園地 番組 こもれび ゆうえんち 番組紹介 放送 きらら 土曜', snippet: '子ども向け人気番組「木漏れ日遊園地」の番組紹介。毎週土曜 8:30〜9:00 きらら放送にて。' },
    { title: '放送情報', url: 'broadcast.html', keywords: '放送 放送情報 スケジュール きらら放送 土曜 8:30 テレビ 時間 チャンネル', snippet: '「木漏れ日遊園地」の放送日時・チャンネル情報。きらら放送 毎週土曜日 8:30〜9:00。' },
    { title: 'キャラクター紹介', url: 'characters.html', keywords: 'キャラクター 紹介 一覧 キツネ かあ うっきち ぽたまる 動物 人形', snippet: '番組に登場するキャラクターの一覧。キツネ団長、かあ博士、うっきち、ぽたまるをご紹介。' },
    { title: 'キツネ団長', url: 'char_kitsune.html', keywords: 'キツネ 団長 キツネ団長 リーダー 遊園地 園長 アニマトロニクス', snippet: 'こもれびゆうえんちの頼れるリーダー、キツネ団長。みんなをまとめるしっかり者。' },
    { title: 'かあ博士', url: 'char_kaa.html', keywords: 'かあ 博士 かあ博士 カラス 発明 研究 物知り', snippet: '何でも知ってる物知りカラス、かあ博士。発明と研究が大好き。' },
    { title: 'うっきち', url: 'char_ukkichi.html', keywords: 'うっきち サル 元気 いたずら やんちゃ 木登り', snippet: 'いつも元気いっぱいのサル、うっきち。いたずら好きだけど憎めない。' },
    { title: 'ぽたまる', url: 'char_potamaru.html', keywords: 'ぽたまる タヌキ おっとり 優しい 料理 食べる', snippet: 'のんびり屋さんのタヌキ、ぽたまる。お料理と食べることが大好き。' },
    { title: '出演者・スタッフ紹介', url: 'cast.html', keywords: 'スタッフ 出演者 キャスト 山本 佐藤 田中 伊藤 吉田 中村 松本 プロデューサー 演出 脚本 美術 音楽 技術', snippet: '番組制作に携わるスタッフのご紹介。プロデューサー、演出、脚本、美術、音楽、技術ほか。' },
    { title: 'グッズ情報', url: 'goods.html', keywords: 'グッズ 商品 ぬいぐるみ CD アルバム 文房具 お弁当箱 おもちゃ 販売', snippet: '「木漏れ日遊園地」の公式グッズ情報。ぬいぐるみ、CDアルバム、文房具など。' },
    { title: '制作の裏側', url: 'making.html', keywords: '制作 裏側 メイキング 撮影 収録 舞台裏 セット 制作過程', snippet: '番組制作の舞台裏をご紹介。スタジオでの撮影風景や制作過程について。' },
    { title: 'スタジオ紹介', url: 'studio.html', keywords: 'スタジオ 撮影所 Aスタジオ 世田谷 施設 機材 収録 設備', snippet: '番組収録の拠点、世田谷スタジオのご紹介。Aスタジオの設備と機材について。' },
    { title: '技術紹介', url: 'technology.html', keywords: '技術 人形 セット 照明 音響 カメラ 制作技術 映像技術', snippet: '番組制作を支える技術のご紹介。人形制作、セットデザイン、照明・音響技術について。' },
    { title: 'アニマトロニクス', url: 'animatronics.html', keywords: 'アニマトロニクス 機構 動き メカ 制御 モーター センサー 人形 ロボット', snippet: 'キャラクターに命を吹き込むアニマトロニクス技術。精密な機構による表情と動きの実現。' },
    { title: 'イベント一覧', url: 'events.html', keywords: 'イベント 一覧 公開収録 お楽しみ会 握手会 ステージ', snippet: '「木漏れ日遊園地」関連イベントの一覧。公開収録、お楽しみ会、握手会など。' },
    { title: '春のおたのしみ会', url: 'event_spring.html', keywords: '春 おたのしみ会 1992 イベント レポート 公開収録 ステージ', snippet: '1992年春に開催された「春のおたのしみ会」のイベントレポート。' },
    { title: '夏のわくわく大会', url: 'event_summer.html', keywords: '夏 わくわく大会 1993 イベント レポート 夏祭り 屋外', snippet: '1993年夏に開催された「夏のわくわく大会」のイベントレポート。' },
    { title: 'クリスマス会', url: 'event_christmas.html', keywords: 'クリスマス 1994 イベント レポート パーティー プレゼント 冬', snippet: '1994年12月に開催されたクリスマス会のイベントレポート。' },
    { title: 'お知らせ一覧', url: 'news.html', keywords: 'お知らせ ニュース 新着情報 更新 最新', snippet: '株式会社ゆめスタジオプロダクションからのお知らせ一覧。' },
    { title: 'よくあるご質問', url: 'faq.html', keywords: 'FAQ 質問 よくある 回答 問い合わせ 見学 グッズ 出演', snippet: 'スタジオ見学、グッズ購入、出演応募など、よくいただくご質問への回答。' },
    { title: 'アクセス・所在地', url: 'access.html', keywords: 'アクセス 所在地 住所 地図 世田谷 最寄り駅 交通', snippet: '当社へのアクセス方法・所在地のご案内。東京都世田谷区。' },
    { title: 'お問い合わせ', url: 'contact.html', keywords: 'お問い合わせ 連絡先 電話 FAX 郵便 メール 窓口', snippet: '当社へのお問い合わせ先。電話・FAX・郵便でのご連絡方法。' },
    { title: '個人情報保護方針', url: 'privacy.html', keywords: '個人情報 プライバシー 保護 方針 ポリシー', snippet: '当社の個人情報保護に対する基本方針。' },
    { title: 'サイトマップ', url: 'sitemap.html', keywords: 'サイトマップ ページ一覧 目次 全ページ', snippet: '当サイトの全ページ一覧。' },
  ];

  // ===== 隠しキーワード → 内部文書 =====
  const hiddenIndex = [
    {
      keyword: ['1987'],
      title: '設立準備委員会 第1回議事録',
      url: 'hidden/minutes_1987.html',
      snippet: '議事録　昭和62年3月　於：██████会議室 ——「本計画の第一段階として、児童向け番組の制作体制を整備する…」'
    },
    {
      keyword: ['地下', '地下室', '地下施設'],
      title: 'スタジオ施設 設備配置図（非公開版）',
      url: 'hidden/blueprint.html',
      snippet: '世田谷スタジオ 設備配置図 B1F ——「本図面は社外秘とし、関係者以外への開示を禁ずる」'
    },
    {
      keyword: ['試作', '試作きつね', 'プロトタイプ'],
      title: '試作アニマトロニクス開発記録',
      url: 'hidden/prototype.html',
      snippet: '試作1号機（キツネ型）開発記録 ——「量産機とは異なる独自の制御系統を搭載。本機は██████目的で開発された」'
    },
    {
      keyword: ['視聴率', '0.0'],
      title: '放送事故報告書（1993年11月13日）',
      url: 'hidden/incident_report.html',
      snippet: '報告書　第312回放送に関する事故報告 ——「当該回の視聴率 0.0% について、番組内容の確認を行ったところ…」'
    },
    {
      keyword: ['最終回', '最終収録'],
      title: '最終収録実施要領（内部通達）',
      url: 'hidden/final_recording.html',
      snippet: '通達　最終収録の実施について ——「本収録は通常の制作体制とは異なる特別体制で実施する。出演児童の手配は不要」'
    },
    {
      keyword: ['マスターテープ', 'テープ', 'VHS'],
      title: '映像素材保管台帳（消去前最終版）',
      url: 'hidden/tape_catalog.html',
      snippet: '映像素材保管台帳 1991-1997 ——「本台帳記載の全素材について、1998年██月██日付で消去処分を完了」'
    },
    {
      keyword: ['松本', '松本幸男'],
      title: '技術部 松本幸男 社内報告メモ',
      url: 'hidden/matsumoto_memo.html',
      snippet: '報告メモ　宛：████ 技術部 松本幸男 ——「改修後の1号機について、以下の点を報告する。なお、本件は口頭での…」'
    },
    {
      keyword: ['田中', '田中恵子'],
      title: '脚本部 田中恵子 退職届控え',
      url: 'hidden/tanaka_resignation.html',
      snippet: '退職届　株式会社ゆめスタジオプロダクション 御中 ——「一身上の都合により…」（添付：田中恵子 私信メモ）'
    },
    {
      keyword: ['台本', '台本なし'],
      title: '演出指示書 第███回（台本なし収録）',
      url: 'hidden/script_order.html',
      snippet: '演出指示書 ——「本回はスクリプトを使用しない。アニマトロニクスの████応答テストを兼ねて実施する」'
    }
  ];

  // ===== 検索実行 =====
  function doSearch(query) {
    if (!query || !query.trim()) return;
    query = query.trim();

    const results = [];

    // 通常検索
    const q = query.toLowerCase();
    pageIndex.forEach(function(page) {
      const haystack = (page.title + ' ' + page.keywords + ' ' + page.snippet).toLowerCase();
      if (haystack.indexOf(q) !== -1) {
        results.push({ type: 'normal', title: page.title, url: page.url, snippet: page.snippet });
      }
    });

    // 隠しキーワードチェック
    let hiddenResult = null;
    hiddenIndex.forEach(function(entry) {
      entry.keyword.forEach(function(kw) {
        if (q === kw.toLowerCase() || q.indexOf(kw.toLowerCase()) !== -1) {
          hiddenResult = { type: 'hidden', title: entry.title, url: entry.url, snippet: entry.snippet };
        }
      });
    });

    // 隠し結果を通常結果の間に紛れ込ませる
    if (hiddenResult) {
      if (results.length >= 2) {
        results.splice(1, 0, hiddenResult);
      } else {
        results.push(hiddenResult);
      }
    }

    // 検索結果を表示
    showResults(query, results);
  }

  // ===== 検索結果ページを生成 =====
  function showResults(query, results) {
    // search.html に遷移して結果表示（パラメータ渡し）
    // 同一ページ内で結果表示する方式
    const mainEl = document.querySelector('.corp-main');
    if (!mainEl) {
      // search.html の場合
      return;
    }

    mainEl.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.textContent = '検索結果';
    mainEl.appendChild(h2);

    const info = document.createElement('p');
    info.style.fontSize = '12px';
    info.style.color = '#666';
    info.style.textIndent = '0';
    info.innerHTML = '「<strong>' + escapeHtml(query) + '</strong>」の検索結果 — ' + results.length + '件';
    mainEl.appendChild(info);

    if (results.length === 0) {
      const noResult = document.createElement('div');
      noResult.className = 'search-no-result';
      noResult.textContent = '該当するページは見つかりませんでした。キーワードを変更して再度お試しください。';
      mainEl.appendChild(noResult);
      return;
    }

    const container = document.createElement('div');
    container.className = 'search-results';

    results.forEach(function(r) {
      const item = document.createElement('div');
      item.className = 'search-result-item' + (r.type === 'hidden' ? ' hidden-result' : '');

      const h3 = document.createElement('h3');
      const a = document.createElement('a');
      a.href = r.url;
      a.textContent = r.title;
      h3.appendChild(a);
      item.appendChild(h3);

      const urlDiv = document.createElement('div');
      urlDiv.className = 'url';
      urlDiv.textContent = 'yumestudio.co.jp/' + r.url;
      item.appendChild(urlDiv);

      const snippetDiv = document.createElement('div');
      snippetDiv.className = 'snippet';
      snippetDiv.textContent = r.snippet;
      item.appendChild(snippetDiv);

      container.appendChild(item);
    });

    mainEl.appendChild(container);
  }

  // ===== HTMLエスケープ =====
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ===== 検索フォームのイベント =====
  function initSearch() {
    var form = document.getElementById('site-search');
    var input = document.getElementById('search-input');
    if (!form || !input) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      doSearch(input.value);
    });

    var btn = document.getElementById('search-btn');
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        doSearch(input.value);
      });
    }

    // URLパラメータから検索（search.html遷移時用）
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');
    if (q) {
      input.value = q;
      doSearch(q);
    }
  }

  // ===== 初期化 =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }

})();
