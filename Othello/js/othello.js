var Othello = function(){

    this.button_id = 'othello';

    var board = '[code]┌───┬───┬───┬───┬───┬───┬───┬───┐\n│   │   │   │   │   │   │   │   │\n├───┼───┼───┼───┼───┼───┼───┼───┤\n│   │   │   │   │   │   │   │   │\n├───┼───┼───┼───┼───┼───┼───┼───┤\n│   │   │   │   │   │   │   │   │\n├───┼───┼───┼───┼───┼───┼───┼───┤\n│   │   │   │   │   │   │   │   │\n├───┼───┼───┼───┼───┼───┼───┼───┤\n│   │   │   │   │   │   │   │   │\n├───┼───┼───┼───┼───┼───┼───┼───┤\n│   │   │   │   │   │   │   │   │\n├───┼───┼───┼───┼───┼───┼───┼───┤\n│   │   │   │   │   │   │   │   │\n├───┼───┼───┼───┼───┼───┼───┼───┤\n│   │   │   │   │   │   │   │   │\n└───┴───┴───┴───┴───┴───┴───┴───┘[/code]';

    this.start = function(){
        this.insertTextArea(board);
        $("#_sendButton").trigger('click');
    };

    this.insertTextArea = function(value){
        $("#_chatText").val(value);
    };
};


$(document).ready(function(){
    var othello = new Othello();

    var othello_button_li = '<li id='+othello.button_id+' role="button" class="_showDescription icoFont" aria-label="チャットワークオセロ" style="font-size:13px;">[オセロ]</li>';
    $('#_chatSendTool').append(othello_button_li);

    $("#"+othello.button_id).on('click', function() {
        othello.start();
    });
});