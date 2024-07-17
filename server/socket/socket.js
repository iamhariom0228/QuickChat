import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

export const getRecipientSocketId = (recipientId) => {
    return userSocketMap.get(recipientId);
};

const userSocketMap = new Map(); // Map to store the user and socket id

// socket contains all the events that are emitted by the client
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId; // getting the user id from the client side

  if (userId !== undefined) {
    userSocketMap.set(userId, socket.id); // storing the user id and socket id in the map
  }

  // emitting the event to the client side to get the online users
  io.emit("getOnlineUsers", Array.from(userSocketMap.keys()));

  // socket.on is used to listen to the event sent by the client, can be used on both the server and client side
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    userSocketMap.delete(userId); // deleting the user from the map when the user disconnects
    io.emit("getOnlineUsers", Array.from(userSocketMap.keys())); // emitting the event to the client side to get the online users
  });
});

export { app, io, server };
