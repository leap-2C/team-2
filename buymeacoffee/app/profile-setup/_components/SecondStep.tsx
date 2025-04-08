"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";

const SecondStep = ({ onBack, onNext }: { onBack: () => void; onNext: () => void }) => {
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
    onSubmit: (values) => {
      console.log("✅ Form submitted:", values);
      onNext(); // move to next step
    },
  });

  const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() + i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-xl space-y-5"
      >
        <div>
          <h2 className="text-2xl font-semibold">How would you like to be paid?</h2>
          <p className="text-sm text-muted-foreground">Enter your location and payment details.</p>
        </div>

        {/* Country Select */}
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

        {/* Card Number */}
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

        {/* Expiry + CVC */}
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

        {/* Submit Button */}
        <div className="flex justify-between pt-4">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>

          <Button type="submit">
            Continue
          </Button>
        </div>

      </form>
    </div>
  );
};

export default SecondStep;
