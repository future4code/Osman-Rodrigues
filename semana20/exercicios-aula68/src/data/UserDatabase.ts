import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private tableName: string = process.env.USERS_DB_NAME;

    public async signup(
        id: string, 
        name: string, 
        email: string, 
        password: string,
        role:string
        ) {
        
        try {
            return await super.getConnection()
            .insert({
                id,
                name,
                email,
                password,
                role
            })
            .into(this.tableName)

            } catch (error) {
                throw new Error(error.message || error.sqlMessage);
            }
    };

    public getByEmail = async (email:string):Promise<any> => {
        try{
            const result = await this.getConnection()
            .select('*')
            .from(this.tableName)
            .where({ email });

            return result.length === 1 && result[0];
        }catch(error){
            throw new Error(error.message || error.sqlMessage);
        };
    };

    public getById = async (id:string):Promise<any> => {
        try{
            const result = await this.getConnection()
            .select('*')
            .from(this.tableName)
            .where({ id });
            
            return result.length === 1 && result[0];
        }catch(error){
            throw new Error(error.message || error.sqlMessage);
        };
    };

    public createFriendship = async(user_id: string, friend_id: string): Promise<void>=>{
        try{
            await this.getConnection()
            .insert({
                user_id,
                friend_id
            })
            .into(process.env.FRIENDSHIPS_DB_NAME);
        }catch(error){
            throw new Error(error.message || error.sqlMessage);
        };  
    };

    public deleteFriendship = async(user_id: string, friend_id: string): Promise<void>=>{
        try{
            await this.getConnection()
            .delete('*')
            .where({
                user_id,
                friend_id
            })
            .from(process.env.FRIENDSHIPS_DB_NAME);
        }catch(error){
            throw new Error(error.message || error.sqlMessage);
        };  
    };
};