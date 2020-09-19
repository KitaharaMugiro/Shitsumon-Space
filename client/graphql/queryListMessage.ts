import { gql, useQuery } from "@apollo/client";
import { Query } from "../generated/graphql";

const QUERY_LIST_MESSAGE = gql`
query MyQuery($RoomId:ID!) {
    listMessage(RoomId:$RoomId) {
        items {
            MessageId
            Message
            CreatedAt
        }
    }
}
`;

export default (RoomId: string) => {
    const { loading, error, data } = useQuery(QUERY_LIST_MESSAGE, { variables: { RoomId } });
    if (loading) return [];
    if (error) return [];
    const _data = data as Query
    return _data?.listMessage?.items
}