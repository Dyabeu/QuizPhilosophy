(function(){
  // var app = angular.module('philosophySentence',[]); this line will create and exchange already exsist module becouse of empty array added at the end of expression
  // app.factory('quizMetrics', QuizMetrics);

  //Attaching controller to module and module to this file
  angular
    .module('philosophySentence')
    .factory('quizMetrics', QuizMetrics);

    //Attaching factory services  that contains data and markup
    QuizMetrics.$inject = ['DataService'];

  function QuizMetrics(DataService){//Passing in Object from DataService

    var quizObject = {
      quizActive: false,
      quizResultsActivate: false,
      changeState: changeState,
      correctAnswers: [],
      quizQuestionSave: quizQuestionSave,
      numCorrectAnswers: 0
    };

    return quizObject;// Object returned to other controllers with  data
    //Function to switch current state of site(list, quiz, results)
    function changeState(stateType, state){
      switch (stateType) {
        case "quizActivate":
            quizObject.quizActive = state;
          break;
        case "quizResultsActivate":
            quizObject.quizResultsActivate = state;
          break;
        default:
        return false;
      };
    };
    //This function is checking if playerAnswer is true or false
    function quizQuestionSave(){
      quizObject.correctAnswers = DataService.corectAnswers;
      for(i = 0; i<DataService.quizQuestionsData.length; i++){
        if(DataService.quizQuestionsData[i].playerAnswer === quizObject.correctAnswers[i]){
          DataService.quizQuestionsData[i].goodAnswer = true;
          quizObject.numCorrectAnswers++;//Increment correct answers for results
        }else {
          DataService.quizQuestionsData[i].goodAnswer = false;
        };
      };
    };
  };
})();
