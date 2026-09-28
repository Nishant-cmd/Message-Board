const cleanDate = function () {
  const date = new Date();
  const cleanDateTime = date.toLocaleString("en-US", {
    timeZoneName: undefined,
  });
  return cleanDateTime;
};

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: cleanDate(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: cleanDate(),
  },
];

module.exports = { messages, cleanDate };
