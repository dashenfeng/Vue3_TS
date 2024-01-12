// 定义接口，用于限制person对象的具体属性
export interface PersonInter {
  id: string;
  name: string;
  age: number;
  sex?:string;
}

// 自定义类型
// export type Persons = Array<PersonInter>  //F1
export type Persons = PersonInter[] //F2
