// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

// Display the current year in the footer
const fakeQuotesAPI = [
  {
    text: "Believe in yourself and all that you are.",
    author: "Christian D. Larson",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Never bend your head. Always hold it high. Look the world straight in the eye.",
    author: "Helen Keller",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
];

function fetchQuote() {
  // Simulate fetching data from a fake API
  const randomIndex = Math.floor(Math.random() * fakeQuotesAPI.length);
  const randomQuote = fakeQuotesAPI[randomIndex];

  // Update the quote and author in the HTML
  document.getElementById("quote").textContent = `"${randomQuote.text}"`;
  document.getElementById("author").textContent = `- ${randomQuote.author}`;
}

// Display a quote on page load
fetchQuote();

//dark mode And Light mode

function darkMode() {
  let element = document.body;
  // let content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  // content.innerText = "Dark Mode is ON";
}
function lightMode() {
  let element = document.body;
  // let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  // content.innerText = "Dark Mode is OFF";
}
