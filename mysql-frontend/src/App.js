import React, { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:2222/api/film")
			.then(d => d.json())
			.then(d => {
				setData(d.data);
			})
			.catch(err => {
				console.error(`Error is: `, err.message);
			});
	}, []);
	return (
		<div className="App">
			<table border="1">
				<tbody>
					<th>ID</th>
					<th>NAME</th>
					<th>TITLE</th>
					<th>YEAR</th>
					{data.map(([id, name, year, title]) => (
						<tr key={id}>
							<td>{id}</td>
							<td>{name}</td>
							<td>{year}</td>
							<td>{title}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
