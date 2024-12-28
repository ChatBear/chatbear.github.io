import { Layout } from 'antd';
import './assets/main.scss';

import { HeaderHome } from './HeaderHome';

// const { Content } = Layout;

function App() {
  return (
    <Layout className="app">
      <HeaderHome style={{ borderBottom: '2px solid white' }} />
    </Layout>
  );
}

export default App;
