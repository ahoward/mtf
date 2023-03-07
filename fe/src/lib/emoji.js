import util from "@/lib/util";

class Emoji {
  static dragon = "🐉";
  static mountain = "⛰";
  static fire = "🔥";
  static herb = "🌿";
  static beers = "🍻";
  static dancer = "💃🏿";

  constructor() {
    Object.assign(this, Emoji);
  }
}

const emoji = new Emoji();
export { emoji as default, Emoji };
