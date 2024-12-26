import { Button, Layout, Typography } from 'antd';
import './assets/main.scss';

import { HeaderHome } from './HeaderHome';

const { Content } = Layout;
const { Text } = Typography;

function App() {
  return (
    <Layout className="app">
      <HeaderHome />
      <Content className="app content">
        <Text>Didier des champs</Text>
        <Button className="app button">Didi</Button>
      </Content>
    </Layout>
  );
}

export default App;
