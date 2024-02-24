"use client";

import Link from "next/link";
import Logo from "./shared/Logo";
import Field from "./shared/Field";
import Button from "./shared/Button";
import { useFormik } from "formik";
import { signInSchema } from "@/schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};

function SignInForm() {
  const router = useRouter();

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
    validationSchema: signInSchema,
    async onSubmit(values, { resetForm, setFieldError }) {
      try {
        const result = await signIn("credentials", {
          ...values,
          redirect: false,
        });

        if (result?.error) throw new Error(result.error);
        resetForm();
        router.replace("/");
        router.refresh();
      } catch (error: any) {
        setFieldError("password", error.message as string);
      }
    },
  });

  return (
    <>
      <Logo className="text-center mb-5" />
      <h3 className="text-3xl text-center font-bold mb-8">Sign in </h3>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <Field
          type="email"
          name="email"
          label="Email"
          id="signin-email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your email"
          error={touched.email ? errors.email : ""}
        />
        <Field
          type="password"
          name="password"
          label="Password"
          id="signin-password"
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
          {isSubmitting ? "Submitting..." : "Sign in"}
        </Button>
        <p className="text-slate-200">
          Don’t have account? Create an account,{" "}
          <Link
            href={`/?modal=signup`}
            className="text-[var(--color-primary-400)]"
          >
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
}

export default SignInForm;
