import { Fragment } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Houssam', text: 'Learning React' },
	{ id: 'q2', author: 'Houssam', text: 'finishing this course' },
];

const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No Quote Found! </p>;
	}
	return (
		<Fragment>
			<HighlightedQuote
				text={quote.text}
				author={quote.author}
			/>
			<Route
				path={match.path}
				exact
			>
				<div className='centered'>
					<Link
						className='btn--flat'
						to={`${match.url}/comments`}
					>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};
export default QuoteDetail;
