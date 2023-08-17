import { NextResponse } from "next/server";
import { ApolloClient, InMemoryCache, gql, ApolloQueryResult, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// Create the http link
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

// Generate and set the header with the auth details
const authLink = setContext((_, { headers }) => {
  // get the authentication token from env variables if it exists
  const token = GITHUB_TOKEN;

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

// Generate your client with the authLink and httpLink
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export async function GET() {
  const res: ApolloQueryResult<never> = await client
    .query({
      query: gql`
        query{
          user(login: "alexis-opolka") {
            id,
            name
            repositories(first: 50, orderBy: {
              field: NAME,
              direction: ASC
            }) {
              edges {
                node {
                  id,
                  owner {
                    id,
                    login
                  },
                  name,
                  description,
                  languages(first: 8) {
                    edges {
                      node {
                        id,
                        name,
                        
                      }
                    }
                  },
                  isFork,
                  isPrivate,
                  issues{
                    totalCount
                  },
                  pullRequests {
                    totalCount
                  },
                  licenseInfo {
                    name,
                    nickname,
                    url
                  },
                  diskUsage,
                  url
                }
              }
            }
          }
        }
      `,
    })
    .then((result) => {
      return result;
    });

  return NextResponse.json(res);
}
