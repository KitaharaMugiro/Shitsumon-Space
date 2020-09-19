import { useQuery } from "@apollo/client"
import queryListMessage from "../../graphql/queryListMessage"

interface Props {
    roomId: string
}

export default (props: Props) => {
    const data = queryListMessage(props.roomId)
    console.log(data)
    return (
        <>
            {data.messages.map(({ id, user: messageUser, content }: any) => (
                <div
                    style={{
                        display: "flex",
                        justifyContent: user === messageUser ? "flex-end" : "flex-start",
                        paddingBottom: "1em",
                    }}
                >
                    {user !== messageUser && (
                        <div
                            style={{
                                height: 50,
                                width: 50,
                                marginRight: "0.5em",
                                border: "2px solid #e5e6ea",
                                borderRadius: 25,
                                textAlign: "center",
                                fontSize: "18pt",
                                paddingTop: 5,
                            }}
                        >
                            {messageUser.slice(0, 2).toUpperCase()}
                        </div>
                    )}
                    <div
                        style={{
                            background: user === messageUser ? "blue" : "#e5e6ea",
                            color: user === messageUser ? "white" : "black",
                            padding: "1em",
                            borderRadius: "1em",
                            maxWidth: "60%",
                        }}
                    >
                        {content}
                    </div>
                </div>
            ))}
        </>
    );
}