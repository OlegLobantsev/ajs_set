export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Player already in team');
    } else {
      this.members.add(player);
    }
  }

  addAll(...players) {
    players.forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }
}
