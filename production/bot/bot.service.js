botModule.service('Bot',function(Chat){

    var iRobot = this;

    this.name = '<span class="fa fa-bug"></span>';

    this.postMessage = function(content){
        Chat.postMessage({
            value: content,
            poster: iRobot.name
        });
    };

});