import Login from '../components/auth/Login';
import RootLayout from '../layout';

const LoginPage = () => {
    return (
        <RootLayout showNav={false}>
            <div className="flex justify-center items-center h-screen">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Login</h2>
                        <Login />
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};

export default LoginPage;