//1.
class LinkedListNode{
  constructor(public value: any){}
  next: LinkedListNode | null = null
}

class LinkedList{
  constructor(
    public start: LinkedListNode | null = null
  ){}
  
  addToTail(value: any): void{
    if(this.start === null){
      this.start = new LinkedListNode(value)
      return
    }
    let node = this.start
    while(node && node.next !== null){
      node = node.next
    }
    node.next = new LinkedListNode(value)
  }

  printAllElements(): void{
    let node = this.start
    while(node.next !== null){
      console.log(node.value)
      node = node.next
    }
    node.value !== null && console.log(node.value)
  }
}

class Stack{
  elementsList: LinkedList | null = null
  
  isEmpty =(): boolean => this.elementsList === null

  push =(value: any): void =>{
    if(this.elementsList === null){
      this.elementsList = new LinkedList(new LinkedListNode(value))
    }else{
      this.elementsList.addToTail(value)
    }
  }
  //ajustar o pop
  //pop =():void =>{
  //  let node = this.elementsList.start
  //
  //  while(node.next !== null){
  //    node = node.next
  //  }
  //}

  print=(): void => this.elementsList.printAllElements()
}

class Queue{
  public elements?: any[] | [] = []
  constructor(
    initialArray?: any[]
  ){
    if(initialArray){this.elements = initialArray}
  }
  
  isEmpty =(): boolean => this.elements.length > 0
  
  enqueue=(value: any)=>{
    this.elements.length === 0 ? 
    this.elements = [value]:
    this.elements[this.elements.length] = value
  }

  dequeue=()=>{
    this.elements[0] = undefined
    let array = this.elements
    this.elements = [] 
    for(let i = 0; i < array.length; i++){
      array[i] && this.enqueue(array[i]) 
    }
  }
  
  printAll=()=>{
    for(let i = 0; i < this.elements.length; i++){
      console.log(this.elements[i])
    }
  }
}