import { ResponsiveBar } from '@nivo/bar'

function Data1(props) { 
  const data = [
    {
      "month": "전전달",
      "treatments": 59,
      "treatmentsColor": "hsl(287, 70%, 50%)"
    },
    {
      "month": "전달",
      "treatments": 40,
      "treatmentsColor": "hsl(67, 70%, 50%)"
    },
    {
      "month": "이번달",
      "treatments": 72,
      "treatmentsColor": "hsl(67, 70%, 50%)"
    }
  ];

  return (
  <div style={{height:"600px"}}>
    <ResponsiveBar
        data={data}
        keys={[ 'treatments' ]}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        fill={[
            {
                match: {
                    id: 'treatments'
                }
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '월별',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '진료수',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
  </div>
)
}

export default Data1;