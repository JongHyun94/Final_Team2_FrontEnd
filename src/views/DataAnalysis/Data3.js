import { ResponsiveBar } from '@nivo/bar'
const patient_data = [
  {
    "dayOfWeek": "월",
    "10대": 5,
    "20대": 1,
    "30대": 3,
    "40대": 15,
    "50대": 8,
    "60대": 6,
    "70대": 4,
    "80대": 3,
    "90대": 2,
  },
  {
    "dayOfWeek": "화",
    "10대": 3,
    "20대": 4,
    "30대": 6,
    "40대": 7,
    "50대": 11,
    "60대": 10,
    "70대": 1,
    "80대": 1,
    "90대": 1,
  },
  {
    "dayOfWeek": "수",
    "10대": 18,
    "20대": 5,
    "30대": 3,
    "40대": 20,
    "50대": 4,
    "60대": 3,
    "70대": 0,
    "80대": 0,
    "90대": 0,
  },
  {
    "dayOfWeek": "목",
    "10대": 2,
    "20대": 1,
    "30대": 10,
    "40대": 6,
    "50대": 6,
    "60대": 7,
    "70대": 2,
    "80대": 2,
    "90대": 1,
  },
  {
    "dayOfWeek": "금",
    "10대": 10,
    "20대": 19,
    "30대": 16,
    "40대": 12,
    "50대": 9,
    "60대": 8,
    "70대": 1,
    "80대": 1,
    "90대": 1,
  },
];
function Data3(props) {

  return (
    <>
      <div className="DataAnalysis_col_header" >요일별 나이대별 환자 검사 통계</div>
      <div className="DataAnalysis_col_content" >
        <ResponsiveBar
          data={patient_data}
          keys={['10대', '20대', '30대', '40대', '50대', '60대', '70대', '80대', '90대']}
          indexBy="dayOfWeek"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'accent' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '요일',
            legendPosition: 'middle',
            legendOffset: 40
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '검사 수',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
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
    </>
  );
}

export default Data3;