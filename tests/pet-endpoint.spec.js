const { test, expect } = require("@playwright/test");
const petData = require("../data/pet.json");

//get pet/findByStatus test
// test("available pets", async ({ request }) => {
//   const response = await request.get(`pet/findByStatus`, {
//     params: {
//       status: "available",
//     },
//   });
//   console.log(await response.json());
//   console.log(await response.url());
//   expect(response.status()).toBe(200);
// });

// //post pet  test
// test("create a new pet", async ({ request }) => {
//   const response = await request.post(`pet`, {
//     data: petData,
//   });
//   console.log(await response.json());
//   console.log(await response.url());
//   expect(response.status()).toBe(200);
// });

//put pet  test
test("Update a new pet", async ({ request }) => {
  const response = await request.put(`pet`, {
    data: petData,
  });
  console.log(await response.json());
  console.log(await response.url());
  expect(response.status()).toBe(200);
});

//get pet/{ID}
test("find pet by id", async ({ request }) => {
  const response = await request.get(`pet/${petData.id}`);
  expect(response.status()).toBe(200);
  let json = await response.json();
  let petName = petData.category.name;
  let petNameJson = json.category.name;
  expect(petName).toBe(petNameJson);
  console.log(petName);
  console.log(petNameJson);
});
