


document.getElementById("myButton").onclick = function() {
    var names =[name1, name2, name3, name4];
    var rand = Math.floor(Math.random() * names.length);
     name1 = document.getElementById("name1").value;
     name2 = document.getElementById("name2").value;
     name3 = document.getElementById("name3").value;
     name4 = document.getElementById("name4").value;
    
    document.getElementById("cıktı").innerHTML = names[rand].value;    
    // sonuc = sonuc + 1
    console.log(name1);
    console.log(name2);
    console.log(name3);
    console.log(name4);
    console.log(rand);

 }  
 