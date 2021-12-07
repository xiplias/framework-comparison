import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { TodoCrudResolver } from "@generated/type-graphql/index";

export default async function schema(emitSchemaFile?: string) {
  return await buildSchema({
    resolvers: [TodoCrudResolver],
    emitSchemaFile,
    validate: false,
  });
}
