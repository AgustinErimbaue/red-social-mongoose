const request = require("supertest");
const app = require("../index");
const User = require("../models/User");
const Post = require("../models/Post");

describe("testing/users", () => {
  const user = {
    username: "Florencia",
    email: "Florencia@example.com",
    password: "123456",
    age: 26,
    tokens: [],
    postIds: [],
    commentIds: [],
  };

  test("Crear un usuario", async () => {
    const res = await request(app).post("/users").send(user).expect(201);
    const sendUser = {
      ...user,
      id: res.body.user._id,
      password: res.body.user.password,
      createdAt: res.body.user.createdAt,
      updatedAt: res.body.user.updatedAt,
    };
    const newUser = {
      ...res.body.user,
      id: res.body.user._id,
    };
    delete newUser._id;
    delete newUser.__v;
    expect(newUser).toEqual(sendUser);
  });

  let token;

test("Iniciar sesión de un usuario", async () => {
  const res = await request(app)
    .post("/users/login")
    .send({ email: "Florencia@example.com", password: "123456" })
    .expect(200);
  token = res.body.token;
  expect(token).toBeDefined();
});
});
