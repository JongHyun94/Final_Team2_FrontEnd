import React from "react";
import { ResponsivePie } from '@nivo/pie'
const data = [
    {
      "id": "1분기",
      "label": "1분기",
      "value": 220,
      "color": "hsl(128, 70%, 50%)"
    },
    // {
    //   "id": "java",
    //   "label": "java",
    //   "value": 72,
    //   "color": "hsl(70, 70%, 50%)"
    // },
    {
      "id": "2분기",
      "label": "2분기",
      "value": 149,
      "color": "hsl(300, 70%, 50%)"
    },
    {
      "id": "3분기",
      "label": "3분기",
      "value": 125,
      "color": "hsl(172, 70%, 50%)"
    },
    {
      "id": "4분기",
      "label": "4분기",
      "value": 182,
      "color": "hsl(180, 70%, 50%)"
    }
]
function Data4() {
      return(
        <header className="App-header">
          <div
            style={{
              width: "80%",
              height: "400px",
              color: "#000",
              margin: "0 auto"
            }}
          >
  <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'ruby'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'c'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'go'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'python'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'scala'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'lisp'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'firstQuarter'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'javascript'
              },
              id: 'lines'
          }
      ]}
      legends={[
          {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000'
                      }
                  }
              ]
          }
      ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </header>


    );
}
export default Data4;
