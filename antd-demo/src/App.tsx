import { ConfigProvider } from "antd";
import AppRoutes from "./routes";
// const backgroundColor = "#242424";

function App() {
  return (
    <ConfigProvider>
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
