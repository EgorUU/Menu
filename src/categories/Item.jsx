import React from 'react'

const Item = ({ arrayChoice, Title }) => {
    return (
        <div className="main-item-1">
	        	<h1 className="title">{Title}</h1>
	        	<div className="menu">
	        		{
	        			arrayChoice.map(el => (
	        				<>
	        					<div className="item">        					
		        					<div className="item-content">
		        						<h1 className="name">
		        							{el.name}
		        						</h1>
		        						{el.structure?.length && <p className="structure">
		        							{el.structure}
		        						</p>}
		        					</div>
		        				</div>
		        				{
		        					el.image?.length > 0 && <img src={el.image} id="image" alt="уйц" />
		        				}
	        				</>
	        			))
	        		}
	        	</div>
	    </div>
    )
}

export default Item