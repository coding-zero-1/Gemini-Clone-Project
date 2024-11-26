import React, { useContext } from 'react'
import './main.css'
import {assets} from '../../assets/assets.js'
import {Context} from '../../Context/Context.jsx'

function Main() {

  const {input,setInput,recentPrompt,setRecentPrompt,prevPrompts,setPrevPrompts,onSent,showResult,setShowResult,loading,setLoading,resultData,setResultData} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

          {
          !showResult ? 
          <>
          <div className="greet">
            <p><span>Hello, Yash.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest some good web development projects for college event</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Suggest some good web development projects for college event</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Suggest some good web development projects for college event</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Suggest some good web development projects for college event</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          </>  :
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ?
                        <div className='loader'>
                          <hr />
                          <hr />
                          <hr />
                        </div> :
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                      }
              
            </div>
          </div>
          }
          
          <div className="main-bottom">
            <div className="search-box">
              <input type="text" placeholder='Enter a prompt here' onChange={(e)=>setInput(e.target.value)} value={input} />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" onClick={onSent}/>
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate data , kindly verify the data before using it.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Main