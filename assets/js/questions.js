var questions = [
  {
    title: "Which operator returns true if the two compared values are not equal?",
    choices: ["<>", "==!", "~", "!=="],
    answer: "!==",
  },
  {
    title: "Which statement is the correct way to create a variable called rate and assign it the value 100?",
    choices: ["var rate = 100;", "var 100 = rate;", "100 = var rate;", "rate = 100;"],
    answer: "var rate = 100;",
  },
  {
    title: "How does a function create a closure?",
    choices: [
      "It reloads the document whenever the value changes",
      "It returns a reference to a variable in its parent scope",
      "It completes execution without returning",
      "It copies a local variable to the global scope",
    ],
    answer: " It returns a reference to a variable in its parent scope",
  },
  {
    title: "Which property references the DOM object that dispatched an event?",
    choices: ["self", "object", "target", "source"],
    answer: "target",
  },
  {
    title: "Which method converts JSON data to a JavaScript object?",
    choices: ["JSON.fromString()", "JSON.parse()", "JSON.toObject()", "JSON.stringify()"],
    answer: "JSON.parse()",
  },
  {
    title: "When would you use a conditional statement?",
    choices: [
      "When you want to reuse a set of statements multiple times",
      "When you want your code to choose between multiple options",
      "When you want to group data together",
      "When you want to loop through a group of statement",
    ],
    answer: "When you want your code to choose between multiple options",
  },
  {
    title: "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
    choices: ["Object.get()", "Object.loop()", "Object.each()", "Object.keys()"],
    answer: "Object.keys()",
  },
  {
    title: "How does the forEach() method differ from a for statement?",
    choices: [
      "forEach allows you to specify your own iterator, whereas for does not",
      "forEach can be used only with strings, whereas for can be used with additional data types",
      "forEach can be used only with an array, whereas for can be used with additional data types",
      "for loops can be nested; whereas forEach loops cannot",
    ],
    answer: "forEach can be used only with an array, whereas for can be used with additional data types",
  },
  {
    title: "Which expression evaluates to true?",
    choices: ["[3] == [3]", "3 == '3'", "3 != '3'", "3 === '3'"],
    answer: "3 == '3'",
  },
  {
    title: "Which method cancels event default behavior?",
    choices: ["cancel()", "stop()", "preventDefault()", "prevent()"],
    answer: "preventDefault()",
  },
  {
    title: "Which method do you use to attach one DOM node to another?",
    choices: ["attachNode()", "getNode()", "querySelector()", "appendChild()"],
    answer: "appendChild()",
  },
  {
    title:
      "If you attempt to call a value as a function but the value is not a function, what kind of error would you get?",
    choices: ["TypeError", "SystemError", "SyntaxError", "LogicError"],
    answer: "TypeError",
  },
  {
    title: "Which statement selects all img elements in the DOM tree?",
    choices: [
      "Document.querySelector('img')",
      "Document.querySelectorAll('<img>')",
      "Document.querySelectorAll('img')",
      "Document.querySelector('<img>')",
    ],
    answer: "Document.querySelectorAll('img')",
  },
  {
    title: "How would you add a data item named animal with a value of sloth to local storage for the current domain?",
    choices: [
      "LocalStorage.setItem('animal','sloth');",
      "document.localStorage.setItem('animal','sloth');",
      "localStorage.setItem({animal:'sloth'});",
      "localStorage.setItem('animal','sloth');",
    ],
    answer: "document.localStorage.setItem('animal','sloth');",
  },
  {
    title: "Which JavaScript loop ensures that at least a singular iteration will happen?",
    choices: ["do...while", "forEach", "while", "for"],
    answer: "do...while",
  },
];
