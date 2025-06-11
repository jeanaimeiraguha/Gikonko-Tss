import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Role, setRole] = useState('student');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/login' : '/students';
    const payload = { Username, Password };
    if (!isLogin) payload.Role = Role; // Only role for registration

    try {
      const res = await axios.post('http://localhost:3000' + url, payload);

      const msg = res.data.message || (isLogin ? 'Logged in!' : 'Registered!');
      setMessage(msg);

      if (isLogin && res.data.user) {
        setUserData(res.data.user);
      } else {
        setUserData(null);
      }
    } catch (err) {
      setMessage(err.response?.data || 'Action failed');
      setUserData(null);
    }
  };

  const renderDashboard = () => {
    if (!userData) return null;
    switch (userData.role) {
      case 'admin': return <p className="text-green-600">👑 Admin: full access.</p>;
      case 'teacher': return <p className="text-purple-600">📘 Teacher: manage courses.</p>;
      case 'dos': return <p className="text-orange-600">📊 DOS: academic reports.</p>;
      case 'student': return <p className="text-blue-600">🎓 Student: view results.</p>;
      default: return <p className="text-gray-600">Logged in as unknown role.</p>;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <select
                value={Role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                required
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="dos">DOS</option>
                {/* Admin accounts usually created by admin—not via form */}
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>

          {message && (
            <p className={`text-center mt-4 font-medium ${userData ? 'text-green-600' : 'text-red-500'}`}>
              {message}
            </p>
          )}
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
              setUserData(null);
            }}
            className="text-sm text-indigo-600 hover:underline"
          >
            {isLogin ? "Don't have an account? Register" : 'Already registered? Login'}
          </button>
        </div>

        <div className="mt-6">{renderDashboard()}</div>
      </div>
    </div>
  );
};

export default AuthPage;
