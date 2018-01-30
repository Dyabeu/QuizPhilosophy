
(function(){
// Different way to assaign file to module and add new controller to it(other semantic)
  var app = angular.module('philosophySentence');
  app.controller('quizCtrl', QuizCtrl);
  // angular
  //   .module('philosophySentence')
  //   .controller('quizCtrl', QuizCtrl);

  //Attaching factory services  that contains data and markup
  QuizCtrl.$inject = ['quizMetrics','DataService'];

  function QuizCtrl(quizMetrics, DataService){
    var thisBind = this;// ThisBind binds specific to controller. It allow me using it

    thisBind.quizMetrics = quizMetrics;//connects view with quizMetrics
    thisBind.dataService = DataService;//connects view with DataService
    thisBind.activeQuestion = 0; //current active question
    thisBind.questionAnswered = questionAnswered;
    thisBind.setActiveQuestion = setActiveQuestion;
    thisBind.answerSelected = answerSelected;
    thisBind.finalise = false;// Markup for filnalising quiz - if it is true then show confirm question
    thisBind.finaliseAnswers = finaliseAnswers;

    var numQuestionsAnswered = 0;
    //If function pass $index it sets current question to show up,
    // othervise function increment activeQuestion until next empty(null) playerAnswer
    function setActiveQuestion(index) {
      if(index === undefined){
        var breakOut = false;
        var quizLength = DataService.quizQuestionsData.length - 1;
        while(!breakOut){
          thisBind.activeQuestion = thisBind.activeQuestion < quizLength?++thisBind.activeQuestion:0;
            if(DataService.quizQuestionsData[thisBind.activeQuestion].playerAnswer === null){
              breakOut = true;
            }
        }
      }else {
          thisBind.activeQuestion = index;
      }
    };
    //This function holds requirements to the end of the quiz
    //If some question still dont have answer then setActiveQuestion() is triggered
    function questionAnswered(){

      var numActiveQuestions = DataService.quizQuestionsData.length;
      numQuestionsAnswered = 0;
      for(j=0; j<numActiveQuestions; j++){
        if(DataService.quizQuestionsData[j].playerAnswer !== null) {
          numQuestionsAnswered++;
          console.log(numQuestionsAnswered);
          if(numQuestionsAnswered >= numActiveQuestions){
            thisBind.finalise = true;
            return;
          };
        };
      };
      thisBind.setActiveQuestion();
    };

    //Function set answer selected by player
    function answerSelected(index){
      DataService.quizQuestionsData[thisBind.activeQuestion].playerAnswer = index;
    };

    // Function that changes state to results and reset rest of the important expressions
    function finaliseAnswers(){
      thisBind.finalise = false;
      thisBind.activeQuestion = 0;
      numQuestionsAnswered = 0;
      quizMetrics.quizQuestionSave();
      quizMetrics.changeState("quizActivate", false);
      quizMetrics.changeState("quizResultsActivate", true);
    };

  };
})();
