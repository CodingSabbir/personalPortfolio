import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const FatchData = () => {
const portfolio = [
{
img:
'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
category: ['all', 'frontend', 'ux-ui'],
},
{
img: 'https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png',
category: ['all', 'mobile', 'ux-ui'],
},
{
img: 'https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-front-end-development-it-concept-png-image_4626863.png',
category: ['all', 'frontend'],
},
{
img: 'https://t3.ftcdn.net/jpg/05/31/71/02/360_F_531710260_ByieqNe7Ut6QBHgIR7xgdsxH7gICrHr1.jpg',
category: ['all', 'frontend', 'ux-ui'],
},
{
img: 'https://static.vecteezy.com/system/resources/thumbnails/019/617/561/small/group-of-travel-people-png.png',
category: ['all', 'others'],
},
{
img:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRah3jkk00tI1fGkYPaKRxjNclphW-ccUw3bw&usqp=CAU',
category: ['all', 'frontend', 'ux-ui'],
},
{
img: 'https://t3.ftcdn.net/jpg/05/31/71/02/360_F_531710260_ByieqNe7Ut6QBHgIR7xgdsxH7gICrHr1.jpg',
category: ['all', 'frontend', 'ux-ui'],
},
{
img: 'https://png.pngtree.com/png-vector/20200718/ourmid/pngtree-ui-design-concept-flat-design-png-image_2307292.jpg',
category: ['all', 'mobile', 'ux-ui'],
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
<div id='portfolio' className='mx-5 md:mx-10'>
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
        <Link  to="/mobile" style={filter === 'mobile' ? activeLinkStyle : linkStyle} onClick={()=>
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
        <div className="portfolio__container grid grid-cols-2 md:grid-cols-4 py-4 gap-5">
            {projects.map((item) =>
            item.filtered === true ? (
          
             <div>
                <p class="block rounded-lg p-2 md:p-4 shadow-sm shadow-indigo-100">
                    <img alt="Home" src={item.img} class=" h-28 md:h-56 w-full rounded-md object-cover" />


                </p>
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



