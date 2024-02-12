import "./style.css";

const menuBurgers = document.querySelectorAll("#menuBurger");

menuBurgers.forEach((menuBurger) => {
  menuBurger.addEventListener("click", () => {
    const sliderBars = document.querySelectorAll("#sliderBar");
    sliderBars.forEach((sliderBar) => {
      sliderBar.classList.toggle("hidden");
    });
  });
});

const tabsArray = Array.from(document.querySelectorAll("#select-tab"));

const contentArray = Array.from(document.querySelectorAll("#select-content"));

tabsArray.forEach((tab) => {
  tab.addEventListener("click", () => {
    //elegir el elemento
    const target = tab;
    //loopear sobre todos los elementos y quitarle el fondo activo
    tabsArray.forEach((t) => {
      t.classList.remove("bg-red-600");
      t.classList.remove("text-white");
    });
    //
    const currentTab = tabsArray.indexOf(target);

    contentArray.forEach((content) => {
      if (contentArray.indexOf(content) === currentTab) {
        content.classList.remove("hidden");
      } else if (contentArray.indexOf(content) !== currentTab) {
        content.classList.add("hidden");
      }
    });

    target.classList.add("bg-red-600");
    target.classList.add("text-white");
  });
});
