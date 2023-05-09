import { inngest } from 'src/lib/inngest'

/**
 * To test this testFunction function, send an event to the Inngest API with the following payload:
 *
 * {
 *   "name": "event/test-function",
 *   "data": { "user": { id: 123 } }
 *   "user": {}
 * }
 *
 *
 * If you do not send another event named "app/order.created", then next step will not run.
 *
 *
 * If you do send a "app/order.created" event, make sure the data.user.id matches the id 
 * used in the `app/event/test-function` event sent to complete the event handling.
 *
 * {
 *   "name": "app/order.created",
 *   "data": { "user": { "id": 123 } }
 *   "user": {}
 * }
 * 
 */
export const testFunction = inngest.createFunction(
  { name: 'Test function' },
  { event: 'event/test-function' },
  async ({ event, step }) => {
    // Send the user a welcome email
    await step.run('Send welcome email', () => {
      return {
        event,
        body: 'Hello World!',
        userId: event.data?.user?.id,
      }
    })

    // Wait for the user to create an order, by waiting and
    // matching on another event
    const order = await step.waitForEvent('app/order.created', {
      match: 'data.user.id',
      timeout: '20s',
    })

    if (!order) {
      // User didn't create an order within 20 seconds;
      // send them an activation email
      await step.run('Send activation email', async () => {
        return {
          event,
          body: 'Mail sent!',
          userId: event.data?.user?.id,
        }
      })
    }
  }
)
