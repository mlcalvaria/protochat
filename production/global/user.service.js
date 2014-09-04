globalModule.service('User',function($q,purr){

    var name;

    this.setName = function(newName){
        name = newName;
        localStorage['username'] = name;
        purr.show("Neuer Nutzername: " + name);
    };

    this.getName = function(){

        if(localStorage['username']){
            name = localStorage['username'];
        }

        return name;
    };

    this.promptForName = function(){

        var defer = $q.defer();

        var name;

        // Wir müssen verhindern dass irgendein Idiot keinen Namen angibt
        while(!name){
            name = window.prompt('Benutzername, bitte?');
        }

        this.setName(name);

        defer.resolve();

        return defer.promise;
    }

});