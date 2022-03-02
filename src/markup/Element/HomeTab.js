import React,{Fragment,  useState} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';

//Images
import pic5 from './../../images/about/pic5.jpg';
import pic6 from './../../images/about/pic6.jpg';
import pic7 from './../../images/about/pic7.jpg';
import pic8 from './../../images/about/pic8.jpg';

function Para(){
	return(
		<>
			<div className="abuot-box p-lr30">
				<p>OCEAN ThinkIT d.o.o. Vam pruža usluge programiranja i izrade aplikacija koje su potpuno prilagođene Vašem poslovnom planu.</p>
			
			</div>	
		</>
	)
}

const HomeTab = (props) => {
	const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	  
	return(
		<Fragment>			
			<div className="container-fluid">
				<div className="dlab-tabs choseus-tabs">
					<ul className="nav row justify-content-center"  id="myTab" role="tablist">
						<li>
							<Link to ={"#"} className= {classnames({ active : activeTab === '1'}) + ''} onClick={() => { toggle('1'); }}><span className="title-head">IT Biznisa podrška</span></Link>
						</li>
						<li>
							<Link to ={"#"}	className={classnames({active:activeTab === '2'}) + ''} onClick={()=>{ toggle('2');}}><span className="title-head">Web dizajn</span></Link>
						</li>
						<li>
							<Link to ={"#"}	className={classnames({active:activeTab === '3'}) + ''} onClick={()=>{ toggle('3');}}><span className="title-head">Marekting & Optimizacija</span></Link>
						</li>
						<li>
							<Link to ={"#"}	className={classnames({active:activeTab === '4'}) + ''} onClick={()=>{ toggle('4');}}><span className="title-head">IT konsultovanje</span></Link>
						</li>
					</ul>
				</div>	
			</div>
			<div className="container">
				<div className="tab-content chosesus-content">
					<div id="cost" className="tab-pane active">
						<TabContent activeTab={activeTab}>
							<TabPane tabId="1">
								<div className="row p-tb50">
									<div className="col-lg-6 m-b10 col-md-4 about-img " >
										<img src={pic5} alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30 " >
											<h4 className="font-weight-300">IT Biznisa podrška</h4>
											<ul className="list-checked primary">
												<li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
												<li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
												<li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="2">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<img src={pic6} alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Web dizajn</h4>
											<ul className="list-checked primary">
												<li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
												<li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
												<li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="3">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<img src={pic7} alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">Marekting & Optimizacija</h4>
											<ul className="list-checked primary">
												<li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
												<li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
												<li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							<TabPane tabId="4">
								<div className="row p-tb50">
									<div className="col-lg-6 col-md-4 about-img">
										<img src={pic8} alt="" />
									</div>
									<div className="col-lg-6 col-md-8 text-white">
										<div className="p-l30">
											<h4 className="font-weight-300">IT konsultovanje</h4>
											<ul className="list-checked primary">
												<li><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
												<li><span>Latin professor at Hampden-Sydney College in Virginia</span></li>
												<li><span>Random text. It has roots in a piece of classical Latin literature</span></li>
											</ul>
										</div>
										<Para />
									</div>
								</div>
							</TabPane>
							
						</TabContent>
					</div>	
				</div>
			</div>	
		</Fragment>
	)
	
}	
export default HomeTab;