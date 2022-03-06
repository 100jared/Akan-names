//  Declare male and female names

var maleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function findDate(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("demo").style.color = "blue";
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var cc = (yy - 1) / 100 + 1;

    var bDay = new Date(mm + "/" + dd + "/" + yy);
    var wDay = bDay.getDay();


    var bornDay = parseInt(cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26*(mm + 1)) / 10 + dd) % 7;
    
    if(document.getElementById("gender").checked){
        var gender = "male";
    }else {
        var gender = "female";
    }

    // form validation
     if (dd <=0 || dd=="" || dd > 31){
        alert("invalid Date");
    }
     else if (mm <= 0 || mm > 12||mm==""|| mm == 2 && dd>29){
        alert("invalid Month");
    }else if (year <= 0 || year > 2022){
        alert("invalid year");
    }
    
     else if (Math.round(bornDay) == 1 && gender === "male"){
        document.getElementById("demo").innerHTML = 
        "Born on "+ days[wDay] + " Your akan male name is: " + maleName[1];
    }
    else if (Math.round(bornDay) == 2 && gender === "male"){
        document.getElementById("demo").innerHTML = 
        "Born on "  + days[wDay] + " Your akan male name is: " + maleName[2];
    }
    else if (Math.round(bornDay) == 3 && gender === "male"){
        document.getElementById("demo").innerHTML = 
        "Born on " + days[wDay] + " Your akan male name is: " + maleName[3];
    }
    else if (Math.round(bornDay) == 4 && gender === "male"){
        document.getElementById("demo").innerHTML = 
        "Born on " + days[wDay] + " Your akan male name is: " + maleName[4];
    }
    else if (Math.round(bornDay) == 5 && gender === "male"){
        document.getElementById("demo").innerHTML = 
        "Born on " + days[wDay] + " Your akan male name is: " + maleName[5];
    }
    else if (Math.round(bornDay) == 6 && gender === "male"){
        document.getElementById("demo").innerHTML = 
        "Born on " + days[wDay] +  " Your akan male name is: " + maleName[6];
    }
    else if (Math.round(bornDay) == 0 && gender === "male"){
        document.getElementById("demo").innerHTML = 
        "Born on "  + days[wDay] +  " Your akan male name is: " + maleName[0];
    }
    else if (Math.round(bornDay) == 1 && gender === "female"){
        document.getElementById("demo").innerHTML = 
        "Born on " + days[wDay] +  " Your akan female name is: " + maleName[1];
    }
    else if (Math.round(bornDay) == 2 && gender === "female"){
        document.getElementById("demo").innerHTML = 
        "Born on " + days[wDay] + " Your akan female name is: " + femaleName[2];
    }
    else if (Math.round(bornDay) == 3&& gender === "female"){
        document.getElementById("demo").innerHTML = 
        "Born on " + days[wDay] +  " Your akan female name is: " + femaleName[3];
    }
    else if (Math.round(bornDay) == 4 && gender === "female"){
        document.getElementById("demo").innerHTML = 
        "Born on "  + days[wDay] +  " Your akan female name is: " + femaleName[4];
    }
    else if (Math.round(bornDay) == 5 && gender === "female"){
        document.getElementById("demo").innerHTML = 
        "Born on " + days[wDay] + " Your akan female name is: " + femaleName[5];
    }
    else if (Math.round(bornDay) == 6 && gender === "female"){
        document.getElementById("demo").innerHTML = 
        "Born on "  + days[wDay] +  " Your akan female name is: " + femaleName[6];
    }
    else if (Math.round(bornDay) == 0 && gender === "female"){
        document.getElementById("demo").innerHTML = 
        "Born on "  + days[wDay] + " Your akan female name is: " + femaleName[0];
    }
    else{
        alert("inputs required")
    }

}


