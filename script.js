var arr = [[1,2,3],[4,5,6],[7,8,9]];

function fun()
{
   
   var new_arr = [];
   
   for(var i=0;i<3;i++)
   {
      for(var j=0;j<3;j++)
      {
         new_arr[i] = [];
      }
   }
   
   for(var i=0;i<3;i++)
   {
      for(var j=0;j<3;j++)
      {
         new_arr[i][j]=arr[i][j];
      }
   }

   arr[2][0] = new_arr[2][1];
   arr[2][1] = new_arr[2][2];
   arr[2][2] = new_arr[1][2];
   arr[1][2] = new_arr[0][2];
   arr[0][2] = new_arr[0][1];
   arr[0][1] = new_arr[0][0];
   arr[0][0] = new_arr[1][0];
   arr[1][0] = new_arr[2][0];

   document.getElementById("button1").innerHTML=arr[0][0];
   document.getElementById("button2").innerHTML=arr[0][1];
   document.getElementById("button3").innerHTML=arr[0][2];
   document.getElementById("button4").innerHTML=arr[1][0];
   document.getElementById("button6").innerHTML=arr[1][2];
   document.getElementById("button7").innerHTML=arr[2][0];
   document.getElementById("button8").innerHTML=arr[2][1];
   document.getElementById("button9").innerHTML=arr[2][2];
}