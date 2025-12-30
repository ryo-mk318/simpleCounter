(()=>{

   const $counter = document.getElementById("js-counter");

   const clickHolder = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    if($targetButton.textContent === "+1"){
        currentCount += 1;
    }else if($targetButton.textContent === "+10") {
        currentCount += 10;
    }else if($targetButton.textContent === "-1") {
        currentCount -= 1;
    }else if($targetButton.textContent === "-10") {
        currentCount -= 10;
    }

      $counter.textContent = currentCount;
      if(currentCount === 100) {
      alert("Excellent! Counter is 100");
       }else if (currentCount === -100) {
      alert("Noooo! Counter is -100");
       }
    };


 for(let index = 0; index < document.getElementsByClassName('js-button').length; index++){
    document.getElementsByClassName('js-button')[index].addEventListener('click', (e)=> clickHolder(e));
    }


})();
  