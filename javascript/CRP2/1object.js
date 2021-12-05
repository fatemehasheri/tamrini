function valumeOfBox(obj) {
  //روش اول
  return obj.width * obj.length * obj.height;
}

console.log(valumeOfBox({ width: 2, length: 5, height: 1 }));

//...............................................................

/*const valumeOfBox={  //نکته داره function????
    width:"2",
    length:'5',
    height:'1',
    valume: function() {
        valumeOfBox.width*valumeOfBox.length*valumeOfBox.height
    }
}

console.log(valumeOfBox.valume())*/

//.....................................................................

/*const valumeOfBox={ روش دوم
    width:2,
    length:5,
    height:1,
}

function isvalume(valumeOfBOX){
    const valume=  valumeOfBOX.width*valumeOfBOX.length*valumeOfBOX.height
    console.log(valume)

}
isvalume(valumeOfBox)*/
