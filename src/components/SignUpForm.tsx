import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "./Button";
import { Alert } from "./Error";
import { Input } from "./Input";

export function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setServerSuccess(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setServerSuccess("Successfully registered!");
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
    } catch {
      setServerError("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-mobile">
      {serverError && (
        <Alert message={serverError} type="error" className="mb-6" />
      )}
      {serverSuccess && (
        <Alert message={serverSuccess} type="success" className="mb-6" />
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          placeholder="First Name"
          autoComplete="given-name"
        />

        <Input
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          placeholder="Last Name"
          autoComplete="family-name"
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Email Address"
          autoComplete="email"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Password"
          autoComplete="new-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="primary"
          isLoading={isSubmitting}
          className="bg-green-400 hover:bg-opacity-90 active:bg-opacity-80"
        >
          CLAIM YOUR FREE TRIAL
        </Button>

        <p className="text-center text-xs text-gray-900 mt-4">
          By clicking the button, you are agreeing to our{" "}
          <a href="#" className="text-purple-700 font-medium hover:underline">
            Terms and Services
          </a>
        </p>
      </form>
    </div>
  );
}
