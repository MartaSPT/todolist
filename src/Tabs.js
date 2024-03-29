import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Separadores(){
    return(
  <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Complete</Tab>
      <Tab>Incomplete</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel> 
  </Tabs>
);
    }

    export default Separadores;