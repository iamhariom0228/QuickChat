import Message from "../models/message.js";
import Conversation from "../models/conversation.js";
import { getRecipientSocketId, io} from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([newMessage.save(), conversation.save()]);
    console.log("newMessage: ", newMessage);

    //Socket IO functionality
    const recipientSocketId = getRecipientSocketId(receiverId);

    if (recipientSocketId) {
      //emit the message only to the recipient
      io.to(recipientSocketId).emit("newMessage", newMessage);
    }
    res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage: ", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;

    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //not reference but actual messages

    if (!conversation) {
      return res.status(200).json({
        messages: [],
      });
    }

    const messages = conversation.messages;

    res.status(200).json({
      messages,
    });
  } catch (error) {
    console.log("Error in getMessages: ", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
