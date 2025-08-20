import React from "react";

const ImpressumPage = () => {
	return (
		<div className="container mx-auto py-60">
			<h1 className="text-2xl font-bold mb-4">Impressum</h1>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					Angaben gemäß § 5 TMG
				</h2>
				<p>
					Oleg und Söhne <br />
					Oleg Krivosheev (Dipl.Ing.) - Inhaber <br />
					Hagen, Sunderlohstr. 63, 58091 <br />
					Handwerksrolle № 70972085 (IHK Dortmund) <br />
					StId 321/5149/1999 <br />
					Bankverbindung - Kto-Nr 100181929 BLZ <br />
					Am Hüggert 18, 44227 Dortmund <br />
					45050001 Sparkasse Hagen <br />
					IBAN – DE77 4505 0001 0100 1819 29 <br />
					BIC – WELADE3HXXX
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Kontakt</h2>
				<p>
					Telefon: +49 2331 306 3443
					<br />
					Mobil: +49 177 2779246
					<br />
					Fax: +49 2331 306 1283
					<br />
					E-Mail: post@olegundsoehne.de
				</p>
			</section>
		</div>
	);
};

export default ImpressumPage;
