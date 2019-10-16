export class Station {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  equals(obj): boolean {
    if (obj instanceof Station) {
      if (obj.getName().toLowerCase() === this.name.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  hashCode(): number {
    return this.name.toLowerCase().charCodeAt(5);
  }
}
