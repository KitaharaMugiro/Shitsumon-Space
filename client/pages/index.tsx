import { ApolloClient, ApolloProvider, gql, useMutation, useSubscription } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useApollo } from '../model/Apollo';

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`;

const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const Messages = ({ user }: any) => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }
};

const Page = () => {
  const [state, stateSet] = useState({
    user: "Jack",
    content: "",
  });
  const [postMessage] = useMutation(POST_MESSAGE);
  const onSend = () => {
    if (state.content.length > 0) {
      postMessage({
        variables: state,
      });
    }
    stateSet({
      ...state,
      content: "",
    });
  };
  return (
    <div>
      <Messages user={state.user} />
      <div>

        <input
          value={state.user}
          onChange={(evt) =>
            stateSet({
              ...state,
              user: evt.target.value,
            })} />
      </div>

      <div>
        <input
          value={state.content}
          onChange={(evt) =>
            stateSet({
              ...state,
              content: evt.target.value,
            })
          } />
      </div>

      <button onClick={() => onSend()} style={{ width: "100%" }}>
        Send
          </button>

    </div >
  );
}

export default () => {
  const [client, setClient] = useState<ApolloClient<any> | null>(null)
  useEffect(() => {
    const client = useApollo()
    setClient(client)
  }, [])

  if (client === null) return "wait"
  return (
    <ApolloProvider client={client!}>
      <Page />
    </ApolloProvider>
  )
}