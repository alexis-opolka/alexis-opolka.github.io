import { NextRequest, NextResponse } from "next/server";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloQueryResult,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// Create the http link
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
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

export async function GET(request: NextRequest) {

  const repository = request.nextUrl.pathname.split("/")[request.nextUrl.pathname.split("/").length-1]

  const res: ApolloQueryResult<any> = await client
    .query({
      query: gql`
        query {
          repository(name: "${repository}", owner: "alexis-opolka") {
            id,
            name,
            owner {
              id,
              login,
              url
            },
            description,
            languages(first: ${8}) {
              edges {
                node {
                  id,
                  name,
                  color
                },
                size,
              },
              totalSize
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
      `,
    })
    .then((result) => {
      // console.log("Result:", result)
      return result;
    })
    .catch((error) => {
      return error
    })

  return NextResponse.json(res);
}
