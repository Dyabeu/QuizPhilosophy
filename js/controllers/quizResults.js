(function(){
  //Controller signed to angular module
  //Controller for Results after quiz
  angular
    .module('philosophySentence')
    .controller('quizResult',QuizResultsCtrl);

    //Injection of services
    QuizResultsCtrl.$inject = ['DataService','quizMetrics']

    function QuizResultsCtrl(DataService, quizMetrics){
      var thisBind = this;
      // ThisBind binds specific to controller. It allow me using it
      thisBind.quizMetrics = quizMetrics; //reference to the quizMetrics facotry
      thisBind.dataService = DataService; //reference to the DataService facotry
      thisBind.activeQuestion = 0;  //Current question number
      thisBind.getAnswerClass = getAnswerClass; //function below
      thisBind.setActiveQuestion = setActiveQuestion;
      thisBind.percentQuizResult = percentQuizResult;
      thisBind.resultsReset = resultsReset;
      thisBind.resultsSave = resultsSave;
      thisBind.totalNumAnswers = DataService.quizQuestionsData.length;//total number of questions

      //Function that returns class to ng-class - changing background-color of your answer and correct answer if its correctly or not
      function getAnswerClass(index){
        if(index === thisBind.quizMetrics.correctAnswers[thisBind.activeQuestion]){
          return 'bg-success';
        }else if(index === thisBind.dataService.quizQuestionsData[thisBind.activeQuestion].playerAnswer){
          return 'bg-danger';
        };
      };

      //Set active question by passing $index of specific button. When specific button in results buttons section is clicked it show up question i want
      function setActiveQuestion(index){
        thisBind.activeQuestion = index;
      };
      //This funcion returns percent of quiz result. It shows up on final stage of the quiz
      function percentQuizResult(){
        return thisBind.quizMetrics.numCorrectAnswers/thisBind.dataService.quizQuestionsData.length * 100;
      };
      //Reset all data to previus value(before quiz was start).
      function resultsReset(){
        quizMetrics.numCorrectAnswers = 0

        for(i=0; i<DataService.quizQuestionsData.length; i++){
          DataService.quizQuestionsData[i].playerAnswer = null;
          DataService.quizQuestionsData[i].goodAnswer = null;
        };
        //Changing state to show up list of people again
        quizMetrics.changeState("quizActivate", false);
        quizMetrics.changeState("quizResultsActivate", false);
      };
      //Function saves number of good anwered question to show it on list below the quiz
      function resultsSave(correctAnswers, totalNumAnswers){
        var correctAnswersResult = correctAnswers;
        var totalNumAnswersResult = totalNumAnswers;
        var createdOn = Date.now(); // Create local date
        //Pushing this 3 values to array in dataService so ii can be shown on list
        thisBind.dataService.resultsData.push([correctAnswersResult, totalNumAnswersResult, createdOn]);
        limitResults();
      };
      //Function that limits number of saved results 
      function limitResults(){
        if(thisBind.dataService.resultsData.length > 4){
          thisBind.dataService.resultsData.shift();
        };
      };
    };
})();
