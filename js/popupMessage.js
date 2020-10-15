    const writeUs = document.querySelector(".contacts__link--help");
    const messagePopup = document.querySelector(".modal-message");
    const form = messagePopup.querySelector("form");
    const buttonClose = messagePopup.querySelector(".modal-close");
    const client = messagePopup.querySelector("[name=client]");
    const messageMail = messagePopup.querySelector("[name=message-email]");
    const messageText = messagePopup.querySelector("[name=message-text]");
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
      messagePopup.classList.add("modal-show");
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
        messagePopup.classList.add("modal-error");
      } else {
        if(isStorageSupport) {
          localStorage.setItem("client", client.value);
          localStorage.setItem("messageMail", messageMail.value);
        }
      }
    })

    buttonClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
      messagePopup.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function(evt) {
      if(evt.keyCode === 27) {
        if(messagePopup.classList.contains("modal-show")) {
          evt.preventDefault();
          messagePopup.classList.remove("modal-show");
        }
      }
    })
