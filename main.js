function sendEmail() {
    Email.send({
        SecureToken : "70a0bfc5-acc3-46a4-bf24-725260c50676",
        To : 'abayomiwuraola686@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Mail From Portfolio",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
} 