import './App.scss';
// import { useAuth } from '../hooks/useAuth';
// import TodoPage from '../pages/TodoPage';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';
// import ProfilePage from '../pages/ProfilePage';
// import { Spinner } from '../components/Common/Spinner';
import Router from '../routes/Router';

function App() {
	let isLogin = true;

	// return <TodoPage />;
	// return <LoginPage />;
	// return <RegisterPage />;
	// return <ProfilePage />;
	// return <Spinner />;

	return <Router isAuthenticate={isLogin} />;
}

export default App;
