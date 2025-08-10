function timsort(arr) {
  let MIN_RUN = calculateMinRun(arr.length);
  let runs = [];

  // Step 1: Divide array into sorted runs
  for (let i = 0; i < arr.length;) {
    let run = identifyRun(arr, i);
    if (run.length < MIN_RUN) {
      run = arr.slice(i, i + MIN_RUN);
      insertionSort(run); // Step 2: Sort short runs
    }
    runs.push(run);
    i += run.length;
  }

  // Step 3: Merge runs
  while (runs.length > 1) {
    let runA = runs.pop();
    let runB = runs.pop();
    let merged = merge(runB, runA);
    runs.push(merged);
  }

  return runs[0];
}