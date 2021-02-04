// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: quote-right;

// Load Mosque Data

function timeConvertor(time) {
  var PM = time.match('PM') ? true : false
  
  time = time.split(':')
  var min = time[1]
  
  if (PM) {
      var hour = 12 + parseInt(time[0],10)

  } else {
      var hour = time[0]
      
  }
  
  return hour + ':' + min
}


var req = new Request("http://www.portsmouthjamimosque.co.uk/")
var html = await req.loadString();
times = html.match(/[0-9]+:[0-9]+/g)

//Begining times:
var fajrBegin = timeConvertor(times[3]+" AM")
var zuhrBegin = timeConvertor(times[5]+" AM")
var asrBegin = timeConvertor(times[7]+" PM")
var maghribBegin = timeConvertor(times[9]+" PM")
var eshaBegin = timeConvertor(times[10]+" PM")




// Jamat Times:
var fajrJamat = timeConvertor(times[4]+" AM")
var zuhrJamat = timeConvertor(times[6]+" PM")
var asrJamat = timeConvertor(times[8]+" PM")
var maghribJamat = timeConvertor(times[9]+" PM")
var eshaJamat = timeConvertor(times[11]+" PM")





// File manager 
let fm = FileManager.iCloud()
let path = fm.documentsDirectory()+'/img'

//Images
var fajrImage =  fm.readImage(path+'/fajr.png')
var zuhrImage =  fm.readImage(path+'/zuhr.png')
var asrImage =  fm.readImage(path+'/asr.png')
var maghribImage =  fm.readImage(path+'/maghrib.png')
var eshaImage =  fm.readImage(path+'/esha.png')
log(path)


function createWidget() {

  const w = new ListWidget()
  w.backgroundColor = new Color("#222222")
  w.setPadding(12, 15, 15, 12)
  w.spacing = 6
  // const bgColor = new LinearGradient()
  // bgColor.colors = [new Color("#29323c"), new Color("#1c1c1c")]
  // bgColor.locations = [0.0, 1.0]
  // w.backgroundGradient = bgColor

  var titlestack = w.addStack()
  var fajrstack = w.addStack()
  var zuhrstack = w.addStack()
  var asrstack= w.addStack()
  var maghribstack= w.addStack()
  var eshastack= w.addStack()
  var mosquestack = w.addStack()
  var imageSize = 14

  //Padding
  titlestack.setPadding(16, 5, 0, 2)
  fajrstack.setPadding(2, 5, 0, 2)
  zuhrstack.setPadding(2, 5, 0, 2)
  asrstack.setPadding(2, 5, 0, 2)
  maghribstack.setPadding(2, 5, 0, 2)
  eshastack.setPadding(0, 5, 0, 2)
  mosquestack.setPadding(0, 0, 0, 2)

  //Titles
  titleBracket = titlestack.addText("[")
  titlestack.addImage(whichImage()).imageSize=new Size(imageSize, imageSize)
  titleBracket2 = titlestack.addText("]")
  const firstLine = titlestack.addText(`                Beginning      Jamat`)
  firstLine.textColor = Color.white()
  firstLine.textOpacity = 0.7
  firstLine.font = new Font("Menlo", 11)
  titleBracket.textColor = Color.white()
  titleBracket.textOpacity = 0.7
  titleBracket.font = new Font("Menlo", 11)
  titleBracket2.textColor = Color.white()
  titleBracket2.textOpacity = 0.7
  titleBracket2.font = new Font("Menlo", 11)


  
  //Fajr
  fajrBracket = fajrstack.addText("[")
  fajrstack.addImage(fajrImage).imageSize=new Size(imageSize, imageSize)
  fajrBracket2 = fajrstack.addText("]")
  if (whichNamaz() == "fajr"){
    var fajr = fajrstack.addText(`  Fajr:          ${fajrBegin}     ${fajrJamat} |`)
  }else{
    var fajr = fajrstack.addText(`  Fajr:          ${fajrBegin}     ${fajrJamat} `)
  }
  fajr.textColor = Color.white()
  fajr.font = new Font("Menlo", 11)
  fajrBracket.textColor = Color.white()
  fajrBracket.font = new Font("Menlo", 11)
  fajrBracket2.textColor = Color.white()
  fajrBracket2.font = new Font("Menlo", 11)



  //Zuhr
  zuhrBracket = zuhrstack.addText("[")
  zuhrstack.addImage(zuhrImage).imageSize=new Size(imageSize, imageSize)
  zuhrBracket2 = zuhrstack.addText("]")
  if(whichNamaz() == "zuhr"){
    var zuhr = zuhrstack.addText(`  Zuhr:          ${zuhrBegin}     ${zuhrJamat} |`)
  }else{
    var zuhr = zuhrstack.addText(`  Zuhr:          ${zuhrBegin}     ${zuhrJamat} `)
  }
  zuhr.textColor = new Color("#6ef2ae")
  zuhr.font = new Font("Menlo", 11)
  zuhrBracket.textColor = new Color("#6ef2ae")
  zuhrBracket.font = new Font("Menlo", 11)
  zuhrBracket2.textColor = new Color("#6ef2ae")
  zuhrBracket2.font = new Font("Menlo", 11)


  //Asr
  asrBracket = asrstack.addText("[")
  asrstack.addImage(asrImage).imageSize=new Size(imageSize, imageSize)
  asrBracket2 = asrstack.addText("]")
  if (whichNamaz() == "asr"){
    var asr = asrstack.addText(`  Asr:           ${asrBegin}     ${asrJamat} |`)
  }else{
    var asr = asrstack.addText(`  Asr:           ${asrBegin}     ${asrJamat} `)
  }
  asr.textColor = new Color("#ffcc66")
  asr.font = new Font("Menlo", 11)
  asrBracket.textColor = new Color("#ffcc66")
  asrBracket.font = new Font("Menlo", 11)
  asrBracket2.textColor = new Color("#ffcc66")
  asrBracket2.font = new Font("Menlo", 11)


  //Maghrib
  maghribBracket = maghribstack.addText("[")
  maghribstack.addImage(maghribImage).imageSize=new Size(imageSize, imageSize)
  maghribBracket2 = maghribstack.addText("]")
  if (whichNamaz() == "maghrib"){
    var maghrib = maghribstack.addText(`  Maghrib:       ${maghribBegin}     -- --    |`)
    
  }else{
    var maghrib = maghribstack.addText(`  Maghrib:       ${maghribBegin}     -- -- `)
  }
  maghrib.textColor = new Color("#7dbbae")
  maghrib.font = new Font("Menlo", 11)
  maghribBracket.textColor = new Color("#7dbbae")
  maghribBracket.font = new Font("Menlo", 11)
  maghribBracket2.textColor = new Color("#7dbbae")
  maghribBracket2.font = new Font("Menlo", 11)


  //Esha
  eshaBracket = eshastack.addText("[")
  eshastack.addImage(eshaImage).imageSize=new Size(imageSize, imageSize)
  eshaBracket2 = eshastack.addText("]")
  if (whichNamaz() == "esha"){
    var esha = eshastack.addText(`  Esha:          ${eshaBegin}     ${eshaJamat} |`)
  }else{
    var esha = eshastack.addText(`  Esha:          ${eshaBegin}     ${eshaJamat}  `)
  }
  esha.textColor = new Color("#ff9468")
  esha.font = new Font("Menlo", 11)
  eshaBracket.textColor = new Color("#ff9468")
  eshaBracket.font = new Font("Menlo", 11)
  eshaBracket2.textColor = new Color("#ff9468")
  eshaBracket2.font = new Font("Menlo", 11)


  //Mosque
  const mosque = w.addText(`            Portsmouth Jami Mosque`)
  mosque.textColor = new Color("#ffa7d3")
  mosque.textOpacity = 0.7
  mosque.font = new Font("Menlo", 11)
  return w
}




