/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.items=[]
  }
  add(todo){
    this.items.push(todo)
  }

  remove(indexOfTodo){
    let suffle =0
      for ( let index=indexOfTodo;index < (this.items.length)-1;index++){
        [this.items[index] , this.items[index+1]] = [this.items[index+1], this.items[index]]
        suffle=1
      }
      if( suffle){
        this.items.pop()
      }
  }
  update(index , updatedTodo){
    if(index <this.items.length){
    this.items[index]=updatedTodo
    }
  }
  getAll(){
    return this.items;
  }
  get(indexOfTodo){
    if ( indexOfTodo < this.items.length ){
    return this.items[indexOfTodo]
    }
    return null
  }
  clear(){
    this.items.length=0
  }

}

module.exports = Todo;
