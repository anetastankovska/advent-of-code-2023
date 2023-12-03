# TypeScript Components and Concepts

These TypeScript components and concepts enhance JavaScript by adding static typing and advanced type features. They make TypeScript a powerful tool for building scalable and maintainable applications. Use them wisely to write clean and error-free code.

## INITIALIZE TYPESCRIPT PROJECT

`tsc --init`

create a src directory (mkdir src)

create index.ts file (touch index.ts)

run tsc (compile ts to js)

- How to run js file:
  run `node index.js`

- How to install ts node and run ts file:
  instal ts-node
  `npm install ts-node`

- How to run ts file:
  `ts-node main.ts`

## 1. Variable Declarations

TypeScript allows you to explicitly declare variable types using const and let. For example:

```typescript
const firstName: string = "John";
const age: number = 25;
let isStudent: boolean = true;
```

- const is used for variables with values that should not be reassigned.
- let is used for variables that can be reassigned.

## 2. Union Types

Union types allow a variable to hold values of multiple types. This is particularly useful when a variable can have different data types under different conditions.

```typescript
let value: string | number = 1;
```

- In this example, value can hold either a string or a number.

## 3. Type Alias

Type aliases provide a way to create custom type definitions for better code organization and reusability.

```typescript
type MyFavoriteNumber = number;
type User = { id: number; name: string; email: string };
```

- 'type' is used to define custom types, such as MyFavoriteNumber and User, for improved code readability and maintainability.

## 4. Interfaces

Interfaces define contracts that objects must adhere to, ensuring a consistent structure for objects. They are primarily used for defining object contracts and structuring code.

```typescript
interface Person {
	firstName: string;
	lastName: string;
}
```

- In this example, the Person interface specifies that an object must have firstName and lastName properties.

## 5. Type Assertions

Type assertions are used to inform TypeScript that a value should be treated as having a specific type. This can be useful when TypeScript cannot infer the type correctly.

```typescript
const employeeTwo = {} as Employee;
```

- Here, {} is asserted as an Employee type.

## 6. Type Guards

Type guards are used to dynamically check and assert the type of a value during runtime. They are often used in conditional statements to ensure type safety.

```typescript
const calculateArea = (shape: Shape): number => {
	if (shape.kind === "circle") {
		// Calculate area for a circle
	} else if (shape.kind === "rectangle") {
		// Calculate area for a rectangle
	}
};
```

- In this code, shape.kind is used as a type guard to determine whether shape is a circle or rectangle.

## 7. Enums

Enums allow you to create named sets of constants, making your code more readable and maintainable. They are particularly useful when you have a fixed set of related values.

```typescript
enum PaymentMethod {
	CASH = "cash",
	CARD = "credit card",
	CHECK = "payment check",
}
```

- In this example, PaymentMethod defines a set of payment options.

## 8. Functions

Functions in TypeScript can be explicitly typed with parameter types and return types. This helps improve code quality by specifying the expected types for function inputs and outputs.

```typescript
function greet(who: string): void {
	console.log(`Hello ${who}!`);
}
```

- Here, greet is a function that takes a string parameter and returns void (i.e., it doesn't return a value).

## 9. Generics

Generics enable you to create reusable functions and classes that can work with different data types. They provide flexibility while maintaining type safety.

```typescript
function echo<T>(arg: T): T {
	return arg;
}
```

- In this example, echo is a generic function that can work with various data types.

# Angular CLI (Command Line Interface)

In Angular, the set of commands and scripts that facilitate various development tasks, such as running a development server, generating code scaffolding, building the project, running tests, and providing help, are collectively referred to as the Angular CLI commands.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
