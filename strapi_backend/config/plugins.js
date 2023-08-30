// docs email proivder https://docs.strapi.io/dev-docs/providers
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'marstomek@gmail.com',
        defaultReplyTo: 'marstomek@gmail.com',
        testAddress: 'marstomek@gmail.com',
      },
    },
  },
});
