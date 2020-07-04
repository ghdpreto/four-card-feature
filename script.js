const sectionCards = document.querySelector(".c-card");

const lMain = document.querySelector(".l-main");

console.log(sectionCards);

const infos = [
  {
    title: "Team Builder",
    text:
      "Scans our talent network to create the optimal team for your project",
    img: "./images/icon-team-builder.svg",
    color: "hsl(0, 78%, 62%)",
  },
  {
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality",
    img: "./images/icon-karma.svg",
    color: "hsl(34, 97%, 64%)",
  },
  {
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates",
    img: "./images/icon-calculator.svg",
    color: "hsl(212, 86%, 64%)",
  },
];

/* Copia o card base e cria conforme os dados da base */
infos.map((info) => {
  const cardClone = sectionCards.cloneNode(true);

  cardClone.style.borderTopColor = info.color;
  cardClone.querySelector(".c-card__content__title").innerHTML = info.title;
  cardClone.querySelector(".c-card__content__text").innerHTML = info.text;
  cardClone.querySelector(".c-card__content__img").src = info.img;

  lMain.appendChild(cardClone);
  console.log(cardClone);
});
