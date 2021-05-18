// function sayHello(name = "World") {
//   return "Hello " + name;
// }

const sayHello = (name = "World") => "Hello " + name;

// function createSession(speaker) {
//   return {
//     title: "Modern JS!",
//     speaker: speaker,
//   };
// }

const createSession = (speaker) => {
  return { title: "ModernJS!", speaker: speaker };
};

// function multiplier(n) {
//   if (!n) n = 1;
//   return function (arg) {
//     return n * arg;
//   };
// }

const multiplier =
  (n = 1) =>
  (arg) =>
    n * arg;

export { sayHello, createSession, multiplier };
