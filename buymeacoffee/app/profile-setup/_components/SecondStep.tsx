"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { useToken } from "@/hooks/TokenContext";
import { sendRequest } from "@/lib/sendRequest";

const SecondStep = ({ onBack, onNext }: { onBack: () => void; onNext: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useToken();
  const router = useRouter();

  const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() + i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    return parts.length ? parts.join('-') : value;
  };

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
        // Format expiration date as YYYY-MM-DD
        const expirationDate = `${values.expiryYear}-${values.expiryMonth}-01`;
        
        const cardData = {
          cardNumber: values.cardNumber.replace(/-/g, ''),
          firstName: values.firstName,
          lastName: values.lastName,
          expirationDate,
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
          onNext(); // Move to next step or complete the flow
        }
      } catch (error: any) {
        console.error("Error saving card:", error);
        
        if (error.response?.status === 401) {
          toast.error("Session expired. Please log in again.");
          router.push("/login");
        } else if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Failed to save payment method. Please try again.");
        }
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

  const inputDisabled = isSubmitting;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center">How would you like to be paid?</h2>
        <p className="text-sm text-muted-foreground text-center">Enter your location and payment details.</p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Country Select */}
          <div>
            <Label>Country</Label>
            <Select
              value={formik.values.country}
              onValueChange={(value) => formik.setFieldValue("country", value)}
              disabled={inputDisabled}
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

          {/* Name Inputs */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <Label>First Name</Label>
              <Input
                name="firstName"
                placeholder="First name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={inputDisabled}
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
                disabled={inputDisabled}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Card Number */}
          <div>
            <Label>Card Number</Label>
            <Input
              name="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              value={formik.values.cardNumber}
              onChange={(e) => {
                const formatted = formatCardNumber(e.target.value);
                formik.setFieldValue("cardNumber", formatted);
              }}
              onBlur={formik.handleBlur}
              disabled={inputDisabled}
            />
            {formik.touched.cardNumber && formik.errors.cardNumber && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.cardNumber}</p>
            )}
          </div>

          {/* Expiry + CVC */}
          <div className="flex gap-4">
            <div className="w-1/3">
              <Label>Month</Label>
              <Select
                value={formik.values.expiryMonth}
                onValueChange={(value) => formik.setFieldValue("expiryMonth", value)}
                disabled={inputDisabled}
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
                disabled={inputDisabled}
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
                disabled={inputDisabled}
              />
              {formik.touched.cvc && formik.errors.cvc && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.cvc}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
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
    </div>
  );
};

export default SecondStep;