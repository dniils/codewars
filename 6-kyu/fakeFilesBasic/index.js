class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this.contents = contents;
    this.counterS = 0;
    this.counterC = 0;
  }

  get filename() {
    return this._fullName
      .split(".")
      .filter(
        (el) =>
          el !== this._fullName.split(".")[this._fullName.split(".").length - 1]
      )
      .join(".");
  }

  get extension() {
    return this._fullName.split(".")[this._fullName.split(".").length - 1];
  }

  get fullName() {
    return this._fullName;
  }

  write(str) {
    if (this.contents) this.contents += `\n${str}`;
    else this.contents += `${str}`;
  }

  getContents() {
    return this.contents;
  }

  gets() {
    return this.contents.split("\n")[this.counterS++];
  }

  getc() {
    return this.contents.split("")[this.counterC++];
  }
}
