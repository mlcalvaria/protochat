globalModule.service('User',function(){

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

});