import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";
import { TodoCrudResolver } from "@generated/type-graphql/index";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

export const config = {
  api: {
    bodyParser: false,
    // externalResolver: true,
  },
};

const graphql = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  const typeSchema = await buildSchema({
    resolvers: [TodoCrudResolver],
    // emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema: typeSchema,
    context: () => ({ prisma }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  return apolloServer.start().then(() => {
    apolloServer.createHandler({ path: "/api/graphql" })(req, res);
  });
};

export default graphql;
