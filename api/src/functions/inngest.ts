import { serve } from 'inngest/redwood'

import helloWorld from 'src/jobs/inngest/helloWorld'
import { testFunction } from 'src/jobs/inngest/testFunction'
import { inngest } from 'src/lib/inngest'

// Add your Inngest functions here
const inngestFunctions = [helloWorld, testFunction]

// Serve your Inngest functions
export const handler = serve(inngest, inngestFunctions, {
  /**
   * The minimum level to log from the Inngest serve endpoint.
   *
   * Default level: "info"
   */
  logLevel: 'info',
})
