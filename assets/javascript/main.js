function review() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

        if (question1 === "Germany") {
            correct++;
        }

        if (question2 === "Luigi") {
            correct++;
        }

        if (question3 === "Video Killed the Radio Star") {
            correct++;
        }

    var messages = ["You're a Trivia Master!", "Not bad", "I know you can do better!"];
    var pictures = ["./assets/images/win.gif", "./assets/images/meh.gif", "./assets/images/lose.gif"];
    var scoreRanges;

        if (correct < 1) {
        scoreRanges = 2;
        }

        if (correct > 0 && correct < 3) {
        scoreRanges = 1;
        }

        if (correct > 2) {
        scoreRanges = 0;
        }

    document.getElementById("afterSubmit").style.visibility = "visible";

    document.getElementById("feedback").innerHTML = messages[scoreRanges];

    document.getElementById("questionsCorrect").innerHTML = "You got " + correct + " correct.";

    document.getElementById("picture").src = pictures[scoreRanges];
}
