(function(){
  //Attaching controller to module and module to this file
  angular
    .module('philosophySentence')
    .controller('listController',ListController);

  //Attaching factory services  that contains data and markup
  ListController.$inject = ['quizMetrics','DataService'];


  function ListController(quizMetrics, DataService){
    var thisBind = this;// ThisBind binds specific to controller. It allow me using it
    thisBind.activePeople = {};//This is smpty object who contains specific peron data. It is used in modal bootstrap view(popup window)
    thisBind.peopleData = DataService.peopleData;
    thisBind.changeActivePeople = changeActivePeople;
    thisBind.activateQuiz = activateQuiz;
    thisBind.search = "";//Empty string which will contain for ng-filter
    thisBind.quizMetrics = quizMetrics;

    //Function pushes peopleData(which was clicked) to modal bootstrap window
    function changeActivePeople(activePersonData){
      thisBind.activePeople = activePersonData;
    };

    //Function changes the state of service
    function activateQuiz(){
      quizMetrics.changeState("quizActivate", true);
    };
  };
})();
