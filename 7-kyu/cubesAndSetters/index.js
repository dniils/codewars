class Cube {
  constructor(length) {
    this.length = length;
  }

  get volume() {
    return Math.pow(this.length, 3);
  }

  set volume(newVolume) {
    this.length = Math.pow(newVolume, 1 / 3);
  }

  get surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }

  set surfaceArea(newSurfaceArea) {
    this.length = Math.sqrt(newSurfaceArea / 6);
  }
}
