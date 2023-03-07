import { graphql } from "./gql";
import { print } from "graphql";
import * as assert from "assert";

const SharedComponentFragment = graphql(`
  fragment SharedComponentFragment on User {
    id
    username
  }
`);

const EventHeaderComponentFragment = graphql(`
  fragment EventHeaderComponentFragment on Event {
    owner {
      ...SharedComponentFragment
    }
  }
`);

const EventQueryDocument = graphql(`
  query EventQuery($eventId: ID!) {
    event(id: $eventId) {
      ...EventHeaderComponentFragment
      attendees {
        ...SharedComponentFragment
      }
    }
  }
`);

const printed = print(EventQueryDocument);

console.log(printed);

assert.strictEqual(
  printed.match(/fragment SharedComponentFragment on User/g)?.length,
  1
);
