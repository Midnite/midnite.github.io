import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./badger.png"
								alt="Red Badger"
								className="work-image"
							/>
							<div className="work-title">Red Badger</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2018 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./badger.png"
								alt="Red Badger"
								className="work-image"
							/>
							<div className="work-title">Red Badger</div>
							<div className="work-subtitle">
								QA Test Lead
							</div>
							<div className="work-duration">2014 - 2018</div>
						</div>

						<div className="work">
							<img
								src="./ustream.png"
								alt="Ustream"
								className="work-image"
							/>
							<div className="work-title">Ustream (IBM Cloud Video)</div>
							<div className="work-subtitle">
								QA Test Analyst
							</div>
							<div className="work-duration">2012 - 2014</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
