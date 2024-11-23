import { Link } from 'react-router-dom';
import './WhatIDo.css';

function WhatIDo() {
return (
<div className="WhatIDo">
<h2>t.me/dankedrops</h2>
<p>blablablablabla</p>
<Link to="/" className="BackButton">Go Back</Link>
</div>
);
}

export default WhatIDo;