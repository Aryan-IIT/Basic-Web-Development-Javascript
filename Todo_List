class Todo {
  constructor(){
    this.final=[];
  }
  add (todo){
    this.final.push(todo);
  }

  remove (indexOfTodo){
    let temp=this.final;
    let intermediate=[];

    for(let i =0; i<temp.length;i++){
      if (i===indexOfTodo){continue;}
      intermediate.push(temp[i]);
    }
    this.final=intermediate;
  }

  update (index,updatedTodo){
    if (index<0 || index>=this.final.length){return;}
    let op=this.final;
    op[index]=updatedTodo;
    this.final=op;
  }

  getAll(){
    return this.final;
  }

  get(index){
    if (index<0 || index>=this.final.length){return null;}
    return this.final[index];
  }

  clear(){

    this.final=[];
  }

}

let obj = new Todo(); // creating an object of the class Todo
