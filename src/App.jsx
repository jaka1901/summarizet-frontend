import React, { useState } from 'react'
import TextSummarizer from './components/TextSummarizer'
import FileSummarizer from './components/FileSummarizer'
import AudioSummarizer from './components/AudioSummarizer'
import VideoSummarizer from './components/VideoSummarizer'

const App = () => {
  const [type, setType] = useState('text')

  const renderComponent = () => {
    switch (type) {
      case 'text': return <TextSummarizer />
      case 'file': return <FileSummarizer />
      case 'audio': return <AudioSummarizer />
      case 'video': return <VideoSummarizer />
      default: return null
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Summarize Anything</h1>
      <label>
        Select summarization type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="text">Text</option>
          <option value="file">File (PDF/DOCX)</option>
          <option value="audio">Audio</option>
          <option value="video">Video</option>
        </select>
      </label>
      <div style={{ marginTop: 20 }}>
        {renderComponent()}
      </div>
    </div>
  )
}

export default App
