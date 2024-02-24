import Link from "next/link";
import Logo from "./shared/Logo";
import Field from "./shared/Field";
import Button from "./shared/Button";
import { useFormik } from "formik";
import { signUpSchema } from "@/schema";
import { signIn } from "next-auth/react";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function SignUpForm() {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    async onSubmit(values, { setFieldError, resetForm }) {
      try {
        const res = await fetch("/api/signup", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        if (!res.ok) throw Error(data.message as string);

        const result = await signIn("credentials", {
          ...values,
          callbackUrl: "/",
        });
        if (result?.error) throw new Error(result.error);

        resetForm();
      } catch (err: any) {
        setFieldError("password", err.message as string);
      }
    },
  });

  return (
    <>
      <Logo className="text-center mb-5" />
      <h3 className="text-3xl text-center font-bold mb-8">Sign up </h3>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <Field
          id="name"
          label="Name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your name"
          error={touched.name ? errors.name : ""}
        />
        <Field
          id="email"
          type="email"
          label="Email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your email"
          error={touched.email ? errors.email : ""}
        />
        <Field
          id="password"
          type="password"
          label="Password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="Enter your password"
          error={touched.password ? errors.password : ""}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 self-start disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Create an account"}
        </Button>
        <p className="text-slate-200">
          Already have an account?{" "}
          <Link
            href="/?modal=signin"
            className="text-[var(--color-primary-400)]"
          >
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
}

export default SignUpForm;
