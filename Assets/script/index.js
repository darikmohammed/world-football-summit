const menuBtn = document.querySelector(".mobile-menu");
const closeMenuBtn = document.querySelector(".close-mobile-menu");
const menuNav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".menu-container .mobile-menu");
const logoMobile = document.querySelector(".menu-container .logo-mobile");
const headerTag = document.querySelector("header");
const menuContainer = document.querySelector(".menu-container");
const featuredSpeakers = [
  {
    name: "Ronaldo Nazario",
    role: "Chairman - Real Valladolid C.F.",
    imageSource: "./Assets/image/Speakers/speaker_01.png",
    talk: "It’s an exclusive and very important event for the future development of football. The organisation, the content, the discussions, a spectacular event.",
  },
  {
    name: "Fatma Samoura",
    role: "Secretary General - FIFA",
    imageSource: "./Assets/image/Speakers/speaker_02.png",
    talk: "I value this event as excellent for people who work in football.",
  },
  {
    name: "Andrea Agnelli",
    role: " Chairman of Juventus and the European Club Association",
    imageSource: "./Assets/image/Speakers/speaker_03.png",
    talk: "The line-up of speakers WFS managed to put in place is the very first testimony of the quality of the event itself.",
  },
  {
    name: "Javier Tebas",
    role: "Presidente - LaLiga",
    imageSource: "./Assets/image/Speakers/speaker_04.png",
    talk: "A terrific success; these events are necessary to talk, debate and transmit new knowledge necessary to understand the football industry.",
  },
  {
    name: "Al Guido",
    role: "President - San Francisco 49ers & CEO - Elevate Sports Ventures",
    imageSource: "./Assets/image/Speakers/speaker_05.png",
    talk: "Such a professional atmosphere. You get to network with best of the best. ",
  },
  {
    name: "Luis Vicente",
    role: "Chairman - ApexCapital Board Advisor",
    imageSource: "./Assets/image/Speakers/speaker_06.png",
    talk: "Almost an all-star lineup, very international, from different areas of sports, different areas of the industry, different businesses within sports.",
  },
];

menuBtn.addEventListener("click", () => {
  menuNav.classList.add("mobile");
  hamburger.style.display = "none";
  logoMobile.style.display = "none";
  headerTag.style.backgroundColor = "transparent";
  menuContainer.style.margin = "0";
});

closeMenuBtn.addEventListener("click", () => {
  menuNav.classList.remove("mobile");
  hamburger.style.display = "block";
  logoMobile.style.display = "block";
  headerTag.style.backgroundColor = "#ffffff";
  menuContainer.style.margin = "1rem 2rem";
});

//dynamic speakers

for (let i = 0; i < featuredSpeakers.length; i++) {
  document.querySelector(".featured-speakers .speakers-card").innerHTML += `
    <div class="card">
    <img src="${featuredSpeakers[i].imageSource}" alt="${featuredSpeakers[i].name}" />
    <div class="description">
      <h3>${featuredSpeakers[i].name}</h3>
      <p class="role">${featuredSpeakers[i].role}</p>
      <img src="./Assets/image/icon/speaker_decoration.png" alt="underline" class="speaker-decoration" />
      <p class="small">
        ${featuredSpeakers[i].talk}
      </p>
    </div>
    `;
}
