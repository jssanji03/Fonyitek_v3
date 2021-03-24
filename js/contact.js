
//### datepicker Control ####///

$(function () { 
  $('input[name="datetimespick"]').daterangepicker({
    timePicker: true,
    singleDatePicker: true,
    // startDate: moment().startOf('hour'),
    // endDate: moment().startOf('hour').add(32, 'hour'),
    locale: {
      format: 'YYYY/MM/DD hh:mm A'
    }
  });
});

$( function() {
    $( "#datepicker" ).datepicker();
});
  

    //宣告預設表單內容為空 （你想要的話也可以加東西）
    var initSubject='',initBody='';
 
    //按下傳送按鈕後執行
    function submitHandler(){
        var to = "fonyitek@fonyitek.com";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
        var name = userName.value;//讀取ID為 nameTextuser 物件中的值
        var email = useremail.value;
        var tel = userMobile.value;
        var support = userSupport.value;
        var subject = companyName.value;
//把user填的資料都塞到 mail body 中
        var body = ""+bodyText.value+'%0A%0A%0A';//%0A是換行 換了三行
            body += "公司名稱："+companyName.value+'%0A';
            body += "產業別："+companyItem.value+'%0A';
            body += "姓名："+name+'%0A';
            body += "職業："+support+'%0A';
            body += "Email："+email+'%0A';
            body += "Tel："+tel+'%0A';
            body += "預計導入時間："+timepick.value;
//傳送的主要程式碼
        mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
        mailTo.click();
    }
//在body onload
    function init(){
        companyName.value=initSubject;
        toText.value=initTo;
        bodyText.value=initBody;
    }
