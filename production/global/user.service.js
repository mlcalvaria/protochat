globalModule.service('User',function(){

    var name;

    this.setName = function(newName){
        name = newName;
    };

    this.getName = function(){
        return name;
    };

});