class Solution {
    public int maxArea(int[] height) {
        int maxwater=0;
        int l=0;
        int r=height.length-1;

         while(l<r){
            int maxW=r-l;
            int maxH=Math.min(height[l],height[r]);
            maxwater=Math.max(maxwater,(maxW*maxH));
            if(height[l]>height[r]){
            r--;
            }else{
                l++;
            }
         }
         return maxwater;
    }
}