import { clerkClient } from "@clerk/express";

//only admins can upload courses
export const protectAdmin = async (req, res, next) => {
  try {
    const userId = req.auth.userId;

    //get user and check its public metadata for admin role in clerk
    const response = await clerkClient.users.getUser(userId);

    if (response.publicMetadata.role !== "admin") {
      return res.json({ success: false, message: "Unauthorized access" });
    }

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
