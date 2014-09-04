startModule.factory('Chat',function($firebase,$sce,purr,MessageService){

    var ref = $firebase (new Firebase (FIREBASE + '/messages'));

    /**
     * Daten als Firebase Array laden
     *
     * @see https://www.firebase.com/docs/web/libraries/angular/api.html
     */
    var messages = ref.$asArray();

    return{

        messages: [],

        loadMessages: function(){

            var self = this;

            messages.$loaded()
                .then(function(){

                    self.setUpWatcher();

                    messages.forEach(function(item){
                        var msg = angular.extend(item,{
                            value: $sce.trustAsHtml(item.value)

                        });
                        self.messages.push(msg);
                    });
                });

            //Promise zurückliefern um resolve im Router zu ermöglichen
            return messages.$loaded();
        },

        postMessage: function(msg){

            if(!msg){
                purr.error('Leere Nachrichten können nicht gesendet werden.');
                return;
            }

            msg = MessageService.parseMessage(MessageService.createMessage(msg));

            messages.$add(msg);
        },

        setUpWatcher: function(){

            var self = this;

            messages.$watch(function(item){

                switch(item.event){

                    case 'child_added':

                        var newMessage = messages.$getRecord(item.key);

                        var msg = angular.extend(newMessage,{
                            value: $sce.trustAsHtml(newMessage.value)

                        });

                        self.messages.push(msg);

                        break;

                }




            });
        }

    }

});