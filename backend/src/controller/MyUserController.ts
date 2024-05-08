import User from "../models/user";
import { Request,Response } from "express";


// const createCurrentUser = async(req:Request, res: Response)=>{

//     //check user exist or not

//     try {
//      const {auth0Id} = req.body;
//      const existUser =  await User.findOne({auth0Id});

//      if(existUser){
//         return res.status(200).send()
//      }

//      const newUser = new User(req.body);

//      await newUser.save();

//      res.status(201).json(newUser.toObject())
        
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message:"Error creating user"})
        
//     }

// }

// export default {createCurrentUser}



const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body; // Change this to "auth0Id"

        // Check if auth0Id is provided in the request body
        if (!auth0Id) {
            return res.status(400).json({ message: "auth0Id is required" }); // Change this message accordingly
        }

        // Check if the user already exists
        const existUser = await User.findOne({ auth0Id });

        if (existUser) {
            return res.status(200).send();
        }

        // Create a new User instance
        const newUser = new User(req.body);

        // Save the new user
        await newUser.save();

        // Respond with the newly created user
        res.status(201).json(newUser.toObject());

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating user" });
    }
}

export default { createCurrentUser };