"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as Yup from "yup";
import { useFormik } from "formik";

const PaymentSettings = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const years = Array.from({ length: 10 }, (_, i) =>
    (new Date().getFullYear() + i).toString()
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );

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
        .matches(
          /^\d{4}-\d{4}-\d{4}-\d{4}$/,
          "Must be in XXXX-XXXX-XXXX-XXXX format"
        )
        .required("Card number is required"),
      expiryMonth: Yup.string().required("Month is required"),
      expiryYear: Yup.string().required("Year is required"),
      cvc: Yup.string()
        .matches(/^\d{3,4}$/, "CVC must be 3 or 4 digits")
        .required("CVC is required"),
    }),
    onSubmit: (values) => {
      console.log("Payment submitted:", values);
      onNext();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="border rounded-lg p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold">Payment details</h3>

      <div className="space-y-2">
        <Label>Select country</Label>
        <Select
          value={formik.values.country}
          onValueChange={(value) => formik.setFieldValue("country", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="mn">Mongolia</SelectItem>
          </SelectContent>
        </Select>
        {formik.touched.country && formik.errors.country && (
          <p className="text-sm text-red-500">{formik.errors.country}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>First name</Label>
          <Input
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-sm text-red-500">{formik.errors.firstName}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Last name</Label>
          <Input
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-sm text-red-500">{formik.errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Card Number</Label>
        <Input
          name="cardNumber"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.cardNumber && formik.errors.cardNumber && (
          <p className="text-sm text-red-500">{formik.errors.cardNumber}</p>
        )}
      </div>

      <div className="flex gap-4">
        <div className="w-1/3">
          <div className="space-y-2">
            <Label>Month</Label>

            <Select
              value={formik.values.expiryMonth}
              onValueChange={(value) =>
                formik.setFieldValue("expiryMonth", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.expiryMonth && formik.errors.expiryMonth && (
              <p className="text-sm text-red-500">
                {formik.errors.expiryMonth}
              </p>
            )}
          </div>
        </div>
        <div className="w-1/3">
          <div className="space-y-2">
            <Label>Year</Label>
            <Select
              value={formik.values.expiryYear}
              onValueChange={(value) =>
                formik.setFieldValue("expiryYear", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.expiryYear && formik.errors.expiryYear && (
              <p className="text-sm text-red-500">{formik.errors.expiryYear}</p>
            )}
          </div>
        </div>

        <div className="w-1/3">
          <div className="space-y-2">
            <Label>CVC</Label>
            <Input
              name="cvc"
              placeholder="CVC"
              value={formik.values.cvc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.cvc && formik.errors.cvc && (
              <p className="text-sm text-red-500">{formik.errors.cvc}</p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <Button type="submit">Save changes</Button>
      </div>
    </form>
  );
};

export default PaymentSettings;
