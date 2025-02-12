import jwt from 'jsonwebtoken';
import { ENV } from '../config/env';

const SECRET_KEY = ENV.JWT_SECRET || 'your-secret-key';

const JWTUtils = {

  generateToken(user: { id: string, email: string }){
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
},

  verifyToken (token: string){
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

}

export default JWTUtils