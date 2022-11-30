import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Houssam', text: 'Learning React' },
	{ id: 'q2', author: 'Houssam', text: 'finishing this course' },
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
