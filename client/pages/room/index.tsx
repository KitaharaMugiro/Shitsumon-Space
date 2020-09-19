import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import RoomComponent from '../../components/page/RoomComponent'
import { useApollo } from '../../model/Apollo'
export default () => {
    const router = useRouter()
    const [apollo, setApollo] = useState<any>()
    const [roomId, setRoomId] = useState("")
    useEffect(() => {
        const roomId = router.query.id as string || "8f6bf6c8-ce41-43cc-9611-5e10fe5df184"
        const apollo = useApollo()
        setApollo(apollo)
        setRoomId(roomId)
    }, [router])

    if (roomId && apollo) {
        console.log("start rendering")
        return (
            <ApolloProvider client={apollo}>
                <RoomComponent roomId={roomId} />
            </ApolloProvider>)
    }
    return <div />
}