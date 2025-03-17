import jwt from 'jsonwebtoken';

export const login = (creds) => {
  let resp = '';
  if(creds.username === 'jhen' && creds.password === 'test123') {
    const payload = {
      username: creds.username,
      useremail: 'jhen@mailinator.com',
      userrole: 'administrator'
    }
    resp = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
  }
  return resp;
}