const baseUrl = "https://poetrydb.org"
const poemDiv = document.getElementById('poem-holder')
let defaultMsg = 'For the times you find yourself feeling too much or not enough. I hope you find some solace and resonance in these poems.'
var msgArray =["You're up early, I hope that means you're looking forward to today.<i class='far fa-sun'></i>","Thinking about you.<i class='fas fa-cloud'></i>","Try to get some sleep, whatever's keeping you up will still be there tomorrow.<i class='fas fa-bed'></i>"]
const note = document.getElementById('note')
const ttbutton =document.getElementById('ttform')


function getNotes(){
  var date= new Date();
  var hour = date.getHours();
        console.log(hour);
        if (hour>=5 && hour<=9){
          note.innerHTML+=`<p>${msgArray[0]}</p>`
        }else if (hour>=14 && hour<=16){
          note.innerHTML+=`<p>${msgArray[1]}</p>`
        }else if (hour>=22 || hour<=4){
          note.innerHTML+=`<p>${msgArray[2]}</p>`
        }else{
          note.innerHTML+= `<p>${defaultMsg}</p>`
        }


}


fetch(baseUrl+"/linecount,random/4;1")
.then(response => response.json())
.then(results => showPoem(results))

showPoem = results =>{
    results.forEach(result =>{
        poemDiv.innerHTML += 
        ` <div class="animate__animated animate__slideInUp">
        <div class="poemhead"><h2>${result.title}</h2>
            <h3> ${result.author}</h3></div>
            <div id="poemtext">
            <p>${result.lines[0]}</p>
            <p>${result.lines[1]}</p>
            <p>${result.lines[2]}</p>
            <p>${result.lines[3]}</p>
            </div>

       `;
       

    })
}

function currentTime(){
var date = new Date(); /* creating object of Date class */
        var hour = date.getHours();
        console.log(hour)
        var min = date.getMinutes();
        console.log(min)
        hour = updateTime(hour);
        min = updateTime(min);
        document.getElementById("clock").innerText = hour + " : " + min;
        var t = setTimeout(currentTime, 1000); /* setting timer */

          }

  
      
      function updateTime(k) { /* appending 0 before time elements if less than 10 */
        if (k < 10) {
          return "0" + k;
        }
        else {
          return k;
        }
      }
      
      currentTime();


    function changeDarkMode(color){
    var date = new Date();
    var hour = date.getHours();
if(hour >=19 || hour <= 6) {
      var element= document.body;
      element.classList.add("darkmode")
    }
}

function playMyAudio(){
  var audio = document.getElementById("meditation")
  var audioBtn = document.getElementById("meditate")
  audio.controls = true;
  audio.play();
  audioBtn.style.backgroundColor ="rgb(14, 14, 14)"
  audio.onended = function(){
    audio.controls = false;
    audioBtn.style.backgroundColor ="transparent"
  };
}

function mOver(obj) {
  obj.innerHTML = ` <i class="far fa-clipboard" ></i> View recorded thoughts`
}

function mOut(obj) {
  obj.innerHTML = `<lottie-player src="https://assets4.lottiefiles.com/temp/lf20_D0nz3r.json"  background="transparent"  speed=".5"  style="width: 20px; height: 20px;"  loop  autoplay></lottie-player>For your eyes only...`
}