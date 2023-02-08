function truckTour(petrolpumps) {
  let petrol = 0;
  let pump = 0;

  for (let i = 0; i < petrolpumps.length; i++) {
    petrol += petrolpumps[i][0];
    petrol -= petrolpumps[i][1];
    if (petrol < 0) {
      petrol = 0;
      pump = i + 1;
    }
  }
  return pump;
}
