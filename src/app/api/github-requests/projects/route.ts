import { NextResponse } from "next/server";
import { ApolloClient, InMemoryCache, gql, ApolloQueryResult, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

let GITHUB_TOKEN: string | undefined = "";

try {
  GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
} catch(error) {
  GITHUB_TOKEN = process.env.TOKEN_GITHUB;
}


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
  const res: ApolloQueryResult<never> | ApolloQueryResult<unknown> = await client
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
    }).catch( (error) => {
      return error;
    })

  return NextResponse.json(res);
}
