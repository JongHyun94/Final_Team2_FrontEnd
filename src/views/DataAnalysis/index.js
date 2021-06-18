import Data1 from "./Data1";
import Data2 from "./Data2";
import Data3 from "./Data3";
import Data4 from "./Data4";
import '@toast-ui/chart/dist/toastui-chart.min.css';
import { BarChart, LineChart } from '@toast-ui/react-chart';

function DataAnalysis(props) {
  return (
    <>
    <div>
      <div><Data1/></div>
      <div><Data2/></div>
    </div>
    <div>
      <div><Data3/></div>
      <div><Data4/></div>
    </div>
    </>
  );
}
export default DataAnalysis;
