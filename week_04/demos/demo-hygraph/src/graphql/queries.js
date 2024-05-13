import { gql } from "@apollo/client";

export const GET_ALL_TODOS = gql`
  query GET_TODO {
    todos {
      id
      title
      completionDate
      isDone
    }
  }
`;
