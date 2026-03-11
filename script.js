(function () {
  'use strict';

  // ========== 假数据 ==========
  var WORDS = [
    {
      term: 'examination',
      image: 'images/examination.jpg',
      correctIndex: 1,
      meaning: 'n. 考试；考核；审查',
      meaningNote: '考频：近3年出现3次',
      options: ['n. 仪式，礼仪', 'n.考试，考核', 'n.宫廷，朝廷'],
      hintText: ['examination里有 exam。他的常见搭配是：final examination'],
      example: 'For many students, an examination feels like a battle, but in ancient China it could even change a family’s fate.',
      exampleZh: '对许多学生来说，考试就像一场战斗；但在古代中国，它甚至可能改变一个家族的命运。',
      keyPoints: '六级里最常见的是"考试"义。；可引申为"检查、审查"，但在教育相关的语境里优先想到"考试"。',
      usage: 'entrance examination 入学考试  pass the examination 通过考试',
      wrongAnalysis: { 0: '若错选 A（仪式）：你把它和 ritual 混了。', 2: '若错选 C（宫廷）：你把它和 court 混了。 这道题的关键不是长得像什么，而是先抓住词根 exam-，它和"测试、检查"更近。' },
      hintSvg: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23f0e6d3" width="64" height="64" rx="4"/%3E%3Cpath fill="%238B4513" d="M12 20h40v4H12zm0 8h32v2H12zm0 6h36v2H12zm0 6h28v2H12z"/%3E%3Ctext x="32" y="52" text-anchor="middle" fill="%23633" font-size="8"%3Escroll%3C/text%3E%3C/svg%3E'
    },
    {
      term: 'imperial',
      image: 'images/imperial.jpg',
      correctIndex: 0,
      meaning: 'adj. 帝国的；皇家的；皇权的',
      meaningNote: '近3年出现2次',
      options: ['帝国的；皇家的', '法院的；法庭的', '青铜制的'],
      hintText: ['英国著名大学帝国理工的名字Imperial College哦'],
      example: 'Imperial power shaped not only politics but also art, ritual, and daily life.',
      exampleZh: '皇权不仅塑造了政治，也影响了艺术、礼仪和日常生活。',
      keyPoints: '六级中国文化翻译题里，imperial常和 court / palace / examination / power 连用；imperial 是形容词，不能翻译为“皇帝”，“皇帝”是 emperor',
      usage: 'imperial palace 皇宫；imperial power皇权',
      wrongAnalysis: { 1: '若错选 B（法院的）：你被 court 带偏了。', 2: '若错选 C（青铜制的）：你把历史文化主题里的器物词义误投到了形容词上。 这个词的核心线索是 emperor → imperial。' },
      hintSvg: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23f5f0e6" width="64" height="64" rx="4"/%3E%3Cpath fill="%23d4a84b" d="M32 8l6 18h18l-14 12 5 18-15-11-15 11 5-18L8 26h18z"/%3E%3Ctext x="32" y="58" text-anchor="middle" fill="%23633" font-size="6"%3Ecrown%3C/text%3E%3C/svg%3E'
    },
    {
      term: 'court',
      image: 'images/court.png',
      correctIndex: 0,
      meaning: 'n. 朝廷；宫廷；',
      meaningNote: '近3年出现1次',
      options: ['庭院；法庭', '仪式；礼制', '审查；考核'],
      hintText: ['court是多义词哦'],
      example: 'If our student club had a court, the snack table would definitely be its center of power.',
      exampleZh: '如果我们学生社团也有朝廷，那零食桌一定就是权力中心。',
      keyPoints: '这个词是典型一词多义。 六级中国文化、历史翻译里，court = 朝廷 / 宫廷。；法律英语里，court = 法院。',
      usage: 'at court在朝廷中；court officials朝廷官员',
      wrongAnalysis: { 1: '若错选 B（仪式）：你把名词场景混到了 ritual。', 2: '若错选 C（考核）：你把它和 examination 混了。' },
      hintSvg: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23e8e4dc" width="64" height="64" rx="4"/%3E%3Cpath fill="%23c4a574" d="M16 24h32v24H16z"/%3E%3Cpath fill="%23966" d="M20 28h24v2H20zm0 6h24v2H20z"/%3E%3Ctext x="32" y="56" text-anchor="middle" fill="%23633" font-size="6"%3Ehall%3C/text%3E%3C/svg%3E'
    },
    {
      term: 'ritual',
      image: 'images/ritual.jpg',
      correctIndex: 1,
      meaning: 'n. 礼仪；仪式；礼制活动',
      meaningNote: '近3年出现1次',
      options: ['宫廷；朝廷', '礼仪；仪式', '帝国的；皇家的'],
      hintText: ['ritual music 祭礼音乐', 'religious ritual 宗教仪式'],
      example: 'To ancient people, a ritual was not just a ceremony; it was a way to speak to heaven and ancestors.',
      exampleZh: '对古人来说，礼仪不仅仅是一种仪式；它还是一种与上天和祖先沟通的方式。',
      keyPoints: '六级传统文化题里，常表示"礼仪制度、祭祀仪式、礼制传统"。；它既可以指具体仪式，也可以指较稳定的"礼制行为"。；常与 ancient / religious / court 等文化词共现。',
      usage: 'ritual system；ritual activity',
      wrongAnalysis: { 0: '若错选 A（宫廷）：你把发生仪式的地点当成了词义本身。', 2: '若错选 C（皇家的）：你把制度背景和礼仪行为混到一起了。 ritual 说的是"做法、礼制、仪式"，不是"谁的"。' },
      hintSvg: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23faf6ed" width="64" height="64" rx="4"/%3E%3Cellipse fill="%23b8860b" cx="32" cy="28" rx="12" ry="8"/%3E%3Cpath fill="%23daa520" d="M24 36h16v16H24z"/%3E%3Ctext x="32" y="58" text-anchor="middle" fill="%23633" font-size="6"%3Eceremony%3C/text%3E%3C/svg%3E'
    },
    {
      term: 'bronze',
      image: 'images/bronze.jpg',
      correctIndex: 0,
      meaning: 'n. 青铜；青铜材料',
      meaningNote: '近3年出现2次',
      options: ['铜；青铜材料', '青铜器皿;', '青铜礼器'],
      hintText: ['bronze 是材料名词', 'bronze ware / bronze vessels / ritual bronzes 才指具体器物'],
      example: 'Bronze played an important role in the development of ancient Chinese civilization.',
      exampleZh: '青铜在中国古代文明的发展中发挥了重要作用。',
      keyPoints: 'bronze 本义是"青铜"，首先是一个材料名词。；在六级翻译和写作里，它既可以表示"青铜这种金属材料"，也可以在特定语境下泛指"青铜器"。；但如果你想表达得更准确，写"青铜器"时通常优先用：bronze ware、bronze vessels、ritual bronzes。；所以 bronze 更适合拿来讲：材料、工艺、文明发展、艺术成就。',
      usage: 'bronze culture：青铜文化；bronze art：青铜艺术',
      wrongAnalysis: { 1: '若错选 B（青铜器皿）：bronze vessels 指具体器物，这里考的是材料义 bronze。', 2: '若错选 C（青铜礼器）：ritual bronzes 是礼器，与材料名词 bronze 不同。' }
    }
  ];

  var PHRASES = [
    {
      term: 'imperial examination',
      image: 'images/imperial-examination.jpg',
      correctIndex: 0,
      meaning: '科举制度；科举考试',
      options: ['科举考试', '宫廷礼仪', '皇家法庭'],
      hintText: ['a system for selecting officials', 'examination + imperial', '和 ancient China, officials 常一起出现'],
      example: 'The imperial examination helped select government officials in ancient China for many centuries.',
      exampleZh: '科举制度在中国古代延续了很多世纪，并帮助选拔政府官员。(2022.12 六级翻译题）',
      keyPoints: '翻译时不要只写成 ancient exam；考试中看到以下信息，要优先联想到 imperial examination：；select officials（选拔官员）；ancient China（中国古代）；for centuries / for many centuries（延续数百年）；based on merit or ability（以才能或能力为基础）',
      usage: 'through the imperial examination 通过科举；select officials through the imperial examination 通过科举选拔官员',
      wrongAnalysis: { 1: '错选 B（宫廷礼仪）：你看到了"imperial"就往宫廷场景跑，但忽略了核心名词 examination。', 2: '若错选 C（皇家法庭）：你把 court 的意思硬套进来了。 这类链式词组要抓中心词：这里中心词是 examination，所以主线一定是"考试/选拔"。' },
      hintSvg: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23f0e6d3" width="64" height="64" rx="4"/%3E%3Cpath fill="%238B4513" d="M14 18h36v6H14zm0 10h32v2H14zm0 8h28v2H14z"/%3E%3Cpath fill="%23d4a84b" d="M32 8l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z"/%3E%3Ctext x="32" y="52" text-anchor="middle" fill="%23633" font-size="5"%3Eexam+empire%3C/text%3E%3C/svg%3E'
    },
    {
      term: 'imperial court',
      image: 'images/imperial-court.png',
      correctIndex: 1,
      meaning: '朝廷；宫廷',
      options: ['皇家园林', '朝廷；宫廷', '科举考场'],
      hintText: ['officials at the imperial court', 'court life', '和 emperor, officials, politics 常同框'],
      example: 'Many painters and scholars served the imperial court and contributed to the prosperity of traditional culture.',
      exampleZh: '许多画家和学者曾在朝廷任职，并推动了传统文化的繁荣。(2021.6 六级翻译）',
      keyPoints: '六级翻译里，它常不单独考，而是嵌在句子里："在朝廷任职""为宫廷服务""受到宫廷推崇"；在中国历史文化语境中，imperial court 基本就是"朝廷"。',
      usage: 'enter the imperial court 进入朝廷；serve in the imperial court 在朝廷任职；the imperial court controlled the country 朝廷掌管国家',
      wrongAnalysis: { 0: '错选 A（皇家园林）：你把"皇家的空间"想窄了。', 2: '错选 C（科举考场）：你把 imperial 和 examination 自动拼回去了。 这题最容易犯的错是"看见 imperial 就乱联想"。真正定义词义的是 court。' },
      hintSvg: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23e8e4dc" width="64" height="64" rx="4"/%3E%3Cpath fill="%23d4a84b" d="M32 6l4 14h14l-11 9 4 14-11-9-11 9 4-14-11-9h14z"/%3E%3Cpath fill="%23c4a574" d="M12 32h40v22H12z"/%3E%3Ctext x="32" y="58" text-anchor="middle" fill="%23633" font-size="5"%3Ecourt%3C/text%3E%3C/svg%3E'
    },
    {
      term: 'court ritual',
      image: 'images/court-ritual.jpg',
      correctIndex: 0,
      meaning: '宫廷礼仪；朝廷礼制',
      options: ['宫廷礼仪', '朝廷考试', '皇室青铜器'],
      hintText: ['music, dress and ceremony', 'court + ritual', '不是选官制度，是礼制行为'],
      example: 'Court ritual reflected the social order of ancient China and showed respect for hierarchy and tradition.',
      exampleZh: '宫廷礼仪体现了中国古代的社会秩序，也显示出对等级与传统的尊重。(2021.6 六级翻译）',
      keyPoints: '这个词组常用于六级翻译中的礼制文化、宫廷文化、等级制度等话题；court ritual常与以下短语连用：；reflect social order 体现社会秩序；show respect for tradition 表达对传统的尊重；be closely related to music, dress, and ceremony 与音乐、服饰和礼仪密切相关',
      usage: 'strict court rituals 严格的宫廷礼仪；observe court rituals 遵循宫廷礼仪；court rituals reflected hierarchy 宫廷礼仪体现等级秩序',
      wrongAnalysis: { 1: '若错选 B（朝廷考试）：你把 ritual 错看成了 examination。', 2: '若错选 C（皇室青铜器）：你被文化主题干扰了，但这个词组里根本没有器物信息。 这题的关键是看第二个词：ritual 决定整体偏"礼仪"。' },
      hintSvg: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23faf6ed" width="64" height="64" rx="4"/%3E%3Cpath fill="%23c4a574" d="M18 28h28v18H18z"/%3E%3Cellipse fill="%23b8860b" cx="32" cy="22" rx="8" ry="6"/%3E%3Ctext x="32" y="58" text-anchor="middle" fill="%23633" font-size="5"%3Eritual%3C/text%3E%3C/svg%3E'
    },
    {
      term: 'Chinese ritual bronzes',
      image: 'images/chinese-ritual-bronzes.png',
      correctIndex: 0,
      meaning: '中国礼器青铜器；中国古代祭祀用青铜器',
      options: ['中国祭祀用青铜器', '中国传统宫廷制度', '中国古代选官制度'],
      hintText: ['bronze vessels', 'used in ceremonies', '最后这个词组是"器物类文化词"'],
      example: 'Chinese ritual bronzes are valued not only for their artistic beauty but also for their historical and cultural significance.',
      exampleZh: '中国古代礼器青铜器不仅因其艺术之美而受到重视，也因其历史和文化价值而备受珍视。(2024.6 六级阅读）',
      keyPoints: 'Chinese ritual bronzes常出现在"文物、非遗、传统艺术、博物馆"主题中。；形容文化遗产时常用句型：be valued for...not only... but also...reflect ancient civilization；这里的 bronze 不要漏译成普通 metal，它特指"青铜"。',
      usage: 'ancient Chinese ritual bronzes 古代中国青铜礼器；Chinese ritual bronzes were used in ceremonies 中国青铜礼器用于仪式；Chinese ritual bronzes have historical value 中国青铜礼器具有历史价值',
      wrongAnalysis: { 1: '若错选 B（中国传统宫廷制度）：你把"礼制背景"误当成了"文物本体"。', 2: '若错选 C（中国古代选官制度）：你把文化史常见考点和器物考点混到一起了。 见到 bronzes，优先判断为"器物名词"。' },
      hintSvg: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23f5f0e6" width="64" height="64" rx="4"/%3E%3Cellipse fill="%238B7355" cx="32" cy="38" rx="18" ry="10"/%3E%3Cpath fill="%2365523a" d="M20 38h24v14H20z"/%3E%3Ctext x="32" y="58" text-anchor="middle" fill="%23633" font-size="5"%3Ebronze%3C/text%3E%3C/svg%3E'
    },
    {
      term: 'bronze vessels',
      image: 'images/bronze-vessels.png',
      correctIndex: 0,
      meaning: '青铜器皿；青铜容器',
      options: ['青铜器皿；青铜容器', '青铜材料', '青铜礼器'],
      hintText: ['vessels 指器皿、容器', '比单独的 bronze 更具体，指器物而非材料'],
      example: 'Bronze vessels were widely used in ancient China for ceremonies, banquets, and religious activities.',
      exampleZh: '青铜器皿在中国古代被广泛用于礼仪、宴饮和宗教活动。',
      keyPoints: '在中华文化语境里，这个短语常用来指古代用于祭祀、礼仪、宴饮的器物。；六级翻译里如果原文出现"青铜器皿""青铜礼器中的器皿类"，用这个表达很自然。；要注意它强调的是具体器物，而不是材料本身。',
      usage: 'ancient bronze vessels 古代青铜器皿；bronze vessels were used in rituals 青铜器皿用于礼仪活动；beautifully decorated bronze vessels 装饰精美的青铜器皿',
      wrongAnalysis: { 1: '若错选 B（青铜材料）：bronze 单独用时偏材料义，这里考的是具体器物 bronze vessels。', 2: '若错选 C（青铜礼器）：ritual bronzes 侧重礼器，bronze vessels 侧重器皿、容器。' }
    }
  ];

  var LETTERS = ['A', 'B', 'C'];

  // 真题演练：句子与答案
  var PRACTICE = {
    sentenceZh: '在古代中国，许多学者希望通过科举考试进入朝廷；在那里，严格的宫廷礼仪得到遵守，珍贵的中国青铜礼器以及青铜器皿被用于重要仪式。',
    parts: [
      'In ancient China, many scholars hoped to pass the ',
      ' and enter the ',
      ', where strict ',
      ' were observed and valuable Chinese ',
      ' as well as bronze ',
      ' were used in important ceremonies.'
    ],
    answers: ['imperial examination', 'imperial court', 'court rituals', 'ritual bronzes', 'vessels'],
    options: ['imperial examination', 'imperial court', 'court rituals', 'ritual bronzes', 'vessels']
  };

  // 学习链顺序：... → Chinese ritual bronzes → bronze → bronze vessels
  var CHAIN = [
    WORDS[0],  // examination
    PHRASES[0], // imperial examination
    WORDS[1],  // imperial
    PHRASES[1], // imperial court
    WORDS[2],  // court
    PHRASES[2], // court ritual
    WORDS[3],  // ritual
    PHRASES[3], // Chinese ritual bronzes
    WORDS[4],  // bronze
    PHRASES[4]  // bronze vessels
  ];

  // ========== 状态 ==========
  var state = {
    phase: 'preview',
    chainIndex: 0,
    userChoice: null,
    showHint: false,
    autoPlayed: {}  // 记录每题是否已自动播放过
  };

  var root = document.getElementById('root');

  function getProgressText() {
    var total = 1 + CHAIN.length * 2 + 2; // preview + (question+wiki)*n + practice + summary
    var current = 0;
    if (state.phase === 'preview') current = 0;
    else if (state.phase === 'question') current = 1 + state.chainIndex * 2;
    else if (state.phase === 'wiki') current = 2 + state.chainIndex * 2;
    else if (state.phase === 'practice') current = total - 2;
    else if (state.phase === 'review') current = total - 1;
    else if (state.phase === 'summary') current = total;
    else current = total;
    var percent = total ? Math.round((current / total) * 100) : 0;
    var step = state.phase === 'summary' ? total : current + 1;
    return { current: current, total: total, percent: total ? (current / total * 100) : 0, step: step, pct: percent };
  }

  function renderProgress() {
    var p = getProgressText();
    var wrap = document.createElement('div');
    wrap.className = 'progress-wrap';
    wrap.innerHTML =
      '<div class="progress-label">' +
        '<span class="progress-label-text"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">trending_up</span> Progress</span>' +
        '<span class="progress-value">' + p.step + ' / ' + p.total + '</span>' +
      '</div>' +
      '<div class="progress-track"><div class="progress-fill" style="width:' + p.percent + '%"></div></div>' +
      '<div class="progress-pct">' + p.pct + '% Complete</div>';
    return wrap;
  }

  function renderPreview() {
    var list = CHAIN;
    var section = document.createElement('div');
    section.className = 'app-main preview-page';
    var cardIcons = ['menu_book', 'school', 'account_balance', 'gavel', 'temple_buddhist', 'celebration', 'auto_stories', 'museum'];
    var cardsHtml = list.map(function (item, i) {
      var icon = cardIcons[i % cardIcons.length];
      return '<div class="preview-card">' +
        '<span class="preview-card-icon material-symbols-outlined">' + icon + '</span>' +
        '<h2 class="preview-card-term">' + escapeHtml(item.term) + '</h2>' +
      '</div>';
    }).join('');
    section.innerHTML =
      '<div class="preview-topbar">' +
        '<h2 class="preview-topbar-title">Preview</h2>' +
      '</div>' +
      '<div class="preview-header">' +
        '<h3 class="preview-header-title">CET-6 主题：中国传统文化</h3>' +
        '<div class="preview-header-sub">' +
          '<span class="preview-header-line"></span>' +
          '<h4 class="preview-header-label">六级阅读专题</h4>' +
          '<span class="preview-header-line"></span>' +
        '</div>' +
      '</div>' +
      '<div class="preview-grid">' + cardsHtml + '</div>' +
      '<div class="preview-bg-pattern" aria-hidden="true"></div>' +
      '<div class="preview-footer-wrap">' +
        '<button type="button" class="btn btn-primary preview-footer-btn" data-action="start">' +
          '<span>Start Learning</span>' +
          '<span class="material-symbols-outlined">arrow_forward</span>' +
        '</button>' +
      '</div>';
    section.querySelector('[data-action="start"]').onclick = function () {
      state.phase = 'question';
      state.chainIndex = 0;
      state.userChoice = null;
      state.showHint = false;
      render();
    };
    return section;
  }

  function getCurrentQuestion() {
    if (state.phase === 'question' && state.chainIndex < CHAIN.length) return CHAIN[state.chainIndex];
    return null;
  }

  function speakTerm(text) {
    if (!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }

  function renderQuestion() {
    var q = getCurrentQuestion();
    if (!q) return document.createElement('div');
    var idx = state.chainIndex;
    var total = CHAIN.length;
    var section = document.createElement('div');
    section.className = 'app-main';
    var hints = q.hintText ? (Array.isArray(q.hintText) ? q.hintText : [q.hintText]) : [];
    var hintContent = '';
    if (state.showHint) {
      hintContent = '<div class="question-hint-content">';
      if (hints.length) {
        hintContent += '<p class="hint-label">Hint:</p><ul class="hint-list">';
        hints.forEach(function (h, i) {
          hintContent += '<li>' + escapeHtml(h) + '</li>';
        });
        hintContent += '</ul>';
      }
      hintContent += '</div>';
    }
    var termImg = (q.image) ? '<img src="' + escapeHtml(q.image) + '" alt="' + escapeHtml(q.term) + '"/>' : '';
    var imgHtml = '<div class="question-image-wrap">' + termImg + '</div>' + hintContent;
    var optionsHtml = q.options.map(function (opt, i) {
      return '<button type="button" class="option-btn" data-index="' + i + '">' +
        '<span class="option-letter">' + LETTERS[i] + '</span>' +
        '<span class="option-text">' + opt + '</span>' +
      '</button>';
    }).join('');
    section.innerHTML =
      imgHtml +
      '<div class="question-term-block">' +
        '<div class="question-term-row">' +
          '<h2 class="question-term">' + escapeHtml(q.term) + '</h2>' +
          '<button type="button" class="icon-btn" data-action="play-audio" title="播放发音"><span class="material-symbols-outlined">volume_up</span></button>' +
        '</div>' +
        '<div class="question-hint-row">' +
          '<button type="button" class="icon-btn icon-btn-hint" data-action="hint" title="Hint">' +
            '<span class="material-symbols-outlined">lightbulb</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="options">' + optionsHtml + '</div>' +
      '<div class="question-actions">' +
        '<span class="question-step">' + (idx + 1) + ' / ' + total + '</span>' +
      '</div>';
    section.querySelectorAll('[data-action="hint"]').forEach(function (btn) {
      btn.onclick = function () {
        state.showHint = true;
        render();
      };
    });
    section.querySelectorAll('[data-action="play-audio"]').forEach(function (btn) {
      btn.onclick = function () {
        var curr = getCurrentQuestion();
        if (curr && curr.term) speakTerm(curr.term);
      };
    });
    section.querySelectorAll('.option-btn').forEach(function (btn) {
      btn.onclick = function () {
        state.userChoice = parseInt(btn.getAttribute('data-index'), 10);
        state.phase = 'wiki';
        render();
      };
    });
    return section;
  }

  function getCurrentWiki() {
    if (state.phase === 'wiki' && state.chainIndex < CHAIN.length) return { item: CHAIN[state.chainIndex] };
    return null;
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightTermInExample(exampleText, term) {
    if (!term || !exampleText) return escapeHtml(exampleText);
    var re = new RegExp('(' + escapeRegex(term) + ')', 'gi');
    var parts = exampleText.split(re);
    return parts.map(function (p, i) {
      if (i % 2 === 1) return '<span class="wiki-term-highlight">' + escapeHtml(p) + '</span>';
      return escapeHtml(p);
    }).join('');
  }

  function formatUsage(usageStr, term) {
    if (!usageStr) return '';
    var parts = usageStr.split(/\s*[；;]\s*|\s{2,}/).filter(function (s) { return s.trim(); });
    return parts.map(function (s) {
      var segment = escapeHtml(s.trim());
      if (term) {
        var re = new RegExp(escapeRegex(term), 'gi');
        segment = segment.replace(re, function (match) {
          return '<span class="usage-term-highlight">' + match + '</span>';
        });
      }
      return segment;
    }).join('<br>');
  }

  function renderWiki() {
    var w = getCurrentWiki();
    if (!w) return document.createElement('div');
    var item = w.item;
    var isPhrase = item.term.indexOf(' ') !== -1;
    var correctIndex = item.correctIndex !== undefined ? item.correctIndex : item.options.indexOf(item.meaning);
    var isCorrect = state.userChoice === correctIndex;
    var keyPointsParts = item.keyPoints.split(/[；。]/).filter(function (s) { return s.trim(); });
    var keyPointsList = keyPointsParts.map(function (s) {
      return '<li><span class="material-symbols-outlined">check_circle</span><span>' + escapeHtml(s.trim()) + '</span></li>';
    }).join('');
    var section = document.createElement('div');
    section.className = 'app-main wiki-page';
    section.innerHTML =
      '<div class="wiki-page-content">' +
        '<div class="wiki-title-block">' +
          '<h1 class="wiki-term">' + escapeHtml(item.term) + '<br><span class="wiki-meaning">' + escapeHtml(item.meaning) + '</span></h1>' +
          (isPhrase ? '' : '<div class="wiki-badge-wrap">' +
            '<span class="wiki-tag">' + (item.meaningNote ? escapeHtml(item.meaningNote) : 'CET-6') + '</span>' +
          '</div>') +
        '</div>' +
        '<section class="wiki-example">' +
          '<h3 class="wiki-example-head">真题例句</h3>' +
          '<div class="wiki-example-inner">' +
            '<p class="wiki-en">' + highlightTermInExample(item.example, item.term) + '</p>' +
            '<p class="wiki-zh">' + escapeHtml(item.exampleZh) + '</p>' +
          '</div>' +
        '</section>' +
        '<div class="wiki-cards">' +
          '<div class="wiki-card wiki-card-tip">' +
            '<div class="wiki-card-head"><span class="material-symbols-outlined">lightbulb</span><h3>考点解析</h3></div>' +
            '<ul class="wiki-points">' + keyPointsList + '</ul>' +
          '</div>' +
          (!isCorrect && item.wrongAnalysis && item.wrongAnalysis[state.userChoice] ? '<div class="wiki-card wiki-card-error">' +
            '<div class="wiki-card-head"><span class="material-symbols-outlined">error</span><h3>错因分析</h3></div>' +
            '<div class="wrong-analysis-inner"><p>' + escapeHtml(item.wrongAnalysis[state.userChoice]) + '</p></div>' +
          '</div>' : '') +
          '<div class="wiki-card wiki-card-usage">' +
            '<div class="wiki-card-head"><span class="material-symbols-outlined">link</span><h3>用法搭配</h3></div>' +
            '<p class="wiki-usage-p">' + formatUsage(item.usage, item.term) + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="wiki-page-footer">' +
        '<button type="button" class="btn btn-primary" data-action="next">' +
          '<span>下一题</span><span class="material-symbols-outlined">arrow_forward</span>' +
        '</button>' +
      '</div>';
    section.querySelector('[data-action="next"]').onclick = function () {
      state.userChoice = null;
      state.showHint = false;
      state.chainIndex++;
      if (state.chainIndex < CHAIN.length) {
        state.phase = 'question';
      } else {
        state.phase = 'practice';
        state.practiceBlanks = [null, null, null, null, null];
        state.practiceSelectedBlank = null;
      }
      render();
    };
    return section;
  }

  function getPracticeFullSentence(answers) {
    var a = answers || PRACTICE.answers;
    return PRACTICE.parts[0] + a[0] + PRACTICE.parts[1] + a[1] + PRACTICE.parts[2] + a[2] + PRACTICE.parts[3] + a[3] + PRACTICE.parts[4] + a[4] + PRACTICE.parts[5];
  }

  function renderPractice() {
    var section = document.createElement('div');
    section.className = 'app-main practice-page';
    var submitted = state.practiceSubmitted === true;
    var results = state.practiceResults;
    var blanks = state.practiceBlanks || [null, null, null, null, null];
    var selectedBlank = state.practiceSelectedBlank;

    var sentenceHtml = '';
    var i;
    var zhBlock = '<p class="practice-sentence-zh">' + escapeHtml(PRACTICE.sentenceZh) + '</p>';

    if (!submitted) {
      sentenceHtml = '<p class="practice-instruction">点击下方单词卡片填入空格；点击已填入的空格可撤回。填完后点击「提交」查看正误。</p>' +
        '<div class="practice-sentence">';
      for (i = 0; i < PRACTICE.parts.length; i++) {
        sentenceHtml += escapeHtml(PRACTICE.parts[i]);
        if (i < PRACTICE.answers.length) {
          var val = blanks[i];
          var slotClass = 'practice-slot' + (selectedBlank === i ? ' practice-slot-selected' : '');
          var content = val ? escapeHtml(val) : '&nbsp;';
          sentenceHtml += '<span class="' + slotClass + '" data-blank="' + i + '" data-filled="' + (val ? '1' : '0') + '">' + content + '</span>';
        }
      }
      sentenceHtml += '</div>';

      var used = {};
      blanks.forEach(function (v) { if (v) used[v] = true; });
      var availableCards = PRACTICE.options.filter(function (opt) { return !used[opt]; });
      sentenceHtml += '<div class="practice-cards-wrap"><p class="practice-cards-label">单词卡片（点击填入空格）</p><div class="practice-cards">';
      availableCards.forEach(function (opt) {
        sentenceHtml += '<button type="button" class="practice-card" data-word="' + escapeHtml(opt) + '">' + escapeHtml(opt) + '</button>';
      });
      sentenceHtml += '</div></div>' +
        '<div class="practice-actions">' +
        '<button type="button" class="btn btn-primary" data-action="practice-submit">提交</button>' +
        '</div>';
    } else {
      var userAnswers = state.practiceUserAnswers || blanks;
      sentenceHtml = '<p class="practice-instruction">正确标绿，错误标红。可点击「读句子」听完整朗读。</p>' +
        '<div class="practice-sentence practice-sentence-result">';
      for (i = 0; i < PRACTICE.parts.length; i++) {
        sentenceHtml += escapeHtml(PRACTICE.parts[i]);
        if (i < PRACTICE.answers.length) {
          var val = userAnswers[i] || '';
          var isCorrect = results && results[i];
          var cls = isCorrect ? 'practice-blank-correct' : 'practice-blank-wrong';
          sentenceHtml += '<span class="practice-blank ' + cls + '">' + escapeHtml(val || '（未填）') + '</span>';
        }
      }
      sentenceHtml += '</div>' +
        '<div class="practice-actions">' +
        '<button type="button" class="btn btn-secondary" data-action="practice-speak"><span class="material-symbols-outlined" style="vertical-align:middle;font-size:18px">volume_up</span> 读句子</button>' +
        '<button type="button" class="btn btn-primary" data-action="practice-done">完成</button>' +
        '</div>';
    }

    section.innerHTML =
      '<div class="practice-header">' +
        '<h2 class="practice-title">真题演练</h2>' +
        '<p class="practice-desc">将本单元所学单词与词组填入下面句子。</p>' +
      '</div>' +
      '<div class="practice-body">' +
        zhBlock +
        sentenceHtml +
      '</div>';

    if (!submitted) {
      section.querySelectorAll('.practice-slot').forEach(function (el) {
        el.onclick = function () {
          var idx = parseInt(el.getAttribute('data-blank'), 10);
          var filled = el.getAttribute('data-filled') === '1';
          if (filled) {
            var word = blanks[idx];
            if (word) {
              blanks[idx] = null;
              state.practiceSelectedBlank = null;
              render();
            }
          } else {
            state.practiceSelectedBlank = state.practiceSelectedBlank === idx ? null : idx;
            render();
          }
        };
      });
      section.querySelectorAll('.practice-card').forEach(function (btn) {
        btn.onclick = function () {
          var word = btn.getAttribute('data-word');
          if (selectedBlank !== null && selectedBlank !== undefined) {
            blanks[selectedBlank] = word;
            state.practiceSelectedBlank = null;
            render();
          }
        };
      });
      section.querySelector('[data-action="practice-submit"]').onclick = function () {
        state.practiceUserAnswers = blanks.slice();
        state.practiceResults = blanks.map(function (a, idx) { return a === PRACTICE.answers[idx]; });
        state.practiceSubmitted = true;
        speakTerm(getPracticeFullSentence(PRACTICE.answers));
        render();
      };
    } else {
      section.querySelector('[data-action="practice-speak"]').onclick = function () {
        speakTerm(getPracticeFullSentence(PRACTICE.answers));
      };
      section.querySelector('[data-action="practice-done"]').onclick = function () {
        state.phase = 'review';
        state.reviewIndex = 0;
        state.reviewImageRevealed = false;
        state.reviewUserChoice = null;
        state.practiceSubmitted = false;
        state.practiceResults = null;
        state.practiceUserAnswers = null;
        state.practiceBlanks = null;
        state.practiceSelectedBlank = null;
        render();
      };
    }
    return section;
  }

  function getReviewItem() {
    if (state.phase !== 'review' || state.reviewIndex == null || state.reviewIndex >= CHAIN.length) return null;
    return CHAIN[state.reviewIndex];
  }

  function renderReview() {
    var item = getReviewItem();
    if (!item) return document.createElement('div');
    var idx = state.reviewIndex;
    var total = CHAIN.length;
    var revealed = state.reviewImageRevealed === true;
    var userChoice = state.reviewUserChoice;

    var imgBlock = '';
    if (item.image) {
      if (revealed) {
        imgBlock = '<div class="question-image-wrap"><img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.term) + '"/></div>';
      } else {
        imgBlock = '<div class="question-image-wrap review-image-wrap">' +
          '<div class="review-image-cover" data-action="reveal-image" title="点击显示图片">' +
          '<span class="material-symbols-outlined">image</span><span>点击显示图片</span>' +
          '</div></div>';
      }
    } else {
      imgBlock = '<div class="question-image-wrap"></div>';
    }

    var optionsHtml = item.options.map(function (opt, i) {
      return '<button type="button" class="option-btn" data-index="' + i + '">' +
        '<span class="option-letter">' + LETTERS[i] + '</span>' +
        '<span class="option-text">' + opt + '</span>' +
      '</button>';
    }).join('');

    var nextBtnHtml = (userChoice != null)
      ? '<button type="button" class="btn btn-primary" data-action="review-next">' +
          '<span>下一题</span><span class="material-symbols-outlined">arrow_forward</span>' +
        '</button>'
      : '';

    var section = document.createElement('div');
    section.className = 'app-main';
    section.innerHTML =
      '<div class="review-header"><h2 class="review-title">复习</h2><p class="review-desc">看英语选中文，点击图片区域可显示图片。</p></div>' +
      imgBlock +
      '<div class="question-term-block">' +
        '<div class="question-term-row">' +
          '<h2 class="question-term">' + escapeHtml(item.term) + '</h2>' +
          '<button type="button" class="icon-btn" data-action="play-audio" title="播放发音"><span class="material-symbols-outlined">volume_up</span></button>' +
        '</div>' +
      '</div>' +
      '<div class="options">' + optionsHtml + '</div>' +
      '<div class="question-actions question-actions-review">' +
        '<span class="question-step">复习 ' + (idx + 1) + ' / ' + total + '</span>' +
        (nextBtnHtml ? '<div class="review-next-wrap">' + nextBtnHtml + '</div>' : '') +
      '</div>';

    section.querySelectorAll('[data-action="reveal-image"]').forEach(function (el) {
      el.onclick = function () {
        state.reviewImageRevealed = true;
        render();
      };
    });
    section.querySelectorAll('[data-action="play-audio"]').forEach(function (btn) {
      btn.onclick = function () {
        if (item && item.term) speakTerm(item.term);
      };
    });
    section.querySelectorAll('.option-btn').forEach(function (btn) {
      btn.onclick = function () {
        if (state.reviewUserChoice != null) return;
        state.reviewUserChoice = parseInt(btn.getAttribute('data-index'), 10);
        render();
      };
    });
    var nextBtn = section.querySelector('[data-action="review-next"]');
    if (nextBtn) {
      nextBtn.onclick = function () {
        state.reviewIndex++;
        state.reviewImageRevealed = false;
        state.reviewUserChoice = null;
        if (state.reviewIndex >= CHAIN.length) {
          state.phase = 'summary';
        }
        render();
      };
    }
    return section;
  }

  function renderSummary() {
    var section = document.createElement('div');
    section.className = 'app-main';
    section.innerHTML =
      '<div class="summary-page">' +
        '<h1 class="summary-title">学习完成</h1>' +
        '<p class="summary-desc">你已完成本单元「Chinese Traditional Culture」的单词与词组学习。</p>' +
        '<p class="summary-desc summary-chain">examination → imperial examination → imperial → imperial court → court → court ritual → ritual → Chinese ritual bronzes → bronze → bronze vessels</p>' +
        '<button type="button" class="btn btn-primary" data-action="restart">重新学习</button>' +
      '</div>';
    section.querySelector('[data-action="restart"]').onclick = function () {
      state.phase = 'preview';
      state.chainIndex = 0;
      state.userChoice = null;
      state.showHint = false;
      state.autoPlayed = {};
      state.practiceSubmitted = false;
      state.practiceResults = null;
      state.practiceUserAnswers = null;
      state.practiceBlanks = null;
      state.practiceSelectedBlank = null;
      state.reviewIndex = null;
      state.reviewImageRevealed = null;
      state.reviewUserChoice = null;
      render();
    };
    return section;
  }

  function render() {
    root.innerHTML = '';
    var app = document.createElement('div');
    app.className = 'app';
    app.appendChild(renderProgress());
    if (state.phase === 'preview') {
      app.appendChild(renderPreview());
    } else if (state.phase === 'question') {
      app.appendChild(renderQuestion());
      var q = getCurrentQuestion();
      if (q && q.term && !state.autoPlayed[state.chainIndex]) {
        speakTerm(q.term);
        state.autoPlayed[state.chainIndex] = true;
      }
    } else if (state.phase === 'wiki') {
      app.appendChild(renderWiki());
    } else if (state.phase === 'practice') {
      app.appendChild(renderPractice());
    } else if (state.phase === 'review') {
      app.appendChild(renderReview());
    } else if (state.phase === 'summary') {
      app.appendChild(renderSummary());
    }
    root.appendChild(app);
  }

  render();
})();
