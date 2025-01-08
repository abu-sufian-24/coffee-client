
import { Link, useNavigate } from 'react-router'
import UseAuth from '../../hooks/UseAuth'
import Swal from 'sweetalert2';

function Register() {
  const { createUser } = UseAuth();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = Object.fromEntries(fromData.entries());


    // Create user in Firebase
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        const objFormDatabase = {
          email: user.email,
          name: data.name,
        };

        // Send data to database
        fetch(`http://localhost:4000/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(objFormDatabase),
        })
          .then((res) => res.json())
          .then((data) => {

            Swal.fire({
              title: "Good job!",
              text: "Your register have been successful!",
              icon: "success"
            });
            console.log(data);
            e.target.reset()
            navigate("/login")


          })
          .catch((error) => {
            console.error("Error saving to database:", error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                if you have an account? pless
                <Link to={"/login"} className="label-text-alt link link-hover">login</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Register