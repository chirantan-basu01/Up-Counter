var countInterval;

function startCounter() {
  var number = parseInt(document.getElementById("number").value);

  if (isNaN(number)) {
    alert("Please enter a number");
    clearInterval(countInterval); // This is important for the condition when a counter is running and you entered a wrong input for a new counter
    return;
  }
  if (number < 1 || number > 9) {
    alert("Range out of bounds");
    clearInterval(countInterval);
    return;
  }

  var currentNo = document.querySelector(".counter .current");
  var nextNo = document.querySelector(".counter .next");
  var count = 0;

  // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
  resetNumbers(currentNo, nextNo);

  // Clears the previous interval that was running
  clearInterval(countInterval);

  countInterval = setInterval(function () {
    if (count === number) {
      clearInterval(countInterval);
      alert("Counter has stopped");
      return;
    }
    increaseCount(currentNo, nextNo);
    count++;
  }, 1000);
}

function resetNumbers(currentNo, nextNo, end) {
  currentNo.innerText = 0;
  nextNo.innerText = 1;
}

function increaseCount(currentNo, nextNo) {
  nextNo.classList.add("animate");

  setTimeout(function () {
    currentNo.innerText = nextNo.innerText;
    nextNo.classList.remove("animate");
    nextNo.innerText = parseInt(nextNo.innerText) + 1;
  }, 500);
}

particlesJS(
  "particles-js",
  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#44c025",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        // image: {
        //   src: "img/github.svg",
        //   width: 100,
        //   height: 100,
        // },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 10,
        random: true,
        anim: {
          enable: false,
          speed: 80,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: "#ffffff",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 12,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 800,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 800,
          size: 80,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  },
  function () {
    console.log("callback - particles.js config loaded");
  }
);
