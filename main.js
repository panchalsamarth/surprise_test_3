function send()
{
number_1 = document.getElementById("word_1").value;
number_2 = document.getElementById("word_2").value;
actual_answer = parseInt(number_1) * parseInt(number_2);
question_number = "<>" + number_1 + "X" + number_2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
question_number = "<h4>" + number_1 + "X" + number_2 + "</h4>";
check_button = "<br><br><button class = btn btn-info onclick='check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("word_1").vlaue = "";
document.getElementById("word_2").vlaue = "";
}

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer)
    {
        update_player_1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_player_1_score;
    }
    else
    {
        update_player_2_score = player2_socre + 1;
        document.getElementById("player2_score").innerHTML = update_player_2_score
    }

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }
}