import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const{ uid, email, displayName, photoURL } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between">
        <img className="w-32" src={LOGO}
        alt="logo"/>
        {user && (<div className="flex p-2">
          <img className="w-10 h-10" src={user?.photoURL}
          alt="userIcon"/>
          <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
        </div>)}
    </div>
    
  )
}

export default Header