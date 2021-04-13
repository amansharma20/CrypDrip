import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

interface CoinPriceGraphProps {
    dataString: String;
}

const CoinPriceGraph = ( { dataString }: CoinPriceGraphProps) => {

    const data = JSON.parse(dataString);

        return (
            <View>
                <LineChart
    data={{
      labels: ["-7d", "-6d", "-5d", "-4d", "-3d", "-2d", "-1d", "now"],
      datasets: [
        {
          data
        }
      ]
    }}
    width={Dimensions.get("window").width - 10} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    withInnerLines={false}
    withOuterLines={false}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      // backgroundColor: "#00000",
      // backgroundGradientFrom: "#00000",
      // backgroundGradientTo: "#00000",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "0",
        strokeWidth: "0",
        stroke: "#FFFFFF"
      }
    }}
    // bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
            </View>
        );
    };

export default CoinPriceGraph;
