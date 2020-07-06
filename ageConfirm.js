$(document).ready(function(){
    var age={};
    
    // cookies are important for some reason 
    function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for( var i=0; i<ca.length; i++){
            var c=ca[i];
            while (c.charAt(0) == ' '){
                c=c.substring(1);
            }
            if(c.indexOf(name) == 0){
                return c.substring(name.length, c.length);
            }
            return "";
        }
        
    }

    if (getCookie('popupCookie') !='submited'){
        $("#overallModal").modal('show');
        ageVerification();
    }
    // Verification of the age once hit the submit button
    function ageVerification(){
        var month = 0;
        var year = 0;
        var day = 0;

        $("#confirmationBtn").on("click", function(){
            age['month'] = $("#selectMonth").val();
            age['year']=$("#selectYear").val();
            age['day']= $("#selectDay").val();
            console.log(age);
            compareDate();
        })

    }

    // compare the input date with compareDate 
    function compareDate(){
        if(age.month == 'none' || age.day == 'none' || age.year == 'none'){
            // Fade if error for all 
            $('#age-error').css('visibility','visible').hide().fadeIn('slow');

            //ideal is if any are invalid then redirect somewhere else

            //if month invalid then change background colour 
            if (age.month =='none'){
                $("#monthVerification").css('background', 'rgba(204,19,34,0.5)');
                //value changed then change the colour
                $("#monthVerifcation").on('change',function(){
                    if ($('#monthVerification').val () == 'none'){
                        $("#monthVerification").css('background', 'rgba(204,19,34,0.5');
                    } else {
                        $('#monthVerification').css('background', 'cornsilk');
                    }
                });

            }

            // if day invalid then change background colour
            if(age.day=='none'){
                $("dayVerification").css('background', 'rgba(204,19,34,0.5)');
                // value changed then change the colour
                $("dayVerification").on('change',function(){
                    if($("dayVerification").val ()=='none'){
                        $("dayVerification").css('background','rgba(204,19,34,0.5)');
                    } else{
                        $("dayVerification").css('background', 'cornsilk');
                    }
                });
            }

            //if year invalid then change background colour
            if(age.year=='none'){
                $("dyearVerification").css('background', 'rgba(204,19,34,0.5)');
                // value changed then change the colour
                $("yearVerification").on('change',function(){
                    if($("yearVerification").val ()=='none'){
                        $("yearVerification").css('background','rgba(204,19,34,0.5)');
                    } else{
                        $("yearVerification").css('background', 'cornsilk');
                    }
                });
            }
        } else{
            ageGood();
        }
    }

    function setCookies(cname,cvalue,exdays){
        var d= new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expiration= "expires="+ d.toUTCString();
        document.cookie=cname + "=" + cvalue + ";" + expiration + ";path=/";
    }

    function ageGood(){
        var limit= moment().subtract(21, 'years').calendar();
        var birth= age.month + " "+ age.day + " " + age.year;
        var ageGood= moment(birth, "MM DD YYYY").isBefore(limit, 'day');
        console.log(birth);
        console.log(limit);

        if (ageGood){
            setCookies('popupCookie', 'submited', 1);
            $('#overallModal').hide();
        } else{
            console.log("false");
        }
    }



})