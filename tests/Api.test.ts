import { test, expect, request } from "@playwright/test";

const baseUrl = "https://jsonplaceholder.typicode.com";

test("Check posts body length",  async () => {
    const expectedLength = 120;
    const context = await request.newContext({
        baseURL: baseUrl
    });

    let res = await (await context.get(`/posts/`)).json();

    for (let i = 0; i < 100; i++) {      
        expect.soft(res[i].body.length, `Body length should be correct for response with id ${i + 1}`).toBeGreaterThan(expectedLength);
    }
})

