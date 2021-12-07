import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { TodoCrudResolver } from "@generated/type-graphql/index";

async function exportSchema() {
  await buildSchema({
    resolvers: [TodoCrudResolver],
    emitSchemaFile: "./graphql/schema.graphql",
    validate: false,
  });
}

exportSchema();
