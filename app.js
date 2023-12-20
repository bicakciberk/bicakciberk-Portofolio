const motivationQuote = [
  [
    {
      id: 1,
      header: "'Happiness is not by chance but by choice.'",
    },
    {
      id: 2,
      header: "'Never give up!'",
    },
    {
      id: 3,
      header: "'Friends are the family we choose.'",
    },
    {
      id: 4,
      header: "'Just keep swimming.'",
    },
    {
      id: 5,
      header: "'Success is falling nine times and getting up ten.'",
    },
    {
      id: 6,
      header: "'Be the change that you wish to see in the world.'",
    },
    {
      id: 7,
      header: "'Happiness is not by chance but by choice.'",
    },
    {
      id: 8,
      header: "Just breathe deeply",
    },
    {
      id: 9,
      header: "Smile, always smile",
    },
    {
      id: 10,
      header: "Work hard, play harder",
    },
    {
      id: 11,
      header: "Simply be yourself",
    },
    {
      id: 12,
      header: "Stay positive, always",
    },
    {
      id: 13,
      header: "Embrace the journey",
    },
    {
      id: 14,
      header: "Try something new",
    },
    {
      id: 15,
      header: "Wake your dreams",
    },
    {
      id: 16,
      header: "Life won’t wait",
    },
    {
      id: 17,
      header: "Believe in yourself",
    },
    {
      id: 18,
      header: "Passion, strength, fire",
    },
  ],
];

function getMotivation() {
  const motivation = document.querySelector("#motivation");
  let random = Math.floor(Math.random() * 20.1);

  motivationQuote.forEach((data) => {
    motivation.textContent = data[random].header;
  });
  console.log(random);
}
getMotivation();
