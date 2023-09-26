
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {useState} from 'react'
import NewsContainer from './components/NewsContainer';


const App =  () => {
  const [pageSize] = useState(8);
  const [apiKey] = useState("66513988b3304705bb31ddfd0b9d4083")



  
    return (
      <div>
        {/* <NewsContainer apiKey={apiKey} pageSize={pageSize}  /> */}

        <Router>
       
          <Routes>
            <Route exact path="/" element={<NewsContainer apiKey={apiKey} category={'general'} key="general" pageSize={pageSize}  />}></Route>
            <Route exact path="/general" element={<NewsContainer apiKey={apiKey} category={'general'} key="general" pageSize={pageSize}  />}></Route>
            <Route exact path="/business" element={<NewsContainer apiKey={apiKey} category={'business'} key="business" pageSize={pageSize}  />}></Route>
            <Route exact path="/entertainment" element={<NewsContainer apiKey={apiKey} category={'entertainment'} key="entertainment" pageSize={pageSize} />}></Route>
            <Route exact path="/science" element={<NewsContainer apiKey={apiKey} category={'science'} key="science" pageSize={pageSize} />}></Route>
            <Route exact path="/health" element={<NewsContainer apiKey={apiKey} category={'health'} key="health" pageSize={pageSize}  />}></Route>
            <Route exact path="/sports" element={<NewsContainer apiKey={apiKey} category={'sports'} key="sports" pageSize={pageSize}  />}></Route>
            <Route exact path="/technology" element={<NewsContainer apiKey={apiKey} category={'technology'} key="technology" pageSize={pageSize}/>}></Route>
          </Routes>
        </Router>
      </div>
    )

}

export default App;