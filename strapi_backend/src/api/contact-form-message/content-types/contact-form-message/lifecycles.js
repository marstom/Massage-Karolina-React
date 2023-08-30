module.exports = {
  async afterCreate(event) {
    const { result } = event;
    console.log("Sending an email....")
    try {
      await strapi.plugins['email'].services.email.send({
        to: "marstomek@gmail.com",
        from: "marstomek@gmail.com",
        subject: `You have new client ${result.name}`,
        text: `
        Name: ${result.name}
        Phone: ${result.phone}
        Email: ${result.email}

        Message from client: ${result.message},
        `
      })
    } catch (e){
      console.error(`Something went wrong with email sending.... ${e}`)
    }
  }
}
