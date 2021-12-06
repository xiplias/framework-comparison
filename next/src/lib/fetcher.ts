import { request, RequestDocument } from "graphql-request";

export const fetcher = (query: RequestDocument) =>
  request("/api/graphql", query);
