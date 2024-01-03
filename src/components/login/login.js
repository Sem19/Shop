import { useForm } from "react-hook-form";
import { Navigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.login === "admin" && data.password === "12345") {
      localStorage.setItem("auth", true);
    } else {
      setError("login", {
        type: "manual",
        message: "Please enter correct login or password",
      });
    }
  };

  if (localStorage.getItem("auth")) return <Navigate to={"/"} />;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "450px",
        gap: "10px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          placeholder="login"
          {...register("login", { required: true })}
        />
        {errors?.login && (
          <p style={{ color: "red" }}>
            {errors?.login?.type === "manual"
              ? errors.login?.message
              : "Please write your login"}
          </p>
        )}
        <label id="password" htmlFor="password">
          password
        </label>
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />{" "}
        {errors?.password && (
          <p style={{ color: "red" }}>please write your password</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};
export default Login;
