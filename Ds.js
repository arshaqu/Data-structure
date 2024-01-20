// Bubble Sorting
// --------------
const array = [5,4,1,3,2]
// function Bubble (array){
//     let Sorting
//     do{
//         Sorting = false;
//         for(let i=0;i<array.length;i++){
//             if(array[i]>array[i+1]){
//                 let temp = array[i]
//                 array[i] = array[i+1]
//                 array[i+1] = temp;
//                 Sorting = true;
//             }
//         }
//     }while(Sorting){
//         return array
//     }
// }
// console.log(Bubble(array));


// INSERTION SORTING
// -----------------
// function insertionsort(array){
//  for(let i=1;i<array.length;i++){
//     let insert = array[i]
//     let j = i-1
//     while(j >= 0 && array[j] > insert ){
//         array[j+1] = array[j]
//         j--;
//         array[j+1] = insert
//     }
//  }
//  return array
// }
// console.log(insertionsort(array))


// SELECTION SORTING
// ------------------
// function selectionSort(array){
// for (let i=0;i<array.length;i++){
//     let min = i
//     for(j=i+1;j<array.length;j++){
//         if(array[j] < array[min]){
//             min = j
//         }
//     }
//     if(min !==i){
//         let temp = array[i]
//         array[i] = array[min]
//         array[min] = temp;
//     }
// }
// return array
// }
// console.log(selectionSort(array));

// Quick Sorting
// --------------
// function Quick(array){
//     if(array.length < 2){
//         return array
//     }
//     else{

//         let left = []
//         let right = []
//         let pivot = array[array.length-1]
//         for(let i=0;i<array.length-1;i++){
//             if(array[i] < pivot){
//                 left.push(array[i])
//             }
//             else{
//                 right.push(array[i])
//             }
//         }
//         return [...Quick(left),pivot,...Quick(right)]
//     }
//     }
//     console.log(Quick(array));

// MERGE SORTING
// --------------
// function Mergesort(array){
//     if(array.length<2){
//         return array
//     }
//     let mid =Math.floor(array.length/2)
//     const left = array.slice(0,mid)
//     const right = array.slice(mid)
//     return merge(Mergesort(left),Mergesort(right))
// }
// function merge(left,right){
//     let sort = []
//     while(left.length && right.length){
//         if(left[0] <= right[0]){
//             sort.push(left.shift())
//         }
//         else{
//             sort.push(right.shift())
//         }
//     }
//     return[...sort,...left,...right]
// }
// console.log(Mergesort(array));

// Linked List
// // -----------
// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.size = 0;
//     }
  
//     isempty() {
//       return this.size === 0;
//     }
//     getsize() {
//       return this.size;
//     }
//     propend(value) {
//       const node = new Node(value);
//       if (this.isempty()) {
//         this.head = node;
//       } else {
//         node.next = this.head;
//         this.head = node;
//       }
//       this.size++;
//     }
//     append(value) {
//       const node = new Node(value);
//       if (this.isempty()) {
//         this.head = node;
//       } else {
//         let prv = this.head;
//         while (prv.next) {
//           prv = prv.next;
//         }
//         prv.next = node;
//       }
//       this.size++;
//     }
//     print() {
//       if (this.isempty()) {
//         console.log("empty");
//       } else {
//         let crr = this.head;
//         let result = "";
//         while (crr) {
//           result += ` ${crr.value}`;
//           crr = crr.next;
//         }
//         console.log(result);
//       }
//     }
  
//     reverseRecursive(node) {
//       if (node === null) {
//         return;
//       }
//       this.reverseRecursive(node.next);
//       console.log(node.value);
//     }
  
//     printReverse() {
//       this.reverseRecursive(this.head);
     
//     }
  
  
  
