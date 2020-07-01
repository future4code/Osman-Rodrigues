import * as fs from 'fs';

class JSONFileMng{
  private filePath: string
  private fileBuffer: Buffer
  private fileBufferStr: string
  private file: any

  constructor(JSONFilePath: string){
    this.filePath = JSONFilePath;
    this.fileBuffer = fs.readFileSync(this.filePath);
    this.fileBufferStr = this.fileBuffer.toString();
    this.file = JSON.parse(this.fileBufferStr);
  };

  public getFile = ()=> this.file;
  public attFile = (newObject: Object)=> {
    const newFileStr = JSON.stringify(newObject, null, 2); 
    fs.writeFileSync(this.filePath, newFileStr);
  };

};
export default JSONFileMng
