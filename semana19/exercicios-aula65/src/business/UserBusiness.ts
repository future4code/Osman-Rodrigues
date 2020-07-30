import { UserDatabase } from "../data/UserDatabase";
import { User, stringToUserRole } from "../model/User";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { GenericError } from "../errors/GenericError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    if (!name || !email || !password || !role) {
      throw new InvalidParameterError("Missing input");
    }

    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("Invalid email");
    }

    if (password.length < 6) {
      throw new InvalidParameterError("Invalid password");
    }

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashGenerator.hash(password);

    await this.userDatabase.createUser(
      new User(id, name, email, cryptedPassword, stringToUserRole(role))
    );

    const accessToken = this.tokenGenerator.generate({
      id,
      role,
    });
    return { accessToken };
  }

  public async login(email: string, password: string) {
    if (!email || !password) {
      throw new InvalidParameterError("Missing input");
    }

    const user = await this.userDatabase.getUserByEmail(email);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const isPasswordCorrect = await this.hashGenerator.compareHash(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new InvalidParameterError("Invalid password");
    }

    const accessToken = this.tokenGenerator.generate({
      id: user.getId(),
      role: user.getRole(),
    });

    return { accessToken };
  }

  public async getById(id: string){
    if (!id || id.length != 36) {
      throw new InvalidParameterError("Missing or invalid user id.")
    }

    const userInfos = await this.userDatabase.getById(id)

    if (!userInfos) {
      throw new NotFoundError("User not found.")
    }

    return { userInfos }
  }

  public async getAll(token: string){
    const validedToken = this.tokenGenerator.verify(token);
    if(! validedToken){
      throw new InvalidParameterError('Not allowed.')
    }

    const allUsers = await this.userDatabase.getAll()

    if (allUsers.length === 0) {
      throw new NotFoundError("No registered users.")
    }
    
    return { allUsers }
  }

  public async getProfile(token: string){
    const validedToken = this.tokenGenerator.verify(token);
    if(! validedToken){
      throw new InvalidParameterError('Invalid token.')
    }

    const profileInfos = await this.userDatabase.getById(validedToken.id)

    if ( ! profileInfos) {
      throw new NotFoundError("User not found.")
    }
    
    return { profileInfos }
  }
}