function renderBattery() {
  const batteryLevel = Device.batteryLevel()
  const juice = "#".repeat(Math.floor(batteryLevel * 8))
  const used = ".".repeat(8 - juice.length)
  const batteryAscii = `${Math.round(batteryLevel * 100)}%`
  return batteryAscii
}


function whichNamaz() {
  namazTimes = [fajrBegin, zuhrBegin, asrBegin, maghribBegin, eshaBegin];
  var today = new Date();
  var currentTime = today.setHours(today.getHours(), today.getMinutes());

  var counter = 1;
  for (let i = 0; i < namazTimes.length; i++) {
    let namazHour = parseInt((namazTimes[i])[0] + (namazTimes[i])[1]);
    let namazMin = parseInt((namazTimes[i])[3] + (namazTimes[i])[4]);
    
    let namazTimeObject = new Date();
    let namazTime = namazTimeObject.setHours(namazHour, namazMin);

    if (namazTime < currentTime) {
      counter++;
    }
  }

  if (counter === 7) {
    counter = 1;
  }

  switch (counter) {
    case 1:
      prayer = 'fajr';
      break;
    case 2:
      prayer = 'zuhr';
      break;
    case 3:
      prayer = 'asr';
      break;
    case 4:
      prayer = 'maghrib';
      break;
    case 5:
      prayer = 'esha';
      break;
    case 6:
      prayer = "esha"
  }

  return prayer
}





function whichImage(){
  switch(whichNamaz()){
    case 'fajr':
      return fajrImage
    case 'zuhr':
      return zuhrImage
    case 'asr':
      return asrImage
    case 'maghrib':
      return maghribImage
    case 'esha':
      return eshaImage
    case "esha":
      return eshaImage 
  }
}

const widget = createWidget()
Script.setWidget(widget)
Script.complete()
