import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FatchData = () => {
const portfolio = [
{
name: 'My best client',
category: ['all', 'frontend', 'ux-ui'],
},
{
name: 'My favorite case',
category: ['all', 'mobile', 'ux-ui'],
},
{
name: 'A old job',
category: ['all', 'frontend'],
},
{
name: 'It is a really cool website',
category: ['all', 'frontend', 'ux-ui'],
},
{
name: 'Something more',
category: ['all', 'others'],
},
];

const [filter, setFilter] = useState('all');
const [projects, setProjects] = useState([]);

useEffect(() => {
setProjects(portfolio);
}, []);

useEffect(() => {
setProjects([]);
const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
setProjects(filtered);
}, [filter]);

const linkStyle = {
padding: '4px 8px',
borderRadius: '8px',
backgroundColor: 'transparent',
textDecoration: 'none',
color: '#fff',

};

const activeLinkStyle = {
...linkStyle,
backgroundColor: '#FFB400',
color: '#000',
};

return (
<div className='mx-5 md:mx-10'>
    <div>
        <h1 className='text-center mt-5  text-[51px] font-semibold text-[#FFB400] uppercase'> portfolio</h1>
    </div>
    <div className="portfolio__labels mt-5 ">
        <Link to="/" style={filter === 'all' ? activeLinkStyle : linkStyle} onClick={()=> setFilter('all')}
        >
        All
        </Link>
        <Link to="/frontend" style={filter === 'frontend' ? activeLinkStyle : linkStyle} onClick={()=>
        setFilter('frontend')}
        >
        Frontend
        </Link>
        <Link to="/mobile" style={filter === 'mobile' ? activeLinkStyle : linkStyle} onClick={()=>
        setFilter('mobile')}
        >
        Mobile
        </Link>
        <Link to="/ux-ui" style={filter === 'ux-ui' ? activeLinkStyle : linkStyle} onClick={()=>
        setFilter('ux-ui')}
        >
        UX/UI
        </Link>
        <Link to="/others" style={filter === 'others' ? activeLinkStyle : linkStyle} onClick={()=>
        setFilter('others')}
        >
        Others
        </Link>
    </div>
    <div className="portfolio__container">
        {/* {projects.map(item => (item.filtered === true ? <span key={item.name}>{item.name}</span> : ''))} */}
        <div className="portfolio__container">
            {projects.map((item) =>
            item.filtered === true ? (
            <div key={item.name} className="project-item">
                <h3>{item.name}</h3>
              
            </div>
            ) : (
            ''
            )
            )}
        </div>
    </div>
</div>
);
};

export default FatchData;
