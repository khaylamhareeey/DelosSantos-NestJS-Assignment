const getFibonacciSequence = (n) => {
  
    if (isNaN(n) || n <= 0) {
        return { error: 'Invalid input. Please provide a positive integer.' };
    }


    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    
    return { sequence: n === 1 ? [0] : sequence.slice(0, n) };
};

module.exports = { getFibonacciSequence };
