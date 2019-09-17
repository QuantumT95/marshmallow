class player {
  constructor() {
    this.pos = new position(this, 300, 300, 0, -16);
    this.image = new animator(this, this.pos, "girl_run", 4, 4, .2);
    this.controller = new userMovement(this, this.pos, this.img);

    this.properties = [
      this.pos,
      this.image,
      this.controller
    ];

    objects.push(this);
  }
}
