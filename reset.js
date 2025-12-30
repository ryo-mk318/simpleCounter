(()=>{
    const $counter = document.getElementById("js-counter");

    const clickHolder = () => {
        $counter.textContent =0;
    };

    document.getElementById("js-reset-button").addEventListener
    ("click", clickHolder);
})();