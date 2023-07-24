var loader = document.getElementById("preload");
var main = document.getElementById("mainid");
main.style.display = "none";
window.addEventListener("load", () => {
  loader.style.display = "none";
  main.style.display = "unset";
});
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert(
      "😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁",
      "success"
    );
  });
}
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
function visible(x) {
  x.style.background = "#e23945";
  x.style.color = "white";
  x.style.border = "none";
}
function hide(x) {
  x.style.background = "transparent";
  x.style.border = "none";
  x.style.color = "transparent";
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show1");
    } else {
      entry.target.classList.remove("show1");
      entry.target.classList.remove("hidden1");
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show2");
    } else {
      entry.target.classList.remove("show2");
    }
  });
});

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show3");
    } else {
      entry.target.classList.remove("show3");
    }
  });
});

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show4");
    } else {
      entry.target.classList.remove("show4");
    }
  });
});

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show5");
    } else {
      entry.target.classList.remove("show5");
    }
  });
});

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show6");
    } else {
      entry.target.classList.remove("show6");
    }
  });
});

const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show7");
    } else {
      entry.target.classList.remove("show7");
    }
  });
});

const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show8");
    } else {
      entry.target.classList.remove("show8");
    }
  });
});

const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show9");
    } else {
      entry.target.classList.remove("show9");
    }
  });
});

const observer10 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show10");
    } else {
      entry.target.classList.remove("show10");
    }
  });
});

const observer11 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show11");
    } else {
      entry.target.classList.remove("show11");
    }
  });
});

const observer12 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show12");
    } else {
      entry.target.classList.remove("show12");
    }
  });
});

const observer13 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show13");
    } else {
      entry.target.classList.remove("show13");
    }
  });
});

const observer14 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show14");
    } else {
      entry.target.classList.remove("show14");
    }
  });
});

const observer15 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show15");
    } else {
      entry.target.classList.remove("show15");
    }
  });
});

const observer16 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show16");
    } else {
      entry.target.classList.remove("show16");
    }
  });
});

const observer17 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show17");
    } else {
      entry.target.classList.remove("show17");
    }
  });
});

const observer18 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show18");
    } else {
      entry.target.classList.remove("show18");
    }
  });
});

const observer19 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show19");
    } else {
      entry.target.classList.remove("show19");
    }
  });
});

const observer20 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show20");
    } else {
      entry.target.classList.remove("show20");
    }
  });
});

const observer21 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show21");
    } else {
      entry.target.classList.remove("show21");
    }
  });
});

const observer22 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show22");
    } else {
      entry.target.classList.remove("show22");
    }
  });
});

const observer23 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show23");
    } else {
      entry.target.classList.remove("show23");
    }
  });
});

const observer24 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show24");
    } else {
      entry.target.classList.remove("show24");
    }
  });
});

const observer25 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show25");
    } else {
      entry.target.classList.remove("show25");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements1 = document.querySelectorAll(".hidden1");
hiddenElements1.forEach((el) => observer1.observe(el));

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer2.observe(el));

const hiddenElements3 = document.querySelectorAll(".hidden3");
hiddenElements3.forEach((el) => observer3.observe(el));

const hiddenElements4 = document.querySelectorAll(".hidden4");
hiddenElements4.forEach((el) => observer4.observe(el));

const hiddenElements5 = document.querySelectorAll(".hidden5");
hiddenElements5.forEach((el) => observer5.observe(el));

const hiddenElements6 = document.querySelectorAll(".hidden6");
hiddenElements6.forEach((el) => observer6.observe(el));

const hiddenElements7 = document.querySelectorAll(".hidden7");
hiddenElements7.forEach((el) => observer7.observe(el));

const hiddenElements8 = document.querySelectorAll(".hidden8");
hiddenElements8.forEach((el) => observer8.observe(el));

const hiddenElements9 = document.querySelectorAll(".hidden9");
hiddenElements9.forEach((el) => observer9.observe(el));

const hiddenElements10 = document.querySelectorAll(".hidden10");
hiddenElements10.forEach((el) => observer10.observe(el));

const hiddenElements11 = document.querySelectorAll(".hidden11");
hiddenElements11.forEach((el) => observer11.observe(el));

const hiddenElements12 = document.querySelectorAll(".hidden12");
hiddenElements12.forEach((el) => observer12.observe(el));

const hiddenElements13 = document.querySelectorAll(".hidden13");
hiddenElements13.forEach((el) => observer13.observe(el));

const hiddenElements14 = document.querySelectorAll(".hidden14");
hiddenElements14.forEach((el) => observer14.observe(el));

const hiddenElements15 = document.querySelectorAll(".hidden15");
hiddenElements15.forEach((el) => observer15.observe(el));

const hiddenElements16 = document.querySelectorAll(".hidden16");
hiddenElements16.forEach((el) => observer16.observe(el));

const hiddenElements19 = document.querySelectorAll(".hidden19");
hiddenElements19.forEach((el) => observer19.observe(el));

const hiddenElements18 = document.querySelectorAll(".hidden18");
hiddenElements18.forEach((el) => observer18.observe(el));

const hiddenElements17 = document.querySelectorAll(".hidden17");
hiddenElements17.forEach((el) => observer17.observe(el));

const hiddenElements20 = document.querySelectorAll(".hidden20");
hiddenElements20.forEach((el) => observer20.observe(el));

const hiddenElements22 = document.querySelectorAll(".hidden22");
hiddenElements22.forEach((el) => observer22.observe(el));

const hiddenElements23 = document.querySelectorAll(".hidden23");
hiddenElements23.forEach((el) => observer23.observe(el));

const hiddenElements24 = document.querySelectorAll(".hidden24");
hiddenElements24.forEach((el) => observer24.observe(el));

const hiddenElements21 = document.querySelectorAll(".hidden21");
hiddenElements21.forEach((el) => observer21.observe(el));

const hiddenElements25 = document.querySelectorAll(".hidden25");
hiddenElements25.forEach((el) => observer25.observe(el));
