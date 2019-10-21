const asteroidCollision = require('../735.asteroid-collision');

describe('asteroidCollision -> Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.', () => {
  it ("asteroids = [5,10,-5, -10]", () => {
    const output = [5];
    const result = asteroidCollision([5,10,-5,-10]);
    expect(result).toEqual(output);
  });

  it("asteroids = [-5,-10,5,10]", () => {
    const output = [-5,-10,5,10];
    const result = asteroidCollision([-5,-10,5,10]);
    expect(result).toEqual(output);
  });

  it("asteroids = [10,5,-5,-10]", () => {
    const output = [];
    const result = asteroidCollision([10,5,-5,-10]);
    expect(result).toEqual(output);
  });
});
