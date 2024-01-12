import { test, expect } from "@playwright/test";

test("frames", async function ({ page }) {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //define frame

  const frames = await page.frames();

  expect(frames).toHaveLength(7);

  const frame_1 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });

  await frame_1.fill("[name='mytext1']", "xd1");

  const frame_3 = await page.frameLocator("frame[src='frame_3.html']");

  await frame_3.locator("//input[@name='mytext3']").fill("xd3");

  //child frames
  // const childFrames = await frame3.childFrames();
  // await childFrames[0].locator("locator").check()
});
