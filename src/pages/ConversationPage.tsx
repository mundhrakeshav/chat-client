import { Outlet, useParams } from "react-router-dom"
import { ConversationSidebar } from "../components/conversations/ConversationsSidebar"
import { Page } from "../utils/styles"
import { ConversationPanel } from "../components/conversations/ConversationPanel"
import mockConversation from "../__mocks__/conversations"
export const ConversationPage = () => {

    const { id } = useParams();

    return (<Page>
        <ConversationSidebar conversations={mockConversation} />
        {!id && <ConversationPanel />}
        <Outlet />
    </Page>)
}