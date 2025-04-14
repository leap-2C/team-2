"use strict";
// import { PrismaClient } from "@prisma/client";
// import { Request, Response } from "express";
// const prisma = new PrismaClient();
// export const getDonations = async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.id;
//     const donations = await prisma.donation.findMany({
//       where: { userId: Number(userId) },
//       select: {
//         id: true,
//         amount: true,
//         createdAt: true,
//         user: {
//           select: {
//             id: true,
//             username: true,
//           },
//         },
//       },
//     });
//     if (!donations) {
//       return res.status(404).json({ message: "No donations found" });
//     }
//     res.status(200).json({ donations });
//   } catch (error) {
//     console.error("Error fetching donations:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
