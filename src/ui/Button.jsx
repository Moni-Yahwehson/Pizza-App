import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Button({ children, disabled, to }) {
  const className =
    'inline-block rounded-fullbg-yellow-400 px-4 py-3 font-semibolduppercase tracking-wide text-stone-800 transition-colorsduration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-nonefocus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
