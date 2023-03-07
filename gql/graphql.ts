/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Event = {
  __typename?: "Event";
  attendees: Array<User>;
  id: Scalars["ID"];
  owner: User;
};

export type Query = {
  __typename?: "Query";
  event: Event;
  user: User;
};

export type QueryEventArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["ID"];
  username: Scalars["String"];
};

export type SharedComponentFragmentFragment = {
  __typename?: "User";
  id: string;
  username: string;
} & { " $fragmentName"?: "SharedComponentFragmentFragment" };

export type EventHeaderComponentFragmentFragment = {
  __typename?: "Event";
  owner: { __typename?: "User" } & {
    " $fragmentRefs"?: {
      SharedComponentFragmentFragment: SharedComponentFragmentFragment;
    };
  };
} & { " $fragmentName"?: "EventHeaderComponentFragmentFragment" };

export type EventQueryQueryVariables = Exact<{
  eventId: Scalars["ID"];
}>;

export type EventQueryQuery = {
  __typename?: "Query";
  event: {
    __typename?: "Event";
    attendees: Array<
      { __typename?: "User" } & {
        " $fragmentRefs"?: {
          SharedComponentFragmentFragment: SharedComponentFragmentFragment;
        };
      }
    >;
  } & {
    " $fragmentRefs"?: {
      EventHeaderComponentFragmentFragment: EventHeaderComponentFragmentFragment;
    };
  };
};

export const SharedComponentFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SharedComponentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "username" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SharedComponentFragmentFragment, unknown>;
export const EventHeaderComponentFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventHeaderComponentFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Event" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "owner" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SharedComponentFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    ...SharedComponentFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<EventHeaderComponentFragmentFragment, unknown>;
export const EventQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "EventQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "eventId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "event" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "eventId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "EventHeaderComponentFragment" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "attendees" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "SharedComponentFragment",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...EventHeaderComponentFragmentFragmentDoc.definitions,
    ...SharedComponentFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<EventQueryQuery, EventQueryQueryVariables>;
