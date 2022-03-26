function cutBar(numOfWorker, barLength) {
  class Bar {
    static create(length) {
      return new Bar(length);
    }
    get currentBars() {
      return this.bars;
    }
    increaseBars(worker) {
      this.bars = worker(this.currentBars);
      return this;
    }
    constructor(limit) {
      this.bars = 1;
      this.limit = limit;
    }
  }
  const makeWorker = (numOfWorker) => {
    let tries = 0;
    const cutter = (aBar = new Bar()) => {
      if (aBar.currentBars >= aBar.limit) return tries;
      if (numOfWorker >= aBar.currentBars) {
        aBar.increaseBars((num) => 2 * num);
        tries++;
        return cutter(aBar);
      } else {
        aBar.increaseBars((num) => num + numOfWorker);
        tries++;
        return cutter(aBar);
      }
    };
    return cutter;
  };
  const workers = makeWorker(numOfWorker);
  const bar = Bar.create(barLength);
  return workers(bar);
}

function runQ04() {
  console.log(cutBar(3, 20));
  console.log(cutBar(5, 100));
}

runQ04();
