(function () {
  const storageKey = 'PicRoverGuideDemoLanguage';
  const supportedLanguages = ['zh', 'en'];
  const textNodeOriginals = new WeakMap();
  const attributeOriginals = new WeakMap();
  const originalTitle = document.title;

  const translations = {
    en: {
      'PicRover 操作引导 Demo': 'PicRover Guide Demo',
      '用这个网站快速体验 PicRover': 'Try PicRover with this guide site',
      '这里准备了可识别的图片、可长按打开的链接和连续图集入口。把本页地址输入 PicRover 后，可以按下面 3 个引导测试识别、工作区和相似图集排队下载。': 'This site includes scannable images, long-press links, and gallery queues. Open it in PicRover and follow the three guide flows below.',
      '识别并下载图片': 'Scan and Download Images',
      '输入网页后，点击识别找到页面图片；选择需要的图片即可下载。连续图集可开启自动下一页。': 'Open a page, scan images, select what you need, and download them.',
      '多工作区浏览': 'Browse with Multiple Workspaces',
      '长按链接可在新工作区打开；底部滑动切换工作区，也可以随时新增，多个页面互不影响。': 'Open links in separate workspaces and switch between pages without mixing results.',
      '排队下载相似图集': 'Queue Similar Galleries',
      '遇到连续图集时，长按其中一个链接搜索同类页面；确认后会排队逐个打开、识别并下载。': 'Find similar gallery links, queue them, then scan and download page by page.',
      'PicRover 操作引导 Demo。可在 PicRover 中打开并按步骤体验。': 'PicRover Guide Demo. Open it in PicRover and follow the steps.',

      'PicRover 操作引导': 'PicRover Guide',
      '点击底部识别按钮，选择图片后即可下载。': 'Tap Scan, select images, then download.',
      '在 PicRover 里这样操作': 'How to use it in PicRover',
      '打开本页地址': 'Open this page',
      '等待页面加载完成。': 'Wait for the page to load.',
      '点击识别': 'Tap Scan',
      '首次可选择快速或深度识别。': 'Choose Quick Scan or Deep Scan the first time.',
      '选择并下载': 'Select and download',
      '勾选图片，点击下载选中。': 'Check images, then tap Download Selected.',
      '图片示例': 'Image Examples',
      '点击识别后，下方图片会出现在图片面板中。': 'After scanning, these images appear in the image panel.',
      '返回引导首页': 'Back to Guide Home',
      '下一章': 'Next Chapter',

      '长按链接，在新工作区打开不同页面。': 'Long-press links to open different pages in new workspaces.',
      '长按链接': 'Long-press a link',
      '选择在新工作区打开。': 'Choose to open it in a new workspace.',
      '切换工作区': 'Switch workspaces',
      '在多个页面间来回切换。': 'Move between multiple pages.',
      '分别识别': 'Scan separately',
      '每个工作区独立保存结果。': 'Each workspace keeps its own results.',
      '工作区示例 A': 'Workspace Example A',
      '长按我，在新工作区打开第一组图片': 'Long-press me to open the first image set',
      '工作区示例 B': 'Workspace Example B',
      '长按我，在新工作区打开第二组图片': 'Long-press me to open the second image set',
      '连续图集入口': 'Gallery Queue Entry',
      '打开排队下载相似图集的引导页': 'Open the similar gallery queue guide',
      '当前工作区图片': 'Current Workspace Images',
      '点击识别后，只会更新当前工作区的图片面板。': 'After scanning, only this workspace image panel updates.',

      '长按章节链接，查看相似链接并加入下载队列。': 'Long-press a chapter link, view similar links, then add them to the download queue.',
      '长按章节链接': 'Long-press a chapter link',
      '选择查看相似链接。': 'Choose View Similar Links.',
      '确认队列': 'Confirm the queue',
      '检查列表后开始处理。': 'Check the list, then start.',
      '等待下载': 'Wait for downloads',
      'PicRover 会逐页识别并保存。': 'PicRover scans and saves each page.',
      '图集章节 01': 'Gallery Chapter 01',
      '图集章节 02': 'Gallery Chapter 02',
      '图集章节 03': 'Gallery Chapter 03',
      '图集章节 04': 'Gallery Chapter 04',
      '图集章节 05': 'Gallery Chapter 05',
      '图集章节 06': 'Gallery Chapter 06',
      '长按我，查看相似链接': 'Long-press me to view similar links',
      '同组连续页面，适合加入队列': 'A related page that fits the queue',
      '图集预览': 'Gallery Preview',
      '进入任一章节后，还可以继续识别页面图片。': 'Open any chapter to keep scanning page images.',

      '连续图集第 2 页': 'Gallery Page 2',
      '返回第 1 页': 'Back to Page 1',
      '这是基础识别流程的下一页，用来测试 PicRover 的连续图集和自动下一页能力。': 'This is the next page for testing gallery continuation and auto-next behavior.',
      '第二页可识别图片': 'Page 2 Images',
      '识别本页后，下载管理里应生成新的图片集合，或被自动下一页流程连续处理。': 'After scanning, a new image set should appear in Download Management or continue through auto-next.',
      '上一页': 'Previous Page',
      '最后一页': 'Final Page',
      '连续图集最后一页': 'Final Gallery Page',
      '返回第 2 页': 'Back to Page 2',
      '这是基础识别流程的最后一页，用来确认自动下一页在到达末页后能正常结束。': 'This is the final page for checking that auto-next stops at the end.',
      '最后一页可识别图片': 'Final Page Images',
      '识别本页后，可以回到下载管理查看连续页面保存的图片文件夹。': 'After scanning, check Download Management for the saved gallery folder.',

      '返回多工作区引导': 'Back to Workspace Guide',
      '这是独立工作区示例页。你可以在本页单独识别图片，并和其他工作区的识别结果对比。': 'This is an independent workspace example. Scan images here and compare them with other workspaces.',
      '这是另一个独立工作区示例页。它和示例 A 使用不同图片集合，方便测试多个网页互不影响。': 'This is another independent workspace example with a different image set.',

      '返回相似图集引导': 'Back to Similar Gallery Guide',
      '相似图集章节 01': 'Similar Gallery Chapter 01',
      '相似图集章节 02': 'Similar Gallery Chapter 02',
      '相似图集章节 03': 'Similar Gallery Chapter 03',
      '相似图集章节 04': 'Similar Gallery Chapter 04',
      '相似图集章节 05': 'Similar Gallery Chapter 05',
      '相似图集章节 06': 'Similar Gallery Chapter 06',
      '这是排队下载流程中的第 1 个图集页面，可用于验证队列自动打开、识别和下载。': 'This is gallery page 1 in the queue flow, useful for checking automatic open, scanning, and download.',
      '这是排队下载流程中的第 2 个图集页面，可用于验证队列自动打开、识别和下载。': 'This is gallery page 2 in the queue flow, useful for checking automatic open, scanning, and download.',
      '这是排队下载流程中的第 3 个图集页面，可用于验证队列自动打开、识别和下载。': 'This is gallery page 3 in the queue flow, useful for checking automatic open, scanning, and download.',
      '这是排队下载流程中的第 4 个图集页面，可用于验证队列自动打开、识别和下载。': 'This is gallery page 4 in the queue flow, useful for checking automatic open, scanning, and download.',
      '这是排队下载流程中的第 5 个图集页面，可用于验证队列自动打开、识别和下载。': 'This is gallery page 5 in the queue flow, useful for checking automatic open, scanning, and download.',
      '这是排队下载流程中的第 6 个图集页面，可用于验证队列到达末页后正常结束。': 'This is gallery page 6 in the queue flow, useful for checking that the queue ends correctly.',
      '返回章节列表': 'Back to Chapter List',
      '下一章节': 'Next Chapter',
      '上一章节': 'Previous Chapter',

      '额外图片测试页': 'Extra Image Test Page',
      '这是备用图片集合，可用于继续测试 PicRover 的图片识别、选择和下载。': 'This extra image set can be used to keep testing scanning, selection, and downloads.',
      '备用可识别图片': 'Extra Scannable Images',
      '这些图片不会出现在首页入口中，但可直接打开页面进行额外测试。': 'These images are not listed on the home page but can be opened directly for extra testing.',
      '批量图片测试页': 'Batch Image Test Page',
      '这是备用批量图片集合，可用于测试更多图片数量下的识别、选中和下载。': 'This extra batch set can be used to test scanning, selection, and downloads with more images.',
      '主图片集合': 'Primary Image Set',
      '适合测试批量识别后的默认选中、手动选择和下载数量。': 'Useful for testing default selection, manual selection, and download counts after batch scanning.',
      '补充图片集合': 'Additional Image Set',
      '适合测试同一页面内多个图片区域的扫描结果。': 'Useful for testing scan results across multiple image sections on one page.',

      '示例图片': 'Demo Image',
      'PicRover 示例图库': 'PicRover Demo Gallery',
      '添加本地图片': 'Add local image',
      '中文': 'Chinese',
      'English': 'English'
    },
    zh: {
      'Spring Frame': '示例图片',
      'Demo Image': '示例图片',
      'Spring Lens Archive': 'PicRover 示例图库',
      'PicRover Demo Gallery': 'PicRover 示例图库',
      'Add local image': '添加本地图片',
      'Chinese': '中文'
    }
  };

  function normalizeLanguage(value) {
    const lang = (value || '').toLowerCase();
    if (lang.startsWith('zh')) return 'zh';
    if (lang.startsWith('en')) return 'en';
    return '';
  }

  function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const fromURL = normalizeLanguage(params.get('lang'));
    if (fromURL) {
      localStorage.setItem(storageKey, fromURL);
      return fromURL;
    }
    const fromStorage = normalizeLanguage(localStorage.getItem(storageKey));
    if (fromStorage) return fromStorage;
    return normalizeLanguage(navigator.language) || 'zh';
  }

  function translateText(text, language) {
    const lang = supportedLanguages.includes(language) ? language : 'zh';
    if (lang === 'en' && text.endsWith(' - PicRover 操作引导')) {
      const title = text.replace(' - PicRover 操作引导', '');
      return `${translateText(title, lang)} - PicRover Guide`;
    }
    if (lang === 'zh') return translatePattern(translations.zh[text] || text, lang);
    return translatePattern(translations.en[text] || text, lang);
  }

  function translatePattern(text, language) {
    if (language === 'zh') {
      return text
        .replace(/^Spring Frame (\d{3})$/, '示例图片 $1')
        .replace(/^Demo Image (\d{3})$/, '示例图片 $1');
    }
    return text
      .replace(/^Spring Frame (\d{3})$/, 'Demo Image $1')
      .replace(/^示例图片 (\d{3})$/, 'Demo Image $1')
      .replace(/^PicRover 示例图库$/, 'PicRover Demo Gallery')
      .replace(/^添加本地图片$/, 'Add local image');
  }

  function translateNodeText(node, language) {
    if (!textNodeOriginals.has(node)) textNodeOriginals.set(node, node.nodeValue);
    const raw = textNodeOriginals.get(node);
    const trimmed = raw.trim();
    if (!trimmed) return;
    const translated = translateText(trimmed, language);
    node.nodeValue = raw.replace(trimmed, translated);
  }

  function translateElementAttributes(element, language) {
    ['title', 'aria-label', 'alt'].forEach((name) => {
      let originals = attributeOriginals.get(element);
      if (!originals) {
        originals = {};
        attributeOriginals.set(element, originals);
      }
      if (!Object.prototype.hasOwnProperty.call(originals, name)) {
        originals[name] = element.getAttribute(name);
      }
      const value = originals[name];
      if (!value) return;
      element.setAttribute(name, translateText(value, language));
    });
  }

  function translateDocument(language) {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = translateText(originalTitle, language);
    document.querySelectorAll('[title], [aria-label], [alt]').forEach((element) => {
      translateElementAttributes(element, language);
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, .language-switcher')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => translateNodeText(node, language));
    updateLanguageToggle(language);
  }

  function setLanguage(language) {
    const normalized = normalizeLanguage(language) || 'zh';
    localStorage.setItem(storageKey, normalized);
    window.PRGuideI18n.language = normalized;
    translateDocument(normalized);
  }

  function createLanguageToggle(language) {
    if (document.querySelector('.language-switcher')) return;
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.setAttribute('aria-label', 'Language');
    switcher.innerHTML = [
      '<button type="button" data-language="zh">中文</button>',
      '<button type="button" data-language="en">EN</button>'
    ].join('');
    switcher.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-language]');
      if (!button) return;
      setLanguage(button.dataset.language);
    });
    document.body.appendChild(switcher);
    updateLanguageToggle(language);
  }

  function updateLanguageToggle(language) {
    document.querySelectorAll('.language-switcher button').forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  const currentLanguage = getInitialLanguage();
  window.PRGuideI18n = {
    language: currentLanguage,
    t(text) {
      return translateText(text, localStorage.getItem(storageKey) || currentLanguage);
    },
    setLanguage
  };

  document.addEventListener('DOMContentLoaded', () => {
    createLanguageToggle(currentLanguage);
    translateDocument(currentLanguage);
  });
})();
