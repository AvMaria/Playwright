const { test, expect } = require("@playwright/test");
const postStore = require("../data/postStore.json");

//post store: Place an order for a pet;
test("Create Order", async ({ request }) => {
  const response = await request.post(`store/order`, {
    data: postStore,
  });
  expect(response.status()).toBe(200);
});

//get order by ID
test("Assert order was creted", async ({ request }) => {
  const getResponse = await request.get(`store/order/${postStore.id}`);
  expect(getResponse.status()).toBe(200);
  let json = await getResponse.json();
  let responseId = json.id;
  let dataID = postStore.id;
  console.log(responseId);
  console.log(dataID);
  expect(responseId).toBe(dataID);
});

//Delete Order
test("Delete A order", async ({ request }) => {
  const response = await request.delete(`store/order/${postStore.id}`);
  expect(response.status()).toBe(200);
  console.log(response);
});

//verify order if deleted doesn't exist;
test("Assert order was Deleted", async ({ request }) => {
  const getResponse = await request.get(`store/order/${postStore.id}`);
  expect(getResponse.status()).toBe(404);
});
