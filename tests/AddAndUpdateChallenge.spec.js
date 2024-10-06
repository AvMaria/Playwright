const { test, expect } = require("@playwright/test");
const userData = require("../data/userData.json");
const putUserData = require("../data/putUserData.json");

//post user: this test creates a new user using a post request;
test("Create A New User", async ({ request }) => {
  const response = await request.post(`user`, {
    data: userData,
  });
  expect(response.status()).toBe(200);
});

//get user name: this test assert user name  is created;
test("Assert user was creted", async ({ request }) => {
  const getResponse = await request.get(`user/${userData.username}`);
  expect(getResponse.status()).toBe(200);
  let json = await getResponse.json();
  let responseId = json.id;
  let dataID = userData.id;
  console.log(responseId);
  console.log(dataID);
  expect(responseId).toBe(dataID);
});

//put user: this test creates a new user using a post request;
test("Update A New User", async ({ request }) => {
  const response = await request.put(`user/${userData.username}`, {
    data: putUserData,
  });
  expect(response.status()).toBe(200);
});

//get user name: this test assert user name  is created;
test("Assert user was Updated", async ({ request }) => {
  const getResponse = await request.get(`user/${putUserData.username}`);
  expect(getResponse.status()).toBe(200);
  let json = await getResponse.json();
  let responseId = json.id;
  let dataID = userData.id;
  console.log(responseId);
  console.log(dataID);
  expect(responseId).toBe(dataID);
});

//Delete user: this test delete an existing user using a delete request;
test("Delete A User", async ({ request }) => {
  const response = await request.delete(`user/${putUserData.username}`);
  expect(response.status()).toBe(200);
});

//get user name: this test assert user name  doesn't exist;
test("Assert user was Deleted", async ({ request }) => {
  const getResponse = await request.get(`user/${putUserData.username}`);
  expect(getResponse.status()).toBe(404);
});
