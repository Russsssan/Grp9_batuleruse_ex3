document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });
    const leftarrowBtnHTML = `<span class="carousel__leftarrowBtn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></span>`;
    const rightarrowBtnHTML = `<span class="carousel__rightarrowBtn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></span>`;
    carousel.insertAdjacentHTML("beforeend",`
        <div class="carousel__nav">
            <div class="carousel__button-margin">
                ${ buttonsHtml.join("")}
            </div>
            <div class="carousel__LRbutton">
                ${ leftarrowBtnHTML}
                ${ rightarrowBtnHTML}
            </div>
        </div>    
    `);
    // NAV BUTTONS
  const buttons = carousel.querySelectorAll(".carousel__button");
  buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));
            rightarrowBtn.forEach(button => button.classList.remove("carousel__button--selected"));
            leftarrowBtn.forEach(button => button.classList.remove("carousel__button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
            a = i
      });
  });
  // LEFT ARROW BTN
  const leftarrowBtn = carousel.querySelectorAll(".carousel__leftarrowBtn");
  leftarrowBtn.forEach((button, i) => {
      button.addEventListener("click", () => {
        items.forEach(item => item.classList.remove("carousel__item--selected"));
        buttons.forEach(button => button.classList.remove("carousel__button--selected"));
        rightarrowBtn.forEach(button => button.classList.remove("carousel__button--selected"));
        let a = i;
        if(a>=0){
            if(a==0){
                i = 5;
                console.log("Clicked 1");
            }else if(a==1){
                i = 0;
                console.log("Clicked 2");
            }else if(a==2){
                i = 1;
                console.log("Clicked 3");
            }else if(a==3){
                i = 2;
                console.log("Clicked 4");
            }else if(a==4){
                i = 3;
                console.log("Clicked 5");
            }else if(a==5){
                i = 4;
                console.log("Clicked 6");
            }
        }
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
  });

  // RIGHT ARROW BTN
  const rightarrowBtn = carousel.querySelectorAll(".carousel__rightarrowBtn");
  rightarrowBtn.forEach((button, i) => {
      button.addEventListener("click", () => {
        items.forEach(item => item.classList.remove("carousel__item--selected"));
        buttons.forEach(button => button.classList.remove("carousel__button--selected"));
        leftarrowBtn.forEach(button => button.classList.remove("carousel__button--selected"));
        a = i;
        if(a>=0){
            if(a==0){
                i = 1;
                console.log("Clicked 1");
            }else if(a==1){
                i = 2;
                console.log("Clicked 2");
            }else if(a==2){
                i = 3;
                console.log("Clicked 3");
            }else if(a==3){
                i = 4;
                console.log("Clicked 4");
            }else if(a==4){
                i = 5;
                console.log("Clicked 5");
            }else if(a==5){
                i = 0;
                console.log("Clicked 6");
            }
        }
        //let a = i===0?1:1||1?2:2||2?3:3||3?4:4||4?5:5;
        
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
  });

  buttons[0].classList.add("carousel__leftarrowBtn--selected");
  buttons[0].classList.add("carousel__rightarrowBtn--selected");
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});