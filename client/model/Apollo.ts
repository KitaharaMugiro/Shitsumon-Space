import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

const API_KEY = "da2-e666mkfiibbcfivafyzo6sqrii"

export const useApollo = () => {
  // const link = new WebSocketLink({
  //   uri: `ws://localhost:4000/`,
  //   options: {
  //     reconnect: true,
  //   }
  // });

  const client = new ApolloClient({
    uri: "https://sphztbs6fvcljmatwrknxzr4ty.appsync-api.ap-northeast-1.amazonaws.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      'x-api-key': API_KEY
    }
  });

  return client
}