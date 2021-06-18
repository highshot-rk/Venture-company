import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { withStyles } from "@material-ui/styles";
import { COLORS } from '../../app/config';

const VictoryChart = ({ data }) => {
  return (
      <VictoryPie
        innerRadius={178}
        cornerRadius={25}
        padAngle={1}
        padding={10}
        labels={() => null}
        data={data}
        style={{
          data: {
            fill: datum => datum.fill,
            opacity: datum =>  datum.opacity
          }
        }}
      />

  );
};

export default withStyles({}, { withTheme: true })(VictoryChart);
