import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/utils/IdGenerator";
import {HashManager} from '../services/utils/HashManager';
import {Authenticator} from '../services/utils/Authenticator';
import {CustomError} from '../error/CustomError';

export class UserBusiness{

    public async signup(name: string, email: string, password: string, role:string){
        
        try {
        const idGenerator = new IdGenerator();
        const id:string = idGenerator.generate();

        const useHashed = new HashManager();
        const passwordHashed = await useHashed.hash(password);

        const userDatabase = new UserDatabase();
        await userDatabase.signup(id, name, email, passwordHashed, role)

        const autheticated = new Authenticator();
        const token = autheticated.generateToken({ id, name, email, role },process.env.ACC_TOKEN_EXPIRES_IN);


        return { accessToken: token }
        
        } catch (error) {
            throw new Error(error.message)
        }
    };

    public async login(email:string, password:string){
        const userDatabase = new UserDatabase();
        const userInfo = await userDatabase.getByEmail(email);

        const checkedPassword = new HashManager();
        const comparePassword = await checkedPassword.checkHash(userInfo.password ,password);

        const autheticated = new Authenticator();
        const token = autheticated.generateToken( userInfo ,process.env.ACC_TOKEN_EXPIRES_IN);

        return comparePassword && token;

    };

    public async makeFriendship(friendId: string, token: string){
        //TODO: não permitir amizades duplicadas ou com o mesmo id de usuário e amigo
        if(!token){
            throw new CustomError(416, 'Token de acesso ausente.')
        };

        const useAuthenticator = new Authenticator();
        const useUserDb = new UserDatabase();

        const userTokenInfos = useAuthenticator.getData(token);
        const userDbInfos = await useUserDb.getById(userTokenInfos.id);

        if(!userDbInfos){
            throw new CustomError(404, 'Usuário não encontrado.');
        };

        try{
            await useUserDb.createFriendship(userTokenInfos.id, friendId);
        }catch(e){
            throw new CustomError(400, e.message)
        };
    };

    public async deleteFriendship(friendId: string, token: string){
        if(!token){
            throw new CustomError(416, 'Token de acesso ausente.')
        };

        const useAuthenticator = new Authenticator();
        const useUserDb = new UserDatabase();

        const userTokenInfos = useAuthenticator.getData(token);
        const userDbInfos = await useUserDb.getById(userTokenInfos.id);
        
        if(!userDbInfos){
            throw new CustomError(404, 'Usuário não encontrado.');
        };

        try{
            const useUserDb = new UserDatabase();
            await useUserDb.deleteFriendship(userTokenInfos.id, friendId);
        }catch(e){
            throw new CustomError(400, e.message)
        };
    };
};