$(function(){

    // $.ajax({
    //     type:"post",
    //     url:"http://dev01.nearsen.cn:9090/nearsen_enterprise/api/web/meeting/get",
    //     data:'{"sponsorId":"string"}',
    //     header:{"Access-Control-Allow-Origin":"*"},
    //     dataType:"json",
    //     contentType:"application/json",
    //     async:false,
    //     success:function(data){
    //
    //  	 console.log(data)
    //
    //
    //     },
    //     error:function(res){
    //         console.log(res)
    //     }
    // });
    $.ajax({
        url:'./assets/news.json',
        type:'POST',
        dataType:"json",
        contentType:"application/json",
        data:JSON.stringify({sponsorId:""}),
        crossDomain:true,
        async:false,
        cache:false,
        success:function(data){
             console.log(data.data.historyinMeetings)
            var historys=data.data.historyinMeetings
            var his = ""
            for(var i in historys){
               his += "<li><a>"+historys[i].title +"</a></li>"
            }
             $(".history").html(his)
        },
        error:function(data){

        }
    });


})