import { Link } from 'react-router-dom';
import './WhatISell.css';

function WhatISell() {
return (
<div className="WhatISell">
<h2>t.me/dankedrops</h2>
<p>▹blablablablablabla</p>
<Link to="/" className="BackButton">Go Back</Link>
</div>
);
}

export default WhatISell;