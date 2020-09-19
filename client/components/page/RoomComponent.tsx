import { useQuery } from "@apollo/client"
import queryListMessage from "../../graphql/queryListMessage"

interface Props {
    roomId: string
}

export default (props: Props) => {
    const roomUserId = "ROOM_USER_ID"
    const messages = queryListMessage(props.roomId)
    return (
        <>
            {messages?.map(message => (
                <div
                    key={message?.MessageId}
                    style={{
                        display: "flex",
                        justifyContent: roomUserId === message?.UserId ? "flex-end" : "flex-start",
                        paddingBottom: "1em",
                    }}
                >
                    <div
                        style={{
                            background: roomUserId === message?.UserId ? "#e5e6ea" : "blue",
                            color: roomUserId === message?.UserId ? "black" : "white",
                            padding: "1em",
                            borderRadius: "1em",
                            maxWidth: "60%",
                        }}
                    >
                        {message?.Message}
                    </div>
                </div>
            ))}
        </>
    );
}