// $(document).ready(function(){
//     var $pubnub = new PubNub({
//         publishKey : 'demo',
//         subscribeKey : 'demo'
//     })
    
//     var article_id = "comments-" + window.location.pathname.split("/")[2];
//     console.log(article_id);

//     $pubnub.subscribe({
//         channels: [article_id] 
//     });

//     $pubnub.addListener({
//         message: function(message) {
//             console.log(message.message["comment"]);
//             $("#comments").append("<div class=\"comment\"><p>" + message.message["comment"] + "</p></div>")
//         }
//     })

//     $("#new_comment").bind("ajax:complete", function(event,xhr,status){
//      $('#comment_content').val('');
//     });

//     $( window ).unload(function() {
//         alert("unloaded");
//     });

// });