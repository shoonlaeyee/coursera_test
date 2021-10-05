(function(window) {
  var speakWord = "Hello";
  var helloSpeaker = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);

var helloSpeaker = {
    speakWord : "Hello ",
    speak : function(name) {
        console.log(this.speakWord + " " + name);
    } 
}