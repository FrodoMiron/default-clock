const deg = 6;
const hr = document.querySelector("#hr");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

// electron clock script
      let eClock = document.querySelector(".eClock");
      let body = document.querySelector("#body");
      function time() {
        let date = new Date();
        let hourr = date.getHours();
        let minut = date.getMinutes();
        let seco = date.getSeconds();

        if (hourr < 10) {
          hourr = "0" + hourr;
        }

        if (minut < 10) {
          minut = "0" + minut;
        }

        if (seco < 10) {
          seco = "0" + seco;
        }
        eClock.innerHTML = `${hourr}:${minut}:${seco}`;

        if (hourr > `${04}`)
          function lightMode() {
            body.classList.remove("dark");
          }
          lightMode();  

        if (hourr > `${20}`)
          function darkMode() {
            body.classList.remove("light");
            body.classList.add("dark");
          }

          
          darkMode();
           
      }
      
      setInterval(time);

      let clockMode = document.querySelector('#electrclock')
      let visClock = document.querySelector('#visEclock')
      let hidClock = document.querySelector('#hidEclock')

      visClock.addEventListener("click", function(){
        clockMode.classList.remove('electronClockHide')
        clockMode.classList.add('electronClockVis')
      })

      hidClock.addEventListener("click", function(){
        clockMode.classList.remove('electronClockVis')
        clockMode.classList.add('electronClockHide')
      })

      

