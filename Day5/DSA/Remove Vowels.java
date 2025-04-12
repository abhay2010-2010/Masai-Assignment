import java.util.*;

class Main {
    public static void main(String[] args) {
        String s="abhayi";
        String vowel="aeiou";
        HashSet<Character> st = new HashSet<>();
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
          if(ch!='a' && ch!='e' && ch!='i'&&ch !='o' && ch!='u'){
              st.add(ch);
          }
        }
            
        // }
        for(char ch : st){
            
        System.out.print(ch);
        }
    }
}


//js

let str="abhayi";
let ans="";
let vowel="aeiou";
for(let ch of str){
if(ch!='a' && ch!='e' && ch!='i'&&ch !='o' && ch!='u'){
    ans+=ch;    
}
}
console.log(ans);