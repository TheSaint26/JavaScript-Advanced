function solve(n, k) {
    let array = [1];
    let currentIndex = 0;

    while (currentIndex < n - 1) {
        let positionsBack = currentIndex < k ? currentIndex : k - 1;
        array.push(sum(array, currentIndex, positionsBack));
        currentIndex++;
    }

    return array;

    function sum(array, index, positionsBack) {
        let sum = array[index];

        while (positionsBack-- > 0) {
            sum += array[--index];
        }

        return sum;
    }
}

solve(6, 3);