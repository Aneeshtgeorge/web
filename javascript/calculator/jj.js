var a
function insert(val)
{
    if (val == '+')
    {
      a=c
      
      document.getElementById("display").value="" 
    }else
    { 
    document.getElementById("display").value+=val
    var c=document.getElementById("display").value
    }    
}


function clear1()
{
    document.getElementById("display").value=""
}
function equalp()
{
    if(val== "=")
    {

        document.getElementById("display").value=""
    }
    else{
    val=document.getElementById("display").value
    result=eval(val)
    document.getElementById("display").value=result
    }
}