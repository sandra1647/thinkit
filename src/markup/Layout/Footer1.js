import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer1 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase">
                    <div className="footer-top bg-primary">
                        <div className="container" >
                            <div className="row">
                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Ocean ThinkIT</h5>
                                        <ul>
											<li><Link to={"#"}>O nama </Link></li>
                                            <li><Link to={"#"}>Usluge </Link></li>
                                            <li><Link to={"#"}>Blog</Link></li>
                                            <li><Link to={"#"}>Kontakt</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Naši proizvodi</h5>
                                        <ul>
                                            <li><Link to={"#"}>GoFitness</Link></li>
                                            <li><Link to={"#"}>GoKinder</Link></li>
                                            <li><Link to={"#"}>GoSchool</Link></li>
                                            <li><Link to={"#"}>IZV aplikacija</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Kontakt informacije</h5>
                                        <ul>
                                            <li><i className="ti-location-pin"></i><strong>adresa</strong> Teodora Drajzera 34, 11000 Beograd </li>
                                            <li><i className="ti-mobile"></i><strong>telefon</strong> (+381) 060 0 300 518</li>
                                            <li><i className="ti-email"></i><strong>email</strong>info@thinkit.rs</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="widget">
                                        <h5 className="m-b30 text-white">Mesečna obaveštenja</h5>
                                        <p className="text-capitalize m-b20">Pretplatite se na ThinkIT newsletter servis.</p>
                                        <div className="subscribe-form m-b20">
                                            <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="input-group">
                                                    <input name="dzEmail" required="required" className="form-control" placeholder="Vaša e-mail adresa" type="email" />
                                                    <span className="input-group-btn">
                                                        <button name="submit" value="Submit" type="submit" className="site-button">Pretplata</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="list-inline m-a0">
                                            <li><Link to={"#"} className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                                            <li><Link to={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 text-left "> <span>2022 © Ocean ThinkIT d.o.o. | Sva prava zadržana.</span> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                                    <div className="widget-link ">
                                        <ul>
                                            <li><Link to={"#"}> Korisnička podrška</Link></li>
                                            <li className="ml-1"><Link to={"#"}> Politika privatnosti</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer1;