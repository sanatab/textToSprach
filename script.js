const voicesSelect = document.getElementById('voice');
const textarea = document.getElementById('text');
const read = document.getElementById('read');


let voices =[];

function getVoice(){
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang }`
        voicesSelect.appendChild(option);
    })
}
// Init speech synth
const message = new SpeechSynthesisUtterance();
//set voice
function setVoice(e){
    message.voice = voices.find(voice => voice.name === e.target.value);
}
// speak text
function speakText(){
    speechSynthesis.speak(message);
}
// Set text
function setTextMessage(text) {
    message.text = text;
  }


  // Change voice
voicesSelect.addEventListener('change', setVoice);

// read text button
read.addEventListener('click', () =>{
    setTextMessage(textarea.value);
    speakText();
})

speechSynthesis.addEventListener('voiceschanged', getVoice);
getVoice()
