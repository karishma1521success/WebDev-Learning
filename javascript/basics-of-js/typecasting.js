/*
Type casting in js 	Whenever we have one of the operands is string b/w the concatenation operator(+) it will return a string																								
	ex.    'abc'   + "abc"   == abcabc (because both are the strings so it will return string)																								
	    2.   20 + 'abc'   == 20abc (abc is string so it will return string value)																								
	But whenver it do not have one of the Operands as string  then + operator behave like a addition operator																								
	1.    true + 20  ==  21 ( As we can clearly see there is no string as operand so it will do arithmetic operation) so it will give return integer																								
	2.   true + true = 2 ( both are the boolean operand so + operator will behave as additon operator (it will convert boolean into the integer)																								
	false has value of 0 and true has value of 1																								
	3. 1.2 + 1.2 == 2.4 																								
																									
Type casting rule and method																									
																									
ANY DATA TYPE TO BOOLEAN 																									
"1. Boolean(number)  

(number  to boolean)
"	"It is a constructor method to change the number into the boolean  
1. Number 0 will be treated as a boolean of false  and the remaining number (either positive or negative will be treated as true)
EX.      Boolean(0) ----> false          Boolean(1) = true         Boolean(-1) == true      Boolean(NaN) == false"																								
																									
"2.  Boolean(String)

[ String to boolean ] "	"It is a constructor method to change the number into the boolean  
1. Number 0 will be treated as a boolean of false  and the remaining number (either positive or negative will be treated as true)
EX.      Boolean(0) ----> false          Boolean(1) = true         Boolean(-1) == true"																								
																									
3. Boolean(undefined)	Boolean(undefined) == false																								
																									
																									
ANY DATATYPE TO STRING																									
"1. String(number)  
(number to String)"	"It is a String constructor which will convert a number to the String
ex.     String(2) --   '2'       String(100) -- '100'        String(NaN) == 'NaN'        String(-23) -- '-23'  "																								
																									
2. String(boolean)	String(true) -- 'true'        String(false) --- 'false'																								
																									
3. String(undefined)	String(undefined)   -- 'undefined'																								
																									
ANY DATATYPE TO NUMBER																									
1. Number(boolean)	Number(true) = 1    Number(false) = 0																								
2. Number(String)	"Number(""10"") = 10     Number(""a"") = NaN     Number(""abc"") = NaN    (means if we have number string then it will convert into number otherwise NaN
 parseInt is a method to convert STring into the number"																								
3. Number(undefined)	Number(undefined)  = NaN																								
																									
																									
																									
Data Types in js	1. undefined-- it has only one value which is undefined itself     (whenever any variable is unassigned it will give undefined value)   	ex.  let a:                   undefined																							
	"2. number (NaN) -- Number consists of a float, double and integer   (NaN is also a type of number that occurs due to some operation that 
happens with a different datatype ex.  ( ""abc"" /10  == NaN   , similarly   NaN/10 = NaN    and ""abc"" > 10 (gives false ) because  NaN > 10 = NaN
          ""ABC"" / ""ABC"" == NaN (because / operator will work for numbers only so it can't do division it will return NaN ) 
    "	"NaN == NaN    -->    false 
Because it might come from 
different equations
(""A""/10) == (""B""/10) --  NaN == NaN "																							
	3. string																								
	4. boolean -- it has two values which are true and false.
*/																								