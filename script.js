
// VoiceRSS Javascript SDK;




const button=document.getElementById('button');
const audioElement= document.getElementById('audio');



function toggleButton(){
  button.disabled = !button.disabled;
}
 //4c9f19ef1b894d1884686e7cf9087b6b

 /*function test(){

  }
  test();*/
//passing joke to speech(voice rss api)
function tellMe(joke){
  VoiceRSS.speech({
      key: '4c9f19ef1b894d1884686e7cf9087b6b',
      src: joke,
      hl: 'en-us',
      v: 'Linda',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
  });
}





async function getJokes(){
  var joke="";
  const url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,explicit';
  try{
     const response=await fetch(url);
     const data=await response.json();
    if(data.setup){
      joke=`${data.setup}...${data.delivery}`;
    }
    else{
      joke=data.joke;
    }
    tellMe(joke);
    toggleButton();
  } catch(error){
    console.log('whoops',error);
  }
}
button.addEventListener('click',getJokes);
audioElement.addEventListener('ended',toggleButton);




if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  if (annyang) {
  // Let's define a command.
  const commands = {
    'robo my name is *tag': (variable) => {
var ss=document.querySelector(".hh5");
ss.textContent="Hi!! "+variable;
},
'please feed my name *tag': (variable) => {
var ss=document.querySelector(".hh5");
ss.textContent="Welcome!! "+variable;
}

  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
}
