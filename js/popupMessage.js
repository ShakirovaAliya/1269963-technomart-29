    const writeUs = document.querySelector(".contacts__link--help");
    const popupMessage = document.querySelector(".modal-message");
    const form = popupMessage.querySelector("form");
    const buttonClose = popupMessage.querySelector(".modal-close");
    const client = popupMessage.querySelector("[name=client]");
    const messageMail = popupMessage.querySelector("[name=message-email]");
    const messageText = popupMessage.querySelector("[name=message-text]");
    let clientStorage = "";
    let messageStorage = "";
    let isStorageSupport = true;

    try {
      clientStorage = localStorage.setItem("client");
      messageStorage = localStorage.setItem("messageMail");
    } catch(err) {
      isStorageSupport = false;
    }

    writeUs.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupMessage.classList.add("modal-show");
      if(clientStorage) {
        client.value = clientStorage;
        messageMail.focus();
      } else if(messageStorage) {
        messageMail.value = messageStorage;
        messageText.focus();
      } else {
        client.focus();
      }
    });

    form.addEventListener("submit", function(evt) {
      if(!client.value || !messageMail.value || !messageText.value) {
        evt.preventDefault();
        popupMessage.classList.add("modal-error");
      } else {
        if(isStorageSupport) {
          localStorage.setItem("client", client.value);
          localStorage.setItem("messageMail", messageMail.value);
        }
      }
    })

    buttonClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupMessage.classList.remove("modal-show");
      popupMessage.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function(evt) {
      if(evt.keyCode === 27) {
        if(popupMessage.classList.contains("modal-show")) {
          evt.preventDefault();
          popupMessage.classList.remove("modal-show");
        }
      }
    })
