var name1:string = "John"; 
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+name1) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)


var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(str2)
console.log(+str+2)



var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():number { 
      var local_num = 14;    //local variable
      console.log(local_num);
      return local_num; 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 

var loc= obj.storeNum();
console.log("Global num: "+loc)



function disp_details(id:number,name:string,mail_id?:string) { 
   console.log("ID:", id); 
   console.log("Name",name); 
   
   if(mail_id!=undefined)  
   console.log("Email Id",mail_id); 
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");
