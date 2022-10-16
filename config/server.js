module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['Dw3m2rqUzGUAc566A4Vxog==','Y/NB04oN2k7bHVIAIYWHHQ==','RPcfmD/B63I7+PRqbRGY5g==','60iBCXvRg6esCjQYIDA+wg==']),
  },
});
