
  const DefaultLayouts = {
   ultraWideFull : 'ultraWideFull',
   ultraWide : 'ultraWide',

   wideFull : 'wideFull',
   wide : 'wide',

   wideStrechedFull : 'wideStrechedFull',
   wideStrechedFullDouble : 'WideStrechedFullDouble',
   wideStreched : 'wideStreched',
   wideStrechedDouble : 'wideStrechedDouble',

   wideStrechedFullList : 'wideStrechedFullList',
   wideStrechedList : 'wideStrechedList',

   doublets : 'doublets',
   doubletsDouble : 'doubletsDouble',
   doubletsFull : 'doubletsFull',
   doubletsFullDouble : 'doubletsFullDouble',

   doubletsConstant : 'doubletsConstant',
   doubletsDoubleConstant : 'doubletsDoubleConstant',
   doubletsFullConstant : 'doubletsFullConstant',
   doubletsFullDoubleConstant : 'doubletsFullDoubleConstant',
  
   longDoublets : 'longDoublets',
   longDoubletsDouble : 'longDoubletsDouble',
   longDoubletsFull : 'longDoubletsFull',
   longDoubletsFullDouble : 'longDoubletsFullDouble',

   longDoubletsConstant : 'longDoubletsConstant',
   longDoubletsDoubleConstant : 'longDoubletsDoubleConstant',
   longDoubletsFullConstant : 'longDoubletsFullConstant',
   longDoubletsFullDoubleConstant : 'longDoubletsFullDoubleConstant',

   triplets : 'triplets',
   tripletsDouble : 'tripletsDouble',
   tripletsFull : 'tripletsFull',
   tripletsFullDouble : 'tripletsFullDouble',

   tripletsConstant : 'tripletsConstant',
   tripletsDoubleConstant : 'tripletsDoubleConstant',
   tripletsFullConstant : 'tripletsFullConstant',
   tripletsFullDoubleConstant : 'tripletsFullDoubleConstant',

   longTriplets : 'longTriplets',
   longTripletsDouble : 'longTripletsDouble',
   longTripletsFull : 'longTripletsFull',
   longTripletsFullDouble : 'longTripletsFullDouble',

   longTripletsConstant : 'longTripletsConstant',
   longTripletsDoubleConstant : 'longTripletsDoubleConstant',
   longTripletsFullConstant : 'longTripletsFullConstant',
   longTripletsFullDoubleConstant : 'longTripletsFullDoubleConstant',

   none: ''
  };

  const CellDesings = {
      Special1 : 'Special1',
  Special2 : 'Special2',
  Special3 : 'Special3',
  CELLHelperText : 'CELLHelperText',

    small1 : 'small1',
    small2 : 'small2',
    normal1 : 'normal1',
    normal2 : 'normal2',
    normal3 : 'normal3',
    normal4 : 'normal4',
    normal5 : 'normal5',
    normal6 : 'normal6',
    normal7 : 'normal7',

    wide1 : 'wide1',
    wide2 : 'wide2',
    wide3 : 'wide3',
    wide4 : 'wide4',
    wide5 : 'wide5',
    wide6 : 'wide6',
    wide7 : 'wide7',
    wide8 : 'wide8',
    wide9 : 'wide9',
    wide10 : 'wide10',
    wide11 : 'wide11'
  };

  const Paging = {
      leading : 'leading',
      centered : 'centered',
      none : ''
  };

  const Orientation = {
      horizontal : 'horizontal',
      vertical : 'vertical'
  };

  function MainPage(request, extra, javascriptConfig, output) {
      this.request = request;
      this.extra = extra;
      this.javascriptConfig = javascriptConfig;
      this.output = output;
  }

  function ModuleRequest(url, method, headers, httpBody) {
      this.url = url;
      this.method = method;
      this.headers = headers;
      this.httpBody = httpBody;
  }

  function Extra(commands, extraInfo) {
      this.commands = commands;
      this.extraInfo = extraInfo;
  }

  function Commands(commandName, params) {
      this.commandName = commandName;
      this.params = params;
  }

  function JavascriptConfig(removeJavascript, loadInWebView, javaScript) {
      this.removeJavascript = removeJavascript;
      this.loadInWebView = loadInWebView;
      this.javaScript = javaScript;
  }

  function KeyValue(key, value) {
      this.key = key;
      this.value = value;
  }

  function Output(cellDesing, orientation, defaultLayout, paging, section, layout, data) {
      this.cellDesing = cellDesing;
      this.orientation = orientation;
      this.defaultLayout = defaultLayout;
      this.paging = paging;
      this.section = section;
      this.layout = layout;
      this.data = data;
  }

  function Section(sectionName, separator) {
      this.sectionName = sectionName;
      this.separator = separator;
  }

  function Layout(insets, visibleCellsWidthS,visibleCellsWidthM,visibleCellsWidthL, visibleCellsHeight, heightForVisibleCells, cellSize, ratio, constant, horizontalSpacing, verticalSpacing) {
      this.insets = insets;
      this.visibleCellsWidthS = visibleCellsWidthS;
      this.visibleCellsWidthM = visibleCellsWidthM;
      this.visibleCellsWidthL = visibleCellsWidthL;
      this.visibleCellsHeight = visibleCellsHeight;
      this.heightForVisibleCells = heightForVisibleCells;
      this.cellSize = cellSize;
      this.ratio = ratio;
      this.constant = constant;
      this.horizontalSpacing = horizontalSpacing;
      this.verticalSpacing = verticalSpacing;
  }

  function Insets(top, bottom, left, right) {
      this.top = top;
      this.bottom = bottom;
      this.left = left;
      this.right = right;
  }

  function Size(width, height) {
      this.width = width;
      this.height = height;
  }

  function Ratio(inRelation, number1, number2) {
      this.inRelation = inRelation;
      this.number1 = number1;
      this.number2 = number2;
  }

  function Data(image, title, description, field1, field2, field3, field4, isChapter, link,openInWebView) {
      this.image = image;
      this.title = title;
      this.description = description;
      this.field1 = field1;
      this.field2 = field2;
      this.field3 = field3;
      this.field4 = field4;
      this.isChapter = isChapter;
      this.link = link;
      this.openInWebView = openInWebView;
  }

  function quickData(link,image,title,field1)  {
      return new Data(image,title,'unknown',field1,'unknown','unknown','unknown',false,link);
  }



  function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }

  

  var savedData = document.getElementById('ketsu-final-data');

  var parsedJson = JSON.parse(savedData.innerHTML); 

  let output = [];
  var donnes = [];
  
  let emptyKeyValue = [new KeyValue('','')];

  var founs = document.querySelectorAll('.dtw_content.dt_views_count article');
  for (f of founs){
      var link = f.querySelector('a').href;
      link = new ModuleRequest(link, 'get', emptyKeyValue, null);
      var image = f.querySelector('.image img ').src;
      image = new ModuleRequest(image, 'get', emptyKeyValue, null);
      var title = f.querySelector('.image img ').alt.trim();
      var quality = f.querySelector('a div div span').textContent.trim();
      var annee = f.querySelector('a div div span').textContent.trim();
      donnes.push(new Data(image, '', quality,title,annee,'','',false,link));
  }

  var donnes1 = [];
  var check = document.querySelectorAll('.items.normal')[0];
  var film = check.querySelectorAll('article');
  for (f of film){
    var link = f.querySelector('.poster > a').href;
    link = new ModuleRequest(link, 'get', emptyKeyValue, null);
    var image = f.querySelector('.poster > img').src;
    image = new ModuleRequest(image, 'get', emptyKeyValue, null);
    var title = f.querySelector('.poster > img').alt;
    var quali = f.querySelector('span').textContent;
    var dat = f.querySelector('.data span').textContent.trim();
    var fil =  new Data(image, title, '',dat,quali,'','',false,link);
    donnes1.push(fil);
  }

  var donnes2 = [];
  var chercher = document.querySelectorAll('.items.normal')[1];
  var serie = chercher.querySelectorAll('article');
  for (s of serie){
    var link = s.querySelector('.poster > a').href;
    link = new ModuleRequest(link, 'get', emptyKeyValue, null);
    var image = s.querySelector('.poster > img').src;
    image = new ModuleRequest(image, 'get', emptyKeyValue, null);
    var title = s.querySelector('.poster > img').alt;
    var dat = s.querySelector('.data span').textContent.trim();
    var ser =  new Data(image, title, '',dat,'','','',false,link);
    donnes2.push(ser);
  }

  let layout = new Layout(new Insets(0, 0, 0, 0), 1, 1, 1, 1, 0, new Size(430, 105), new Ratio('width', 6, 10), new Size(0, 0), 0, 0);
  output.push(new Output(CellDesings.Special3, Orientation.horizontal, DefaultLayouts.wideStrechedFull, Paging.leading,new Section('', true), layout, donnes));
  output.push(new Output(CellDesings.normal1, Orientation.horizontal, DefaultLayouts.longTripletsDouble, Paging.leading, new Section('Latest Movies Added :', true), null, donnes1));
  output.push(new Output(CellDesings.normal1, Orientation.horizontal, DefaultLayouts.longTripletsDouble, Paging.leading, new Section('New Series Updated :', true), null, donnes2));
  let MainPageObject = new MainPage(new ModuleRequest('','get',emptyKeyValue,null),new Extra([new Commands('',emptyKeyValue)],emptyKeyValue),new JavascriptConfig(true,false,''),output);
  var finalJson = JSON.stringify(MainPageObject);
  savedData.innerHTML = finalJson;
  