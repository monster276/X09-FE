import React from 'react'
import "./styles.css"
import {LogoutOutlined} from '@ant-design/icons'
function HeaderComponent() {
    return (
    <>
    <div className='container--header'>
            <div>
            <span style={{marginRight:'20px'}}>User</span>
            <LogoutOutlined />
            </div>
        </div>
    </>
    )
}

export default HeaderComponent