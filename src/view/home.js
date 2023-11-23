import Data from "../source/chart.json";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

function Home() {

    const options = {
        scales: {
            x: {
                type: 'category',
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-6">Main Content</h1>
            <div className="bg-white rounded shadow">
                {Data.map((obj) => <Line data={obj} options={options} />)}
            </div>
        </div>
    );
}

export default Home;
