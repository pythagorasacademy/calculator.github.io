function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (q1=="143") {c++}
    if (q2=="20") {c++} 
    if (q3=="ara") {c++}
    if (q4=="625") {c++}
    if (q5=="24") {c++}
    if (q6=="25") {c++}
    if (q7=="MCXXI") {c++}
    if (q8=="59") {c++}
    quiz.style.display="none";
   
    if (c<=4) {
        result.textContent=`თქვენი შედეგია ${c}. არც ისე კარგია, გთხოვთ შეეცადოთ იმუშაოთ საკუთარ თავზე.`
    } else {
        result.textContent=`შენი შედეგია ${c}. გასაოცარია. შევინარჩუნოთ ის!.`
    }
}