$(document).ready(function(){
    let expireArray = $('[expire]');
    for(let i=0,j=expireArray.length;i<j;i++){
        let elementExpireDate = new Date($($('[expire]')[i]).attr('expire')).getTime();
        let timeNow = new Date().getTime();
        if(elementExpireDate < timeNow){
            $($('[expire]')[i]).css('text-decoration','line-through');
        }
    }
    // var dateString = $('[expire]').attr('expire');
    // var timestamp = new Date(dateString).getTime();
    // var timeNow = new Date().getTime();
    // if(timestamp < timeNow){
    //     $('.expire-strike').css('text-decoration','line-through');
    // }

    // $('.expire-strike').css('text-decoration','line-through');
});