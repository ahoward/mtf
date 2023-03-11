class Emoji {
  static dragon = "🐉";
  static mountain = "⛰";
  static fire = "🔥";
  static herb = "🌿";
  static beers = "🍻";
  static dancer = "💃🏿";

  static list = [
    this.dragon,
    this.mountain,
    this.fire,
    this.herb,
    this.beers,
    this.dancer,
  ];

  constructor() {
    Object.assign(this, Emoji);
  }
}

const emoji = new Emoji();
export { emoji as default, Emoji };
