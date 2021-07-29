
/* 홈페이지 팝업 모달창 */
 $(document).ready(function(){
      // alert(1);
      // $("#myModal").modal('show');
    });

     // 쿠키 가져오기
        var getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
            }
            return "";
        }

        // 24시간 기준 쿠키 설정하기  
        var setCookie = function (cname, cvalue, exdays) {
            var todayDate = new Date();
            todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
            var expires = "expires=" + todayDate.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }

        var couponClose = function(){
            if($("input[name='chkbox']").is(":checked") == true){
                setCookie("close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
            }
            $("#myModal").modal('hide');
        }
        
        $(document).ready(function(){
            var cookiedata = document.cookie;
            console.log(cookiedata);
            if(cookiedata.indexOf("close=Y")<0){
                $("#myModal").modal('show');
            }else{
                $("#myModal").modal('hide');
            }
            $(".btnClose").click(function(){
                couponClose();
            });
        });