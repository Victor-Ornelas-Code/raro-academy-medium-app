import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export const Navigation = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('id') !== null) {
      setAuth(true);;
    }
  }, [])




  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setAuth(false);
    navigate('/');
  }
  if (!auth) {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/artigos">Meus Artigos</Link>
      <Link to="/artigos/novo">Novo Artigo</Link>
      <Link to="/" onClick={logout}>Logout</Link>
    </>
  );
}