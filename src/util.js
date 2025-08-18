class Screen {
  constructor(screenType, transitioner) {
    this.screenType = screenType;
    this.transitioner = transitioner;
  }

  buildUI() {
    return document.createElement("div");
  }
}

function hrLine() {
  return document.createElement("hr");
}

export { Screen, hrLine };
