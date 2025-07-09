(function () {
      //https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "WKR7MMEWHgXKivL2A"
    });
})();

const msg = document.querySelector(".form-message");

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.querySelector(".loader").classList.add("show");
        emailjs.sendForm('service_8xi142e', 'template_y25v6cm', this)
            .then(function() {
                document.getElementById("contact-form").reset();
                document.querySelector(".loader").classList.remove("show");
                msg.innerHTML = "<span class='success-msg'>Email Sent</span>";
                msg.classList.add("show");
                setTimeout(() => msg.classList.remove("show"), 2000); 
            })
            .catch((error) => {
                console.log('FAILED...', error);
                document.querySelector(".loader").classList.remove("show");
                msg.innerHTML = "<span class='success-msg' style='color:red'>Email failed to send</span>";
                msg.classList.add("show");
                setTimeout(() => msg.classList.remove("show"), 3000);
            });
    });
};
