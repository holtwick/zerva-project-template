// (C)opyright 2021-07-15 Dirk Holtwick, holtwick.it. All rights reserved.

import "cross-fetch/polyfill"
import { serve, serveStop } from "zerva"
import { setup } from "./main"

const port = 8080
const url = `http://localhost:${port}`

describe("service", () => {
  beforeAll(async () => {
    await serve(setup)
  })

  afterAll(async () => {
    await serveStop()
  })

  it("should connect", async () => {
    expect(await (await fetch(`${url}/`)).text()).toContain("Running")
  })
})
