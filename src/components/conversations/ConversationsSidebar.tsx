import { ConversationSidebarStyle } from "../../utils/styles"
import { MdEdit } from "react-icons/md"

export const ConversationSidebar = () => {
    return <ConversationSidebarStyle>
        <header>
            <h1>Conversations</h1>
            <MdEdit size={30}/>
        </header>
    </ConversationSidebarStyle>
}