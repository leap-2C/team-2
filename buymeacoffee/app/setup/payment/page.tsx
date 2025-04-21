
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-toastify";
import { useToken } from "@/hooks/TokenContext";
import { sendRequest } from "@/lib/sendRequest";

export default function PaymentSetup() {
  const router = useRouter();
  const { token } = useToken();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (!savedData) {
      router.push("/setup/profile");
    }
  }, [router]);

  const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() + i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));

  const formik = useFormik({
    initialValues: {
      country: "",
      firstName: "",
      lastName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      country: Yup.string().required("Country is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      cardNumber: Yup.string()
        .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, "Card number must be in XXXX-XXXX-XXXX-XXXX format")
        .required("Card number is required"),
      expiryMonth: Yup.string().required("Month is required"),
      expiryYear: Yup.string().required("Year is required"),
      cvc: Yup.string()
        .matches(/^\d{3,4}$/, "CVC must be 3 or 4 digits")
        .required("CVC is required"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        const cardData = {
          cardNumber: values.cardNumber.replace(/-/g, ''),
          firstName: values.firstName,
          lastName: values.lastName,
          expirationDate: new Date(
            parseInt(values.expiryYear),
            parseInt(values.expiryMonth) - 1
          ).toISOString(),
          country: values.country,
          cvc: values.cvc
        };

        const response = await sendRequest.post("/user/bankCard", cardData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 201) {
          toast.success("Payment method saved successfully!");
          localStorage.removeItem("formData");
          router.push("/home");
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || "Failed to save payment method");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const isFormValid =
    formik.values.country &&
    formik.values.firstName &&
    formik.values.lastName &&
    formik.values.cardNumber &&
    formik.values.expiryMonth &&
    formik.values.expiryYear &&
    formik.values.cvc &&
    !formik.errors.country &&
    !formik.errors.firstName &&
    !formik.errors.lastName &&
    !formik.errors.cardNumber &&
    !formik.errors.expiryMonth &&
    !formik.errors.expiryYear &&
    !formik.errors.cvc;

  const handleBack = () => {
    router.push("/setup/profile");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-6">
      <h2 className="text-2xl font-semibold text-center">How would you like to be paid?</h2>
      <p className="text-sm text-muted-foreground text-center">Enter your location and payment details.</p>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <Label>Country</Label>
          <Select
            value={formik.values.country}
            onValueChange={(value) => formik.setFieldValue("country", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="mn">Mongolia</SelectItem>
            </SelectContent>
          </Select>
          {formik.touched.country && formik.errors.country && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.country}</p>
          )}
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <Label>First Name</Label>
            <Input
              name="firstName"
              placeholder="First name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.firstName}</p>
            )}
          </div>

          <div className="w-1/2">
            <Label>Last Name</Label>
            <Input
              name="lastName"
              placeholder="Last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <Label>Card Number</Label>
          <Input
            name="cardNumber"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.cardNumber}</p>
          )}
        </div>

        <div className="flex gap-4">
          <div className="w-1/3">
            <Label>Month</Label>
            <Select
              value={formik.values.expiryMonth}
              onValueChange={(value) => formik.setFieldValue("expiryMonth", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.expiryMonth && formik.errors.expiryMonth && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.expiryMonth}</p>
            )}
          </div>

          <div className="w-1/3">
            <Label>Year</Label>
            <Select
              value={formik.values.expiryYear}
              onValueChange={(value) => formik.setFieldValue("expiryYear", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.expiryYear && formik.errors.expiryYear && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.expiryYear}</p>
            )}
          </div>

          <div className="w-1/3">
            <Label>CVC</Label>
            <Input
              name="cvc"
              placeholder="CVC"
              value={formik.values.cvc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.cvc && formik.errors.cvc && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.cvc}</p>
            )}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={isSubmitting}
          >
            Back
          </Button>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}