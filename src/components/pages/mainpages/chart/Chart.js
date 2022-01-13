import React from 'react';
import './Chart.css'
import CanvasJSReact from '../../../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart = () => {
    const options = {

        exportEnabled: true,

        animationEnabled: true,
        title: {
            text: "YGO TOKEN ALLOCATION"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 1, label: "Airdrop" },
                { y: 10, label: "Partners" },
                { y: 22, label: "Farming" },
                { y: 8, label: "Liquidity Pool" },
                { y: 4, label: "Marketing" },
                { y: 10, label: "IDO" },
                { y: 5, label: "Private Sale" },
                { y: 16, label: "Team" },
                { y: 24, label: "Ecosystem fund" }

            ]
        }]
    }
    return (
        <div className='piechart' style={{ backgroundColor: "#222121" }} >
            <div className='pie' >
                <div className="heading white-heading" style={{ padding: "50px" }, { fontSize: "60px" }}>YGO TOKEN</div>
                <div class="abc">

                    <p><p>YGO token is the native currency in the game. It allows token holders to play, invest and also be part of the game. There is a fixed supply of YGO tokens.</p></p>
                </div>
                <div className='chart' >
                    <CanvasJSChart options={options}
                    /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}

                </div>

            </div>

        </div >
    );
}

export default Chart;
