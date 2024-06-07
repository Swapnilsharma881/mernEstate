import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';

import { signInSuccess } from '../redux/user/userSlicer';
import {  useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const userData = {
        name: result.user.displayName,
        email: result.user.email,
        profilePhoto: result.user.photoURL,
      };

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      console.log(data);
      dispatch(signInSuccess(data));
      navigate('/');

      // Optional: Redirect after successful login
      // navigate('/dashboard');
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <button onClick={handleGoogleAuth} type="button" className="border-[1px] py-3 text-white border-red-500 rounded-md">
      Oauth
    </button>
  );
}
