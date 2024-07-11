import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bg from './bg.jpg'; 
import Navbar from './Navbar';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:5000/api/auth/users/${userId}`);
        setUser(response.data); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500 text-xl">Error: {error.message}</p>;

  return (
    <>
      
      <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-50">
        {/* <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', filter: 'brightness(0.5)' }}></div> */}
        <div className="relative z-10 max-w-md w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 rounded-md shadow-lg bg-white bg-opacity-75">
          <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">User Details</h1>
          {user && (
            <div className="p-6 rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <img
                  className="w-32 h-32 rounded-full"
                  src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=random&size=128`}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              </div>
              <div className="text-center">
                <p className="text-3xl font-semibold mb-4">{user.firstName} {user.lastName}</p>
                <div className="text-gray-700 text-lg">
                  <p><span className="font-bold">First Name:</span> <span className="ml-2">{user.firstName}</span></p>
                  <p><span className="font-bold">Last Name:</span> <span className="ml-2">{user.lastName}</span></p>
                  <p><span className="font-bold">Email:</span> <span className="ml-2">{user.email}</span></p>
                  <p><span className="font-bold">Age:</span> <span className="ml-2">{user.age}</span></p>
                  <p><span className="font-bold">Gender:</span> <span className="ml-2">{user.gender}</span></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
