import React,{Fragment, Component} from 'react';

class FormStyle extends Component{
	render(){
		return(
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-5 content-inner chosesus-content text-white">
							<h2 className="box-title m-b15 " >Na pravom ste mestu<span className="bg-primary"></span></h2>
							<p className="font-16 op8" >Dostupni smo putem telefona, email-a, Skype-a, društvenih mreža i putem ThinkIT aplikacije za klijente.</p>
							<h3 className="font-weight-500 m-b50 op6 " >Više od <strong>10.000</strong> zadovoljnih klijenata na balkanu!</h3>
							<h4 className="" >& Šta možete očekivati?</h4>
							<ul className="list-checked primary " >
								<li><span>Analiziramo i savetujemo Vas o najboljem mogućem rešenju za Vaš poslovni plan.</span></li>
								<li><span>Nudimo Vam najkompletnija IT rešenja shodno vašim potrebama.</span></li>
								<li><span>Koristimo najnovije tehnologije za razvoj web softvera i mobilnih aplikacija.</span></li>
							</ul>
						</div>
						<div className="col-lg-7 col-md-7 m-b30">
							<form className="inquiry-form  dzForm"  action="script/contact.php">
								<div className="dzFormMsg"></div>
								<h3 className="box-title m-t0 m-b10">BESPLATNE KONSULTACIJE! <span className="bg-primary"></span></h3>
								<p>Pošaljite nam Vašu ideju, a mi ćemo pronaći najkompletnije rešenje i pretvorićemo je u realnost.</p>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-user text-primary"></i></span>
												<input name="dzName" type="text" required className="form-control" placeholder="Ime i prezime" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
												<input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Broj telefona" />
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-email text-primary"></i></span>
												<input name="dzEmail" type="email" className="form-control" required placeholder="E-mail adresa" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
												<input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Sektor" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-file text-primary"></i></span>
												<input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Naslov" />
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
												<textarea name="dzMessage" rows="4" className="form-control" required placeholder="Recite nam više o Vašoj ideji"></textarea>
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
												<input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Pošalji poruku!</span> </button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
export default FormStyle;