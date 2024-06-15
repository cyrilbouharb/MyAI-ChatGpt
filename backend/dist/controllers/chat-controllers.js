import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwData.id);
        if (!user)
            return res.status(401).json({ message: "User not registered or Invalid Token" });
        //get chats of user and send all chats with new one to Api and get latest response
        //step1 getting chats pushing them to static array
        const chats = user.chats.map(({ role, content }) => ({ role, content }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        //step 2 send all chats to openai api
        const openai = configureOpenAI();
        //step 3 get latest response
        const chatResponse = await openai.chat.completions.create({ model: "gpt-3.5-turbo", messages: chats, });
        user.chats.push(chatResponse.choices[0].message);
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
//# sourceMappingURL=chat-controllers.js.map