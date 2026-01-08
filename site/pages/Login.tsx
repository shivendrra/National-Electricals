import React, { useState } from 'react';
import { auth } from '../services/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, AlertCircle, Info } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ALLOWED_EMAILS = ['nationalelectricalsgkp@gmail.com', 'shivharsh44@gmail.com'];
  const DEFAULT_PASSWORD = '9936954894';

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err: any) {
      console.error("Login Attempt Failed:", err.code, err.message);
      
      const errorCode = err.code;

      // 1. Handle Domain Unauthorized
      if (errorCode === 'auth/unauthorized-domain') {
        setError(`Domain Error: The domain '${window.location.hostname}' is not authorized. Add it in Firebase Console > Authentication > Settings > Authorized Domains.`);
        setLoading(false);
        return;
      }

      // 2. Handle First-Time Setup (Auto-create user if allowed and using default password)
      // Only attempt this if the error implies the user doesn't exist
      if ((errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-credential') && 
          ALLOWED_EMAILS.includes(email.toLowerCase()) && 
          password === DEFAULT_PASSWORD) {
        try {
          // Try to create the user since sign-in failed
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/admin');
          return;
        } catch (createErr: any) {
           setError('Failed to create account: ' + createErr.message);
        }
      } else {
        // Standard error handling
        if (errorCode === 'auth/invalid-credential' || errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
           setError('Invalid email or password.');
        } else if (errorCode === 'auth/too-many-requests') {
           setError('Too many failed attempts. Please try again later.');
        } else {
           setError(err.message);
        }
      }
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userEmail = user.email?.toLowerCase();
      
      if (userEmail && ALLOWED_EMAILS.includes(userEmail)) {
        navigate('/admin');
      } else {
        // If google login succeeds but email is not allowed, sign them out immediately
        await auth.signOut();
        setError('Access Denied: This email is not authorized for Admin access.');
      }
    } catch (err: any) {
      console.error("Google Login Error:", err);
      if (err.code === 'auth/unauthorized-domain') {
        setError(`Domain Error: The domain '${window.location.hostname}' is not authorized. Add it in Firebase Console.`);
      } else if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in cancelled.');
      } else {
        setError('Google Sign-In failed. ' + err.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 p-4">
      <div className="max-w-md w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-8">
        <div className="text-center mb-8">
           <h1 className="font-serif text-3xl font-bold text-neutral-900 dark:text-white">Admin Access</h1>
           <p className="text-neutral-500 mt-2">National Electricals Management</p>
        </div>

        {error && (
          <div className={`border px-4 py-3 rounded mb-6 text-sm flex gap-2 items-start ${error.includes('Domain Error') ? 'bg-yellow-50 border-yellow-200 text-yellow-800' : 'bg-red-50 border-red-200 text-red-700'}`}>
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-neutral-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg focus:ring-2 focus:ring-accent outline-none dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-neutral-400" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg focus:ring-2 focus:ring-accent outline-none dark:text-white"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-200 dark:border-neutral-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-neutral-900 text-neutral-500">Or continue with</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 py-3 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Sign in with Google
        </button>
        
        <div className="mt-6 flex gap-2 text-xs text-neutral-400 bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
           <Info size={16} className="flex-shrink-0" />
           <p>First time login? Use the default password provided by the administrator. You can change it in settings later.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;