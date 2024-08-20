/** @format */

import "../styles/Donations.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useRef } from "react";

Chart.register(...registerables, ChartDataLabels);

const Donations = () => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		if (chartInstance.current) {
			chartInstance.current.destroy();
		}

		const myChartRef = chartRef.current.getContext("2d");

		chartInstance.current = new Chart(myChartRef, {
			type: "pie",
			data: {
				datasets: [
					{
						data: [25, 75],
						backgroundColor: [
							"rgb(183, 205, 255)",
							// 'rgb(54, 162, 235)',
							// 'rgb(255, 205, 86)'
						],
					},
				],
			},
			options: {
				plugins: {
					datalabels: {
						color: "#02101E",
						formatter: (value, context) => {
							const total = context.chart.data.datasets[0].data.reduce(
								(a, b) => a + b,
								0
							);
							const percentage = ((value / total) * 100).toFixed(1) + "%";
							return percentage;
						},
						font: {
							weight: "bold",
						},
					},
				},
			},
		});

		return () => {
			if (chartInstance.current) {
				chartInstance.current.destroy();
			}
		};
	}, []);

	return (
		<main className="MainSection">
			<section className="galaxy">
				{/* Column1 */}
				<div className="column1">
					<img src="/Donations.png" alt="img" id="imgDonations" />

					<div className="mySupportBtn">
						<button className="mySupportBtn">Support Bariki</button>
					</div>
				</div>

				{/* Column 2 */}
				<div className="column2">
					<div className="BackBtn">
						<Link to="/">
							<button>Back Home</button>
						</Link>
					</div>

					<p className="star">Donate to who I want</p>

					<div className="mt-5 searchbar">
						<form>
							<input
								type="text"
								placeholder="Type prompt here"
								className="InputSearch"
							/>
							<CiSearch className="ml-[26.7rem] mt-[-1.8rem] font-bold" />
						</form>
					</div>

					<p className="moon">Donate how I want</p>

					<div className="pieChartContainer">
						<div className="emptycontainer"></div>
						<div className="pieChart">
							<canvas ref={chartRef} className="" />
						</div>
					</div>

					<div className="myAdministrativeBtn1">
						<button className="myAdministrativeBtn">Administrative</button>
					</div>

					<div className="myAidBtn2">
						<button className="myAidBtn">Aid</button>
					</div>

					<Link to="/CustomerDonation">
						<div className="myCompleteMyDonationBtn2">
							<button className="myCompleteMyDonationBtn">
								Complete My Donation
							</button>
						</div>
					</Link>
				</div>
			</section>
		</main>
	);
};

export default Donations;
