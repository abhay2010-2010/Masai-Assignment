

class Main {
    public static void main(String[] args) {
        int[] arr={1,2,5,7,6};
        int sech=0;
        int fsth=arr[0];
        for(int i=1;i<arr.length;i++){
           if(arr[i]>fsth){
              
               fsth=arr[i];
           } 
        }
        for(int i=0;i<arr.length;i++){
            if(arr[i]>sech && arr[i]<fsth){
                sech=arr[i];
            }
        }
        System.out.println(sech);
    }
}
