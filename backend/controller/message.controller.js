import Messages from "../model/message.model.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Messages.find(); // get all messages

    return res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const sendMessages = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Messages({
      name,
      email,
      message,
    });

    await newMessage.save();

    return res.status(200).json({
      success: true,
      message: newMessage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
