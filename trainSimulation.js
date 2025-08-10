const train = {
  name: "Express Falcon",
  stations: ["Central Station", "North Point", "East Junction", "South Bay", "Westhill Depot"],
  currentStationIndex: 0,
  location: "Central Station",
  isMoving: false,
  departureTimes: ["08:00", "10:30", "13:45", "16:15", "19:00"],
  eventLog: [],

  compartments: {
    passengers: [
      { name: "Alice", ticket: "NP10", destination: "North Point" },
      { name: "Bob", ticket: "EJ13", destination: "East Junction" }
    ],
    cargo: ["crates", "boxes", "machinery"],
    dining: ["snack cart", "coffee machine"],
    luggage: ["suitcases", "backpacks"]
  },

  startJourney() {
    this.isMoving = true;
    console.log(`🚆 ${this.name} is departing from ${this.location} at ${this.departureTimes[this.currentStationIndex]}!`);
    this.triggerRandomEvent();
  },

  travelToNextStation() {
    if (!this.isMoving) {
      console.log("⛔ Train must be moving to proceed.");
      return;
    }

    this.currentStationIndex = (this.currentStationIndex + 1) % this.stations.length;
    this.location = this.stations[this.currentStationIndex];
    console.log(`🚉 ${this.name} arrived at ${this.location} at ${this.departureTimes[this.currentStationIndex]}.`);
    this.dropOffPassengers();
    this.triggerRandomEvent();
  },

  stopTrain() {
    this.isMoving = false;
    console.log(`🛑 ${this.name} stopped at ${this.location}.`);
  },

  dropOffPassengers() {
    this.compartments.passengers = this.compartments.passengers.filter(passenger => {
      if (passenger.destination === this.location) {
        console.log(`👋 ${passenger.name} has arrived at ${passenger.destination}.`);
        return false; // remove passenger
      }
      return true;
    });
  },

  loadPassenger(passenger) {
    this.compartments.passengers.push(passenger);
    console.log(`🎫 Loaded passenger ${passenger.name} with ticket ${passenger.ticket}.`);
  },

  triggerRandomEvent() {
    const events = [
      "🎲 A magician is performing in the dining compartment!",
      "🍪 Free cookies distributed to all passengers.",
      "🛠️ Unexpected track maintenance causes a slight delay.",
      "🎵 Live jazz band boarded at previous station!",
      "📢 Ticket inspection in progress."
    ];
    const event = events[Math.floor(Math.random() * events.length)];
    this.eventLog.push(event);
    console.log(`🔔 Event: ${event}`);
  },

  listStatus() {
    console.log(`🚂 ${this.name} is at ${this.location}. Moving: ${this.isMoving}`);
    console.log(`🕒 Departure Time: ${this.departureTimes[this.currentStationIndex]}`);
    console.log("📋 Event Log:");
    this.eventLog.forEach((e, i) => console.log(`  ${i + 1}. ${e}`));
  }
};