import { ApolloServer } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import schema from "../../src/lib/schema";

export const config = {
  api: {
    bodyParser: false,
    // externalResolver: true,
  },
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apolloServer = new ApolloServer({
    schema: await schema(),
    context: () => ({ prisma }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    debug: true,
  });
  const startServer = apolloServer.start();

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}
