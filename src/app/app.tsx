import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NetworkDetailsView from '../views/network-details-view'
import NetworksListView from '../views/networks-list-view'

const App = () => (
  <div className="App">
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path='network/:networkId' element={<NetworkDetailsView />} />
        <Route path='*' element={<NetworksListView />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
