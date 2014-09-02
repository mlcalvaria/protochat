globalModule.service('User',function($q){

    var name;

    this.setName = function(newName){
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

        var name = window.prompt('Benutzername, bitte?');
        this.setName(name);

        defer.resolve();

        return defer.promise;
    }

});