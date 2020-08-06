
import * as bcrypt from 'bcryptjs';

export class HashManager{
  public async hash(plainText: string): Promise<string>{
    const hash = await bcrypt.hash(plainText, await bcrypt.genSalt(Number(process.env.BCRYPT_COST)));
    return hash;
  };
  public async checkHash(hash: string, plainText: string): Promise<boolean>{
    const isValid = await bcrypt.compare(plainText, hash);
    return isValid
  };
};