//     search(value) {
//       if (this.isempty()) {
//         return -1;
//       }
//       let i = 0;
//       let crr = this.head;
//       while (crr) {
//         if (crr.value === value) {
//           return i;
//         }
//         crr = crr.next;
//         i++;
//       }
//       return -1;
//     }
//     searchindex(index) {
//       if (index < 0 || index > this.size) {
//         return false;
//       }
//       let crr = this.head;
//       for (let i = 0; i < index; i++) {
//         crr = crr.next;
//       }
//       return crr.value;
//     }
//     reverse() {
//       if (this.isempty()) {
//         return false;
//       } else {
//         let prv = null;
//         let crr = this.head;
//         while (crr) {
//           let next = crr.next;
//           crr.next = prv;
//           prv = crr;
//           crr = next;
//         }
//         this.head = prv;
//       }
//     }
//   }
//   const list = new LinkedList();
  
//   list.append(10);
//   list.append(20);
//   list.append(30);
  
//   console.log(list.isempty());
//   console.log(list.getsize());
//   list.print();
//   list.printReverse()
//   console.log(list.search(30));
//   console.log(list.searchindex(1));
  
//   list.reverse();
//    list.print();


//  class Node {
//     constructor(value){
//         this.value = value
//         this.next =null
//     }
//  }
//  class linkedlist {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }
//     isempty(){
//         return this.size === 0;
//     }
//     getsize(){
//         return this.size
//     }
//     prepand(value){
//         let node = new Node(value)
//         if(this.isempty()){
//             this.head = node;
//         }
//         else{
//             node.next = this.head
//             this.head = node;
//         }
//         this.size++
//     }
//     appand(value){
//         let node = new Node(value)
//         if(this.isempty()){
//             this.head = node;
//         }
//         else{
//             let pre = this.head
//             while(pre.next){
//                 pre = pre.next
//             }
//             pre.next = node
//         }
//         this.size++
//     }
//         reverse(){
//             if(this.isempty()){
//                 return false
//             }
//             else{
//                 let pre = null
//                 let curr = this.head
//                 while(curr){
//                     let next = curr.next
//                     curr.next = pre
//                     pre = curr
//                     curr = next
//                 }
//              this.head = pre
//             }
//         }
//       search (value){
//         if(this.isempty()){
//             return -1
//         }
//         let i=0;
//         let curr = this.head
//         while(curr){
//             if(curr.value === value){
//                 return i
//             }
//             curr = curr.next;
//             i++;
//         }
//         return -1;
//       }
//     printf(){
//         if(this.isempty()){
//             console.log("empty");
//         }
//         else{

//             let result = ''
//             let curr = this.head
//             while(curr){
//                 result += ` ${curr.value}`
//                 curr = curr.next
                
//             }
//             console.log(result);
//         }
//     }
//  }
//  let list = new linkedlist()
//  list.prepand(10)
//  list.prepand(15)
//  list.prepand(20)
//  list.appand(2)
//  list.appand(3)
//  list.appand(1)
//  list.printf()
// //  list.reverse()
//  list.printf()

//  console.log(list.isempty());
//  console.log(list.getsize());
//  console.log(list.search(15));
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isempty(){
        return this.size === 0;
    }
    getsize(){
        return this.size
    }
    prepand(value){
        let node = new Node(value)
        if(this.isempty()){
            this.head = node; 
        }
        else{
         node.next = this.head
         this.head = node;
        }
        this.size++
    }
    appand(value){
        let node = new Node(value)    
        if(this.isempty()){
            this.head = node;
        }
        else{
            let pre = this.head
            while(pre.next){
                pre = pre.next
            }
            pre.next = node;
        }
        this.size++
    }
    reverse (){
        if(this.isempty()){
            return false
        }
        else{
            let pre = null
            let curr = this.head
            while(curr){
                let next = curr.next
                curr.next = pre
                pre = curr
                curr = next
            }
            this.head = pre
        }
    }
    printf(){
        let result = ""
        let curr = this.head
        while(curr){
            result += ` ${curr.value}`
            curr = curr.next 
        }
        console.log(result);
    }
}
let list = new linkedlist()
list.prepand(10)
list.prepand(20)
list.appand(15)
list.appand(25)

list.printf()
list.reverse()
list.printf()
