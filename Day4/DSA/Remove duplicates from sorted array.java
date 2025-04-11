class Solution {
    public int removeDuplicates(int[] nums) {
    Set<Integer> hset=new HashSet<>();
    int c=0;
    for(int num :nums){
        if(!hset.contains(num)){ 
            hset.add(num);
            nums[c]=num;
            c++;
            }
    }

    // for(int ele :)
    return hset.size();       
    }
}