const pattern=[];
var row=8,col=11;
var star=(Math.floor(row/2))+1;
var l=star,s=star;
var pat="";
for(let i=1;i<=(row/2)+1;i++)
{
    for(var j=1;j<=col;j++)
    {
        if( j === star)
        {
        pat+="* ";
        if(i!=1 && i!=9)
        {
            star=i+s-1;
            // console.log(star)
        }
        }
        else
        pat+="  ";
       
    }
    // pat+="\n";
    pattern.push(pat)
    pat="";
    l=s-i;
    star=l;
    } 
    pattern.forEach((x) => console.log(x));
    var rev = pattern.reverse();
   

    for (var i = 1; i < rev.length; i++)
     {
        console.log(rev[i]); 
    }
    // console.log(pattern)

    // let text = "<ul>";
    // pattern.forEach(myFunction);
    // text += "</ul>";
    // document.getElementById("demo").innerHTML = text;
    
    // function myFunction(value) {
    //   text += "<li>" + value + "</li>";
    // } 
  