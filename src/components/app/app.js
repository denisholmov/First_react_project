import { Component } from 'react';

import AppInfo from '../app-info/app-info.js';
import SearchPanel from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "John C.", salary: 800, increase: false, id: 1 },
				{ name: "Alex M.", salary: 3000, increase: true, id: 2 },
				{ name: "Carl W.", salary: 5000, increase: false, id: 3 },
			]
		}
	}


	render() {
		return (
			<div className="app" >
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList
					data={this.state.data}
					onDelete={id => console.log(id)} />
				<EmployeesAddForm />
			</div>
		);
	}
}

export default App;