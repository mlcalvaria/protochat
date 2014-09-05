globalModule.service('User',function($q){

    var name;

    this.setName = function(newName){

        var oldName = name;

        name = newName;
        localStorage['username'] = name;
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
    };

    this.hasScrolled = false;


});