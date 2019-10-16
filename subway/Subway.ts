import { Connection } from './Connection';
import { Station } from './Station';

export class Subway {
  private stations: Station[] = [];
  private connections: Connection[] = [];

  addStation(name: string) {
    if (!this.hasStation(name)) {
      const station = new Station(name);
      this.stations.push(station);
    }
  }

  hasStation(name: string): boolean {
    return this.stations.some(x => x.getName() === name);
  }

  addConnection(station1Name: string, station2Name: string, lineName: string) {
    if (this.hasStation(station1Name) && this.hasStation(station2Name)) {
      const station1 = new Station(station1Name);
      const station2 = new Station(station2Name);
      const connection = new Connection(station1, station2, lineName);
      this.connections.push(connection);
      this.connections.push(new Connection(station2, station1, lineName));
    } else {
      throw new Error('Invalid Connection!');
    }
  }

}
