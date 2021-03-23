export { createClient } from "https://denopkg.com/chiefbiiko/dynamodb/mod.ts";

export type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";

export type {
  Doc,
  DynamoDBClient,
} from "https://raw.githubusercontent.com/chiefbiiko/dynamodb/8d7cd9f1c7ce028dbf0ad15d6b90665e40d30953/mod.ts";

import { v4 } from "https://deno.land/std@0.80.0/uuid/mod.ts";
export const uuid = v4.generate;