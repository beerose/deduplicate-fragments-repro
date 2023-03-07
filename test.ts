import { graphql } from "./gql";
import { print } from "graphql";

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

console.log(print(EventQueryDocument));
