import { Inngest } from 'inngest'

export const INNGEST_APP_NAME = 'Test app'

console.log("USING INNGEST", process.env.BRANCH);

export const inngest = new Inngest({
  /**
   * The name of this instance, most commonly the name of the application it
   * resides in.
   */
  name: INNGEST_APP_NAME,
  env: "TEST-BRANCH-NAME",
})
