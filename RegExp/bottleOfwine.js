class WineBottle {
  constructor({ name, grape, region, year, volume = 750 }) {
    this.name = name;          // e.g. "Cabernet Sauvignon"
    this.grape = grape;        // e.g. "Cabernet"
    this.region = region;      // e.g. "Napa Valley"
    this.year = year;          // e.g. 2018
    this.volume = volume;      // ml
    this.opened = false;
    this.remaining = volume;   // ml
  }

  open() {
    if (this.opened) {
      console.log("The bottle is already open.");
      return;
    }
    this.opened = true;
    console.log(`You opened the ${this.year} ${this.name}.`);
  }

  pour(amount = 150) {
    if (!this.opened) {
      console.log("You need to open the bottle first.");
      return;
    }
    if (this.remaining <= 0) {
      console.log("The bottle is empty.");
      return;
    }
    const poured = Math.min(amount, this.remaining);
    this.remaining -= poured;
    console.log(`You poured ${poured}ml. ${this.remaining}ml left.`);
  }

  describe() {
    return `${this.year} ${this.name} (${this.grape}) from ${this.region}`;
  }
}

// Example usage:
const bottle = new WineBottle({
  name: "Cabernet Sauvignon",
  grape: "Cabernet",
  region: "Napa Valley",
  year: 2018
});

console.log(bottle.describe());
bottle.open();
bottle.pour();
bottle.pour(300);