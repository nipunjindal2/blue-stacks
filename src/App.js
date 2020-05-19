import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import CampaignTable from './containers/CampaignTable/CampaignTable'

class App extends Component {
  render(){
    return(
      <div>
          <Layout>
            <CampaignTable />
          </Layout>
      </div>
    )
  }
}
export default App;
