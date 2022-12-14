import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
	const history = useHistory();
	const onAddQuoteHandler = (quoteData) => {
		history.push('/quotes');
	};
	return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};
export default NewQuote;
