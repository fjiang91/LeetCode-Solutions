/*
* O(M * N * log(m * n)) -> Time Complexity
* O(n) -> Space Complexity -> pq, bikes and worker arrays
* Approach -> Use a priority and overriding predetermine comparison based on distance (a[0], b[0])
* If dist is same, then compare workerIndex
* If workerIndex is same, then compare bikeIndex
* Edge Case / Questions to Ask
* 1. Will there any be any negative within the numbers?
* 2. Will there be duplicate bikes and worker at the same location?
* 3. What if same dist, what should get prioritize?
*/

class Solution {
    public int[] assignBikes(int[][] workers, int[][] bikes) {
        //Override the existing comparator
        //0 -> distance, 1 -> workerIndex, 2 -> bikeIndex
        PriorityQueue<int[]> pq = new PriorityQueue<int[]>((a,b) -> {
            if (a[0] != b[0]) {
                return a[0] - b[0];
            } else {
                if (a[1] != b[1]){
                    return a[1] - b[1];
                } else {
                    return a[2] - b[2];
                }
            }
        });

        //Add every possible pair of bike and worker into the pq and sort based on dist, workerIndex, and bikeIndex
        for (int wIndex = 0; wIndex < workers.length; wIndex++){
            for (int bIndex = 0; bIndex < bikes.length; bIndex++){
                int dist = calcManDis(workers[wIndex], bikes[bIndex]);
                pq.offer(new int[]{dist, wIndex, bIndex});
            };
        }

        //Use booleans array to check if we visited the worker or bike already
        boolean[] foundWorkers = new boolean[workers.length];
        Arrays.fill(foundWorkers, false);
        boolean[] usedBikes = new boolean[bikes.length];
        Arrays.fill(usedBikes, false);
        int count = 0;
        int[] res = new int[workers.length];

        while(!pq.isEmpty() && count < workers.length){
            int[] que = pq.poll();
            int dist = que[0];
            int workerIndex = que[1];
            int bikeIndex = que[2];
            //If only we havent visited both the bike and worker, we add it to the result
            //We set the worker's Index to the bikeIndex
            if (usedBikes[bikeIndex] == false && foundWorkers[workerIndex] == false) {
                res[workerIndex] = bikeIndex;
                usedBikes[bikeIndex] = true;
                foundWorkers[workerIndex] = true;
                count++;
            };
        }
        return res;
    }

    public int calcManDis (int[] worker, int[]bike) {
          return Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);
    };
}
