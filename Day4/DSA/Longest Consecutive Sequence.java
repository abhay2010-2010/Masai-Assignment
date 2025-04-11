class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> hm=new HashSet<>();
for(int i=0;i<nums.length;i++){
    hm.add(nums[i]);
}
int longest=0;
for(int num : hm){
    if(!hm.contains(num-1)){
        int length=1;
        while(hm.contains(num+length)){
            length++;
        }
        longest=Math.max(longest,length);
    }
}
return longest;
    }
}