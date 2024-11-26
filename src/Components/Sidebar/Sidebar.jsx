import React, {useContext, useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets.js'
import { Context } from '../../Context/Context.jsx';

function Sidebar() {

    const [extended,setExtended] = useState(false);
    const {onSent,prevPrompts,setRecentPrompts,newChat}=useContext(Context);

    const loadPrompt = async(prompt)=>{
        setRecentPrompts(prompt);
        await onSent(prompt);
    }

  return (
    <div className='sidebar'>
            <div className='top'>
                <img src={assets.menu_icon} alt="" className='menu' onClick={()=>setExtended(prev=>!prev)}/>
                <div className="new-chat" onClick={()=>newChat()}>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? 
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item,index)=>{
                        return (
                            <div className="recent-entry" onClick={()=>loadPrompt(item)} key={index}>
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0,16)}...</p>
                            </div>
                        )
                    })}
                    
                </div>:
                null}
            </div>

            <div className='bottom'>
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
    </div>
  )
}

export default Sidebar