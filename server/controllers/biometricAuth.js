const biometricAuth = ((req, res, next) => {
  return res.json({ biometricAuth: 'success' });
})

export default biometricAuth;