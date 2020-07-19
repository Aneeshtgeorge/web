$(document).ready(function(){
    $("#signup").validate({
        rules:{
                bb:{
                    required:true,
                    minlength:4,
                    maxlength:9
                },
                ss:{
                    required:true,
                    minlength:4,
                    maxlength:9
                },
                email:
                {
                    required:true,
                    email:true 
            
                },
                pass:
                {
                    required:true,
                    minlength:4,
                    maxlength:7
                },
                day:
                {
                    required:true,
                },
                month:
                {
                    required:true,
                },
                year:
                {
                    required:true,
                }


            },
            messages:{
            day:"enter day"
            }

        
        
        })
    
    
})