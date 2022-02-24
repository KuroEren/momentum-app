(() => {
   var name;
   var firstPageClose;
   var toggleSecondPage;
   var showName;
   var amPm;
   var seconds;
   var greeting;
   var greetStart;
   var displayNewInput;
   var close = document.getElementsByClassName("close");
   var i;
   var list = document.querySelector("#list");
   var ls = document.querySelector("ul");
   var listCont = document.querySelector(".todoList-container");
   var quoteList = [
      "We grow fearless when we do the things we fear.",
      "Impossible is just an opinion.",
      "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
   ];

   //SECOND PAGE; TODO BUTTON LOWER RIGHT TO SHOW
   var todoBtn = document.querySelector(".todo-btn");
   todoBtn.addEventListener("click", () => {
      listCont.classList.toggle("hide");
   });

   var quoteBtn = document.querySelector(".settings");
   quoteBtn.addEventListener("click", () => {
      var quoteCont = document.querySelector(".quote-wrapper");
      quoteCont.classList.toggle("hide");
   });

   //SECOND PAGE; PUTS CHECK ON TODO ACTIVITY
   ls.addEventListener(
      "click",
      (ev) => {
         if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
         }
      },
      false
   );

   //FIRST PAGE; INPUT NAME
   myFunction = (event) => {
      let x = event.which;
      if (x === 13) {
         name = document.querySelector("#name").value;
         firstPageClose = document.querySelector(".name-container");
         firstPageClose.style.display = "none";

         toggleSecondPage = document.querySelector("div#whole-page-container");
         toggleSecondPage.classList.toggle("hide");

         showName = document.querySelector("span.time-name");
         showName.textContent = name;
      }
   };

   //SECOND PAGE; TIME
   clockTime = () => {
      var time = new Date();

      var hours = time.getHours();
      var minutes = time.getMinutes();
      seconds = time.getSeconds();

      amPm = hours < 12 ? "AM" : "PM";

      hours = hours > 12 ? hours - 12 : hours;

      if (amPm === "PM" && hours >= 6) {
         greeting = "Good Evening, ";

         greetStart = document.querySelector(".greet");
         greetStart.textContent = greeting;
      } else if (amPm === "PM" && hours < 6) {
         greeting = "Good Afternoon, ";

         greetStart = document.querySelector(".greet");
         greetStart.textContent = greeting;
      } else {
         greeting = "Good Morning, ";
         greetStart = document.querySelector(".greet");
         greetStart.textContent = greeting;
      }

      minutes = ("0" + minutes).slice(-2);
      seconds = ("0" + seconds).slice(-2);

      var showTime = document.querySelector("span.time");
      showTime.innerHTML = `${hours}:${minutes} ${amPm}`;

      var t = setInterval(clockTime, 500);
   };

   //SECOND PAGE; MAIN FOCUS
   showFocus = (event) => {
      let x = event.which;
      if (x === 13) {
         let focus = document.querySelector(".goal-input").value;
         let cont = document.querySelector(".goal-today");

         cont.innerHTML = focus;

         document.querySelector(".goal-input").style.display = "none";
      }
   };

   //SECOND PAGE; NEW INPUT BUTTON TOGGLE
   openInput = () => {
      displayNewInput = document.querySelector(".addNew-input");

      displayNewInput.classList.toggle("hide");
   };

   var newInputBtn = document.querySelector(".addToDo-btn");

   newInputBtn.addEventListener("click", openInput);

   //SECOND PAGE; HIDE BUTTON ON NEW INPUT
   hideBtn = (event) => {
      let x = event.which;
      let getValue = document.querySelector(".initialTodo-input").value;

      if (x === 13) {
         let newBtn = document.querySelector(".addToDo-btn");
         newBtn.style.display = "none";
         let showList = document.querySelector(".todoList-display");

         if (showList.classList.contains("hide")) {
            showList.classList.toggle("hide");
         }

         var li = document.createElement("li");
         var txt = document.createTextNode(getValue);

         li.appendChild(txt);
         list.appendChild(li);
         document.querySelector(".initialTodo-input").value = "";

         var span = document.createElement("span");
         var z = document.createTextNode("\u00D7");
         span.className = "close";
         span.appendChild(z);
         li.appendChild(span);

         for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
               var div = this.parentElement;
               div.style.display = "none";
            };
         }
      }
   };

   var quoteGet = document.querySelector(".quote");
   var listRandom = Math.floor(Math.random() * quoteList.length);

   quoteGet.innerHTML = `"${quoteList[listRandom]}"`;

   addQuote = () => {
      var quoteValue = document.querySelector(".quote-input").value;
      quoteList.push(quoteValue);

      console.log(quoteList);

      document.querySelector(".quote-input").value = "";
   };

   switchQuote = () => {
      var newRandom = Math.floor(Math.random() * quoteList.length);
      quoteGet.innerHTML = `"${quoteList[newRandom]}"`;
   };
})();
