import { Layout } from 'antd';
import './assets/main.scss';

import { HeaderHome } from './HeaderHome';

const { Content } = Layout;

function App() {
  return (
    <Layout className="app">
      <HeaderHome style={{ borderBottom: '2px solid white' }} />
      <Content className="app content"></Content>
    </Layout>
  );
}

export default App;
