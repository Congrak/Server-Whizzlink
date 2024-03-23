import { client } from "../database.mjs";

export const findByEmail = async (email) => {
    try {
        const result = await client
            .db("WhizzLink-database")
            .collection("Users")
            .findOne({ email });
            
            if (result) {
                console.log(result, 'user found');
                return result;
            }else {
                console.log('user not found');
                return null;
            }
    } catch (error) {
        console.log(error);
    }
}

export const NewUser = async (newUser) => {

    const account = await findByEmail(newUser.email);
    if (account) {
        return { error: 'User already exists' };
    } else {
        const result = await client
            .db("WhizzLink-database")
            .collection("Users")
            .insertOne(newUser);
        return result;
    }
}