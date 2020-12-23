// Orderby results array
function orderbyRes(res, key) {
    key = key || '';
    if (key) {
        res = res.sort(function(a, b) {
            var A = a[key];
            var B = b[key];
            if (isNaN(A)) A = A+''.toUpperCase();
            if (isNaN(B)) B = B+''.toUpperCase();
            if (A < B) return -1;
            if (A > B) return 1;
            return 0;
        });
    }
    return res;
}
