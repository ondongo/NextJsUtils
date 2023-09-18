export function checkout() {
  CinetPay.setConfig({
    apikey: "", //   JE DOIS METTRE MA CLE API
    site_id: "", // VOTRE ID DE SITE
    notify_url: "http://mondomaine.com/notify/",
    mode: "PRODUCTION",
  });

  CinetPay.getCheckout({
    transaction_id: Math.floor(Math.random() * 100000000).toString(), // VOTRE ID DE TRANSACTION
    amount: 100,
    currency: "XOF",
    channels: "ALL",
    description: "Test de paiement",
    //Fournir ces variables pour le paiement par carte bancaire
    customer_name: "Joe", // Le nom du client
    customer_surname: "Down", // Le prénom du client
    customer_email: "down@test.com", // L'email du client
    customer_phone_number: "088767611", // L'email du client
    customer_address: "BP 0024", // Adresse du client
    customer_city: "Antananarivo", // La ville du client
    customer_country: "CM", // Le code ISO du pays
    customer_state: "CM", // Le code ISO de l'état
    customer_zip_code: "06510", // Code postal
  });

  CinetPay.waitResponse(function (data) {
    if (data.status == "REFUSED") {
      if (alert("Votre paiement a échoué")) {
        window.location.reload();
      }
    } else if (data.status == "ACCEPTED") {
      if (alert("Votre paiement a été effectué avec succès")) {
        window.location.reload();
      }
    }
  });

  CinetPay.onError(function (data) {
    console.log(data);
  });
}
