import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
	const [feedback, setFeedBack] = useState(FeedbackData);
	const deleteFeedback = (id) => {
		// console.log('App ==>', id);
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedBack(feedback.filter((item) => item.id !== id));
		}
	};
	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
