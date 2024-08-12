import { createUsers, getUser } from "../controller/user.js";

export const signUp = async (req, res) => {
    

    try {
        const user = await createUsers (req, res);
        res.status(200).json({success: true, user: user });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
      }
    };

export const signIn = async (req, res) => {
    const { password, email } = req.body

    try {
        const user = await getUser (req, res);
        if (password === user[0].password) {
            res.send ({ success: true, user: user });
        } else {
            res.send ({ error: "Invalid email or password!"})

        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
      }
    };