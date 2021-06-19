import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
const data = [
  {
    country: "Amsterdam, Netherlands",
    "hot dog": 97,
    "hot dogColor": "hsl(347, 70%, 50%)",
    burger: 198,
    burgerColor: "hsl(103, 70%, 50%)",
    sandwich: 75,
    sandwichColor: "hsl(336, 70%, 50%)",
    kebab: 88,
    kebabColor: "hsl(123, 70%, 50%)",
    fries: 52,
    friesColor: "hsl(8, 70%, 50%)",
    donut: 119,
    donutColor: "hsl(111, 70%, 50%)"
  },
  {
    country: "Mexico City, Mexico",
    "hot dog": 8,
    "hot dogColor": "hsl(165, 70%, 50%)",
    burger: 177,
    burgerColor: "hsl(204, 70%, 50%)",
    sandwich: 117,
    sandwichColor: "hsl(228, 70%, 50%)",
    kebab: 149,
    kebabColor: "hsl(57, 70%, 50%)",
    fries: 160,
    friesColor: "hsl(34, 70%, 50%)",
    donut: 61,
    donutColor: "hsl(207, 70%, 50%)"
  },
  {
    country: "Fetters Hot Springs-Agua Caliente, California",
    "hot dog": 65,
    "hot dogColor": "hsl(274, 70%, 50%)",
    burger: 162,
    burgerColor: "hsl(206, 70%, 50%)",
    sandwich: 64,
    sandwichColor: "hsl(239, 70%, 50%)",
    kebab: 169,
    kebabColor: "hsl(264, 70%, 50%)",
    fries: 57,
    friesColor: "hsl(92, 70%, 50%)",
    donut: 81,
    donutColor: "hsl(120, 70%, 50%)"
  },
  {
    country: "Manhattan, New York",
    "hot dog": 74,
    "hot dogColor": "hsl(18, 70%, 50%)",
    burger: 21,
    burgerColor: "hsl(191, 70%, 50%)",
    sandwich: 88,
    sandwichColor: "hsl(132, 70%, 50%)",
    kebab: 63,
    kebabColor: "hsl(94, 70%, 50%)",
    fries: 197,
    friesColor: "hsl(46, 70%, 50%)",
    donut: 42,
    donutColor: "hsl(290, 70%, 50%)"
  }
];
function Data4() {
    return(
      <header className="App-header">
        <div
          style={{
            width: "60%",
            height: "400px",
            color: "#000",
            margin: "0 auto"
          }}
        >
          <ResponsiveBar
            data={data}
            keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            groupMode="grouped"
            layout="horizontal"
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            fill={[
              {
                match: {
                  id: "fries"
                },
                id: "dots"
              },
              {
                match: {
                  id: "sandwich"
                },
                id: "lines"
              }
            ]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "country",
              legendPosition: "middle",
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "food",
              legendPosition: "middle",
              legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1
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
