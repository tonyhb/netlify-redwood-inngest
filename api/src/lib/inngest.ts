import { Inngest } from 'inngest'

export const INNGEST_APP_NAME = 'Redwood_Inngest'

export const inngest = new Inngest({
  /**
   * The name of this instance, most commonly the name of the application it
   * resides in.
   */
  name: INNGEST_APP_NAME,
  /**
   * Inngest event key, used to send events to Inngest Cloud. If not provided,
   * will search for the `INNGEST_EVENT_KEY` environment variable. If neither
   * can be found, however, a warning will be shown and any attempts to send
   * events will throw an error.
   */
  eventKey: 'YOUR_INNGEST_EVENT_KEY',
})
