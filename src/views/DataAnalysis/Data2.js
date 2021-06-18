import { ResponsiveBar } from "@nivo/bar";

function Data2(props) {
  const data = [
    {
      country: "AD",
      "hot dog": 162,
      "hot dogColor": "hsl(198, 70%, 50%)",
      burger: 152,
      burgerColor: "hsl(136, 70%, 50%)",
      sandwich: 98,
      sandwichColor: "hsl(109, 70%, 50%)",
      kebab: 137,
      kebabColor: "hsl(344, 70%, 50%)",
      fries: 109,
      friesColor: "hsl(282, 70%, 50%)",
      donut: 113,
      donutColor: "hsl(11, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 10,
      "hot dogColor": "hsl(216, 70%, 50%)",
      burger: 55,
      burgerColor: "hsl(317, 70%, 50%)",
      sandwich: 100,
      sandwichColor: "hsl(357, 70%, 50%)",
      kebab: 95,
      kebabColor: "hsl(228, 70%, 50%)",
      fries: 90,
      friesColor: "hsl(142, 70%, 50%)",
      donut: 14,
      donutColor: "hsl(120, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 125,
      "hot dogColor": "hsl(290, 70%, 50%)",
      burger: 121,
      burgerColor: "hsl(342, 70%, 50%)",
      sandwich: 89,
      sandwichColor: "hsl(325, 70%, 50%)",
      kebab: 142,
      kebabColor: "hsl(307, 70%, 50%)",
      fries: 145,
      friesColor: "hsl(204, 70%, 50%)",
      donut: 132,
      donutColor: "hsl(331, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 170,
      "hot dogColor": "hsl(170, 70%, 50%)",
      burger: 179,
      burgerColor: "hsl(19, 70%, 50%)",
      sandwich: 9,
      sandwichColor: "hsl(12, 70%, 50%)",
      kebab: 89,
      kebabColor: "hsl(262, 70%, 50%)",
      fries: 157,
      friesColor: "hsl(194, 70%, 50%)",
      donut: 168,
      donutColor: "hsl(147, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 24,
      "hot dogColor": "hsl(128, 70%, 50%)",
      burger: 151,
      burgerColor: "hsl(158, 70%, 50%)",
      sandwich: 31,
      sandwichColor: "hsl(177, 70%, 50%)",
      kebab: 18,
      kebabColor: "hsl(124, 70%, 50%)",
      fries: 48,
      friesColor: "hsl(5, 70%, 50%)",
      donut: 87,
      donutColor: "hsl(301, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 110,
      "hot dogColor": "hsl(30, 70%, 50%)",
      burger: 176,
      burgerColor: "hsl(227, 70%, 50%)",
      sandwich: 126,
      sandwichColor: "hsl(85, 70%, 50%)",
      kebab: 57,
      kebabColor: "hsl(12, 70%, 50%)",
      fries: 145,
      friesColor: "hsl(48, 70%, 50%)",
      donut: 140,
      donutColor: "hsl(114, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 168,
      "hot dogColor": "hsl(141, 70%, 50%)",
      burger: 108,
      burgerColor: "hsl(125, 70%, 50%)",
      sandwich: 158,
      sandwichColor: "hsl(281, 70%, 50%)",
      kebab: 29,
      kebabColor: "hsl(64, 70%, 50%)",
      fries: 106,
      friesColor: "hsl(56, 70%, 50%)",
      donut: 25,
      donutColor: "hsl(295, 70%, 50%)",
    },
  ];
  
  return (
    <div style={{ height: 200 }}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
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
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
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
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
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
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}

export default Data2;
