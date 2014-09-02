startModule.factory('Chat',function($firebase,purr){

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

            //Daten per Service verfügbar machen
            this.messages = messages;

            //Promise zurückliefern um resolve im Router zu ermöglichen
            return messages.$loaded();
        },

        postMessage: function(msg){

            if(!msg.value){
                purr.error('Leere Nachrichten können nicht gesendet werden.');
                return;
            }

            this.messages.$add(msg);
        }

    }

});