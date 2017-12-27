(function(){
  //Attaching controller to module and module to this file
  angular
    .module('philosophySentence')
    .factory('DataService', DataService);

    //Function with dataObject
    function DataService(){
      var dataObject = {
        peopleData: peopleData,
        quizQuestionsData: quizQuestionsData,
        corectAnswers: corectAnswers,
        resultsData : resultsData
      };
      return dataObject;// Return object with data to other files
    };
    var resultsData = [];// Empty array with results saved by player
    var corectAnswers = [1, 0, 1, 2, 2];// Array with correct answers

    var quizQuestionsData = [
      {
        type:"text",// Type is used in angular directive ng-if  to show if answer is image or text. Bootstrap is changed in diffrent situation.
        question:"Where does Bruce Lee came from?",
        posibleAnswer:[
          {
            answer: "Poland"
          },{
            answer: "San Francisco"
          },{
            answer: "China Town"
          }
        ],
        playerAnswer: null,//$index  of specific answer  chosen by player
        goodAnswer: null// true or false
      },
      {
        type:"text",
        question:"What is Henry's Ford main buisness?",
        posibleAnswer:[
          {
            answer: "Cars"
          },{
            answer: "Sheeps ;]"
          },{
            answer: "Meat"
          }
        ],
        playerAnswer: null,
        goodAnswer: null
      },
      {
        type:"text",
        question:"Who were talking about camel in his sentence?",
        posibleAnswer:[
          {
            answer: "Bruce Lee"
          },{
            answer: "Fryderyk Nietzsche"
          },{
            answer: "Ralph W. Emerson"
          }
        ],
        playerAnswer: null,
        goodAnswer: null
      },
      {
        type:"text",
        question:"What was date of birth of the scary sentence guy??",
        posibleAnswer:[
          {
            answer: "27 listopada 1940"
          },{
            answer: "6 czerwca 666"
          },{
            answer: "25 maja 1803"
          }
        ],
        playerAnswer: null,
        goodAnswer: null
      },
      {
        type:"image",
        question:"Witch one of them is that sentence? 'Knowledge is power!' ",
        posibleAnswer:[
          {
            answer: "images/BruceLee_1.jpg"
          },{
            answer: "images/HenryFord_1.jpg"
          },{
            answer: "images/Khadgar.jpg"
          }
        ],
        playerAnswer: null,
        goodAnswer: null
      }
    ];
    var peopleData= [{
      person: "Bruce Lee",
      cityOfOrigin: "San Francisco",
      birthDate: "27 listopada 1940",
      profession: ["aktor, ","mistrz sztuk walk pochodzenia chińskiego "],
      sentence: '"Aby przebyć tysiąc mil, trzeba zrobić pierwszy krok."',
      images: ["images/BruceLee_1.jpg"]
    },{
      person: "Henry Ford",
      cityOfOrigin :  "Dearborn, Michigan",
      birthDate: "30 lipca 1863",
      profession: ["przemysłowiec, ", "inżynier, ", "założyciel Ford Motor Company "],
      sentence: '"Nic nie jest szczególnie trudne do zrobienia, jeśli tylko rozłożyć to na etapy."',
      images: ["images/HenryFord_1.jpg"]
    },{
      person: "Fryderyk Nietzsche",
      cityOfOrigin :  "Röcken w okolicach Naumburga(brzmi fajnie)",
      birthDate: "15 października 1844",
      profession: ["poeta, ", "filozof "],
      sentence: '"Wielbłąd to zwierzę, na które ludzie nakładają wiele brzemion, w tym ciężar braku własnej autonomii. Wielbłąd (jak to wielbłąd) udaje się z całym tym ciężarem na pustynię. Czym jest ta pustynia? To miejsce gdzie jesteś sam, gdzie nie słychać tych wszystkich "powinieneś"."',
      images: ["images/FryderykNietzsche_1.jpg"]
    },{
      person: "Ralph W. Emerson",
      cityOfOrigin :  "Boston (od herbatki)",
      birthDate: "25 maja 1803",
      profession: ["poeta, ", "eseista "],
      sentence: '"To, czego boimy się najbardziej, jest z reguły tym, co właśnie powinniśmy zrobić."',
      images: ["images/RalphW.Emerson_1.jpg"]
    }];
})();
