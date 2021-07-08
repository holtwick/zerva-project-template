// Simple demo for node and CommonJS loading
 
import { serve, http, register, on } from "zerva"

function counter() {
  register("counter", ["http"])
  let counter = 1
  on("httpInit", ({ get }) => {
    get(
      "/",
      () => `Counter ${counter++}.<br><br>Reload page to increase counter.`
    )
  })
  
}

serve(() => {
  http({
    port: 8080,
  })
  counter()
})
