function submit(){
        
        var text=document.getElementById("mobileno").value;
        var fname=document.getElementById("firstname").value;
        var lname=document.getElementById("lastname").value;
        var regx=/^[6-9]\d{9}$/;
        
        if(regx.test(text))
        {
                document.getElementById("text1").innerHTML="Valid";
                document.getElementById("text1").style.visibility="visible";
                document.getElementById("text1").style.color="Green";

        }
        else{
                document.getElementById("text1").innerHTML="invalid";
                document.getElementById("text1").style.visibility="visible";
                document.getElementById("text1").style.color="red";
        }
        if((fname.length<=10) || (fname.length>=25)){
                document.getElementById("text2").innerHTML="Only between 10 and 20";
                document.getElementById("text2").style.visibility="visible";
                document.getElementById("text2").style.color="Red";
        }
        else{
                document.getElementById("text2").innerHTML="valid";
                document.getElementById("text2").style.visibility="visible";
                document.getElementById("text2").style.color="Green";
        }
        if((lname.length<=3) || (lname.length>=25)){
                document.getElementById("text3").innerHTML="Only between 3 and 20";
                document.getElementById("text3").style.visibility="visible";
                document.getElementById("text3").style.color="Red";
        }
        else{
                document.getElementById("text3").innerHTML="valid";
                document.getElementById("text3").style.visibility="visible";
                document.getElementById("text3").style.color="Green";
        }
        var dtToday = new Date();
        var month = dtToday.getMonth()+1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        var maxYear = year - 18;
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();

        var maxDate = maxYear + '-' + month + '-' + day;
        var minYear = year - 80;
        var minDate = minYear + '-' + month + '-' + day;
        alert(maxDate);
        document.querySelectorAll("txtDate").setAttribute("max",maxDate);

        document.querySelectorAll("txtDate").setAttribute("min",minDate);

       
}
function reset(){
        document.getElementById("mobileno").value=" ";
        document.getElementById("firstname").value=" ";
        document.getElementById("txtDate").value=" ";
        document.getElementById("area").value=" ";
        document.getElementById("browser").value=" ";
        document.getElementById("lastname").value=" ";
}