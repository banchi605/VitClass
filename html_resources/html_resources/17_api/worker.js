// This script will run in a separate worker thread

self.onmessage = function(e) {
    // This function handles messages sent from the main script
    const result = doHeavyCalculations(e.data);
    postMessage(result);
};

function doHeavyCalculations(data) {
    // Simulate some heavy calculations
    let sum = 0;
    for (let i = 0; i < data; i++) {
        sum += i;
    }
    return sum;
}
