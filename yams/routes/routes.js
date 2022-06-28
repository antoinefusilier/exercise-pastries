import express from "express";
const router = express.Router();
import { PastrieModel } from "../models/Pastrie.js";
import { UserModel } from "../models/User.js";


router.get("/pastries", async (req, res) => {
    try {
        const pastries = await PastrieModel.find({}, { ingredients: 0, __v: 0 });

        res.json(pastries);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

router.get("/ingredient/:id", async (req, res) => {
    try {
        const id = req.params.id;
        // find({}, {}) == WHERE + RESTRICTION, on passe par le modèle pour faire la requête
        const ingredients = await PastrieModel.findOne({_id : id}, { ingredients: 1 });
        console.log(ingredients)
        res.json(ingredients);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

router.get("/pastrie/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const pastrie = await PastrieModel.findOne({ _id: id }, { ingredients: 0 });

        res.json(pastrie);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});


router.put("/pastrie/:choice", async (req, res) => {
    const choice = req.params.choice;
    console.log(req.body);
   // await PastrieModel.updateOne({_id: id}, { choice: 'Priority' });
});


// ############################################### get all users

// router.get("/users", async (req, res) => {
//     try {
//         console.log(UserSchema);
//         const users = await UserSchema.find({});
//         res.json(users);
//     } catch (err) {
//         res.json({ error: "no dataset" });
//         console.log(err);
//     }
// });
router.get("/users", async(req, res) => {
    try {
        console.log(UserModel);
        const User = await UserModel.find({}, {});
        res.json(User);
    } catch (err) {
        res.json({ error: "no dataset" });
        console.log(err);
    }
})

// ############################################### get one user
router.get("/users/:token", async (req, res) => {
    try {
        const token = req.params.token;
        // find({}, {}) == WHERE + RESTRICTION, on passe par le modèle pour faire la requête
        const user = await UserModel.findOne({_token : token});
        console.log(user)
        res.json(user);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

export default router;
