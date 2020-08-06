import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

    async signup(req: Request, res: Response) {
        const userBusiness: UserBusiness = new UserBusiness();
        
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const role = req.body.role;

            const result =  await userBusiness.signup(name, email, password, role);

            res.status(200).send({ message: "Usuário criado com sucesso", result });

        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    };

    /* TODO validações de senha e email */

    async login(req: Request, res: Response) {
        const userBusiness: UserBusiness = new UserBusiness();

        try {
            const body = req.body

            const requestInfo = await userBusiness.login(body.email, body.password);


            if(requestInfo){
                res.status(200).send({accessToken: requestInfo })
            }

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    };

    async makeFriendship(req: Request, res: Response){
        const headersToken = req.headers.authorization;
        const useUserBusiness: UserBusiness = new UserBusiness();
        try {
            const body = req.body
            await useUserBusiness.makeFriendship(body.friendId, headersToken);

            res.status(200).send({message: 'Amizade criada com sucesso!'})
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    };

    async deleteFriendship(req: Request, res: Response){
        const headersToken = req.headers.authorization;
        const useUserBusiness: UserBusiness = new UserBusiness();
        
        try {
            const body = req.body
            await useUserBusiness.deleteFriendship(body.friendId, headersToken);

            res.status(200).send({message: 'Amizade desfeita com sucesso!'})
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    };
};