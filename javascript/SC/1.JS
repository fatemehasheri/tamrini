const square={
    width: 12,
    height: 20,
    area: function() {
        return this.height*this.width
    },
    centerpoint: function() {
        return ["x: ",this.width/2,'y: ',this.height/2]
    } 
}
console.log("area: ",square.area(),square.centerpoint())
