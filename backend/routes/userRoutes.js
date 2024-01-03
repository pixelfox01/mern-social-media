import express from "express";
import { User } from "../models/userModel.js";
import dotenv from "dotenv";
import { Webhook } from "svix";
import bodyParser from "body-parser";

dotenv.config();

const router = express.Router();

router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    console.log("Webhook received");
    try {
      const payloadString = req.body.toString();
      const svixHeaders = req.headers;

      const wh = new Webhook(process.env.WEBHOOK_SECRET);
      const evt = wh.verify(payloadString, svixHeaders);
      const { id, ...attributes } = evt.data;

      // Handle the webhooks
      const eventType = evt.type;
      if (eventType === "user.created") {
        const user = {
          name: attributes.first_name + " " + attributes.last_name || "",
          bio: "",
          image: attributes.image_url,
          clerk_uid: id,
          onboarding_complete: false,
        };
        const newUser = await User.create(user);
        return res.status(201).json({
          success: true,
          message: "User created",
          data: newUser,
        });
      }

      res.status(200).json({
        success: true,
        message: "Webhook received",
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);

export default router;
