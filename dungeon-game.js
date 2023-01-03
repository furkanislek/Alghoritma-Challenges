var calculateMinimumHP = function(dungeon) {
    
    if (dungeon.length < 2)  return 1
    

    var nrows = dungeon.length;
    var ncols = dungeon[0].length;
    var dp = [];
    
    for (var r=0; r<nrows+1; r++) {
        dp[r] = [];
        for (var c=0;c<ncols+1;c++) {
            dp[r][c] = Number.MAX_SAFE_INTEGER;
        }
    }
    dp[nrows-1][ncols] = dp[nrows][ncols-1] = 1;
    
    for (var r=nrows-1;r>=0;r--) {
        for (var c=ncols-1;c>=0;c--) {
            dp[r][c] = Math.max(1, Math.min(dp[r+1][c], dp[r][c+1])-dungeon[r][c]);
        }
    }
    return dp[0][0];
    };

    console.log(calculateMinimumHP([0]));
    console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]))