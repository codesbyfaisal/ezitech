function textSlider() {
  let textSliderSpan = document.querySelector(".text-slider");

  let arr = ['Social Links', 'Marketing', 'Programming', 'Web Design'];
  let count = 0;

  function txtAnim() {
    if (count >= arr.length) {
      count = 0;
    }
    textSliderSpan.innerHTML = "";

    for (let i = 0; i < arr[count].length; i++) {
      let div = document.createElement("div");
      div.innerHTML = arr[count][i];

      if (div.innerHTML == " ") {
        div.innerHTML = "&nbsp";
      }
      div.classList.add("txt");
      div.classList.add("anim");
      div.style.animationDelay = i / 10 + "s";

      textSliderSpan.appendChild(div);
    }
    count++;
  }

  txtAnim();
  setInterval(txtAnim, 3000);
}

textSlider()

document.querySelector('.mobile-app .left').addEventListener('mousemove', (e) => {
  let x = e.clientX / 30; // Horizontal movement
  let y = e.clientY / 30; // Vertical movement

  document.querySelector('.mobile-app .left img').style.top = y + 'px';
  document.querySelector('.mobile-app .left img').style.left = x + 'px';

  document.querySelector('.mobile-app .left .background').style.top = (20 + y) + 'px';
  document.querySelector('.mobile-app .left .background').style.right = (20 + x) + 'px';
});
