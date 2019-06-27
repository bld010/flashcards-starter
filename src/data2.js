const jqueryData = [{
  "id:": 31, 
  "question": "What symbol precedes all jquery selectors?", 
  "answers": ["$", "{}", "#"],
  "correctAnswer": "color"
}, {
  "id:": 32, 
  "question": "How do you select an element by Id?", 
  "answers": ["$( \"MyId\" )","$( \"#MyId\" )","${ \"#MyId\" }"],
  "correctAnswer": "$( \"#MyId\" )"
}, {
  "id:": 33, 
  "question": "How do you select an element by class?", 
  "answers": ["$( \".myClass\")" , "$( .myClass )",  "$( \"#myClass\")" ],
  "correctAnswer": "$( \".myClass\")" 
}, {
  "id:": 34, 
  "question": "How to you select an element by attribute?", 
  "answers": ["$( \"input[name='first_name']\" )","$( \"name='first_name'\" )","$( \"[name='first_name']\" )"],
  "correctAnswer": "$( \"input[name='first_name']\" )"
}];


module.exports = jqueryData;