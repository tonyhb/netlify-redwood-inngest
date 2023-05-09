// Setup the envelop plugin used in RedwoodJS GraphQLHandler

import { useInngest } from 'envelop-plugin-inngest'
import type {
  BuildUserContextFunction,
  InngestUserContextOptions,
} from 'envelop-plugin-inngest'

import { inngest } from 'src/lib/inngest'

// Includes the user context for each authenticated GraphQL request
export const userContext: BuildUserContextFunction = (
  options: InngestUserContextOptions
) => {
  const currentUser = options?.params?.args?.contextValue?.currentUser

  if (currentUser) {
    return { id: currentUser.id }
  }

  return {}
}

// For a complete list of inngest plugin configuration options, see: https://github.com/inngest/envelop-plugin-inngest/blob/main/packages/plugins/inngest/README.md
export const inngestPlugin = useInngest({
  inngestClient: inngest,
  buildUserContextFunction: userContext,
})
