import {S3} from 'aws-sdk';

interface UploadedFileInput{
  name: string,
  file: any
}
interface UploadedFileOutput{
  link: string
}

export class S3Service{
  private s3 = new S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  }) 

  public async uploadFile(input: UploadedFileInput): Promise<UploadedFileOutput>{
    const result = await this.s3.upload({
      Bucket: process.env.BUCKET_NAME!,
      Key: input.name,
      Body: input.file
    }).promise();

    return {
      link: result.Location
    }
  }
}