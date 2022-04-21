const mongoose = require('mongoose');

const modifierConstructor = {
     getIncomplete: function(res,model){
        model.find({isComplete:false},function(err,data){if(err) res.send(err);res.send(data)});
    },
    getid:function(id){
        this.collection.findById(id,function(err,data){if(err) throw err;this.res.send(data)});
    },
    getall:function(){
        this.collection.find({},function(err,data){if(err) throw err;this.res.send(data)});
    },
    insertImages: function(id,images){
        this.collection.insertMany(images,
        function(err,data){if(err) 
        throw err;this.res.send(data)});
    },
    insertOneImage: function(id,image){
        this.collection.insert(image,
        function(err,data){
        if(err) throw err;this.res.send(data)});
    }

}




// modifierConstructor.prototype.getid = function(id){
//     this.collection.findById(id,function(err,data){if(err) throw err;this.res.send(data)});
// }
// modifierConstructor.prototype.getall = function(){
//     this.collection.find({},function(err,data){if(err) throw err;this.res.send(data)});
// }
// modifierConstructor.prototype.insertSingle = function(data){
//     this.collection.create(data,function(err,data){if(err) throw err;this.res.send(data)});
// }
// modifierConstructor.prototype.deletebYid = function(id){
//     this.collection.findByIdAndRemove(id,function(err,data){if(err) throw err;this.res.send("DELETE SUCCESSFULLY")});
// }
// modifierConstructor.prototype.updateByid = function(id,data){
//     this.collection.findByIdAndUpdate(id,data,function(err,data){if(err) throw err;this.res.send("UPDATE SUCCESSFULLY")});
// }

// modifierConstructor.prototype.MatchRegex = function(min = 0,max,district,region){
//     if(min && max && district && region){return { price:{$gte:min,$lte:max},district:district,region:region}
//     } else if(min && max && district){return {price:{$gte:min,$lte:max},district:district}
//     } else if(min && max && region){return {price:{$gte:min,$lte:max},region:region}
//     } else if(min && district && region){return {price:{ $gte:min},district:district,region:region}
//     } else if(min && district){ return { price:{$gte:min},district:district}
//     } else if(min && region){return { price:{$gte:min},region:region}
//     } else if(max && district && region){ return { price:{$lte:max},district:district,region:region}
//     } else if(max && district){return {price:{$lte:max},district:district}
//     } else if(max && region){return { price:{$lte:max},region:region}
//     } else if(district && region){ return { district:district,region:region}
//     } else if(district){ return { district:district}
//     } else if(region){ return { region:region}
//     } else if(min){ return { price:{ $gte:min}}               
//     } else if(max){ return { price:{ $lte:max}}   
//     } else {return {};}
// }


module.exports = modifierConstructor;
