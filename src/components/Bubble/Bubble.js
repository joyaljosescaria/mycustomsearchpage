import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./ChildComponent";
import "./bubble.css";
import React, { useState, useEffect } from 'react';

export default function Bubble(props) {

	const [task, setTask] = useState('')
	const [datas , setDatas ] = useState(props.datas)

	console.log(datas)

	const options = {
		size: 180,
		minSize: 20,
		gutter: 28,
		provideProps: true,
		numCols: 10,
		fringeWidth: 160,
		yRadius: 130,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}



	const dltTask = (task) => {
		setTask(task)
	}

	useEffect(() => {
		props.taskdelete(task)
	}, [task])

	const children = datas.map((data, i) => {
		return <Child dltTask={dltTask} data={data} className="child" key={i} />
	});

	return (<BubbleUI options={options} className="myBubbleUI">
		{children}
	</BubbleUI>)
};