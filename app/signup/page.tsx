import SignUp from '../components/auth/SignUp';

const SignUpPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Sign Up</h2>
                    <SignUp />
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;