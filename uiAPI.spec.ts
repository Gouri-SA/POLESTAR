import { test, request, expect } from "@playwright/test";

test.describe("Validate UI Page", () => {
const accessToken='05297376f8d4d7945d979041bd2d8b1dad043b6777ebade987310ab849b19cd4';
  test("Get method", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2");
    console.log(await response.json());
    expect(response.status()).toBe(200);
  });

  test("Post method", async ({ request }) => {
    const response = await request.post("https://gorest.co.in/public/v2/users", {
      data: {
        name: "morpheus",
        job: "leader",
      },
      headers:{
      Authorization:accessToken,
      }
    });

    expect(response.status()).toBe(201);
  });

  test("Put method", async ({ request }) => {
    const response = await request.put("https://gorest.co.in/public/v2/users/2139492", {
      data: {
        name: "morpheus",
        job: "zion resident",
      },
    });
    expect(response.status()).toBe(200);
  });

  test("Delete method", async ({ request }) => {
    const response = await request.delete("https://gorest.co.in/public/v2/public/v2/users/2139492");
    expect(response.status()).toBe(204);
  });
});
