emailjs.init({
    publicKey: 'lk0AfUUKk7JZMj4ce',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });


async function sendContactEmail(email) {
    var templateParams = {
        message: "Hi I am contacting you",
        reply_to: "jallende@bu.edu",
        email: email
    };

    await emailjs.send('service_6u2rhbg', 'lk0AfUUKk7JZMj4ce', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
    );
}

async function sendNewsletterEmail(email) {
    var templateParams = {
        email: email,
        reply_to: "jallende@bu.edu",
    };

    await emailjs.send("service_6u2rhbg","template_a16b0bc", templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
    );
}

module.exports = { sendContactEmail, sendNewsletterEmail}
  