import { requestPageLoadRequest } from "./actions"
import { RequestPageContainer as RequestPage } from "./"
import * as React from "react"
import { Button, Header, Link, LinkGroup, Menu, ToggleMenu } from "box-react-ui-core"

const noopClick = () => {}
const getRequestPage = (props, store) => {
  store.dispatch(requestPageLoadRequest)
  return (
    <div className="layout">
      <Header className="in-header">
        <ToggleMenu toggler={ <Button>File Actions Menu</Button> }>
          <LinkGroup>
            <Link onClick={ noopClick }>Download</Link>
            <Link onClick={ noopClick }>Favorite</Link>
            <Link onClick={ noopClick }>Remove Folder</Link>
          </LinkGroup>
          <hr />
          <LinkGroup title="Settings">
            <Link onClick={ noopClick }>Sharing</Link>
            <Link onClick={ noopClick }>Properties</Link>
          </LinkGroup>
          <hr />
          <LinkGroup>
            <Link onClick={ noopClick }>More Actions</Link>
          </LinkGroup>
        </ToggleMenu>
      </Header>
      <div style={{ padding: '0 50px' }}>
        <RequestPage {...props}/>
      </div>
    </div>
  )
}

export { getRequestPage }
//npm                     npm-install-peers       webpack                 webpack-dev-server
