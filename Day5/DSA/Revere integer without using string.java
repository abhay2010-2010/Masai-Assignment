

class Main {
    public static void main(String[] args) {
        int x=59858;
        int rev=0;
       while(x>0){
           int temp=x%10;
           rev=rev*10+temp;
           x=x/10;
       }
        System.out.println(rev);
    }
}