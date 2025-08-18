import React from 'react';

const ImpressumPage = () => {
    return (
        <div className="container mx-auto py-60">
            <h1 className="text-2xl font-bold mb-4">Impressum</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
                <p>
                    [Dein Name/Firmenname]<br />
                    [Deine Adresse]<br />
                    [Deine Postleitzahl, Ort]<br />
                    [Dein Land]
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
                <p>
                    Telefon: [Deine Telefonnummer]<br />
                    E-Mail: [Deine E-Mail-Adresse]
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: [Deine USt-ID]
                </p>
            </section>
        </div>
    );
};

export default ImpressumPage;