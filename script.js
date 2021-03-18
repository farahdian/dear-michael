const baseUrl = "https://poetrydb.org"
const poemDiv = document.getElementById('poem-holder')
let defaultMsg = 'For the times you find yourself feeling too much or not enough.'
var msgArray =["You're up early, I hope that means you're looking forward to today.<i class='far fa-sun'></i>","Thinking about you.<i class='fas fa-cloud'></i>","Get some sleep, whatever's keeping you up will still be there tomorrow.<i class='fas fa-bed'></i>"]
const note = document.getElementById('note')


function getNotes(){
  var date= new Date();
  var hour = date.getHours();
        console.log(hour);
        if (hour>=5 && hour<=8){
          note.innerHTML+=`<p>${msgArray[0]}</p>`
        }else if (hour>=9 && hour<=17){
          note.innerHTML+=`<p>${defaultMsg}</p>`
        }else if (hour>=18 && hour<=23){
          note.innerHTML+=`<p>${msgArray[1]}</p>`
        }else{
          note.innerHTML+= `<p>${msgArray[2]}</p>`
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
