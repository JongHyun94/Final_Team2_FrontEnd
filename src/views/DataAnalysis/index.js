import Data1 from "./Data1";
import Data2 from "./Data2";
import Data3 from "./Data3";
import Data4 from "./Data4";
// import '@toast-ui/chart/dist/toastui-chart.min.css';
import "./DataAnalysis.css"
// import { BarChart, LineChart } from '@toast-ui/react-chart';






function DataAnalysis(props) {

  return (
    <div className="DataAnalysis">
      <div className="DataAnalysis_row1">
        <div className="DataAnalysis_col">
          <Data1 />
          </div>
        <div className="DataAnalysis_col">
          <Data2 />
          </div>
      </div>
      <div className="DataAnalysis_row2">
        <div className="DataAnalysis_col">
          <Data3 />
        </div>
        <div className="DataAnalysis_col">
          <Data4 />
        </div>
      </div>
    </div>
  );
}
export default DataAnalysis;
