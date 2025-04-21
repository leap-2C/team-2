"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Pencil, Save } from "lucide-react";

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

import { sendRequest } from "@/lib/sendRequest";
import { useToken } from "@/hooks/TokenContext";
import { useUser } from "@/hooks/UserContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

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

  const [isEditing, setIsEditing] = useState(false);
  const { token } = useToken();
  const { userData } = useUser();

  const cardData = Array.isArray(userData?.bankCard)
    ? userData.bankCard[0]
    : undefined;

  const [localCardData, setLocalCardData] = useState(cardData);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cardData") || "{}");
    if (savedData) {
      setLocalCardData(savedData);
    }
  }, []);

  const displayCard = localCardData || cardData;

  const formik = useFormik({
    initialValues: {
      country: "mn",
      firstName: cardData?.firstName || "",
      lastName: cardData?.lastName || "",
      cardNumber: cardData?.cardNumber || "",
      expiryMonth: cardData
        ? (new Date(cardData.expirationDate).getMonth() + 1).toString()
        : "",
      expiryYear: cardData
        ? new Date(cardData.expirationDate).getFullYear().toString()
        : "",
      cvc: "",
    },
    enableReinitialize: true,
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
    onSubmit: async (values) => {
      try {
        const expirationDate = new Date(
          Number(values.expiryYear),
          Number(values.expiryMonth) - 1,
          1
        );

        await sendRequest.put(
          "/bankcard/update",
          {
            cardNumber: values.cardNumber,
            expirationDate: expirationDate.toISOString(),
            firstName: values.firstName,
            lastName: values.lastName,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const updatedCardData = {
          cardNumber: values.cardNumber,
          expirationDate: expirationDate.toISOString(),
          firstName: values.firstName,
          lastName: values.lastName,
        };

        localStorage.setItem("cardData", JSON.stringify(updatedCardData));

        setLocalCardData(updatedCardData);

        setIsEditing(false);
        onNext();
        toast.success("Card updated successfully");
      } catch (err) {
        toast.error("Failed to update card");
      }
    },
  });

  const toggleEdit = () => {
    if (isEditing) {
      formik.handleSubmit();
    } else {
      setIsEditing(true);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Bank Card</h3>
        <Button
          type={isEditing ? "submit" : "button"}
          size="sm"
          variant="ghost"
          onClick={toggleEdit}
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-1" />
              Save
            </>
          ) : (
            <>
              <Pencil className="w-4 h-4 mr-1" />
              Edit
            </>
          )}
        </Button>
      </div>

      {!isEditing && (
        <div className="flex items-center justify-center h-[20rem] rounded-2xl w-full">
          <motion.div
            initial={{ filter: "blur(8px)" }}
            whileHover={{ filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="relative h-64 w-96 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 p-6 shadow-2xl overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            />

            <div className="text-right text-white font-bold text-2xl italic">
              VISA
            </div>

            <div className="mt-8 h-10 w-14 rounded bg-yellow-400/20 flex items-center justify-center">
              <div className="h-6 w-8 rounded-sm bg-yellow-400/40" />
            </div>

            <div className="mt-6 font-mono text-white text-xl tracking-widest">
              {displayCard?.cardNumber?.replace(/-/g, " ") ||
                "•••• •••• •••• ••••"}
            </div>

            <div className="mt-6 flex justify-between text-white text-sm">
              <div>
                <div className="text-neutral-300 text-xs">CARD HOLDER</div>
                <div className="font-medium">
                  {`${displayCard?.firstName || "JOHN"} ${
                    displayCard?.lastName || "DOE"
                  }`}
                </div>
              </div>
              <div>
                <div className="text-neutral-300 text-xs">EXPIRES</div>
                <div className="font-medium">
                  {displayCard?.expirationDate
                    ? `${(new Date(displayCard.expirationDate).getMonth() + 1)
                        .toString()
                        .padStart(2, "0")}/${new Date(
                        displayCard.expirationDate
                      )
                        .getFullYear()
                        .toString()
                        .slice(-2)}`
                    : "MM/YY"}
                </div>
              </div>
              <div>
                <div className="text-neutral-300 text-xs">CVV</div>
                <div className="font-medium">•••</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center text-white/50 text-sm"
            >
              Hover to reveal details
            </motion.div>
          </motion.div>
        </div>
      )}

      {isEditing && (
        <>
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>First Name</Label>
              <Input
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Card Number</Label>
            <Input
              name="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Month</Label>
              <Select
                value={formik.values.expiryMonth}
                onValueChange={(value) =>
                  formik.setFieldValue("expiryMonth", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="MM" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Year</Label>
              <Select
                value={formik.values.expiryYear}
                onValueChange={(value) =>
                  formik.setFieldValue("expiryYear", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((y) => (
                    <SelectItem key={y} value={y}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>CVC</Label>
              <Input
                name="cvc"
                placeholder="CVC"
                value={formik.values.cvc}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default PaymentSettings;
