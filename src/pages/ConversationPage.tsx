import { Outlet, useParams } from "react-router-dom"
import { ConversationSidebar } from "../components/conversations/ConversationsSidebar"
import { Page } from "../utils/styles"
import { ConversationPanel } from "../components/conversations/ConversationPanel"

export const ConversationPage = () => {
    
    const { id } = useParams();

    return (<Page>
        <ConversationSidebar />
        {!id && <ConversationPanel />}
        <Outlet />
    </Page>)
}