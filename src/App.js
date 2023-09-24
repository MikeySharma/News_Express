
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
import React,{useState} from 'react'
import NewsContainer from './components/NewsContainer';


const App =  () => {
  const [pageSize] = useState(8);
  const [apiKey] = useState(process.env.REACT_APP_NEWS_EXPRESS)



  
    return (
      <div>
        <NewsContainer apiKey={apiKey}  key="general" pageSize={pageSize}  />

        {/* <Router>
       
          <Routes>
            <Route exact path="/" element={<NewsContainer apiKey={apiKey}  key="general" pageSize={pageSize}  />}></Route>
            <Route exact path="/general" element={<NewsContainer apiKey={apiKey}  key="general" pageSize={pageSize}  />}></Route>
            <Route exact path="/business" element={<NewsContainer apiKey={apiKey}  key="business" pageSize={pageSize}  />}></Route>
            <Route exact path="/entertainment" element={<NewsContainer apiKey={apiKey}  key="entertainment" pageSize={pageSize} />}></Route>
            <Route exact path="/science" element={<NewsContainer apiKey={apiKey}  key="science" pageSize={pageSize} />}></Route>
            <Route exact path="/health" element={<NewsContainer apiKey={apiKey}  key="health" pageSize={pageSize}  />}></Route>
            <Route exact path="/sports" element={<NewsContainer apiKey={apiKey}  key="sports" pageSize={pageSize}  />}></Route>
            <Route exact path="/technology" element={<NewsContainer apiKey={apiKey}  key="technology" pageSize={pageSize}/>}></Route>
          </Routes>
        </Router> */}
      </div>
    )

}

export default App;