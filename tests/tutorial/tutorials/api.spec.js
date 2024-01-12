import { test, expect } from "@playwright/test";

var userid;

test("get_users", async function ({ request }) {
  const response = await request.get("https://reqres.in/api/users?page=2");
  console.log(await response.json);
  expect(response.status()).toBe(200);
});

test("create_user", async function ({ request }) {
  const response = await request.post("https://reqres.in/api/users", {
    data: { name: "kumar", job: "trainer" },
    headers: { Accept: "application/json" },
  });
  expect(response.status()).toBe(201);

  var res = await response.json;
  userid = res.id;
});

test("update_user", async function ({ request }) {
  const response = await request.put("https://reqres.in/api/users/" + userid, {
    data: { name: "kumar", job: "engineer" },
    headers: { Accept: "application/json" },
  });
  expect(response.status()).toBe(200);
});

test("delete_user", async function ({ request }) {
  const response = await request.delete(
    "https://reqres.in/api/users/" + userid
  );
  expect(response.status()).toBe(204);
});
